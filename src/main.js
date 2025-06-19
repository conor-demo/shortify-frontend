import { createApp } from 'vue'
import App from './App.vue'
import LinkShortener from './components/LinkShortener.vue'

const app = createApp(App)

app.component('LinkShortener', LinkShortener)

app.mount('#app')
