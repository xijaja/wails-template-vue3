<script lang="ts" setup>
import { onBeforeMount } from "vue";
import router from "../router";

// 初始化判断本地是否有 token 然后跳转到对应页面
onBeforeMount(() => {
  const token = localStorage.getItem("token");
  if (!token) router.push("/login");
  else router.push("/home");
});
</script>

<template></template>
