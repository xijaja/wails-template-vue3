<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const butClass = 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:scale-95';
</script>

<template>
  <div>
    <button type="button" @click="count++" :class="butClass">计数器：{{ count }}</button>
  </div>
</template>
