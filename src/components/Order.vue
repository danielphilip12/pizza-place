<script setup>
import { computed } from "vue";
const props = defineProps({
  order: {
    required: true,
    type: Object,
  },
  pizzas: {
    required: true,
    type: Array,
  },
});
const pizzasOrdered = computed(() => {
  const p = [];
  for (let pOrder of props.order.pizzasOrdered) {
    for (let pizza of props.pizzas) {
      if (pOrder == pizza.id) {
        p.push(pizza.name);
      }
    }
  }
  return p;
});
// const pizzasOrder = pizzas.filter(pizza => order.pizzasOrdered.contains(pizza.id))
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Customer {{ order.customer }}</h5>

      <div class="card-text">
        <h5>Order Details</h5>
        Total: ${{ order.total }}
        <ul>
          <li v-for="pizza in pizzasOrdered">{{ pizza }}</li>
        </ul>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          Delivery: {{ order.delivery }}
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
