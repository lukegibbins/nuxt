<script setup>
    const route = useRoute();
    // we don't need to use the composable for this, we can `useFetch` directly which will go straight to the API
    const promos = await useFetchPromos({
        id: route.params.id
    });
</script>

<template>
    <div>
        <div class="w-full">
            <PromoCard v-for="promo in promos" :key="promo.id" :promo="promo" />
        </div>
    </div>
</template>3