<template>
    <div>
        <van-nav-bar title="消息中心" left-text="返回" right-text="全部已读" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
    </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => {
    history.back();
}
const onClickRight = () => {
    console.log('已读')
};
</script>

<style lang="scss" scoped>
</style>