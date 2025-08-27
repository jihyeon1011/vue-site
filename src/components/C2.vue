<template>
    <div class="bg">
        <div class="b1">
            <!-- 양방향 바인딩 -->
            <input type="text" v-model="inpText">
            <p>{{ inpText }}</p>
        </div>
    </div>
    <div class="bg">
        <div class="b2">
            <p>중요한가요?</p>
            <label>
                <input type="checkbox" v-model="important">
                {{ important }}
            </label>
        </div>
    </div>
    <div class="bg">
        <div class="b3">
            <!-- shoppingList 입력담당 -->
             <form @submit.prevent="addItem">
                <p>무엇이 필요하세요?
                    <input type="text" v-model="itemName"
                    required placeholder="아이템 이름"></p>
                <p>
                    몇개가 필요하세요?
                    <input type="number" v-model="itemNumber"
                    required placeholder="구매할 갯수">
                </p>
                <p>
                    중요한가요?
                    <label>
                    <input type="checkbox" v-model="itemImportant">
                    {{ itemImportant }}
                    </label>
                </p>
                <button type="submit">목록 추가하기</button>
             </form>
            <hr>
            <!-- shoppingList 출력담당 -->
            <p><strong>----- 구매 목록 -----</strong></p>
            <ol>
                <li v-for="list in shoppingList">
                    목록: {{ list.name }}
                    갯수: {{ list.number }}
                    중요도: {{ list.important }}
                </li>
            </ol>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

//양방향 바인딩
const inpText = ref('Initial text')
const important = ref(false) 

//쇼핑 목록
const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)
const addItem = () => {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value
    }
    shoppingList.value.push(item)

    //목록 init
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
}
const shoppingList = ref(
    [
        { name : '토마토', number: 5, important: false},
        { name : '바나나', number: 3, important: true}
    ]
)

</script>

<style scoped>
.bg {
    margin: 10px;
    border-bottom: 3px double purple;
    height: 100%;
}

.b1 {
    width: 200px;
    height: 100px;
    background-color: rgb(202, 245, 238);
    display: inline-block;
}

.b2 {
    width: 200px;
    height: 100px;
    background-color: rgb(145, 230, 233);
    display: inline-block;
}

.b3 {
    width: 80%;
    height: 100%;
    background-color: rgb(255, 240, 152);
    display: inline-block;
}

.b3 li{
    border-bottom: 2px dotted blue;
}
</style>