<template>
<div class="container-fluid mari">
<p align="left"><router-link to="/"><v-icon>home</v-icon></router-link></p>
<div class="row" style="margin-top:50px;">
<div class="col"></div>
<div class="col-5" align="left">
<b-card title="Satera-Jontal v1.0" img-src="https://yogaadiseptiyan.files.wordpress.com/2014/12/a1.jpg" img-alt="Image" img-top tag="article" style="max-width: 60rem;" class="mb-6">
<p class="card-text">
Aplikasi pembelajaran aksara <b><i style="color:blue;">Satera Jontal</i></b> online.
</p>
<b-button v-b-modal.modal-center variant="info">Info Pengembang</b-button>
<b-modal id="modal-center" centered title="My Info" hide-footer="true">
<b-media>
<b-img slot="aside" src="https://pp.userapi.com/c841426/v841426540/3ae1b/lhAUMsSk70A.jpg" blank-color="#ccc" width="100" height="120" alt="placeholder" />
<p align="justify">
<strong>Pujjar Ramadhan</strong><br/>
Mahasiswa jurusan teknik informatika STMIK Bumigora Mataram. Saat ini berfokus pada front-end programming dan UI/UX Designer pada Lumbung Inovasi.
</p>
</b-media>
<p><a href="https://www.facebook.com/jhekzNTF" target="_blank">@facebook</a> | <a href="https://www.instagram.com/jhekz.ntf/?hl=id" target="_blank">@Insatgram</a></p>
<p>Mail to : ramadhanfhujjar121@gmail.com</p>
<p>Whatsapp : +6281236009620</p>
</b-modal>
</b-card>
</div>
<div class="col"></div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.cyan{
background-color: #42A5F5;
color: white;
}
.cardo:hover{
box-shadow: 5px 5px 5px #42A5F5;
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
