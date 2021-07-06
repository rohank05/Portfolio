import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import homePage from "./components/homePage";
// library.use(fab);
const routes = [
    {
        path: "/",
        component: homePage,
        meta: {
            title: "Rohan Kumar",
        },
    },
];
const router = new createRouter({
    history: createWebHashHistory(),
    routes,
});
createApp(App).use(router).mount("#app");
