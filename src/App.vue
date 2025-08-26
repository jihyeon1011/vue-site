<script setup>
import { ref } from 'vue';
import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import A1 from './components/A1.vue';
import B1 from './components/B1.vue'
import B2 from './components/B2.vue';
import vue from './assets/vue.svg';

const pages = { A1, Ex1, Ex2, Ex3, B1, B2 }
const activeComp = ref("A1")
</script>

<template>
  <h1 class="title"><img :src=vue> 최지현_VUE 과제방</h1>
  <h2>Day1_0822</h2>
  <button @click="activeComp = 'A1'">Hello world</button>
  <h2>Day2_0825</h2>
  <button @click="activeComp = 'Ex1'">bind_바인드</button>
  <button @click="activeComp = 'Ex2'">if_이프</button>
  <button @click="activeComp = 'Ex3'">show_쇼우</button>
  <h2>Day3_0826</h2>
  <button @click="activeComp = 'B1'">for_동안</button>
  <button @click="activeComp = 'B2'">event_이벤트</button>


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
