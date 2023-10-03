<script lang="ts" setup>
import {computed, ref} from 'vue';
import 'highlight.js/styles/github-dark.css'
import {Marked} from "marked";
import {markedHighlight} from "marked-highlight";
import hljs from 'highlight.js/lib/core';


const drag = ref(null)

const pin = ref(true)

// 卡片全屏
const fullscreen = ref(false);
const cardProps = defineProps({
  title: {
    type: String,
    default: '对话标题',
    required: true,
  },
  msg: {
    type: String,
    default: '',
    required: true,
  }
});
// 创建一个script标签
const script = document.createElement('script');
// 设置内容
script.innerHTML = `
function copyText(id) {
 const div = document.getElementById(id)
  navigator.clipboard.writeText(div.innerText).then(() => {
    alert('复制成功')
  }).catch(() => {
    alert('复制失败')
  })
}
`
// 添加到body中
document.body.appendChild(script);

const msg = computed(() => {
  const marked = new Marked(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          const formatCode = hljs.highlight(code, {language}).value;
          const copyButton = `<div id="${code.length}" style="display: none">${code}</div><div style="display: flex; justify-content: space-between;"><button style="color: green; border-width: 0; background-color: transparent; transition: 300ms ease-in-out; outline: none; "  onclick="copyText(${code.length})">复制代码</button><span>${lang}</span></div>`
          return copyButton + formatCode;
        }
      })
  );
  const code = cardProps.msg?.replace(/\\n/g, '\n').replace(/\\t/g, '\/t').replace(/\\/g, '');
  return marked.parse(code);
})
</script>

<template>
  <div>
    <var-drag ref="drag" :disabled="pin" style="top: 0; left: 0">
      <var-card :description="cardProps.msg" :floating="fullscreen" style="width: 80vw;overflow: hidden;">
        <template #title>
          <var-row align="end" justify="space-between" style="margin-bottom: 8px">
            <div class="var-card__title">{{ cardProps.title }}</div>
            <var-space>
              <var-radio
                  v-model="pin"
              >
                <template #unchecked-icon>
                  <var-icon name="pin-off" size="24px"/>
                </template>
                <template #checked-icon>
                  <var-icon name="pin" size="24px"/>
                </template>
              </var-radio>
              <var-button round type="danger" v-on:click="$emit('close', $event)">
                <var-icon name="window-close"/>
              </var-button>
              <var-button round type="primary" @click="fullscreen=!fullscreen">
                <var-icon :name="fullscreen?'chevron-down':'chevron-up'"/>
              </var-button>
            </var-space>
          </var-row>
        </template>
        <template #description>
          <div style="overflow:auto;">
            <div class="var-card__description " style="max-height: 80vh" v-html="msg"></div>
          </div>
        </template>
        <template #close-button>
          <div></div>
        </template>
      </var-card>
    </var-drag>
  </div>
</template>