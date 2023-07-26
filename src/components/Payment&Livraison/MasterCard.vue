<script setup>
import { ref, computed, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import router from "../../router";
const inputFieldEmptyAlert = ref(false);

const cart = inject("cart");

const masterCard = ref({
  masterCardholderName: "",
  masterCardNumber: "",
  masterExpiryDate: "",
  masterCvv: "",
});

const checkSubmit = computed(() => {
  return (
    masterCard.value.masterCardholderName &&
    masterCard.value.masterCardNumber &&
    masterCard.value.masterCvv &&
    masterCard.value.masterExpiryDate
  );
});
const handlePaymentMaster = () => {
  router.push("/payment/finalbill");
  emptyList();
};
</script>
<template>
  <div class="mx-auto h-screen flex justify-around items-center">
    <div class="w-2/5">
      <img src="../../Assets/Img/logo.png" class="cover" alt="" />
    </div>

    <form
      @submit.prevent="handlePaymentMaster"
      class="p-6 bg-gray-100 rounded-md drop-shadow-md shadow-sm shadow-gray-100 w-1/3"
    >
      <div class="w-24">
        <img src="/master.png" alt="" class="object-fill" />
      </div>
      <div class="form-control input">
        <label for="cardholder-name">Nom et Prénom :</label>
        <input
          class="placeholder-gray-400"
          type="text"
          id="cardholder-name"
          v-model="masterCard.masterCardholderName"
          placeholder="Jhon Smith"
        />
      </div>
      <div class="form-control input">
        <label for="card-number">Numéro de carte :</label>
        <div class="relative">
          <input
            class="placeholder-gray-400"
            type="text"
            id="card-number"
            v-model="masterCard.masterCardNumber"
            placeholder="4242424242424242"
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
          >
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="form-control input">
        <label for="expiry-date">Date d'expiration:</label>
        <input
          class="placeholder-gray-400"
          type="month"
          id="expiry-date"
          v-model="masterCard.masterExpiryDate"
          format="MM/yyyy"
        />
      </div>
      <div class="form-control input">
        <label for="cvv">CVC:</label>
        <input
          type="text"
          id="cvv"
          v-model="masterCard.masterCvv"
          placeholder="123"
          class="placeholder-gray-400"
        />
      </div>
      <div
        class="form-control flex gap-2 bg-gray-200 rounded-md p-4 justify-between items-center"
      >
        <p class="text-lg font-semibold">Prix Final :</p>
        <p class="text-lg font-semibold">
          € {{ cart.totalPrice ? cart.totalPrice : 0 }}
        </p>
      </div>
      <div class="form-control input">
        <button
          type="submit"
          class="inline-block p-2 px-8 text-white text-lg rounded-md duration-200 delay-50 transition-all"
          :disabled="!checkSubmit"
          :class="{
            'bg-orange-600': checkSubmit,
            'bg-gray-300': !checkSubmit,
          }"
        >
          Confirmer
        </button>
      </div>

      <div>
        <p v-if="inputFieldEmptyAlert">
          Les champs ne sont pas tous remplis, il faut qu'ils le soient avant de
          pouvoir confirmer.
        </p>
      </div>
    </form>
  </div>
</template>
<style>
</style>