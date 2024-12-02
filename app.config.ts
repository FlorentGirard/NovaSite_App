export default defineAppConfig({
    ui: {
        input: {
            rounded: 'rounded-full',
            placeholder: 'placeholder-gray-500',
            color: {
                white: {
                    outline:
                        'bg-black text-white  focus:ring-4 focus:ring-gray-200',
                },
            },
        },
        textarea: {
            placeholder: 'placeholder-gray-500',
            rounded: 'rounded-3xl',
            color: {
                white: {
                    outline:
                        'bg-black text-white  focus:ring-4 focus:ring-gray-200',
                },
            },
        },

        formGroup: {
            label: {
                base: 'text-white mb-2',
            },
        },
    },
})
