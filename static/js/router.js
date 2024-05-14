import { createApp } from 'vue';
import * as VueRouter from "vue-router";
import home from '/static/components/home.js';
import about from '/static/components/about.js';
import portfolio from '/static/components/portfolio.js';
import testimonials from '/static/components/testimonials.js';
import resume from '/static/components/resume.js';
import contact from '/static/components/contact.js';
import interests from '/static/components/interests.js';

const routes = [
  {path: '/', component: home, name: 'home', props: true},
  {path: '/about', component: about, name: 'about', props: true},
  {path: '/interests', component: interests, name: 'interests', props: true},
  {path: '/portfolio', component: portfolio, name: 'portfolio', props: true},
  {path: '/testimonials', component: testimonials, name: 'testimonials', props: true},
  {path: '/resume', component: resume, name: 'resume', props: true},
  {path: '/contact', component: contact, name: 'contact', props: true},
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

const app = createApp({
  el : '#app',
}).use(router).mount('#app');

export default router;