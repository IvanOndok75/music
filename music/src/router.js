import { createRouter, createWebHistory } from 'vue-router';
import MyHeader from './components/MyHeader.vue';
import MyMusic from './components/MyMusic.vue';
import MyFav from './components/MyFav.vue';

const routes = [
  {
    path: '/',
    component: MyHeader,
    children: [
      { path: '', component: MyMusic },
      { path: 'favorites', component: MyFav },
    ],
  },
  {
    path: '/admin',
    component: MyHeader,
    children: [
      { path: 'music', component: MyMusic },
      { path: 'favorites', component: MyFav },
    ],
  },
];
const router = createRouter({
  history: createWebHistory('/music/'),
  routes,
});



export default router;
