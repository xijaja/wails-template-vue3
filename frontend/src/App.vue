<script setup lang="ts">
import { Icon } from '@iconify/vue';
import DarkMode from './components/DarkMode.vue';
import { WindowMinimise, WindowMaximise, WindowUnmaximise, Quit } from "../wailsjs/runtime/runtime";
import { ref } from 'vue';
import { Auth } from './store/store';

// 侧边栏导航
const menu = [
  { text: "首页", href: "/home", icon: "material-symbols:home-app-logo" },
  { text: "用户", href: "/users", icon: "material-symbols:supervisor-account-outline-rounded" },
]
// 侧边栏导航激活样式
const activeClass = 'text-blue-600 dark:text-blue-400'
// 是否非 Mac 平台
const isNotMac = navigator.userAgent.toUpperCase().indexOf('MAC') < 0;
// 是否最大化
const isMaximised = ref(false);
</script>

<template>
  <main class="flex h-screen">
    <!-- 侧边栏导航，未登录时不显示 -->
    <nav
      v-show="Auth.logged"
      class="flex-none flex flex-col justify-between w-[70px] items-center text-center select-none z-20 bg-gray-50/10 dark:bg-slate-900/80"
      style="--wails-draggable: drag"
    >
      <div class="mt-12 my-4 flex flex-col gap-6 text-2xl text-gray-500 dark:text-gray-200">
        <router-link v-for="item in menu" :key="item.text" :to="item.href" v-slot="{isActive}">
          <Icon :icon="item.icon" :class="isActive && activeClass" />
        </router-link>
      </div>
      <div class="my-4 flex flex-col gap-4 text-2xl text-gray-500 dark:text-gray-200">
        <DarkMode />
        <router-link to="/setup" v-slot="{isActive}">
          <Icon icon="material-symbols:menu-rounded" :class="isActive && activeClass" />
        </router-link>
      </div>
    </nav>
    <!-- 内容面板 -->
    <div class="pl-2 w-full bg-white dark:bg-gray-900/90">
      <!-- windows 定制化窗口按钮 -->
      <div v-if="isNotMac" class="flex h-10 justify-end flex-0">
        <button class="w-10 h-10 text-xl flex flex-col items-center justify-center hover:bg-[#E9E9E9] dark:hover:bg-[#2D2D2D] hover:text-gray-500" @click="WindowMinimise">
          <Icon icon="mdi:window-minimize" />
        </button>
        <button class="w-10 h-10 text-xl flex flex-col items-center justify-center hover:bg-[#E9E9E9] dark:hover:bg-[#2D2D2D]" @click="isMaximised ? (WindowUnmaximise(),isMaximised = false) : (WindowMaximise(), isMaximised = true)">
          <Icon icon="mdi:window-maximize" />
        </button>     
        <button class="w-10 h-10 text-xl flex flex-col items-center justify-center hover:bg-[#C13124] dark:hover:bg-[#C13124] hover:text-white" @click="Quit">
          <Icon icon="mdi:window-close" />
        </button>
      </div>
      <div v-else class="h-8"></div>
      <!-- 页面内容 -->
      <router-view class="overflow-y-auto h-screen p-4" style="--wails-draggable:none;" />
    </div>
  </main>
</template>
