import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Daftar from '@/components/Daftar'
import Login from '@/components/Login'
import Bantuan from '@/components/Bantuan'
import Tentang from '@/components/Tentang'
import Dashboard from '@/components/Dashboard/Dashboard'
import Belajar from '@/components/Dashboard/Belajar'
import Tulis from '@/components/Dashboard/Tulis'
import Konversi from '@/components/Dashboard/Konversi'
import Lixi from '@/components/Dashboard/Materi/Lixi'
import Lixii from '@/components/Dashboard/Materi/Lixii'
import Lixiii from '@/components/Dashboard/Materi/Lixiii'
import Lixiv from '@/components/Dashboard/Materi/Lixiv'
import Lixv from '@/components/Dashboard/Materi/Lixv'
import Lixvi from '@/components/Dashboard/Materi/Lixvi'
import Lixvii from '@/components/Dashboard/Materi/Lixvii'
import Lixviii from '@/components/Dashboard/Materi/Lixviii'
import Lixix from '@/components/Dashboard/Materi/Lixix'
import Lixx from '@/components/Dashboard/Materi/Lixx'
import Lixxi from '@/components/Dashboard/Materi/Lixxi'
import Lixxii from '@/components/Dashboard/Materi/Lixxii'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/daftar',
      name: 'Daftar',
      component: Daftar
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/bantuan',
      name: 'Bantuan',
      component: Bantuan
    },
    {
      path: '/tentang',
      name: 'Tentang',
      component: Tentang
    },
    {
      path: '/dashboard/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/belajar',
      name: 'Belajar',
      component: Belajar
    },
    {
      path: '/dashboard/tulis',
      name: 'Tulis',
      component: Tulis
    },
    {
      path: '/dashboard/konversi',
      name: 'Konversi',
      component: Konversi
    },
    {
      path: '/learn/lixi',
      name: 'Lixi',
      component: Lixi
    },
    {
      path: '/learn/lixii',
      name: 'Lixii',
      component: Lixii
    },
    {
      path: '/learn/lixiii',
      name: 'Lixiii',
      component: Lixiii
    },
    {
      path: '/learn/lixiv',
      name: 'Lixiv',
      component: Lixiv
    },
    {
      path: '/learn/lixv',
      name: 'Lixv',
      component: Lixv
    },
    {
      path: '/learn/lixvi',
      name: 'Lixvi',
      component: Lixvi
    },
    {
      path: '/learn/lixvii',
      name: 'Lixvii',
      component: Lixvii
    },
    {
      path: '/learn/lixviii',
      name: 'Lixviii',
      component: Lixviii
    },
    {
      path: '/learn/lixix',
      name: 'Lixix',
      component: Lixix
    },
    {
      path: '/learn/lixx',
      name: 'Lixx',
      component: Lixx
    },
    {
      path: '/learn/lixxi',
      name: 'Lixxi',
      component: Lixxi
    },
    {
      path: '/learn/lixxii',
      name: 'Lixxii',
      component: Lixxii
    }
  ]
})

export default router
