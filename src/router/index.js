import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import About from '../views/About.vue'
import NavBar from '../components/NavBar.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('nav-bar', NavBar)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
