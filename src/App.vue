<script setup>
import { onMounted, ref, computed, provide } from "vue";
import router from "./router";

import Navbar from "./components/NavBar/Navbar.vue";
import Footer from "./components/Footer.vue";

const plateList = ref([]);
const cart = ref({});

onMounted(async () => {
  const res = await fetch("http://localhost:8005/plats");
  plateList.value = await res.json();
});

const shoppingList = ref([]);

const totalPrice = computed(() => {
  return shoppingList.value.reduce((total, item) => {
    return total + item.quantity * item.prix;
  }, 0);
});

const totalDisheQuantity = computed(() => {
  return shoppingList.value.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});
const totalByDishe = computed(() => {
  return shoppingList.value.reduce((total, item) => {
    return total + item.quantity * item.prix;
  });
});

const sendToPayment = () => {
  cart.value = {
    items: shoppingList.value,
    totalPrice: totalPrice.value,
    totalDisheQuantity: totalDisheQuantity.value,
  };

  router.push("/payment");
};
const emptyList = () => {
  shoppingList.value = [];
};

provide("plateList", plateList);
provide("shoppingList", shoppingList);
provide("totalDisheQuantity", totalDisheQuantity);
provide("totalPrice", totalPrice);
provide("sendToPayment", sendToPayment);
provide("cart", cart);
provide("totalByDishe", totalByDishe);
provide("emptyList", emptyList);
</script>

<template>
  <div class="h-screen">
    <Navbar />

    <RouterView />

    <Login />
    <Footer />
  </div>
</template>

<style>
#app {
  height: 100vh;
}
</style>
