import { createRouter, createWebHistory } from "vue-router";
import Homeview from "../views/homeview.vue";



const routes=[

    {
        path: '/',
        name: 'home',
        component: Homeview,
     
    },
  
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
