<script lang="ts" setup>
import router from "../router";
import { Auth } from "../store/store";

// 退出登录按钮样式
const butClass =
  "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:scale-95";

// 退出登录
function logout() {
  localStorage.removeItem("token");
  Auth.logged = false; // 退出登录后，isAuth 置为 false
  router.push("/login");
}
</script>

<template>
  <section class="space-y-4">
    <div class="flex gap-4 items-center">
      <img src="../assets/vue.svg" alt="logo" class="w-10 h-10 select-none" />
      <h1 class="text-2xl">Wails And Vue3</h1>
    </div>

    <div class="flex items-end gap-4">
      <p>版本：v1.0</p>
      <p class="p-1 text-sm bg-slate-100 rounded-lg text-red-400">有新版本</p>
    </div>

    <button :class="butClass" @click="logout">退出登录</button>
  </section>
</template>
