<template>
    <h4>"img v-bind:src="이미지명"</h4>
    <img v-bind:src="img_beach3" alt="img_beach3">
    <hr>
    <!-- v-bind:style 글자값-->
    <h4>v-bind:style="{ fontSize: size }"</h4>
    <div v-bind:style="{ fontSize: size }">
        너는 v-vind:글자크기 속성이야
    </div>
    <div v-bind:style="{ fontSize: size2 + 'px' }">
        너는 v-vind:글자값 속성이야
    </div>
    <div v-bind:style="{ 'font-size': size3 + 'px' }">
        너는 v-vind:css 글자크기 속성이야
    </div>
    <hr>
    <!-- v-bind:style 색상값  -->
    <h4>v-bind:style="{ backgroundColor: `rgb(${bgVal}, 초록, 파랑)` }"</h4>
    <div v-bind:style="{ backgroundColor: `rgb(${bgVal}, 100, 100)` }">
        백그라운드 색상값을 변수backgroundColor: `rgb(${bgVal}, 100, 100)`로 적용
    </div>
    <hr>
    <h4>v-bind:style="{ backgroundColor: isImportant ? 'true값' : 'false값' }"
    </h4>
    <div v-bind:style="{ backgroundColor: isImportant ? 'lightblue' : 'lightgray' }">백그라운드 색상값을 조건에 따라 다르게</div>
    <!-- v-bind:class 클래스  -->
    <div v-bind:class="className">클래스 바인드</div>
    <hr>
    <h4>v-bind:class="{ myClass: true }" <br>
        v-bind:class="{ myClass: isImportant }"
    </h4>
    <div v-bind:class="{ myClass: true }">클래스 true false 바인드</div>
    <br>
    <div v-bind:class="{ myClass: isImportant }">클래스 important속성 여부</div>
</template>

<script setup>
import { ref } from "vue";
import img_beach3 from "../assets/img_beach3.jpg"
const size = ref("15px")
const size2 = ref(20)
const size3 = ref(25)
const bgVal = ref(50)
const isImportant = ref(true)
const className = ref("impClass")
</script>

<style scoped>
.myClass {
    background-color: #ccc;
}

.impClass {
    background-color: skyblue;
    border: 3px dashed black;
}

img {
    width: 400px;
    height: 150px;
}
</style>0