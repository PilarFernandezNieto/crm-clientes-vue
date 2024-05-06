import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
      props: {
        titulo: "Listado de clientes",
      },
    },
    {
      path: "/agregar-cliente",
      name: "agregar-cliente",
      component: () => import("../views/NuevoClienteView.vue"),
      props: {
        titulo: "Nuevo cliente",
      },
    },
    {
      path: "/editar-cliente/:id",
      name: "editar-cliente",
      component: () => import("../views/EditarClienteView.vue"),
      props: {
        titulo: "Editar cliente",
      },
    },
  ],
});

export default router
