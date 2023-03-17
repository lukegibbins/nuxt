<script setup>
    const promoName = ref("");
    const handleSearch = () => {
        navigateTo(`/promos/${promoName.value}`)
    }
</script>

<template> 
    <div class="font0mono w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input v-model="promoName" type="text" class="py-3 px-5 w-full text-2xl- rounded-full focus:outline-none" placeholder="Search...">
        <button class="px-10 bg-slate-500 text-white" @click="handleSearch">search</button>
    </div>
</template>