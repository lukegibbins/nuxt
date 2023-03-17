<script setup>
    import heartFilled from "@/assets/heartFilled.png";
    import heartOutline from "@/assets/heartOutline.png";

    const props = defineProps({
        promo: Object  // props are what's passed into the component
    });

    const favoured = useState(`favoured-${props.promo.id}`, () => {
        return false; //We should use useState when we want to preserve the value/state of something across components 
    });
</script>

<template>
    <div class="relative">
        <img class="absolute w-7 right-5 top-2 z-20" :src="favoured ? heartFilled : heartOutline" @click="favoured = !favoured" />
        <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]" @click="navigateTo(`promos/${promo.id}`)">
                <div class="flex h-full">
                    <img v-bind:src="`../../_nuxt/assets/promo-images/${promo.imgFileName}`" class="w-[400px] h-full" />
                    <div class="p-4 flex flex-col">
                        <h1 class="text-2xl text-teal-700 pb-2"> {{ promo.name }}</h1>
                        <p class="text-gray-700"> {{ promo.description }}</p>
                        <p class="mt-5 text-teal-700">{{ promo.startTime }} - {{ promo.endTime }}</p>
                    </div>
                </div>
            </div>
    </div>
</template>