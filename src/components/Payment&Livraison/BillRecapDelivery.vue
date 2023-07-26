<script setup >
import { ref, inject, computed, onMounted } from "vue";
import router from "../../router";

const cart = inject("cart");
const price = ref(2.99);
</script>


<template>
  <div class="h-screen flex items-center justify-end">
    <h1
      class="text-2xl font-semibold w-[80%] text-center absolute top-1/4 leading-10 left-1/2 -translate-x-1/2 -translate-y-1/4 z-20 tracking-widest"
    >
      Nous vous livrons dans
      <span class="text-primary text-4xl font-bold">Tout Charleroi</span>
      et ce même en dehors des heures de bureau !
    </h1>

    <img
      src="../../../public/animscooter.gif"
      alt="hi"
      class="w-screen h-[95%] absolute opacity-90"
    />
    <div
      class="bg-white w-2/6 h-auto rounded-md text-center border-gray-100 drop-shadow-sm p-5 m-8 mx-auto shadow-md"
    >
      <h2 class="text-xl leading-10 tracking-widest">
        Merci pour votre commande. Nous préparons votre commande et elle sera
        bientôt en route pour la livraison. Merci de votre confiance !
      </h2>

      <div class="lds-roller m-4">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-right">
        <button
          @click="router.push('/')"
          class="menuBtn px-4 rounded-lg text-white py-2"
        >
          Retour
        </button>
      </div>
    </div>
    <div
      class="bg-white w-2/5 h-auto rounded-md border-gray-100 drop-shadow-sm p-5 m-8"
    >
      <h2 class="text-2xl p-4 bg-gray-100 text-test rounded-md mb-6">
        {{ cart.totalDisheQuantity }} plats
      </h2>
      <div class="border-2 broder-gray-100 rounded-lg text-lg">
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="flex justify-between p-4 text-test my-2"
        >
          <p class="tracking-widest font-semibold my-1">
            {{ item.quantity }}-{{ item.nom }}
          </p>
          <p>€ {{ item.prix * item.quantity }}</p>
        </div>
      </div>

      <div
        class="form-control flex gap-2 rounded-md p-4 justify-between tracking-widest bgNew"
      >
        <p class="text-lg font-semibold">Prix Final :</p>
        <p class="text-lg">€ {{ cart.totalPrice ? cart.totalPrice : 0 }}</p>
      </div>
      <div
        class="form-control flex gap-2 bg-gray-100 rounded-md p-4 tracking-widest justify-between"
      >
        <p class="text-lg font-semibold">Frais de livraison :</p>
        <p class="text-lg font-semibold">
          {{ totalPrice > 35 ? "Gratuit" : `${price} €` }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e94e1b;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>