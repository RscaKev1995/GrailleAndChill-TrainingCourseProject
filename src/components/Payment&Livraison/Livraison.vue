<script setup>
import { ref, provide } from "vue";

import CheckPostCode from "../CheckPostCode.vue";

const selectedHoraire = ref("");
const horaires = ref([]);

for (let h = 7; h <= 22; h++) {
  for (let m = 0; m < 60; m += 30) {
    horaires.value.push(
      `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
    );
  }
}
</script>



<template>
  <div class="flex justify-around mb-2 w-full">
    <CheckPostCode />

    <div class="form-control select label">
      <label for="horaire" class="font-bold">Choisissez horaire :</label>

      <select v-model="selectedHoraire">
        <option value="">Heure</option>
        <option
          v-for="(horaire, index) in horaires"
          :key="index"
          :value="horaire"
          class="text-center"
        >
          {{ horaire }}
        </option>
      </select>
      <div
        v-if="selectedHoraire"
        class="text-test transition-all ease-in-out duration-700 delay-300 relative"
      >
        <p class="transform translate-y-12 font-mono">
          Vous avez choisi
          {{ selectedHoraire }}
        </p>
      </div>
    </div>
  </div>
</template>
