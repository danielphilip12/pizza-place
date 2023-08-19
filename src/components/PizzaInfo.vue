<template>
    <div>
        <h1>{{  pizza.name  }} Pizza</h1>
        <em>Price: {{ pizza.price }}</em>
        <br />
        <img :src="pizza.image" class="img-fluid" />
        <h2>Ingredients</h2>
        <ul>
            <li v-for="ingredient in pizza.ingredients">{{ ingredient }}</li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
const props = defineProps({
    id: {
        required: true,
        type: Number
    }
})

const pizza = ref({});

onMounted(() => {
    axios.get(`http://localhost:3000/pizzas/${props.id}`).then(res => pizza.value = res.data)
})
</script>

<style lang="css" scoped>
img {
    max-height: 50vh;
}
</style>