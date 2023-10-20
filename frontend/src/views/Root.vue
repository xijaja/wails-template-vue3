<script lang="ts" setup>
import { onBeforeMount } from "vue";
import router from "../router";
import { isAuth } from "../store/store";

// 初始化判断本地是否有 token 然后跳转到对应页面
onBeforeMount(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/login")
    isAuth.value = false
  } else {
    router.push("/home")
    isAuth.value = true
  };
});
</script>

<template></template>
