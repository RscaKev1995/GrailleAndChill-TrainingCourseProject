import { createRouter, createWebHistory } from "vue-router";
import ContactPage from "../components/ContactPage.vue";
import Home from "../components/Home.vue";
import Maestro from "../components/Payment&Livraison/Maestro.vue";
import MasterCard from "../components/Payment&Livraison/MasterCard.vue";
import Dishes from "../components/Menu/Dishes.vue";
import Payment from "../components/Payment&Livraison/Payment.vue";
import BillRecapDelivery from "../components/Payment&Livraison/BillRecapDelivery.vue";
import MaestroAndMasterCard from "../components/Payment&Livraison/MaestroAndMasterCard.vue";
import Cgv from "../components/Cgv.vue";
import CookiesAndConf from "../components/CookiesAndConf.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/menu",
    name: "menu",
    component: Dishes,
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment,
    props: true,
  },
  {
    path: "/payment/maestro",
    name: "maestro",
    component: Maestro,
    props: true,
  },
  {
    path: "/payment/mastercard",
    name: "mastercard",
    component: MasterCard,
    props: true,
  },
  {
    path: "/payment/bill",
    name: "bill",
    component: BillRecapDelivery,
    props: true,
  },
  {
    path: "/payment/finalbill",
    name: "finalbill",
    component: MaestroAndMasterCard,
    props: true,
  },
  {
    path: "/cgv",
    name: "cgv",
    component: Cgv,
  },
  {
    path: "/cookie",
    name: "cookie",
    component: CookiesAndConf,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
