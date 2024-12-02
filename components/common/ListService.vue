<script setup lang="ts">
const props = defineProps<{
    title: string
    serviceItem: string[]
}>()
</script>

<template>
    <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
        <p class="font-heading mb-8 tracking-tight text-white font-bold">
            {{ props.title }}
        </p>
        <ul class="flex flex-col gap-4">
            <li v-for="(service, index) in props.serviceItem" :key="index">
                <span
                    class="tracking-tight hover:text-opacity-80 font-medium transition duration-200 text-white"
                >
                    {{ service }}
                </span>
            </li>
        </ul>
    </div>
</template>
