<script setup lang="ts">
import {getGithubIssuesContent, getHtmlSource} from "@/api/web";
import { Snackbar } from '@varlet/ui'
import MessageBox from "@/components/MessageBox.vue";
import {ref} from "vue";
import {ChatGpt} from "@/api/chatgpt";
import {GM_getValue} from 'vite-plugin-monkey/dist/client';

// 对话框标题
const title = "总结";
// 对话框内容
const msg = "总结";
// 是否显示
const show = ref(false);


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
  // 将按钮添加到div中

  // 获得issuesDiv里面的a标签的href
  const issuesHref = issuesDiv.getElementsByTagName('a')[0].href;
  
  const config = GM_getValue('config') as Record<string, any>;
  const chatGpt = new ChatGpt({
  baseUrl: config.serviceHost,
  token: config.apiKey,
  model: config.model
  });

  button.onclick = () => {
    button.innerText = '加载中...';
    getGithubIssuesContent(issuesHref).then((res:string) => {
      console.log(res);
    })
    // getHtmlSource(issuesHref).then( (res:string) => {
    //     chatGpt.sendChat(
    //       res
    //     )
    //   }
    // ).catch((err:string) => {
    //   button.innerText = '失败';
    //   button.style.backgroundColor = 'red';
    //   Snackbar.error("请求失败");
    // })
  };

  issuesDiv.insertBefore(button, firstChild);
}


</script>

<template>
  <message-box :title="title" :msg="msg" v-if="show"/>
</template>

<style scoped>

</style>