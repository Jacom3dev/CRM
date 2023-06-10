import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from "../views/CustomersView.vue";
import NewCustomerView from "../views/NewCustomerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CustomersView,
      props: {
        title: 'Listado de clientes'
      }
    },
    {
      path: '/new-customer',
      name: 'newCustomer',
      component: NewCustomerView,
      props:{
        title: 'Nuevo cliente'
      }
    }
  ]
})

export default router
