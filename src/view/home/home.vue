<template>
    <div class="wrappar_c">
        <van-field v-model="seach" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
        <div class="content_w">
            <van-swipe :autoplay="3000" lazy-render>
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" class="swipe_item_image" />
                </van-swipe-item>
            </van-swipe>
            <p class="yixian">一线</p>
        </div>
    </div>
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

<style scoped lang="scss">
.yixian {
    color: $font-color;
}

.wrappar_c {
    width: 100vw;
    height: 100vh;
}

.content_w {
    height: 85%;
    overflow: scroll;
    width: 100%;
}

.swipe_item_image {
    width: 100%;
}
</style>