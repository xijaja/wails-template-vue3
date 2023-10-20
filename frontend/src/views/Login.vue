<script lang="ts" setup>
import { ref, reactive } from 'vue';
import router from "../router";
import { Auth } from '../store/store';

// 输入登录参数
const loginParams = reactive({ username: '', password: '' });
// 错误提示
const errMsg = ref('');

// 登录
async function login() {
  if (loginParams.username.length < 5 || loginParams.username.length > 12) {
    errMsg.value = '用户名长度应在 5 至 12 位之间';
    return;
  }
  if (loginParams.password.length < 6 || loginParams.password.length > 18) {
    errMsg.value = '密码长度应在 6 至 18 位之间';
    return;
  }
  // TODO: 登录逻辑
  // 登录成功
  localStorage.setItem("token", "there_is_user_token_1234567890"); // 将 token 存储到本地
  Auth.logged = true; // 设置登录状态
  // 跳转到首页
  router.push('/home');
};
</script>

<template>
  <section style="--wails-draggable:drag" class="w-full h-screen">
    <div class="pt-36">
      <div class="mx-auto w-96 space-y-6 bg-white p-12 rounded-lg">
        <h1 class="text-center text-2xl font-semibold dark:text-black">登录</h1>
        <input v-model="loginParams.username" type="text" placeholder="用户名" class="inputClass" @input="()=> errMsg = ''" />
        <input v-model="loginParams.password" type="password" placeholder="密码" class="inputClass" @input="()=> errMsg = ''" />
        <button class="btnClass" @click="login">登录</button>
        <p v-show="errMsg" class="text-sm text-center text-red-500">{{ errMsg }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.inputClass {
  @apply py-3 px-4  w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-200/50 dark:border-gray-400 dark:text-gray-700;
}
.btnClass {
  @apply w-full py-3 px-4 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600;
}
</style>
