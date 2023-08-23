<script setup>
import axios from "axios";
import Order from "./Order.vue";
import { ref, onMounted } from "vue";

const orders = ref([]);

const pizzas = ref([])

onMounted(() => {
    axios.get("http://localhost:3000/orders").then(res => orders.value = res.data);
    axios.get("http://localhost:3000/pizzas").then(res => pizzas.value = res.data);
})
</script>

<template>
  <div>
    <h1>Order List</h1>
    <!-- <p v-for="order in orders">{{ order.customer }} - Total: {{ order.total }}</p> -->
    <Order v-for="order in orders" :order="order" :pizzas="pizzas"/>
  </div>
</template>

<style lang="css" scoped></style>
