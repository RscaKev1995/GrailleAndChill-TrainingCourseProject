<template>
  <div class="flex items-center gap-6 px-4 h-40 footerBg mt-12">
    <div class="w-[200px] min-w-[200px]">
      <img class="w-3/4" src="../Assets/Img/logo.png" alt="" />
    </div>
    <div class="w-1/3 items-center flex flex-col">
      <h2 class="text-test tracking-wider text-md font-semibold">
        Notre société
      </h2>
      <nav class="pt-2 flex flex-col text-gray-500 items-center">
        <router-link to="/">À propos</router-link>
        <router-link to="/">Gallerie</router-link>
      </nav>
    </div>
    <div class="line"></div>

    <div class="w-1/3 flex items-center flex-col">
      <h2 class="text-test tracking-wider text-md font-semibold">Services</h2>
      <nav class="pt-2 flex flex-col items-center">
        <router-link to="/menu" class="text-gray-500"
          >Passer commande</router-link
        >
      </nav>
    </div>
    <div class="line"></div>
    <div class="w-1/3 flex items-center flex-col">
      <h2 class="text-test tracking-wider text-md font-semibold">Autres</h2>
      <nav class="pt-2 flex flex-col items-center text-gray-500">
        <router-link to="/cgv">C.G.V</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/cookie">Cookies & confidentialité</router-link>
      </nav>
    </div>
  </div>
</template>
<script></script>
<style>
.line {
  border-right: #e94e1b 2px solid;
  height: 50px;
  margin: auto;
}
.footerBg {
  background-color: rgba(252, 236, 217, 0.507);
}
</style>
