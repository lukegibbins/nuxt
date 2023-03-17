<script setup>
  const route = useRoute();
  const {promos} = usePromos();

  const promo = computed(() => {
    return promos.find((p) => {
      return p.id === parseInt(route.params.promo) || p.name == route.params.promo
    });
  });

  if (!promo.value) {
    throw createError({
      statusCode: 404,
      message: `No such promo exists`
    });
  }
</script>

<template>
    <div>
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5 mt-10">  
          <div v-if="promo">    
            <PromoHero :url="promo.imgFileName" />
            <PromoContent :promo="promo" />
            <PromoOptIn />   
        </div>
      </div>
    </div>
</template>