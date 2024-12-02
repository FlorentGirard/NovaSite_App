<script setup lang="ts">
import { z } from 'zod'
import { reactive } from 'vue'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
    email: z.string().email('Invalid email'),
    name: z.string().min(1),
    sujet: z.string().min(1),
    message: z.string().min(1),
})

type Schema = z.output<typeof schema>

const state = reactive({
    name: undefined,
    email: undefined,
    sujet: undefined,
    message: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
}
</script>

<template>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <div class="flex mb-4">
            <UFormGroup label="Nom,Prénom" name="name" class="w-2/4 mr-4">
                <UInput
                    v-model="state.name"
                    size="xl"
                    placeholder="John Doe"
                    class="text-white"
                />
            </UFormGroup>

            <UFormGroup label="Email" name="email" class="w-2/4 ml-4">
                <UInput
                    v-model="state.email"
                    placeholder="John@email.com"
                    size="xl"
                />
            </UFormGroup>
        </div>

        <UFormGroup label="sujet" name="sujet">
            <UInput
                v-model="state.sujet"
                class="text-white"
                size="xl"
                placeholder="Quel est votre projet ?"
            />
        </UFormGroup>
        <UFormGroup label="Message" name="message">
            <UTextarea
                v-model="state.message"
                size="xl"
                placeholder="Expliquer votre demande..."
            />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
    </UForm>
</template>

<style scoped></style>
