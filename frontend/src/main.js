import { createApp } from 'vue'
import App from './App.vue'
import Links from './components/Links.vue'

const app = createApp(App);
app.component('Links', Links);
app.mount('#app')