<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  pizza: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div class="col">
    <RouterLink :to="{ name: 'pizzaId', params: { id: pizza.id } }">
      <div class="card h-100">
        <img :src="pizza.image" class="card-img h-100" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title text-info">{{ pizza.name }} Pizza</h5>
          <p class="card-text text-success">${{ pizza.price }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.card:hover {
  box-shadow: 5px 5px 5px 5px orange;
  cursor: pointer;
}
</style>
