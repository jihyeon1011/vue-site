<template>
    <div>
        <button @click="gotoPage('a1')">A1 웹디자인기능사</button>
        <button @click="gotoPage('b2')">B2 웹디자인기능사</button>
        <!-- User {{ r_id }} -->
        <sub>
            <RouterView />
        </sub>
    </div>
</template>

<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';

//라우터 객체 (push, replace 등 네비게이션 기능만 제공)
const $router = useRouter();
//라우트 객체 (path, path, query 등...)
const route = useRoute();

const gotoPage = (id) => {
    $router.push({ path: `/wd/${id}` })
}
</script>

<style scoped></style>