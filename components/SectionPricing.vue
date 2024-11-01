<script setup lang="ts">
import { reactive } from 'vue'

const data = reactive({
    plan: [
        {
            title: 'Basic',
            description:
                'Pour un site vitrine simple, performant et professionnel',
            formule: [
                'Votre site one page web sur-mesure',
                'Optimisation SEO de base',
                'Intégration de vos ressources',
                '10 Downloads per Day',
                'Formulaire de contact',
            ],
            isMostPopular: false,
        },
        {
            title: 'Standard',
            description:
                'Pour un site vitrine avec des fonctionnalités avancées',
            formule: [
                'Votre site web sur-mesure',
                'Optimisation SEO avancée',
                'Intégration de vos ressources',
                'Blog ou section d’actualités intégré',
                'Formulaire de contact',
                "Jusqu'à 5 pages supplémentaires",
                'Blog ou section d’actualités intégré',
            ],
            isMostPopular: true,
        },
        {
            title: 'Pro',
            description:
                ' Pour un site vitrine ou e-commerce sur-mesure avec des fonctionnalités avancées',
            formule: [
                'Votre site web sur-mesure',
                'Optimisation SEO de base',
                ' Intégration de vos ressources',
                'Blog ou section d’actualités intégré',
                'Formulaire de contact',
                "Jusqu'à 10 pages supplémentaires",
                'Blog ou section d’actualités intégré',
                'Formulaires personnalisés',
                'Fonctionnalités e-commerce',
            ],
            isMostPopular: false,
        },
    ],
})
</script>

<template>
    <section class="py-32 bg-gray-50 md:px-20">
        <div class="container mx-auto">
            <h1
                class="font-heading tracking-tight text-4xl md:text-6xl font-medium text-center mb-6"
            >
                Nos formules
            </h1>
            <p
                class="tracking-tight text-gray-700 text-lg text-center max-w-2xl mx-auto mb-14"
            >
                Découvrez nos différentes formules adaptées à tous les besoins.
                Chaque plan est conçu pour offrir un excellent rapport
                qualité-prix.
            </p>
            <div class="flex justify-center mb-6 removed" />
            <div class="flex justify-center">
                <div class="overflow-x-auto">
                    <div class="flex gap-6">
                        <div
                            class="w-96 flex-shrink-0"
                            v-for="(item, index) in data.plan"
                            :key="index"
                        >
                            <featurs-buisness-plan
                                :title="item.title"
                                :description="item.description"
                                :formule="item.formule"
                                :isMostPopular="item.isMostPopular"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
