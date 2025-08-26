<template>
    <div class="d4">
        <li v-for="item in items">{{ item }}</li>
        <li v-for="item in items">{{ item.message }}</li>
        <hr>
        <!-- <li v-for="food in manyFoods">메뉴</li> -->
        <!-- <li v-for="food in manyFoods">- {{ food }} -</li> -->
        <ol>
            <li v-for="food in manyFoods">- {{ food }} -</li>
        </ol>
        <hr>
        <!-- <li v-for="food in foods_assets">음식들 : {{ food }}</li> -->
        <!-- <li v-for="food in foods_assets">음식들 : {{ food.name }}</li> -->
        <!-- <li v-for="food in foods_assets">음식이미지 : {{ food.src }}</li> -->
        <!-- <img src="../assets/img_burrito.svg" alt="img_burrito"> 이건 깃허브에서 안보임-->
        <!-- <img :src="img_burrito" alt="img_burrito"> -->
        <p>assets에 저장한 이미지 사용하기 : import로 연결</p>
        <div class="food-style" v-for="food in foods_assets" :key="food.name">
            <img :src="food.src" :alt="food.name">
            <li>{{ food.name }}</li>
        </div>
        <p class="return"></p>
        <hr>
        <p>public에 저장한 이미지 사용하기: 경로로 연결</p>
        <div class="food-style" v-for="food in foods_public" :key="food.name">
            <img :src="food.src" alt="food.name">
            <li>{{ food.name }}</li>
        </div>
    </div>
    <p class="enter"></p>
    <hr>
    <p>인덱스 가져오기</p>
    <li v-for="(food, idx) in manyFoods">{{ idx }}번 {{ food }}</li>

</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../assets/img_burrito.svg'
import img_cake from '../assets/img_cake.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'
import img_salad from '../assets/img_salad.svg'
import img_soup from '../assets/img_soup.svg'


// [{key키: value값},{}]
const items = ref([
    { message: 'Foo' },
    { message: 'Bar' },
    { message: 'Bar22' }])

const manyFoods = ref(
    [
        '브리또',
        '샐러드',
        '케이크',
        '스프',
        '생선',
        '피자',
        '밥'
    ]
)
const foods_assets = ref(
    [
        { name: '브리또', src: img_burrito, },
        { name: '샐러드', src: img_salad, },
        { name: '케이크', src: img_cake, },
        { name: '스프', src: img_soup, },
        { name: '생선', src: img_fish, },
        { name: '피자', src: img_pizza, },
        { name: '밥', src: img_rice, },

    ]
)

const foods_public = ref(
    [
        { name: '브리또', src: "/images/img_burrito.svg", },
        { name: '샐러드', src: "/images/img_salad.svg", },
        { name: '케이크', src: "/images/img_cake.svg", },
        { name: '스프', src: "/images/img_soup.svg", },
        { name: '생선', src: "/images/img_fish.svg", },
        { name: '피자', src: "/images/img_pizza.svg", },
        { name: '밥', src: "/images/img_rice.svg", },

    ]
)
</script>

<style scoped>
.food-style2 {
    clear: both;
}

.return {
    clear: both;
}

.d4 {
    /* background-color: skyblue; */
    height: 100%;
}

.food-style {
    width: 100px;
    height: 100px;
    float: left;
    background-color: azure;
    margin: 5px;
}

.food-style>img {
    width: 50%;
}

.food-style>li {
    list-style: none;
    font-weight: bold;
    color: cornflowerblue;
}

li {
    list-style: none;
    font-weight: bold;
    color: rgb(106, 98, 218);
}

.enter {
    clear: both;
}
</style>
