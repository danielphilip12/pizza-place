<script setup>
import PizzaInfo from '../components/PizzaInfo.vue';
</script>

<template>
    <div>
        <PizzaInfo :id="$route.params.id"/>
    </div>
</template>



<style lang="css" scoped>

</style>