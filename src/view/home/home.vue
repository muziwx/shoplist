<template>
    <van-field v-model="seach" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const active = ref(0);
const seach = ref('');
</script>

<style scoped>
</style>