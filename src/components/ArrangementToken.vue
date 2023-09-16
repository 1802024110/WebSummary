<script setup lang="ts">
import {onMounted, reactive, ref, watch} from 'vue'
import {GM_setValue, GM_getValue, GM_registerMenuCommand} from 'vite-plugin-monkey/dist/client';
import { Snackbar } from '@varlet/ui'
import {ChatGpt} from "@/api/chatgpt";

GM_registerMenuCommand('配置token', () => {
  if(!show.value){
    show.value = true
  }
})

// 是否显示设置
const show = ref(true)
// 是否在测试中
const testShow = ref(false)

const formData = reactive<Record<string, any>>({
  service:1,
  serviceHost:'',
  apiKey:'',
  model:'',
  maxRequests:"10",
  modelList: []
})


let chatGpt = new ChatGpt({
  baseUrl:formData.serviceHost,
  token:formData.apiKey,
  model:formData.model
});
watch(formData,()=>{
  chatGpt = new ChatGpt({
    baseUrl:formData.serviceHost,
    token:formData.apiKey,
    model:formData.model
  });
})

// 获得模型列表
async function getModelList() {

  if (formData.service === 1) {
    formData.serviceHost = 'https://api.openai.com'
  }

  testShow.value = true
  chatGpt.getModelList().then((res)=>{
    testShow.value = false
    Snackbar.success('模型获取成功')

    formData.modelList = []
    res["data"].map((item:any)=>{
      // 如果原列表不存在,则添加
      if( formData.modelList.includes(item.id) === false){
        formData.modelList.push(item.id)
      }
    })

    GM_setValue('config', formData)
  }).catch((err)=>{
    Snackbar.error('服务不可用')
    testShow.value = false
  })
}

function handleSubmit(valid:boolean) {
  if (!valid) return
  if (formData.service === 1) {
    formData.serviceHost = 'https://api.openai.com'
  }
  GM_setValue('config', formData)

  show.value = false
}

onMounted(() => {
  const config = GM_getValue('config') as Record<string, any>
  if (config){
    formData.service = config.service
    formData.serviceHost = config.serviceHost
    formData.apiKey = config.apiKey
    formData.model = config.model
    formData.maxRequests = config.maxRequests
    formData.modelList = config.modelList
  }
})
</script>

<template>
    <div class="overlay" v-show="show">
      <div class="box">
        <var-card
            style="width: 80vw;box-shadow: 0 0 0 0"
            title="设置token"
        >
          <template #description>
            <var-form  @submit="handleSubmit" >
              <!--            选择服务商-->
              <var-radio-group
                  :rules="[v => !!v || '必须选择一个服务商']"
                  v-model="formData.service"
              >
                <var-radio :checked-value="1">使用OpenAI官方服务</var-radio>
                <var-radio :checked-value="2">使用第三方服务</var-radio>
              </var-radio-group>

              <!--            设置api地址-->
              <var-input
                  v-show="formData.service === 2"
                  placeholder="自定义 API 接口地址："
                  :rules="[v => (!!v || formData.service === 1) || '请添加具体带有路径的网址']"
                  v-model="formData.serviceHost"
              />
              <!--            设置APIKEY-->
              <var-input
                  type="password"
                  placeholder="请输入APIKEY"
                  :rules="[v => !!v || '不能为空']"
                  v-model="formData.apiKey"
              />
              <!--            设置模型-->
              <var-row align="flex-end">
                <var-col :span="20">
                  <var-tooltip :disabled="formData.modelList.length != 0" style="width: 100%;" content="请先获取模型列表">
                    <var-select
                        :disabled="formData.modelList.length === 0"
                        style="width: 100%;"
                        placeholder="请选择模型"
                        :rules="[v => !!v || '必须选一个模型']"
                        v-model="formData.model"
                    >
                      <var-option v-for="(model,index) in formData.modelList" :label="model" :key="index" />
                    </var-select>
                  </var-tooltip>
                </var-col>
                <var-col :span="4" justify="flex-end">
                  <var-button type="primary" @click="getModelList" :loading="testShow" loading-type="cube">
                    获取模型列表
                  </var-button>
                </var-col>
              </var-row>
              <!--            每秒最大请求次数-->
              <var-tooltip placement="left" content="OpenAI从0.5版本起默认请求数单位改为秒，默认每秒最大请求数改为10个请求。">
                <var-input
                    placeholder="请输入每秒最大请求次数"
                    :rules="[v => !!v || '不能为空']"
                    v-model="formData.maxRequests"
                />
              </var-tooltip>

              <!--            保存按钮-->
              <var-space>
                <var-button type="primary" native-type="submit">
                  保存
                </var-button>
              </var-space>
            </var-form>
          </template>
        </var-card>
      </div>
    </div>
</template>

<style scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}
.box{
  background: var(--card-background);
  padding: 20px;
  border-radius: 8px;
}
</style>