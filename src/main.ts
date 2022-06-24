import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { Button, TabbarItem, Swipe, SwipeItem, Grid, GridItem } from "vant";

const app = createApp(App);

app.use(router);
app.use(Button);
app.use(TabbarItem);
app.use(Swipe);
app.use(Grid);
app.use(GridItem);
app.use(SwipeItem).mount("#app");
