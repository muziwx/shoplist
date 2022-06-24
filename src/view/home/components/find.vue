<!-- 发现 -->
<template>
    <div class="content_w">
        <van-swipe lazy-render :loop="false">
            <van-swipe-item>
                <van-grid>
                    <van-grid-item v-for="value in 8" :key="value" icon="logistics" text="自驾" />
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid>
                    <van-grid-item v-for="value in 7" :key="value" icon="logistics" text="自驾" />
                </van-grid>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>