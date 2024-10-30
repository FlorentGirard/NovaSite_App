<template>
    <section
        class="relative overflow-hidden pt-24 px-8 md:px-20"
        :style="{ height: '900px' }"
    >
        <p class="mb-4 tracking-tight">À propos de nous</p>
        <div class="flex flex-wrap -m-4 mb-20">
            <div class="w-full lg:w-1/2 p-4">
                <h2
                    class="font-heading text-4xl md:text-6xl font-medium max-w-xs md:max-w-lg tracking-tight"
                >
                    Des sites uniques et performants
                </h2>
            </div>
            <div class="w-full lg:w-1/2 p-4">
                <p class="text-lg font-medium mb-4 max-w-xl tracking-tight">
                    Chez Visual Club, notre mission est simple : fournir des
                    expériences numériques exceptionnelles qui captivent,
                    engagent et convertissent.
                </p>
                <p class="text-gray-700 text-lg mb-8 max-w-xl tracking-tight">
                    Nous sommes dédiés à fournir des solutions web complètes et
                    innovantes, en créant des sites web remarquables et en
                    développant une image de marque forte pour nos clients.
                </p>
                <a href="#" class="group inline-block">
                    <div class="flex items-center gap-2">
                        <span
                            class="font-medium text-black group-hover:text-opacity-80 transition duration-200 tracking-tight"
                            >Nous contacter</span
                        >
                        <div
                            class="text-black group-hover:text-opacity-80 transition duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M6 3.83341L10.6667 8.50008L6 13.1667"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="relative">
            <div class="absolute left-1/3 -top-24 z-50 removed"></div>
            <div class="absolute left-1/2 transform -translate-x-1/2">
                <div class="flex items-center justify-center gap-12">
                    <div class="flex-shrink-0">
                        <img
                            :style="{ width: 'auto', height: '300px' }"
                            src="https://static.shuffle.dev/uploads/files/fd/fd505aa7fcd56e868938c5bb12a9f084f946fdf7/Desktop-3.png"
                            alt="Image 1"
                        />
                    </div>
                    <div class="flex-shrink-0">
                        <img
                            :style="{ width: 'auto', height: '250px' }"
                            src="https://static.shuffle.dev/uploads/files/fd/fd505aa7fcd56e868938c5bb12a9f084f946fdf7/Desktop-2.png"
                            alt="Image 2"
                        />
                    </div>
                    <div class="flex-shrink-0">
                        <img
                            :style="{ width: 'auto', height: '300px' }"
                            src="https://static.shuffle.dev/uploads/files/fd/fd505aa7fcd56e868938c5bb12a9f084f946fdf7/Desktop-6.png"
                            alt="Image 3"
                        />
                    </div>
                    <div class="flex-shrink-0">
                        <img
                            :style="{ width: 'auto', height: '250px' }"
                            src="https://static.shuffle.dev/uploads/files/fd/fd505aa7fcd56e868938c5bb12a9f084f946fdf7/Desktop-7.png"
                            alt="Image 4"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>
