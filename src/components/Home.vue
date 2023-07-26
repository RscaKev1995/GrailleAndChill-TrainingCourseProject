<script setup>
import Carousel from "./Carousel.vue";
import router from "../router";

const goToMenu = () => {
  router.push("/menu");
};
</script>

<template>
  <div class="flex-col justify-center items-center w-[95vw] mx-auto p-8">
    <header class="flex justify-around h-[800px] top-16 relative">
      <section class="w-[500px] flex-col flex">
        <img src="../Assets/Img/logo.png" alt="logo" />
        <h2 class="text-xl leading-8 tracking-wider indent-5 mt-4 ml-6">
          Avec
          <span class="font-semibold tracking-widest text-primary text-2xl"
            >Graille&Chill</span
          >
          , la livraison de vos plats préférés est à portée de clic.
        </h2>
      </section>
      <section class="w-[500px] flex-col flex">
        <img
          src="../Assets/Img/plateHome.png"
          alt="platepic"
          class="absolute top-10 right-0"
        />
      </section>
    </header>
    <div class="space-y-16 p-6 mx-auto h-[700px]">
      <h1 class="text-center font-bold mt-3 text-2xl tracking-widest p-6">
        Choisissez, commandez et on s'occupe du reste !
      </h1>
      <div class="flex items-center p-4">
        <img
          src="../Assets/Img/chefHome2.jpeg"
          alt="chefcook"
          class="rounded-md drop-shadow-md shadow-sm"
        />

        <p class="text-center m-6 leading-loose text-xl tracking-widest">
          Le chef prépare chaque plat avec le même soin et l'attention que pour
          lui-même. Les ingrédients les plus frais et les techniques culinaires
          les plus raffinées sont utilisés pour offrir une expérience
          gastronomique inoubliable à nos clients.
        </p>
      </div>
    </div>

    <div class="my-24">
      <Carousel />
    </div>

    <h2 class="text-center tracking-wider leading-8 font-bold text-2xl p-6">
      Des choses marquantes sur l'entreprise.
    </h2>
    <div class="flex justify-between items-center mt-16 p-6">
      <article class="w-1/3 flex-1">
        <div class="flex flex-col justify-center items-center">
          <img src="../Assets/Img/local.png" alt="firstpic" class="h-24" />
          <p
            class="pt-2 text-md tracking-wider text-bold text-center w-52 my-8"
          >
            Des matières premières en provenance de producteurs locaux dans un
            rayon de 30 km.
          </p>
        </div>
      </article>
      <article class="w-1/3 flex-1">
        <div class="flex flex-col justify-center items-center">
          <img src="../Assets/Img/power.png" alt="firstpic" class="h-24" />
          <p
            class="pt-2 text-md tracking-wider text-bold text-center w-52 my-8"
          >
            Nos véhicules électriques sont rechargés dans nos entrepôts équipés
            de panneaux solaires.
          </p>
        </div>
      </article>
      <article class="w-1/3 flex-1">
        <div class="flex flex-col justify-center items-center">
          <img src="../Assets/Img/10yrs.png" alt="firstpic" class="h-24" />
          <p
            class="pt-2 text-md tracking-wider text-bold text-center my-8 w-52"
          >
            Une expérience de 10 ans dans le milieu fait de nous un acteur
            important dans la restauration.
          </p>
        </div>
      </article>
    </div>
    <div class="my-24 h-48 bgNew flex items-center justify-center rounded-md">
      <button
        class="myShop text-white text-xl tracking-widest rounded-lg h-16 w-1/3 drop-shadow-md hover:scale-105 transition-all ease-in-out duration-900 cursor-pointer"
        @click="goToMenu()"
      >
        Commandez !
      </button>
    </div>
  </div>
</template>

<style>
</style>
