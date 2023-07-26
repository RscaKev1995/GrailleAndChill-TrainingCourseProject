

<script setup>
import { inject, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const totalDisheQuantity = inject("totalDisheQuantity");

const router = useRouter();
const activeRouteName = ref("");

const isActive = (routeName) => {
  return activeRouteName.value === routeName;
};

// watch the route and update activeRouteName when it changes
watchEffect(() => {
  activeRouteName.value = router.currentRoute.value.name;
});
</script>

<template>
  <header>
    <nav class="flex justify-center h-36 items-center lato text-lg mb-16">
      <ul class="flex justify-around w-[45%]">
        <router-link
          class="nav-link nav-link-ltr"
          to="/"
          :class="{ active: isActive('home') }"
          >Accueil</router-link
        >

        <router-link
          to="/menu"
          class="nav-link nav-link-ltr"
          :class="{ active: isActive('menu') }"
          >Menu</router-link
        >

        <router-link
          to="/contact"
          :class="{ active: isActive('contact') }"
          class="nav-link nav-link-ltr"
          >Contact</router-link
        >
      </ul>
      <div
        class="relative menuBtn rounded-md hover:scale-105 transition-all ease-in-out"
      >
        <router-link to="/menu">
          <button class="p-2 rounded-lg flex flex-row-reverse">
            <span class="text-white px-2">Panier</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <span
              class="absolute py-0 px-2 rounded-lg left-24 top-8 myShop text-white"
              >{{ totalDisheQuantity }}</span
            >
          </button>
        </router-link>
      </div>
    </nav>
  </header>
</template>
<style>
.nav-link {
  font-size: 1.3rem;
  text-decoration: none;
  padding: 10px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
  opacity: 0.75;
  font-family: "Karla", sans-serif;
}
/* font-family: 'Karla', sans-serif;
font-family: 'Lato', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Roboto Mono', monospace; */

.nav-link {
  font-size: 1.3rem;
  text-decoration: none;
  padding: 10px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
  opacity: 0.75;
  font-family: "Karla", sans-serif;
}

.nav-link:hover,
.active {
  opacity: 1;
}

.nav-link::before,
.active::before {
  transition: 250ms;
  height: 3px;
  content: "";
  position: absolute;
  background-color: #e94e1b;
}

.nav-link-ltr::before,
.active.nav-link-ltr::before {
  width: 0%;
  bottom: 6px;
}

.nav-link-ltr:hover::before,
.active.nav-link-ltr::before {
  width: 100%;
}
</style>