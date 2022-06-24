<template>
    <div class="wrappar_c">
        <div class="top_c">
            <div></div>
            <div>
                <span :class="{ active: chooseIndex == 0 }" @click="chooseItem(0)">关注</span>
                <span :class="{ active: chooseIndex == 1 }" @click="chooseItem(1)">发现</span>
                <span :class="{ active: chooseIndex == 2 }" @click="chooseItem(2)">
                    <van-icon name="location" />深圳
                </span>
            </div>
            <div>
                <van-icon name="volume-o" @click="toNotice()" />
            </div>
        </div>
        <van-search v-model="seach" shape="round" background="#fff" placeholder="请输入搜索地点/景点" class="seach_input" />
        <router-view></router-view>
    </div>
</template>    
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const route = useRouter()
const seach = ref('');
let chooseIndex: any = ref(0);
function chooseItem(index: number) {
    chooseIndex.value = index;
    switch (index) {
        case 0:
            route.push({
                name: 'find'
            })
            break;
        case 1:
            route.push({
                name: 'follow'
            })
            break;
        case 2:
            route.push({
                name: 'location'
            })
            break;
    }
}
const toNotice = () => {
    route.push({
        name: 'notice'
    })
}
</script>

<style scoped lang="scss">
.top_c {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        padding: 8px;
        display: flex;
        align-items: center;

        span {
            padding: 0 5px;
            font-size: 15px;
            color: #7d7d7d;
        }

        .active {
            font-size: 18px;
            color: #000;
            font-weight: bold;
        }
    }
}

.wrappar_c {
    width: 100vw;
    height: 100vh;
    background-color: #fefefe;
}

.content_w {
    height: 85%;
    overflow: scroll;
    width: 100%;
}

.swit-wra {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
</style>