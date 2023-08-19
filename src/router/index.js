import { createRouter, createWebHistory } from "vue-router";
import PizzaHomePage from "../views/PizzaHomePage.vue";
import PizzaInfoView from "../views/PizzaInfoView.vue";
import OrderListView from "../views/OrderListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pizza",
      component: PizzaHomePage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pizza/:id",
      name: "pizzaId",
      component: PizzaInfoView,
    },
    {
      path: "/orders",
      name: "orders",
      component: OrderListView,
    },
  ],
});

export default router;
