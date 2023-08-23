<script setup>
const props = defineProps({
  order: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div class="card mb-3" >
    <div class="card-body">
      <h5 class="card-title">{{ order.customer }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Delivery: {{ order.delivery }}</h6>
      <p class="card-text">
        {{ order.total }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
