<script setup>
import { inject, ref, computed } from "vue";
import BiggerDisheDisplay from "./BiggerDisheDisplay.vue";
import ShoppinCart from "../ShoppingCart/ShoppinCart.vue";
import Dishe from "./Dishe.vue";

const plateList = inject("plateList");

const selectedPlate = ref();

const filteredPlateList = ref([...plateList.value]);

const currentIndex = ref();

const addToCart = (plate) => {
  const index = shoppingList.value.findIndex((item) => item.id === plate.id);
  if (index !== -1) {
    shoppingList.value[index].quantity += 1;
  } else {
    shoppingList.value.push({ ...plate, quantity: 1 });
  }
};

const removeFromCart = (plate) => {
  const index = shoppingList.value.findIndex((item) => item.id === plate.id);
  if (index !== -1) {
    if (shoppingList.value[index].quantity > 1) {
      shoppingList.value[index].quantity -= 1;
    } else {
      shoppingList.value.splice(index, 1);
    }
  }
};

const showPlate = (plate) => {
  selectedPlate.value = plate;
  currentIndex.value = plateList.value.indexOf(plate);
  console.log(currentIndex.value);
};

const goToNextPlate = () => {
  if (currentIndex.value === plateList.value.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
  selectedPlate.value = plateList.value[currentIndex.value];
};

const goToPreviousPlate = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = plateList.value.length - 1;
  } else {
    currentIndex.value--;
  }
  selectedPlate.value = plateList.value[currentIndex.value];
};

const exitDisheDisplay = () => {
  selectedPlate.value = "";
};

const init = () => {
  setTimeout(function () {
    console.log("ok");
    filteredPlateList.value = [...plateList.value];
  }, 40);
};
init();

const filterMenu = (categorie) => {
  if (categorie === "all") {
    filteredPlateList.value = [...plateList.value];
  } else {
    const filtredItem = plateList.value.filter(
      (item) => item.categorie === categorie
    );
    if (filtredItem.length === 0) {
      filteredPlateList.value = plateList.value;
    } else {
      filteredPlateList.value = filtredItem;
    }
  }
};

const totalPrice = computed(() => {
  return shoppingList.value.reduce((total, item) => {
    return total + item.quantity * item.prix;
  }, 0);
});

const shoppingList = inject("shoppingList");
</script>
<template>
  <ShoppinCart
    :addToCart="addToCart"
    :removeFromCart="removeFromCart"
    :plate="plate"
    :totalPrice="totalPrice"
  />

  <div class="flex justify-start p-16 m-8">
    <button
      class="py-2 px-4 rounded-xl mx-2 text-lg tracking-widest shadow-md myBtn hover:bg-orange-600 hover:text-white hover:border-white hover:rounded-xl transition-all ease-in-out duration-800 delay-100"
      @click="filterMenu('all')"
    >
      All
    </button>
    <button
      class="py-2 px-4 rounded-xl mx-2 text-lg tracking-widest shadow-md myBtn hover:bg-orange-600 hover:text-white hover:border-white hover:rounded-xl transition-all ease-in-out duration-800 delay-100"
      @click="filterMenu('végétarien')"
    >
      Vegetarien
    </button>
    <button
      class="py-2 px-4 rounded-xl mx-2 text-lg myBtn shadow-md tracking-widest hover:bg-orange-600 hover:text-white hover:border-white hover:rounded-xl transition-all ease-in-out duration-800 delay-100"
      @click="filterMenu('poisson')"
    >
      Poisson
    </button>
    <button
      class="py-2 px-6 rounded-xl mx-2 text-lg myBtn shadow-md tracking-widest hover:bg-orange-600 hover:text-white hover:border-white hover:rounded-xl transition-all ease-in-out duration-800 delay-100"
      @click="filterMenu('vegan')"
    >
      Vegan
    </button>
    <button
      class="py-2 px-4 rounded-xl shadow-md mx-2 text-lg myBtn tracking-widest hover:bg-orange-600 hover:text-white hover:border-white hover:rounded-xl transition-all ease-in-out duration-800 delay-100"
      @click="filterMenu('viande')"
    >
      Viande
    </button>
    <button
      class="py-2 px-4 rounded-xl mx-2 text-lg myBtn shadow-md tracking-widest hover:bg-orange-600 hover:text-white hover:border-white hover:rounded-xl transition-all ease-in-out duration-800 delay-100"
      @click="filterMenu('boisson')"
    >
      Boisson
    </button>
  </div>
  <div class="grid grid-cols-3 w-[68%]">
    <Dishe
      v-for="plate in filteredPlateList"
      :key="plate.id"
      :plate="plate"
      :addToCart="addToCart"
      :showPlate="showPlate"
      :shoppingList="shoppingList"
      :removeFromCart="removeFromCart"
      :quantity="
        shoppingList.find((item) => item.id === plate.id)?.quantity || 0 //L'opérateur de chaînage optionnel ?. permet de lire la valeur d'une propriété située profondément dans une chaîne d'objets connectés sans avoir à valider expressément que chaque référence dans la chaîne est valide.
      "
    />

    <BiggerDisheDisplay
      :addToCart="addToCart"
      :exitFunction="exitDisheDisplay"
      :plate="selectedPlate"
      :currentIndex="currentIndex"
      :next="goToNextPlate"
      :prev="goToPreviousPlate"
      v-if="selectedPlate"
    />
  </div>
</template>




