<script setup>
import { reactive, ref } from "vue";

const isShow = ref(true);

defineProps([
  "plate",
  "exitFunction",
  "addToCart",
  "next",
  "prev",
  "currentIndex",
]);
</script>
<template>
  <div
    class="h-[600px] w-[1100px] bgNew fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md drop-shadow-xl"
  >
    <button @click="exitFunction()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <button class="absolute right-0 -translate-y-1/2 top-1/2" @click="next()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-12 stroke-orange-700"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <div class="flex justify-around p-2">
      <img class="w-96 h-80 m-2 rounded-md" :src="plate.src" alt="" />
      <div class="flex flex-col h-[60%] p-8 mt-4 space-y-6 w-[50%]">
        <h2 class="text-4xl font-semibold text-test">{{ plate.nom }}</h2>
        <span class="devider my-4"></span>
        <h3 class="text-2xl font-md">Ingredients :</h3>
        <div class="">
          <p class="text-lg font-light capitalize">
            {{ plate.ingredients.join(", ") }}
          </p>
        </div>

        <p class="text-lg font-medium">
          Allergenes : {{ plate.allergenes.join(", ") }}
        </p>

        <p class="text-2xl pt-6">Prix : {{ plate.prix }}€</p>
      </div>
    </div>
    <button @click="prev()" class="absolute left-0 -translate-y-1/2 top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-12 stroke-orange-700"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <div class="text-right">
      <button
        class="menuBtn py-3 px-4 rounded-lg text-xl tracking-widest text-white w-64 hover:scale-105 duration-800 ease-in-out transition-all"
        @click="addToCart(plate), exitFunction()"
      >
        Ajouter
      </button>
    </div>
  </div>
</template>
<style>
.devider {
  width: 290px;
  display: inline-block;
  border-bottom: 1px solid #e94e1b;
}
</style>
