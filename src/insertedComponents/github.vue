<script setup lang="ts">
import {getGithubIssuesContent, getHtmlSource} from "@/api/web";
import MessageBox from "@/components/MessageBox.vue";
import {ref} from "vue";
import {ChatGpt} from "@/api/chatgpt";
import {GM_getValue} from 'vite-plugin-monkey/dist/client';
import {Snackbar} from "@varlet/ui";
import {watchLocationHref} from "@/utils/observer";

// 对话框标题
const title = ref();
// 对话框内容
const content = ref();
// 是否显示
const show = ref(false);

watchLocationHref((previous, current)=>{
    const issuesBox = document.getElementsByClassName('js-navigation-container js-active-navigation-container')[0];
// 获得div列表
    const issuesDivs= issuesBox.children;
    for (let i = 0; i < issuesDivs.length; i++) {
      const issuesDiv = issuesDivs[i];
      // 获取第一个子元素
      const firstChild = issuesDiv.firstChild;
      // 创建一个按钮
      const button = document.createElement('button');
      // 设置按钮的内容
      button.innerHTML = '总结';
      // 设置按钮class
      button.className = 'Button--primary Button';
      // 添加边距
      button.style.marginLeft = '10px';
      // 更改为行内块元素
      button.style.display = 'inline-block';

      // 获得issuesDiv里面的a标签的href
      const issuesHref = issuesDiv.getElementsByTagName('a')[0].href;
      try {
        const config = GM_getValue('config') as Record<string, any>;
        const chatGpt = new ChatGpt({
          baseUrl: config.serviceHost ,
          token: config.apiKey,
          model: config.model
        });



        button.onclick = () => {
          button.innerText = '加载中...';
          getGithubIssuesContent(issuesHref).then((res:string) => {
            chatGpt.sendChatWithSteam(res,(responseJson)=>{
              show.value = true
              let titleState = 0;
              let contentState = 0
              let msg = ' ';
              responseJson.forEach((item:Record<string, any>)=>{
                try {
                  if (item.choices[0].delta.function_call.arguments){
                    msg += item.choices[0].delta.function_call.arguments

                    if (titleState === 0) {
                      title.value = msg.match(/"title": "(.*)/g)?.[0].replace(/"title": "/g, '').replace(/",/g, '')
                    }else if(msg.match(/",/g)){
                      titleState = 1
                    }

                    if (contentState === 0) {
                      content.value = msg.match(/"content": "(.*)/g)?.[0].replace(/"content": "/g, '').replace(/",/g, '').slice(0,-1)
                    }else if(msg.match(/}"/g)){
                      contentState = 1
                    }
                  }

                } catch (error) {
                }
              })
              button.innerText = '再次总结';
            })
          }).catch((err)=>{
            Snackbar.error(err)
          })
        };
        // 将按钮添加到div中
        issuesDiv.insertBefore(button, firstChild);
      } catch (error) {
        Snackbar.error("未能获取到配置信息,请在油猴插件列表打开脚本设置后刷新页面");
      }
    }
});

const issuesBox = document.getElementsByClassName('js-navigation-container js-active-navigation-container')[0];
// 获得div列表
const issuesDivs= issuesBox.children;
for (let i = 0; i < issuesDivs.length; i++) {
  const issuesDiv = issuesDivs[i];
  // 获取第一个子元素
  const firstChild = issuesDiv.firstChild;
  // 创建一个按钮
  const button = document.createElement('button');
  // 设置按钮的内容
  button.innerHTML = '总结';
  // 设置按钮class
  button.className = 'Button--primary Button';
  // 添加边距
  button.style.marginLeft = '10px';
  // 更改为行内块元素
  button.style.display = 'inline-block';

  // 获得issuesDiv里面的a标签的href
  const issuesHref = issuesDiv.getElementsByTagName('a')[0].href;
  try {
    const config = GM_getValue('config') as Record<string, any>;
    const chatGpt = new ChatGpt({
      baseUrl: config.serviceHost ,
      token: config.apiKey,
      model: config.model
    });



  button.onclick = () => {
    button.innerText = '加载中...';
    getGithubIssuesContent(issuesHref).then((res:string) => {
      chatGpt.sendChatWithSteam(res,(responseJson)=>{
        show.value = true
        let titleState = 0;
        let contentState = 0
        let msg = ' ';
        responseJson.forEach((item:Record<string, any>)=>{
          try {
            if (item.choices[0].delta.function_call.arguments){
              msg += item.choices[0].delta.function_call.arguments

              if (titleState === 0) {
                title.value = msg.match(/"title": "(.*)/g)?.[0].replace(/"title": "/g, '').replace(/",/g, '')
              }else if(msg.match(/",/g)){
                titleState = 1
              }

              if (contentState === 0) {
                content.value = msg.match(/"content": "(.*)/g)?.[0].replace(/"content": "/g, '').replace(/",/g, '').slice(0,-1)
              }else if(msg.match(/}"/g)){
                contentState = 1
              }
            }

          } catch (error) {
          }
        })
        button.innerText = '再次总结';
      })
    }).catch((err)=>{
      Snackbar.error(err)
    })
  };
    // 将按钮添加到div中
  issuesDiv.insertBefore(button, firstChild);
  } catch (error) {
    Snackbar.error("未能获取到配置信息,请在油猴插件列表打开脚本设置后刷新页面");
  }
}


</script>

<template>
  <message-box :title="title" :msg="content" @close="show=false" v-if="show"/>
</template>

<style scoped>

</style>