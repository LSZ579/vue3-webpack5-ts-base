import { createApp } from "vue";
import App from './App.vue'
import './app.less';
import { router } from './router';
import pinia from './store'
// import 'nprogress/nprogress.css';
console.log(router);
createApp(App).use(router).use(pinia).mount('#root')