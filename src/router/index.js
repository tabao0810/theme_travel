import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog from '../views/Blog.vue'
import Rooms from '../views/Rooms.vue'
import RoomDetail from '../views/RoomDetail'
import Contact from '../views/Contact.vue'
import Auth from '../views/Auth.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
     path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
     path: '/rooms',
    name: 'Rooms',
    component: Rooms,
  },  
  {
     path: '/room-detail',
    name: 'RoomDetail',
    component: RoomDetail,
  },  
   {
     path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
     path: '/auth',
    name: 'Auth',
    component: Auth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current"
})

export default router
