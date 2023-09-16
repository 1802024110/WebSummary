import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

createApp(App).use(Varlet).mount(
  (() => {
      // 获取当前网站域名
      const hostUrl = location.host
      let app = document.createElement('div');
  document.body.append(app);
    return app;
  })(),
);
