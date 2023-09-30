import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

createApp(App).mount(
  (() => {
      let app = document.createElement('div');
        document.body.append(app);
    return app;
  })(),
);
