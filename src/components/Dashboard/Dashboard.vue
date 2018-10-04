<template>
<div>
<vtb></vtb>
<vfoot></vfoot>
<v-content step="1" class="anim">
<v-container align-center>
<div class="card cardo">
<div class="card-header blug">
<b>Profil</b>
</div>
<div class="card-body tel">
<b-container class="bv-example-row">
<b-row>
<b-col align="left">
<form>
<div class="form-group row">
<label for="Nama" class="col-sm-3 col-form-label">Nama</label>
<div class="col-sm-9">
<h4 class="det">{{infos.nama}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Email" class="col-sm-3 col-form-label">Email</label>
<div class="col-sm-9">
<h4>{{infos.email}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Username</label>
<div class="col-sm-9">
<h4>{{infos.username}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Email" class="col-sm-3 col-form-label">Password</label>
<div class="col-sm-8">
<b-form-input id="input-default" type="password" value="12345" plaintext class="inp"></b-form-input>
</div>
<div class="col-sm-1">
<v-icon class="inp">create</v-icon>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Asal</label>
<div class="col-sm-9">
<h4 class="det">{{infos.kota[0]}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Status</label>
<div class="col-sm-9">
<h4 class="det">{{infos.status[0]}}</h4>
</div>
</div>
</form>
</b-col>
<b-col align="left">
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Level</label>
<div class="col-sm-9">
<h4>{{infos.level}} of 3</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Exp</label>
<div class="col-sm-9">
<h4>{{infos.exp}} of 300</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Materi terakhir</label>
<div class="col-sm-9">
<b-form-input id="input-default" type="text" value="Pengenalan" plaintext class="inp"></b-form-input>
</div>
</div>
</b-col>
</b-row>
</b-container>
</div>
</div>
</v-container>
</v-content>
</div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'
import axios from 'axios'
const alamat = 'http://localhost:3000/members/'

export default {
  name: 'Dashboard',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    form: {
      status: '',
      kota: '',
      level: '',
      exp: '',
      _id: '',
      nama: '',
      username: '',
      password: '',
      email: ''
    },
    infos: [],
    nilai: '5b8e3ae8e8d18816382c5438'
  }),
  mounted () {
    this.loadData()
  },
  methods: {
    loadData: function () {
      let asd = alamat + this.nilai
      axios.get(asd).then(response => (this.infos = response.data))
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
  color: #F0A3BE;
  animation-name: zoom;
  animation-duration: 0.5s;
}
.blug{
  background-color: teal;
  color: white;
}
@keyframes move {
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
}
.moves{
  position: relative;
  animation: 1s move;
}
.tel{
  background-color: #26A69A;
  color: white;
}
.inp{
  color:white;
  font-weight: bold;
}
.det{
  text-transform: capitalize;
}
</style>
