import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { Button, TabbarItem, Swipe, SwipeItem } from "vant";

const app = createApp(App);

app.use(router);
app.use(Button);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem).mount("#app");
