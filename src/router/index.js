import { createRouter, createWebHistory } from "vue-router";

import Homeview from "../views/homeview.vue";
import About from "../views/about.vue";
import Services from "../views/services.vue";
import Contact from "../views/contact.vue";
import Video from "../views/video.vue";
import Image from "../views/image.vue";
import east from "../views/east.vue";
import North from "../views/north.vue";
import South from "../views/south.vue";
import west from "../views/west.vue"
import kigali from "../views/kigali.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homeview
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/image',
    name: 'image',
    component: Image
  },
    {
    path: '/east',
    name: 'east',
    component: east
  },

  
  {
    path: '/north',
    name: 'north',
    component: North
  },
  {
    path: '/south',
    name: 'south',
    component: South
  },
  {
    path: '/west',
    name: 'west',
    component: west
  },
  {
    path: '/kigali',
    name: 'kigali',
    component: kigali
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;