<template>
<div class="mar">
<div class="container" style="text-align: center;">
<ul class="nav flex-column">
<li class="nav-item">
<a class="nav-link menus"><router-link to="/daftar">Daftar</router-link></a>
</li>
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
</div>
</div>
</template>
<style scoped>
.menus{
font-size: 20pt;
color:cyan;
}
a:hover{
text-decoration: none;
list-style-position: outside;
list-style-image: url(./../../static/img/icon/arrow.png);
font-size: 30pt;
font-weight: bold;
transition: 0.5s;
color:red;
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
margin-top: 150px;
animation: 1s move;
position: relative;
}
</style>
