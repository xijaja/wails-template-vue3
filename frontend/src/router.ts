import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Root from "./views/Root.vue";
import Login from "./views/Login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "root", component: Root },
    { path: "/login", name: "login", component: Login },
    { path: "/home", name: "home", component: Home },
    { path: "/users", component: () => import("./views/Users.vue") },
    { path: "/setup", component: () => import("./views/Setup.vue") },
  ],
});

export default router;
