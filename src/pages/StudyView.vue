<script setup>
import { ref } from 'vue';
// import vue from './assets/vue.svg';
import Ex1 from '../components/Ex1.vue';
import Ex2 from '../components/Ex2.vue';
import Ex3 from '../components/Ex3.vue';
import Ex4 from '../components/Ex4.vue';
import Ex5 from '../components/Ex5.vue';
import Ex6 from '../components/Ex6.vue';
import Ex7 from '../components/Ex7.vue';
import Ex8 from '../components/Ex8.vue';
import Ex9 from '../components/Ex9.vue';
import Ex10 from '../components/Ex10.vue';



const pages = { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10 }
const activeComp = ref("Ex1")
</script>

<template>
    <button @click="activeComp = 'Ex1'">bind_바인드</button>
    <button @click="activeComp = 'Ex2'">if_이프</button>
    <button @click="activeComp = 'Ex3'">show_쇼우</button>
    <button @click="activeComp = 'Ex4'">for_동안</button>
    <button @click="activeComp = 'Ex5'">event_이벤트</button>
    <button @click="activeComp = 'Ex6'">methods 메소드 구현</button>
    <button @click="activeComp = 'Ex7'">model 양방향 바인딩</button>
    <button @click="activeComp = 'Ex8'">computed 계산된 코드</button>
    <button @click="activeComp = 'Ex9'">watchers 데이터 값 변경시, 감시자 실행</button>
    <button @click="activeComp = 'Ex10'">radio 하나만 선택하기</button>


    <div id="comp_view">
        <KeepAlive>
            <component :is="pages[activeComp]"></component>
        </KeepAlive>
    </div>
</template>

<style scoped>
button {
    margin: 8px;
    filter: drop-shadow(2px 2px 1.5px rgb(32, 32, 32));
}

#comp_view {
    margin-top: 20px;
    padding: 50px;
    border: 1px solid black;
    border-radius: 10px;
}
</style>
