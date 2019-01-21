<template>
<div class="mar">
<div class="mar">
<b-row>
<b-col cols="3">
<b-card bg-variant="dark" text-variant="white">
<b-container>
<b-card-body style="height:545px;">
<p class="card-text">
<h2 align="center">Menu</h2>
<hr/>
<ul class="nav flex-column">
<li class="nav-item">
<a class="nav-link menus"><router-link to="/login">Login</router-link></a>
</li>
<li class="nav-item">
<a class="nav-link menus"><router-link to="/bantuan">Bantuan</router-link></a>
</li>
<li class="nav-item">
<a class="nav-link menus"><router-link to="/tentang">Tentang</router-link></a>
</li>
</ul>
</b-card-body>
</b-container>
</b-card>
</b-col>
<b-col style="background-color:white;">
<b-container>
<v-jumbotron>
<v-container fill-height>
<v-layout align-center>
<v-flex>
<h3 class="display-3">Belajar Satera Jontal</h3>
<span class="subheading">
Aplikasi pembelajaran Satera Jontal Berbasis Web yang memungkinkan anda mengenal dan mempelajari Satera Jontal melalui pendekatan gamifikasi.
</span>
<v-divider class="my-3"></v-divider>
<div class="title mb-3">Gabung Sekarang, gratis!</div>
<v-btn
class="mx-0"
color="teal"
large
dark
to="/daftar"
>
Register
</v-btn>
</v-flex>
</v-layout>
</v-container>
</v-jumbotron>
</b-container>
</b-col>
</b-row>
</div>
</div>
</template>
<script>
export default {
  mounted () {
    this.load()
  },
  methods: {
    load: function () {
      localStorage.clear()
    }
  }
}
</script>
<style scoped>
.menus{
font-size: 20pt;
}
a{
color:white;
}
a:hover{
text-decoration: none;
font-weight: bold;
transition: 0.5s;
}
@keyframes move {
from {
left: -100%;
}
to {
left: 0%;
}
}
.mar{
animation: 1s move;
position: relative;
}
</style>
