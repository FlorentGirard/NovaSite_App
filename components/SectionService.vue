<template>
    <section class="px-8 py-32 md:px-20 bg-black" id="service">
        <div class="flex flex-wrap -m-4 mb-32">
            <div class="w-full md:w-1/2 p-4">
                <h2
                    class="tracking-tight font-heading text-6xl md:text-7xl font-medium max-w-xs text-white md:max-w-xl"
                >
                    Nos services
                </h2>
            </div>
            <div class="w-full md:w-1/2 p-4">
                <p class="tracking-tight mb-8 max-w-lg text-white">
                    Nous proposons une gamme complète de solutions web adaptées
                    à vos besoins spécifiques. De la conception de sites
                    sur-mesure à l’optimisation SEO, notre équipe est là pour
                    vous accompagner à chaque étape.
                </p>
            </div>
        </div>

        <div class="flex flex-wrap -m-4">
            <CommonListService
                title="Concepton"
                :service-item="serviceState.conception"
            />
            <CommonListService
                title="Design"
                :service-item="serviceState.design"
            />
            <CommonListService
                title="Développement"
                :service-item="serviceState.developpement"
            />
            <CommonListService
                title="Maintenance & suivi"
                :service-item="serviceState.maintenance"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const serviceState = reactive({
    conception: [
        'Sites vitrines',
        'Sites e-commerce',
        'Sites sur-mesure',
        'Refonte de sites',
    ],
    design: [
        'Maquettes & wireframes',
        'Design responsive',
        'Optimisation UX',
        'Charte graphique',
    ],
    developpement: [
        'Intégration CMS',
        'Développement web',
        'Optimisation des performances',
        'Sécurisation',
    ],
    maintenance: [
        'Maintenance technique',
        'Support & assistance',
        'SEO & optimisation',
        'Analytics & reporting',
    ],
})
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
