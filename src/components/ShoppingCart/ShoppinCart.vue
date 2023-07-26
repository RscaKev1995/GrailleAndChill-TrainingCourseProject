<script setup>
import { defineProps, ref, inject, provide } from "vue";

defineProps(["addToCart", "removeFromCart", "plate", "totalPrice"]);
const price = ref(2.99);
const totalDisheQuantity = inject("totalDisheQuantity");
const shoppingList = inject("shoppingList");
const sendToPayment = inject("sendToPayment");
const totalByDishe = inject("totalByDishe");
provide("price", price);
</script>

<template>
  <div class="w-screen">
    <div
      class="primary mx-auto p-4 w-96 fixed right-6 mt-28 rounded-md h-[450px] overflow-y-auto test"
    >
      <h2 class="text-lg font-semibold text-emerald-100 my-6 pb-2 p-2">
        Total des plats : {{ totalDisheQuantity }} Plats
      </h2>
      <div
        v-for="item in shoppingList"
        :key="item.id"
        class="border-2 py-4 px-2 flex justify-between items-center rounded-md bgNew my-2 delay-200 ease-in-out duration-300"
      >
        <div class="">
          <h2 class="text-md font-md">
            {{ item.nom }}
          </h2>
          <h4 class="font-semibold">Prix :{{ item.prix }} €</h4>
        </div>

        <div class="flex">
          <button class="primary mx-4 p-1 rounded-md" @click="addToCart(item)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
          <p class="font-bold text-lg w-3">{{ item.quantity }}</p>
          <button
            class="primary mx-4 p-1 rounded-md"
            @click="removeFromCart(item)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="totalPrice"
        class="mt-8 broder-2 bgNew rounded-md font-medium text-test text-lg p-3"
      >
        <p class="">Total : {{ totalPrice }} €</p>
        <p class="">
          Frais de livraison : {{ totalPrice > 35 ? "Gratuit" : `${price} €` }}
        </p>
      </div>
      <div class="text-right" v-if="totalPrice">
        <button
          type="submit"
          class="custom-btn btn-15 menuBtn font-semibold p-2 px-4"
          @click="sendToPayment()"
        >
          Continuez
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.test {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.13) 0px 6px 6px;
}
.custom-btn {
  color: #fff;
  border-radius: 5px;

  margin: 1rem;
  font-family: "Lato", sans-serif;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.9s ease;
  position: relative;
  display: inline-block;

  outline: none;
}
.btn-15 {
  background: #b621fe;
  border: none;
  z-index: 1;
}
.btn-15:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(205, 56, 56, 0.806);
  border-radius: 5px;

  transition: all 0.3s ease;
}
.btn-15:hover {
  color: #fff;
}
.btn-15:hover:after {
  left: 0;
  width: 100%;
}
.btn-15:active {
  top: 2px;
}
</style>