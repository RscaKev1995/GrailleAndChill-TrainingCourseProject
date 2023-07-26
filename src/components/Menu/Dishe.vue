<script setup>
import { defineProps, ref } from "vue";

defineProps([
  "addToCart",
  "plate",
  "showPlate",
  "quantity",
  "shoppingList",
  "removeFromCart",
]);
</script>
<template>
  <div class="p-2 m-4 w-[100%]">
    <button @click="showPlate(plate)" class="absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 stroke-white fill-orange-700"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <img
      :src="plate.src"
      alt=""
      class="w-[100%] h-60 object-cover rounded-t-xl"
    />
    <div class="w-[100%] h-56 bgNew rounded-md p-4 shadow-lg">
      <h2 class="text-xl py-4 text-test font-medium oswald">
        {{ plate.nom }}
      </h2>

      <p class="text-md font-semibold py-2 text-test">
        Prix: {{ plate.prix }} €
      </p>

      <div class="flex">
        <p class="text-sm text-test">Allergénes :</p>
        <p class="px-1 text-primary text-sm font-bold">
          {{ plate.allergenes.join(" , ") }}
        </p>
      </div>

      <div
        v-if="quantity"
        class="flex justify-end items-center h-14 transition-all ease-in-out duration-300"
      >
        <button
          class="primary p-1 mx-4 rounded-md"
          @click="removeFromCart(plate)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <p class="font-semibold text-lg w-3">{{ quantity }}</p>
        <button class="primary mx-4 p-1 rounded-md" @click="addToCart(plate)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>

      <div v-else class="text-right px-2 mt-4">
        <button
          @click="addToCart(plate)"
          class="py-2 px-4 rounded-md primary text-white font-semibold transition ease-in-out delay-100 hover:scale-110 duration-300"
        >
          Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<style>
</style>