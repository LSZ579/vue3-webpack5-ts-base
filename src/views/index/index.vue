<template>
    <div>
        <div class="text">222</div>
        <button @click="toNext()">跳转</button>
        <img :src="img" alt="">
    </div>
</template>

<script setup lang="ts">
import img from '@/assets/404.png'
import { useRouter } from 'vue-router';
const router = useRouter()
const toNext = ()=>{
    router.push({
        query:{
            id:5
        },
        path:'/about/my'
    })
}
</script>

<style lang="less" scoped>
@color:red;
div {
    .text {
        color: @color;
        font-size: 20px;
    }
}
</style>