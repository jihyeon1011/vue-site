<template>
    <div class="bg">
        <div class="b1">
            <p>{{ txt }}</p>
        </div>
    </div>
    <div class="bg">
        <div class="b2" @mousemove="mousePos">
            <span>xPos {{ xPos }} ---yPos {{ yPos }}</span>
        </div>
    </div>
    <div class="bg">
        <div class="b3">
            <p>{{ count }}</p>
            <button @click="addCount(1)">++1 증가</button>
            <button @click="addCount(5)">++5 증가</button>
            <button @click="addCount(-1)">--1 감소</button>
        </div>
    </div>
    <div class="bg">
        <div class="b4">
            <img 
            id="tiger" 
            @click="myMethod($event, '안녕~')" 
            :src="img_tiger_square" 
            alt="img_tiger_square">
            <p>{{ msgAndId }}</p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import img_tiger_square from '../assets/img_tiger_square.jpeg'

const txt = ref('txt')
// const changeText = () => {
//}
function changeText(){
    txt.value = '안녕~'
}

const xPos = ref(0)
const yPos = ref(0)
const mousePos = (e) => {
    xPos.value = e.offsetX
    yPos.value = e.offsetY
}

const count = ref(0)
const addCount = (num) =>{
    count.value += num
}

const msgAndId = ref('')
const myMethod = (e, msg) => {
    // msgAndId.value = msg
    // msgAndId.value += e.target.id
    msgAndId.value = `${e.target.id}야 ${msg} 좋은하루!!!`
}

</script>

<style scoped>
.bg{
    margin: 10px;
    border-bottom: 3px double purple;
}
.b1{
    width: 200px;
    height: 100px;
    background-color: rgb(196, 241, 136);
    display: inline-block;
}
.b2{
    width: 200px;
    height: 200px;
    background-color: yellow;
    display: inline-block;
}
.b4 > img{
    width: 200px;
    height: 200px;
}
button{
    margin: 5px;
}
</style>
