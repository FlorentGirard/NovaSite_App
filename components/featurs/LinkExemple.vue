<script setup lang="ts">
defineProps<{
    website: string
    billingPlan: string
}>()
</script>

<template>
    <div>
        <div class="flex items-center gap-2 flex-wrap mb-2">
            <p class="tracking-tight text-lg font-semibold">{{ website }}</p>
        </div>
        <div class="flex gap-3 items-center">
            <p class="tracking-tight text-gray-700 text-sm">
                {{ billingPlan }}
            </p>
        </div>
    </div>
    <a
        href="#"
        class="bg-white border border-gray-200 h-11 rounded-full px-4 py-2 inline-flex items-center justify-center gap-2 hover:bg-black group transition duration-200"
    >
        <span
            class="tracking-tight text-sm font-semibold text-gray-900 group-hover:text-white transition duration-200"
            >Voir le site web</span
        >
        <div class="group-hover:text-white transition duration-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="{14}"
                height="{14}"
                viewBox="0 0 14 14"
                fill="none"
            >
                <path
                    d="M12.25 5.83334H6.41667C3.83934 5.83334 1.75 7.92268 1.75 10.5V11.6667M12.25 5.83334L8.75 9.33334M12.25 5.83334L8.75 2.33334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    </a>
</template>

<style scoped></style>
