<template>
<div>
<vtb></vtb>
<vfoot></vfoot>
<v-content step="1" class="anim">
<v-container align-center>
<v-stepper v-model="e1" dark class="teal">
<v-stepper-header>
<v-stepper-step :complete="e1 === 1" step="0">Intro</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step :complete="e1 === 2" step="1">Langkah 1</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step :complete="e1 === 3" step="2">Langkah 2</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step :complete="e1 === 4" step="3">Langkah 3</v-stepper-step>

</v-stepper-header>

<v-stepper-items>
<v-stepper-content step="0">
<v-card class="mb-5 anim" color="teal lighten-1">
<v-container grid-list-xs,sm,md,lg,xl>
<h2 align="center">Intro</h2>
<p align="justify"> Hingga tahun 2018, terdapat sedikitnya tiga jumlah font Satera Jontal yang telah dibuat ataupun dipublikasi, yaitu <a href="./../../../../static/file/fonts/samawa.otf" style="color: red;">Font Samawa</a> yang dibuat berdasarkan buku A. Hijaz HM dan Paper Asako Shiohara, <a href="./../../../../static/file/fonts/Sumbawa.otf" style="color: red;">Font Sumbawa</a> berdasarkan referensi yang sama dengan bergaya Sans Serif dan <a href="./../../../../static/file/fonts/SateraJontal.ttf" style="color: red;">Font Satera Jontal</a> yang dibuat oleh Amy Qudratul Ilham, seorang siswa (alumnus) SMK Negeri 2 Sumbawa Besar. Pada aplikasi pembelajaran ini, jenis font yang digunakan adalah font samawa berdasarkan buku A. Hijaz HM demikian juga dengan tutorial panduan penggunaannya.

Setelah memiliki font dari aksara-aksara tersebut, maka kita akan bisa menggunakannya dalam membuat sebuah dokumen seperti dalam Microsoft Word, dalam memanipulasi tulisan dari sebuah website, aplikasi mobile dll. </p>
<p>Unduh Font:</p>
<ul>
<li><a href="./../../../../static/file/fonts/samawa.otf" style="font-weight: bold;color: white;">Font Samawa</a></li>
<li><a href="./../../../../static/file/fonts/Sumbawa.otf" style="font-weight: bold;color: white;">Font Sumbawa</a></li>
<li><a href="./../../../../static/file/fonts/SateraJontal.ttf" style="font-weight: bold;color: white;">Font Satera Jontal</a></li>
</ul>
<p style="color: yellow;">Note : Materi ini merupakan bonus dan mendapat pengalaman(exp) sebesar 25 secara percuma.
Di materi ini hanya akan membahas cara instalasi font-font diatas kedalam Sistem Operasi Windows</p>
</v-container>
</v-card>
<v-btn color="teal darken-5" dark @click="e1 = 1">Lanjutkan</v-btn>
</v-stepper-content>
<v-stepper-content step="1">
<v-card class="mb-5" color="teal lighten-1">
<v-container grid-list-xs,sm,md,lg,xl>
<h3>Langkah 1</h3>
<p>Buka folder dimana font tersebut tersimpan.</p>
<v-img src="./../../../static/img/langkah/l1.PNG" height="200" contain class="teal lighten-1"></v-img>
</v-container>
</v-card>
<v-btn color="yellow darken-5" @click="e1 = 0">
Kembali
</v-btn>
<v-btn color="teal darken-5" @click="e1 = 2">
Lanjutkan
</v-btn>
</v-stepper-content>
<v-stepper-content step="2">
<v-card class="mb-5" color="teal lighten-1">
<v-container grid-list-xs,sm,md,lg,xl>
<h3>Langkah 2</h3>
<p>Klik kanan pada file font. Jika ingin melihat preview, maka klik 'Preview', jika ingin langsung menginstall maka klik 'Install'</p>
<v-img src="./../../../static/img/langkah/l2.png" height="200" contain class="teal lighten-1"></v-img>
</v-container>
</v-card>
<v-btn color="yellow darken-5" @click="e1 = 1">
Kembali
</v-btn>
<v-btn color="teal darken-5" @click="e1 = 3">
Lanjutkan
</v-btn>
</v-stepper-content>
<v-stepper-content step="3">
<v-card class="mb-5" color="teal lighten-1">
<v-container grid-list-xs,sm,md,lg,xl>
<h3>Langkah 3</h3>
<p>Jika font telah ter-install, buka salah satu <i>Text Editor</i> atau Aplikasi pengolah kata seperti <i>Microsoft Office Words</i> atau <i>WPS Office Writer</i> lalu aktifkan font yang telah ter-install tersebut.</p>
<v-img src="./../../../static/img/langkah/l4.png" height="200" contain class="teal lighten-1"></v-img>
<p style="color: yellow;">Note : Untuk pengguna Linux, buat folder dengan nama ".fonts" pada directory <i>Home</i> lalu salu letakkan file font di folder tersebut.</p>
</v-container>
</v-card>
<v-btn color="yellow darken-5" @click="e1 = 2">
Kembali
</v-btn>
<v-btn color="red" @click="explus">
Selesai
</v-btn>
</v-stepper-content>
</v-stepper-items>
</v-stepper>
</v-container>
</v-content>
</div>
</template>
<script>
// import router from '../../../router'
import router from '../../../router'
import axios from 'axios'
import Toolbar from './../Toolbar.vue'
import Footer from './../Footer.vue'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Lixvi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    dialog: false,
    e1: 0,
    infous: []
  }),
  mounted () {
    // this.readData()
    this.loadData()
  },
  methods: {
    loadData: function () {
      const loggedIn = localStorage.getItem('user')
      this.infous = JSON.parse(loggedIn)
      this.akun = this.infous._id
    },
    explus: function () {
      if (this.infous.expr < 125) {
        const value = {
          expr: 125
        }
        axios({
          method: 'put',
          url: Membs + this.akun,
          data: value,
          config: { headers: {'Content-Type': 'application/json'} }
        }).then(function (response) {
          if (response.status === 200) {
            console.log('Update Success')
            localStorage.setItem('user', JSON.stringify(response.data))
            router.replace('/dashboard/belajar')
          }
        }).catch(function (response) {
          console.log(response)
        })
      } else {
        alert('Terimakasih telah mengulang kembali')
        router.replace('/dashboard/belajar')
      }
    }
  }
}
</script>
<style scoped>
@keyframes zoom {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
.anim{
  position: relative;
  opacity: 1;
  animation-name: zoom;
  animation-duration: 0.5s;
}
</style>
