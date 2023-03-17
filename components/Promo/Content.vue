<script setup>
  const props = defineProps({
      promo: Object
  });
</script>

<template>
    <div>
      <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
        <h1 class="mt-10 text-4xl">
          {{ promo.name }}
        </h1>
        </div>
          <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
            <div class="flex">
              <p class="font-bold">Campaign Times:</p>
              <p class="ml-2">{{ promo.startTime }} - {{promo.endTime }} </p>
            </div>
          </div>
          <div class="text-slate-500 text-lg mt-3 pb-5 justify-between">
            <p>{{ promo.description }}</p>
          </div>
    </div>
</template>