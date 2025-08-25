<template>
    <!-- 요소존재, 보이고/감추고 -->
    <h4>const showDiv = ref(true) <br>
        v-show="showDiv</h4>
    <div v-show="showDiv">이 엘리먼트는 감출 수 있어요</div>
    <hr>
    <!-- if와 show 비교 -->
    <p>
        Set the 'showDiv' data property to 'false', and run the code again. Right click this green p element, choose
        'Inspect' or 'Inspect element' and you can see that the div element with v-show still exist, it is only the CSS
        display property that is set to 'none', and the div with v-if is destroyed.
    </p>
    <div v-show="showDiv">div태그를 보이게 하다</div>
    <div v-if="showDiv">div태그를 요소생성/생성X 하다</div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true)
</script>

<style scoped>
div {
    padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: solid black 1px;
}
</style>