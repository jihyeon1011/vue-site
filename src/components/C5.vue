<template>
    <div>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r1" value="HTML" name="radioG">/HTML
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r2" value="CSS" name="radioG">/CSS
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r3" value="JS" name="radioG">/JS
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r4" value="React" name="radioG">/React
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r5" value="Vue" name="radioG">/Vue
        </label>
        <p>선택된 값: {{ selected }}</p>
        <p>선택된 ID값: {{ selectedID }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const selected = ref('HTML')
const selectedID = ref('')

const handleChange = (e) => {
    selectedID.value = e.target.id
}
</script>