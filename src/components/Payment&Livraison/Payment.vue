
<script setup>
import { inject, ref, provide, computed } from "vue";
import router from "../../router";
import Livraison from "./Livraison.vue";

const selectedOption = ref("");
const selectedSubOption = ref("");
const cart = inject("cart");
const shoppingList = inject("shoppingList");
const emptyList = inject("emptyList");
const price = ref(2.99);
const serviceFee = ref(0.75);
const isDone = ref(false);

const formPayment = ref({
  rueLivraison: "",
  codePostal: "",
  numeroMaison: "",
  ville: "",
  note: "",
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
});

const checkPaymentMethod = (event) => {
  if (selectedOption.value && selectedSubOption.value) {
    isDone.value = false;
  }
};

const exitPayment = () => {
  isDone.value = false;
};

const choosePayment = () => {
  switch (selectedOption.value) {
    case "Paiement direct":
      if (selectedSubOption.value === "Master Card" && cart.value.totalPrice) {
        router.push({
          name: "mastercard",
        });
      } else if (
        selectedSubOption.value === "Maestro" &&
        cart.value.totalPrice
      ) {
        router.push("/payment/maestro");
      }
      break;

    case "Paiement à la livraison":
      if (
        (selectedSubOption.value === "Master Card" && cart.value.totalPrice) ||
        (selectedSubOption.value === "Maestro" && cart.value.totalPrice)
      ) {
        router.push("/payment/bill");
        emptyList();
      } else if (selectedSubOption.value === "Cash" && cart.value.totalPrice) {
        router.push("/payment/bill");
        emptyList();
      }
      break;

    default:
      return console.log(selectedOption.value, selectedSubOption.value);
  }
};
</script>

