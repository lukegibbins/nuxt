<script setup>
    const {promos} = usePromos();

    const modal = ref({
        promotion: false
    });

    const updateModel = (key, promotion) => {
        modal.value[key] = !modal.value[key];

        if (!isNaN(parseInt(promotion))){
            throw createError({
                statusCode: 400,
                message: "Invalid search item. Search item Cannot be number."
            });
        }
    }
</script>

<template>
    <div class="shadow border w-80 mr-10 z-30 h-[60px]">
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3 class="font-bold mr-2">Promo</h3>
            <h3 @click="updateModel('promotion', 'Free Fiver')" class="text-teal-500">
                <span v-if="promotion">
                    {{ promotion }}
                </span> 
                <span v-else>
                    {{ promos[0].name }}
                </span>           
            </h3>
            <div v-if="modal.promotion" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
            <input type="text" class="border p-1 rounded" v-model="promotion"/>

            <button @click="updateModel('promotion', promotion)" class="bg-slate-500 w-full mt-2 rounded text-white p-1">
                Apply
            </button>
            </div>
        </div>
    </div>
</template>