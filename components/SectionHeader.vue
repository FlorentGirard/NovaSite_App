<script setup lang="ts"></script>

<template>
    <section class>
        <div
            class="px-4 md:px-14 bg-center bg-no-repeat bg-cover relative pb-20 md:px-20"
            :style="{
                backgroundImage:
                    'url(https://static.shuffle.dev/uploads/files/fd/fd505aa7fcd56e868938c5bb12a9f084f946fdf7/bg-first.png)',
            }"
        >
            <div>
                <div
                    class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50"
                >
                    <div class="fixed inset-0 bg-black opacity-20" />
                    <nav
                        class="relative p-8 w-full h-full bg-white overflow-y-auto"
                    >
                        <div class="flex items-center justify-between">
                            <!--                            <a href="#" class="inline-block">
                                <img
                                    class="h-7"
                                    src="consulty-assets/logos/consulty-logo2.svg"
                                    alt
                                />
                            </a>-->
                            <a href="#">
                                <svg
                                    width="{24}"
                                    height="{24}"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 18L18 6M6 6L18 18"
                                        stroke="#111827"
                                        strokeWidth="{2}"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <ul class="flex flex-col gap-12 py-12">
                            <li>
                                <a
                                    href="#"
                                    class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                                >
                                    <div class="flex items-center gap-2">
                                        <span
                                            class="text-sm font-medium tracking-tight"
                                            >Products</span
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="{17}"
                                            height="{16}"
                                            viewBox="0 0 17 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.848 6L8.18132 10.6667L3.51465 6"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
                                    >Case Studies</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
                                    >Support</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                                >
                                    <div class="flex items-center gap-2">
                                        <span
                                            class="text-sm font-medium tracking-tight"
                                            >Resources</span
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="{17}"
                                            height="{16}"
                                            viewBox="0 0 17 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.848 6L8.18132 10.6667L3.51465 6"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="flex flex-col gap-4">
                            <a
                                href="#"
                                class="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200"
                            >
                                <span
                                    class="text-white text-sm font-semibold tracking-tight"
                                    >Get A Free Consultation</span
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="{16}"
                                    height="{16}"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="pt-80">
                <h1
                    class="font-heading tracking-tight text-5xl md:text-7xl text-white font-medium max-w-xs md:max-w-xl mb-6"
                >
                    Boostez votre entreprise !
                </h1>
                <p class="tracking-tight text-white text-lg mb-8 max-w-md">
                    Élevez votre présence en ligneavec nos solutions web clés en
                    main !
                </p>
                <a
                    href="#"
                    class="rounded-full border border-gray-200 bg-white px-6 py-4 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200"
                >
                    <span class="font-bold tracking-tight"
                        >Booker une visio</span
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="{16}"
                        height="{16}"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
            <div class="hidden md:block absolute bottom-8 right-8"></div>
        </div>
    </section>
</template>

<style scoped></style>
