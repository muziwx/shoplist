<template>
    <van-field v-model="seach" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" class="swipe_item_image"/>
        </van-swipe-item>
    </van-swipe>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const active = ref(0);
const seach = ref('');
const images = reactive([
    '/public/img/1.jpg',
    '/public/img/2.jpg',
    '/public/img/3.jpg',
])
</script>

<style scoped>
    .swipe_item_image{
        width: 100%;
    }
</style>