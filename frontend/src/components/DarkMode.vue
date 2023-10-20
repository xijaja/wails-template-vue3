<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()" class="text-2xl mt-1 hover:rotate-6">
    <span v-if="isDark"><Icon icon="icon-park:dark-mode" /></span>
    <span v-else><Icon icon="icon-park:sun-one" /></span>
  </button>
</template>
