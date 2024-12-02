<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
    styleType: {
        type: String,
        default: 'white', // style par défaut
        validator: (value: string) =>
            ['white', 'black', 'border'].includes(value),
    },
})
const buttonClass = computed(() => {
    switch (props.styleType) {
        case 'black':
            return 'bg-black text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-600'
        case 'border':
            return 'border border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200'
        default:
            return 'bg-white text-black border border-gray-200 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200'
    }
})

// eslint-disable-next-line no-undef
const { scrollToAnchor } = useAnchorScroll({
    toTop: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: 0,
        },
    },
})
// eslint-disable-next-line no-undef
const contact = ref('contact')
</script>

<template>
    <NuxtLink
        :href="`#${contact}`"
        @click="scrollToAnchor(contact)"
        :class="[
            'rounded-full px-6 py-4 inline-flex items-center justify-center gap-2 transition duration-200',
            buttonClass,
        ]"
    >
        <span class="font-bold tracking-tight">Booker une visio</span>
    </NuxtLink>
</template>

<style scoped></style>
