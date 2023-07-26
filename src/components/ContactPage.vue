<template>
  <div class="flex items-center flex-col mt-10">
    <h2
      class="text-center text-test font-semibold mt-3 text-3xl tracking-widest"
    >
      Contactez nous
    </h2>
    <form class="mt-10" @submit.prevent="submitForm">
      <div class="flex justify-between">
        <div class="form-control input label">
          <label for="nom">Votre nom :*</label>

          <input type="text" v-model="nom" required />
        </div>
        <div class="form-control input label">
          <label for="prenom">Votre prénom :*</label>

          <input type="text" v-model="prenom" required />
        </div>
      </div>

      <div class="form-control input label">
        <label for="email">Votre adresse mail : *</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-control input label">
        <label for="telephone"
          >Votre numéro de téléphone fixe ou mobile :*</label
        >

        <input type="tel" v-model="telephone" class="" required />
      </div>
      <div class="form-control textarea label">
        <label for="message">Message :*</label>
        <div class="relative">
          <textarea
            name="message"
            id="message"
            v-model="message"
            class="text-area-default"
            :maxlength="maxMessageLength"
            required
          >
          </textarea>
          <span class="text-xs absolute bottom-2 right-1"
            >{{ message.length }} / {{ maxMessageLength }}</span
          >
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="menuBtn px-6 py-2 m-4 rounded-lg text-white tracking-widest text-lg hover:opacity-90 duration-200 ease-in-out transition-all delay-100"
          >
            Envoyer
          </button>
        </div>
        <h2 class="text-center font-bold text-2xl my-10">Ou</h2>
        <div class="flex justify-between gap-6">
          <div
            class="flex flex-col items-center justify-center mt-8 w-40 hover:scale-105"
          >
            <a href="mailto:GrailleAndChill@food.be"
              ><img
                src="../Assets/Img/emaillogo.png"
                alt="emaillogo"
                class="h-20 w-20"
            /></a>
            <p class="text-md mt-4 text-test tracking-wider">
              <a href="mailto:GrailleAndChill@food.be"
                >GrailleAndChill@food.be</a
              >
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-8 w-40 hover:scale-105"
          >
            <a href="tel:+33711223344"
              ><img
                src="../Assets/Img/phone.png"
                alt="phonelogo"
                class="h-20 w-20"
            /></a>
            <p class="text-md mt-4 text-test tracking-wider">
              <a href="tel:+33711223344">0400/00-00-00</a>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-8 w-40 hover:scale-105"
          >
            <a href="https://www.facebook.com/"
              ><img
                src="../Assets/Img/facebooklogo.png"
                alt="facebooklogo"
                class="h-20 w-20"
            /></a>
            <p class="text-md mt-4 tracking-wider text-test">
              <a href="https://www.facebook.com/">GrailleAndChill</a>
            </p>
          </div>
        </div>
      </div>
    </form>
    <div class="flex flex-col justify-center items-center">
      <h2 class="font-bold text-xl my-16 tracking-widest">
        Travailler chez nous
      </h2>
      <p
        class="my-14 w-[500px] text-center text-test text-lg tracking-widest leading-10"
      >
        Vous pouvez envoyer votre candidature spontanée par e-mail ou bien venir
        déposer votre curriculum vitae ainsi que votre lettre de motivation en
        personne.
      </p>
    </div>

    <p v-if="messageError">{{ messageError }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      message: "",
      messageError: "",
      maxMessageLength: 250, // maximum length for the message
    };
  },

  computed: {
    // calculate the remaining characters in the message
    remainingChars() {
      return this.maxMessageLength - this.message.length;
    },
  },

  methods: {
    submitForm() {
      if (
        this.nom &&
        this.prenom &&
        this.telephone &&
        this.email &&
        this.message
      ) {
        const emailAdress = `mailto:GrailleAndChill@food.be?subject=Formulaire de contact&body=Nom: ${this.nom}%0D%0APrénom: ${this.prenom}%0D%0ANuméro de téléphone: ${this.telephone}%0D%0AEmail: ${this.email}%0D%0AMessage: ${this.message}`;
        window.location.href = emailAdress;
      } else {
        this.messageError =
          "Les champs ne sont pas tous remplis, il faut qu'ils le soient avant de pouvoir envoyer le formulaire.";
      }
    },
  },
};
</script>
<style></style>
