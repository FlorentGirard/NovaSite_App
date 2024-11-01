<script setup lang="ts">
defineProps<{
    formule: string[]
    title: string
    description: string
    isMostPopular: boolean
}>()
</script>

<template>
    <div
        class="border border-gray-100 rounded-2xl p-8 removed relative overflow-hidden"
        :class="[isMostPopular ? 'bg-black' : 'bg-white']"
    >
        <div class="absolute right-3 top-3" v-if="isMostPopular">
            <span
                class="inline-block bg-gray-800 rounded-lg px-3 py-2 text-sm font-semibold text-white"
                >Le + Plus Populaire</span
            >
        </div>
        <p
            class="tracking-tight text-lg font-semibold mb-2"
            :class="{ 'text-white': isMostPopular }"
        >
            {{ title }}
        </p>
        <p
            class="tracking-tight mb-8"
            :class="[isMostPopular ? 'text-white' : 'text-gray-700']"
        >
            {{ description }}
        </p>
        <div class="w-full h-px bg-gray-100 mb-8" />
        <ul class="flex flex-col gap-4 mb-6">
            <li
                class="flex items-center gap-2"
                v-for="(item, index) in formule"
                :key="index"
            >
                <span
                    class="tracking-tight font-medium"
                    :class="{ 'text-white': isMostPopular }"
                    >{{ item }}</span
                >
            </li>
        </ul>
        <CommonBookerAVisio />
    </div>

    -
</template>

<style scoped></style>
