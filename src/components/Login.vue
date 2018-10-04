<template>
<div class="container-fluid mari">
<p align="left"><router-link to="/"><v-icon>home</v-icon></router-link></p>
<div class="row" style="margin-top:50px;">
<div class="col"></div>
<div class="col-5" align="left">
<div class="card cardo">
<div class="card-header cyan">
<b>Login</b>
</div>
<div class="card-body">
<b-form @submit.prevent="login">
<b-form-group label="E-mail" horizontal>
<b-form-input type="email" placeholder="contoh@mail.com"></b-form-input>
</b-form-group>
<b-form-group label="Password" horizontal>
<b-form-input type="password"></b-form-input>
</b-form-group>
<hr/>
<b-button type="submit" class="cyan">Masuk</b-button>
</b-form>
</div>
</div>
</div>
<div class="col"></div>
</div>
</div>
</template>
<style scoped>
.cyan{
background-color: #607D8B;
color: white;
}
.cardo:hover{
box-shadow: 5px 5px 5px #607D8B;
transition: 0.5s;
position: relative;
}
@keyframes move {
from {
left: -100%;
}
to {
left: 0%;
}
}
.mari {
position: relative;
animation: 1s move;
}
</style>
