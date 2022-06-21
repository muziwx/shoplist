<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="toRouter('home')">首页</van-tabbar-item>
    <van-tabbar-item icon="shop-o" @click="toRouter('shopping')">商城</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" @click="toRouter('shopcar')">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" @click="toRouter('login')">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const active = ref(0);
  
  function toRouter(name:string){
    router.push({
      name
    })
  }
</script>

<style>
</style>
