<script setup>
import { ref } from 'vue';
import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';

const pages = { Ex1, Ex2, Ex3 }
const activeComp = ref("Ex1")
</script>

<template>
  <h1>최지현_VUE 과제방</h1>
  <h2>Day1_0825</h2>
  <button @click="activeComp = 'Ex1'">bind_바인드</button>
  <button @click="activeComp = 'Ex2'">if_이프</button>
  <button @click="activeComp = 'Ex3'">show_쇼우</button>

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
