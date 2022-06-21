import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { Button , TabbarItem } from 'vant';


const app = createApp(App)

app.use(router)
app.use(Button)
app.use(Button)
app.use(Button)

.mount('#app')
