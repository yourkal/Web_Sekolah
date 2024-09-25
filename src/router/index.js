import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JurusanView from '@/views/JurusanView.vue'
import RplView from '@/views/RplView.vue'
import OtkpView from '@/views/OtkpView.vue'
import PerhotelanView from '@/views/PerhotelanView.vue'
import TkroView from '@/views/TkroView.vue'
import ProfileView from '@/views/ProfileView.vue'
import InformasiView from '@/views/InformasiView.vue'
import InformasiDetailView from '@/views/InformasiDetailView.vue'
import PpdbView from '@/views/PpdbView.vue'
import EkstrakurikulerView from '@/views/EkstrakurikulerView.vue'
import OsisView from '@/views/OsisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

    // ROUTE UNTUK JURUSAN
    {
      path: '/jurusan',
      name: 'jurusan',
      component: JurusanView
    },
    {
      path: '/rpl',
      name: 'rpl',
      component: RplView
    },

    {
      path: '/otkp',
      name: 'otkp',
      component: OtkpView
    },

    {
      path: '/ph',
      name: 'ph',
      component: PerhotelanView
    },

    {
      path: '/tkro',
      name: 'tkro',
      component: TkroView
    },

    // Route Untuk Halaman Profile
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },

    // ROUTE HALAMAN INFORMASI
    {
      path: '/informasi',
      name: 'informasi',
      component: InformasiView
    },

    {
      path: '/informasi-detail',
      name: 'informasi-detail',
      component: InformasiDetailView
    },

    // ROUTE PPDB
    {
      path: '/ppdb',
      name: 'ppdb',
      component: PpdbView
    },

    // ROUTE HALAMAN EKSTRAKURIKULAR
    {
      path: '/eksrakulikuler',
      name: 'eksrakulikuler',
      component: EkstrakurikulerView
    },

    // ROUTE HALAMAN OSIS
    {
      path: '/osis',
      name: 'osis',
      component: OsisView
    }
  ]
})

export default router
