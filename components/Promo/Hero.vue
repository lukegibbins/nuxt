<script setup>
    const props = defineProps({
        url: String
    })
</script>

<template>
    <img v-bind:src="`../../_nuxt/assets/promo-images/${url}`" class="w-full" />
</template>