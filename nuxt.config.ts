// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    //css: ['~/assets/css/talwind.css', '~/assets/css/custom-styles-talwind.css'],
    modules: ['@nuxt/ui', 'nuxt-anchorscroll'],
    anchorscroll: {
        hooks: [
            // Or any valid hook if needed
            // Default is `page:finish`
            'page:transition:finish',
        ],
    },
})
