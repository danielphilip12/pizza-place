<script setup>

const props = defineProps({
    pizza: {
        required: true,
        type: Object
    }
})
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <img :src="pizza.image" class="card-img h-100" alt="..." />
      <div class="card-img-overlay">
        <h5 class="card-title text-info">{{ pizza.name }} Pizza</h5>
        <p class="card-text text-success">
          ${{ pizza.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