<template >
  <div class="flex flex-row-reverse h-screen">
    <div class="w-1/4 border-2 rounded-t-lg m-4">
      <h1
        class="text-center p-4 text-2xl text-white rounded-t-md primary font-semibold tracking-widest"
      >
        Panier
      </h1>

      <div
        class="flex justify-between border-b-2 border-gray py-2 w-5/6 mx-auto px-2 my-6"
        v-for="(item, index) in cart.items"
        :key="index"
      >
        <div class="flex gap-3">
          <p class="font-semibold">{{ cart.totalDisheQuantity }}</p>
          <p class="font-semibold text-md">
            {{ item.nom }}
          </p>
        </div>
        <p class="font-md text-gray-600">€ {{ item.prix * item.quantity }}</p>
      </div>
      <div class="w-[340px] rounded-md sticky p-4">
        <div class="flex items-center justify-between p-2 w-6/7 border-b-2">
          <p>Sous-total :</p>
          <p class="">€ {{ cart.totalPrice }}</p>
        </div>
        <div class="flex items-center justify-between p-2 border-b-2">
          <p>Frais de livraison :</p>
          <p>
            {{
              cart.totalPrice > 35
                ? "Gratuit"
                : cart.totalPrice < 35
                ? `€ ${price} `
                : !cart.totalPrice
                ? `€ ${0}`
                : 0
            }}
          </p>
        </div>
        <div class="flex items-center justify-between p-2 border-b-2">
          <p>Frais de service :</p>
          <p>€ {{ !cart.totalPrice ? 0 : serviceFee }}</p>
        </div>
        <div class="flex items-center justify-between p-2 border-b-2">
          <p>Montant Total :</p>
          <p>€ {{ cart.totalPrice ? serviceFee + cart.totalPrice : 0 }}</p>
        </div>
        <p
          v-if="!cart.totalPrice"
          class="text-red-600 font-mono tracking-normal mt-2 indent-2"
        >
          Aucun produit selectionner !
        </p>
      </div>
    </div>
    <div class="m-4 w-3/4 shadow-md rounded-lg p-10 overflow-y-auto mb-6">
      <form class="justify-center items-center text-center mx-auto">
        <div class="border-2 border-light-gray p-4 rounded-md">
          <h2 class="text-left text-lg font-semibold leading-10 my-2">
            Adresse de livraison
          </h2>
          <div class="grid grid-cols-2 text-left items-center gap-y-2 gap-x-6">
            <div class="form-control input space-y-3">
              <label for="rue">Rue de livraison:</label>
              <input type="text" id="rue" v-model="formPayment.rueLivraison" />
            </div>
            <div class="form-control input space-y-3">
              <label for="codePostal">Code postal:</label>
              <input
                type="text"
                id="codePostal"
                v-model="formPayment.codePostal"
              />
            </div>
            <div class="form-control input space-y-3">
              <label for="numeroMaison">Numéro de maison:</label>
              <input
                type="text"
                id="numeroMaison"
                v-model="formPayment.numeroMaison"
              />
            </div>
            <div class="form-control input space-y-3">
              <label for="ville">Ville:</label>
              <input type="text" id="ville" v-model="formPayment.ville" />
            </div>
            <div class="form-control textarea space-y-3">
              <label for="note" class="font-semibold">Ajouter une note:</label>
              <textarea id="note" v-model="formPayment.note"></textarea>
            </div>
          </div>
          <div class="h-[1px] w-6/7 bg-gray-300 mx-auto my-8"></div>
          <h2
            class="text-left text-lg tracking-widest font-semibold leading-10"
          >
            Données Personnelles
          </h2>
          <div class="grid grid-cols-2 mt-6 gap-8 text-left">
            <div class="form-control input space-y-3">
              <label for="nom">Nom:</label>
              <input type="text" id="nom" v-model="formPayment.nom" />
            </div>
            <div class="form-control input space-y-3">
              <label for="prenom">Prénom:</label>
              <input type="text" id="prenom" v-model="formPayment.prenom" />
            </div>
            <div class="form-control input space-y-3">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="formPayment.email" />
            </div>
            <div class="form-control input space-y-3">
              <label for="tel">Numéro de téléphone:</label>
              <input type="tel" id="tel" v-model="formPayment.telephone" />
            </div>
          </div>
        </div>
        <div
          class="border-2 border-light-gray rounded-md text-left my-4 p-4 leading-7 flex flex-col justify-between items-center"
        >
          <div class="flex flex-col items-center">
            <h2
              class="text-lg tracking-widest font-semibold leading-9 mb-6 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Délai de livraison
            </h2>
          </div>

          <Livraison />
        </div>

        <div class="flex justify-between items-center py-8 text-lg">
          <div
            class="inline-flex items-center border-2 border-light-gray p-3 rounded-md hover:bg-gray-100 ease-in-out delay-70 transition-all"
          >
            <p v-if="selectedOption === 'Paiement direct'" class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>

            <label
              @click="isDone = true"
              for="radioDirect"
              class="px-8 w-[400px] text-test rounded cursor-pointer font-semibold tracking-wider"
              >Paiement direct</label
            >
            <input
              type="radio"
              id="radioDirect"
              v-model="selectedOption"
              value="Paiement direct"
              class="hidden"
            />
          </div>
          <div
            class="inline-flex items-center border-2 border-light-gray p-3 rounded-md hover:bg-gray-100 ease-in-out delay-70 transition-all"
          >
            <p v-if="selectedOption === 'Paiement à la livraison'" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>
            <label
              @click="isDone = true"
              for="radioDelivery"
              class="px-8 w-[400px] text-test rounded cursor-pointer font-semibold tracking-wider"
              >Paiement à la livraison</label
            >
            <input
              type="radio"
              id="radioDelivery"
              v-model="selectedOption"
              value="Paiement à la livraison"
              class="hidden"
            />
          </div>
        </div>

        <div
          v-if="isDone"
          class="h-[450px] w-[650px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-md shadow-md drop-shadow-xl flex flex-col justify-center gap-6"
        >
          <div class="text-right">
            <button @click="exitPayment">
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
          </div>

          <div
            class="inline-flex items-center justify-between border-2 gap-1 text-left hover:bg-gray-100 ease-in-out delay-70 transition-all rounded-lg space-x-8 p-3"
          >
            <img src="/maestro.png" alt="maestro" class="h-[2.7rem]" />
            <label
              class="px-8 w-[500px] py-2 text-test rounded cursor-pointer text-lg tracking-widest"
              for="maestro"
              >Maestro</label
            >
            <p v-if="selectedSubOption === 'Maestro'" class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>
            <input
              type="radio"
              v-model="selectedSubOption"
              value="Maestro"
              class="hidden"
              id="maestro"
            />
          </div>

          <div
            class="inline-flex items-center justify-between border-2 gap-1 text-left hover:bg-gray-100 ease-in-out delay-70 transition-all rounded-lg space-x-5 p-1"
          >
            <img src="/master.png" class="h-[4rem]" alt="master" />
            <label
              class="px-8 w-[500px] py-2 text-test rounded cursor-pointer text-lg tracking-widest"
              for="master"
              >Master Card</label
            >
            <p v-if="selectedSubOption === 'Master Card'" class="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>
            <input
              type="radio"
              v-model="selectedSubOption"
              value="Master Card"
              class="hidden"
              id="master"
            />
          </div>

          <button
            class="menuBtn text-white p-3 rounded-md text-lg tracking-widest hover:opacity-90 transition-all ease-in-out delay-100"
            @click.prevent="checkPaymentMethod"
          >
            Continuez
          </button>
        </div>

        <div
          v-if="selectedOption === 'Paiement à la livraison' && isDone"
          class="h-[450px] w-[650px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-md shadow-md drop-shadow-xl flex flex-col justify-center gap-6"
        >
          <div class="text-right">
            <button @click="exitPayment">
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
          </div>
          <div
            class="inline-flex items-center justify-between border-2 gap-1 text-left hover:bg-gray-100 ease-in-out delay-70 transition-all rounded-lg space-x-8 px-3"
          >
            <img src="/cash.png" class="h-16" alt="cash" />
            <label
              class="w-[500px] py-2 text-test rounded cursor-pointer text-xl tracking-widest"
              for="cash"
              >Cash</label
            >

            <p v-if="selectedSubOption === 'Cash'" class="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>
            <input
              type="radio"
              v-model="selectedSubOption"
              value="Cash"
              class="hidden"
              id="cash"
            />
          </div>
          <div
            class="inline-flex items-center border-2 gap-1 text-left hover:bg-gray-100 ease-in-out delay-70 transition-all rounded-lg"
          >
            <img src="/master.png" class="h-20" alt="master" />
            <label
              class="px-2 w-[500px] py-2 text-test rounded cursor-pointer text-xl tracking-widest"
              for="master card"
              >Master Card</label
            >
            <p v-if="selectedSubOption === 'Master Card'" class="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>
            <input
              type="radio"
              v-model="selectedSubOption"
              value="Master Card"
              class="hidden"
              id="master card"
            />
          </div>
          <div
            class="inline-flex items-center border-2 gap-1 text-left hover:bg-gray-100 ease-in-out delay-70 transition-all rounded-lg p-2"
          >
            <img src="/maestro.png" class="h-12 pl-2" alt="maestro" />
            <label
              class="px-6 w-[500px] py-2 text-test rounded cursor-pointer text-xl tracking-widest"
              for="maestro"
              >Maestro</label
            >

            <p v-if="selectedSubOption === 'Maestro'" class="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </p>
            <input
              type="radio"
              v-model="selectedSubOption"
              value="Maestro"
              class="hidden"
              id="maestro"
            />
          </div>
          <button
            class="menuBtn text-white p-3 rounded-md text-lg tracking-widest hover:opacity-90 transition-all ease-in-out delay-100"
            @click.prevent="checkPaymentMethod"
          >
            Continuez
          </button>
        </div>
      </form>

      <div>
        <div class="text-left">
          <button
            class="menuBtn text-white py-4 px-6 rounded-xl text-xl duration-900 delay-50 transition-all ease-in-out hover:opacity-90 hover:scale-105 tracking-widest"
            @click.prevent="choosePayment"
          >
            Commander et payer avec
            {{ selectedSubOption }} (€{{ cart.totalPrice }}).
          </button>
          <p
            v-if="!cart.totalPrice"
            class="text-red-600 font-mono mt-4 indent-1"
          >
            Veuillez sélectionner un produit avant de procéder au paiement !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.astive {
  background-color: gray;
}
</style>

