<template>
    <hr>
    <h4>v-if="typewritersInStock" <br>
        v-else
    </h4>
    <p v-if="typewritersInStock">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount > 0">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <h4>v-if="typewriterCount2 > 3" <br>
        v-else-if="typewriterCount2 > 0" <br>
        v-else-if="typewriterCount2 == 0" <br>
        v-else
    </h4>
    <p v-if="typewriterCount2 > 3">재고 있음</p>
    <p v-else-if="typewriterCount2 > 0">재고가 few조금 남음</p>
    <p v-else-if="typewriterCount2 == 0">재고 없음</p>
    <p v-else>선불(예약 있음) >> ( {{ typewriterCount2 }} )</p>
    <hr>
    <h4>v-if="text.includes('pizza')"</h4>
    <p v-if="text.includes('pizza')">"pizza"글자가 포함되어 있음!</p>
    <p v-else>"pizza"글자가 없음ㅜ</p>
    <hr>
    <h4>v-if="text2.includes('피자') <br>
        img src="../assets/img_pizza.svg"
    </h4>
    <div v-if="text2.includes('피자')">
        <p>피자</p>
        <img src="../assets/img_pizza.svg" alt="피자이미지">
    </div>
    <p v-else>피자 없음</p>

</template>

<script setup>
import { ref } from 'vue';

const typewritersInStock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(-5)

const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine.")
const text2 = ref("I like taco, 피자pizza, Thai beef salad, pho soup and tagine.")
</script>

<style scoped>
img {
    width: 100px;
    height: 100px;
}
</style>