<template>
    <div>
        Pizza {{ id }}
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        required: true,
        type: Number
    }
})
</script>

<style lang="scss" scoped>

</style>