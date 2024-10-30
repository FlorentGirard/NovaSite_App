<template>
    <section class="px-8 pt-32 pb-40 md:px-20">
        <h1
            class="font-heading tracking-tight text-4xl md:text-6xl font-medium mb-4"
        >
            Votre site en 3 étapes
        </h1>
        <p class="tracking-tight text-gray-700 text-lg mb-20">
            Un processus clair pour un site web réussi en un temps record.
        </p>
        <div class="flex flex-wrap -m-4">
            <div
                class="w-full lg:w-1/3 p-4"
                v-for="(step, index) in steps"
                :key="index"
            >
                <div class="relative" style="height: 518px">
                    <img
                        class="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        :src="`/picture/howItWorks/${step.image}`"
                        alt=""
                    />
                    <div class="absolute top-8 right-8">
                        <div
                            class="bg-white rounded-full w-14 h-14 flex items-center justify-center"
                        >
                            <p class="tracking-tight text-lg font-semibold">
                                {{ step.number }}
                            </p>
                        </div>
                    </div>
                    <div class="absolute bottom-8 left-9 right-9">
                        <p
                            class="tracking-tight text-white text-2xl font-semibold mb-2"
                        >
                            {{ step.title }}
                        </p>
                        <p
                            class="tracking-tight text-white text-opacity-80 max-w-xs"
                        >
                            {{ step.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const steps = ref([
    {
        number: '01',
        title: 'Analyse et planification',
        description:
            'Nous définissons les objectifs de votre site et vos besoins.',

        image: 'picture1.png',
    },
    {
        number: '02',
        title: 'Conception du site web',
        description: 'Création de la maquette, validation et développement.',
        image: 'picture2.png',
    },
    {
        number: '03',
        title: 'Tests et mise en ligne',
        description:
            'Tests de performance, validation finale, puis mise en ligne du site.',
        image: 'picture3.png',
    },
])
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
