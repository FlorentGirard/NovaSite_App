<template>
    <section class="px-8 md:px-24 py-32">
        <div class="flex flex-wrap -m-4">
            <div class="w-full lg:w-1/2 p-4">
                <div class="flex flex-col justify-between gap-4 h-full">
                    <div>
                        <h1
                            class="font-heading tracking-tight text-5xl font-medium mb-6 max-w-sm"
                        >
                            FAQ
                        </h1>
                        <p class="tracking-tight">
                            Découvrez nos questions et réponses les plus
                            courantes.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 p-4">
                <p class="tracking-tight text-gray-500 font-medium mb-6">
                    General
                </p>
                <div class="border border-gray-100 rounded-lg mb-8">
                    <UAccordion
                        :items="faqItems"
                        :ui="{ wrapper: 'flex flex-col w-full' }"
                    >
                        <template #default="{ item, open }">
                            <div>
                                <UButton
                                    color="black"
                                    variant="ghost"
                                    class="border-b border-gray-200 dark:border-gray-700 w-full"
                                    :ui="{
                                        rounded: 'rounded-none',
                                        padding: { sm: 'p-3' },
                                    }"
                                >
                                    <template #leading> </template>
                                    <span
                                        class="tracking-tight text-lg font-semibold"
                                    >
                                        {{ item.label }}
                                    </span>
                                    <template #trailing>
                                        <UIcon
                                            name="i-heroicons-chevron-right-20-solid"
                                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                            :class="[open && 'rotate-90']"
                                        />
                                    </template>
                                </UButton>
                                <div v-if="open" class="px-4 py-2">
                                    <p
                                        class="tracking-tight text-gray-700 max-w-xl mt-4"
                                    >
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </template>
                    </UAccordion>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
type FaqItems = {
    label: string
    description: string
}
const faqItems: FaqItems[] = [
    {
        label: 'Comment puis-je obtenir un devis pour la création de mon site web ?',
        description:
            'Vous pouvez nous contacter via notre formulaire en ligne ou par téléphone. Nous étudierons vos besoins et vous fournirons un devis détaillé en fonction de votre projet.',
    },
    {
        label: ' Quelles sont les étapes à suivre pour démarrer un projet avec vous ?',
        description:
            ' Pour démarrer, il suffit de nous contacter pour discuter de vos besoins. Nous vous accompagnerons ensuite dans toutes les étapes,de la définition de votre projet à la mise en ligne de votre site.',
    },
    {
        label: 'Dois-je fournir le contenu pour mon site web ?',
        description:
            "  Vous pouvez fournir votre propre contenu (textes, images, vidéos), mais si vous avez besoin d'aide, nous offrons également des services de création de contenu, y compris la rédaction et la photographie professionnelle.",
    },
    {
        label: 'Est-ce que vous proposez des audits de sites web ?',
        description:
            'Oui, nous réalisons des audits complets de sites web existants, incluant l’analyse du SEO, des performances, de la sécurité et de l’UX/UI. Nous vous fournissons ensuite des recommandations pour améliorer votre site.',
    },
]
</script>
