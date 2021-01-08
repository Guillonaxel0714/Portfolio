import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projets',
    name: 'Projets',
    // route level code-splitting
    // this generates a separate chunk (projets.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Projets" */ '../views/Projets.vue')
  },
  {
    path: '/experiences',
    name: 'Experiences',
    // route level code-splitting
    // this generates a separate chunk (experiences.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Experiences" */ '../views/Experiences.vue')
  },
  {
    path: '/formations',
    name: 'Formations',
    // route level code-splitting
    // this generates a separate chunk (formations.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Formations" */ '../views/Formations.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
