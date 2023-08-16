<script setup>
import Pizza from './Pizza.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const pizzas = ref([]);

onMounted(() => {
    axios.get("http://localhost:3000/pizzas").then(res => pizzas.value = res.data)
})
</script>


<template>
    <div>
        <h1>Pizza List</h1>
        <div class="row row-cols-3 row-cols-md-3 g-4">
            <Pizza v-for="pizza in pizzas" :pizza="pizza"/>
        </div>
    </div>
</template>


<style scoped>

</style>