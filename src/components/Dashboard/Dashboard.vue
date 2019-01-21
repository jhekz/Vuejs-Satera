<template>
<div>
<vtb></vtb>
<vfoot></vfoot>
<v-content step="1" class="anim">
<v-container align-center>
<div class="card cardo">
<div class="card-header blug">
<b>Profil</b>
<!-- {{infous.email}} -->
<!-- <button @click="hapus">clear storage</button> -->
</div>
<div class="card-body tel">
<b-container class="bv-example-row">
<b-row>
<b-col align="left">
<form>
<div class="form-group row">
<label for="Nama" class="col-sm-3 col-form-label">Nama</label>
<div class="col-sm-9">
<h4 class="det">{{infous.nama}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Email" class="col-sm-3 col-form-label">Email</label>
<div class="col-sm-9">
<h4>{{infous.email}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Username</label>
<div class="col-sm-9">
<h4>{{infous.username}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Email" class="col-sm-3 col-form-label">Password</label>
<div class="col-sm-6">
<b-form-input id="input-default" type="password" value="12345" plaintext class="inp"></b-form-input>
</div>
<div class="col-sm-2">
<v-dialog v-model="dialog" width="500">
<v-btn slot="activator" flat dark><v-icon class="inp">create</v-icon></v-btn>
<v-card>
<v-card-title class="teal lighten-2" primary-title>
Ganti Password
</v-card-title>

<v-card-text>
<v-text-field type="password" v-model="lama" label="Password Lama" required></v-text-field>
<v-text-field type="password" v-model="baru" label="Password Baru" required></v-text-field>
<v-text-field type="password" v-model="konf" label="Konfirmasi Password" required></v-text-field>
</v-card-text>

<v-divider></v-divider>

<v-card-actions>
<v-spacer></v-spacer>
<v-btn color="red" flat @click="dialog = false">Batal</v-btn>
<v-btn color="teal" dark @click="gantiPass">Ubah</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Asal</label>
<div class="col-sm-9">
<h4 class="det">{{infous.kota}}</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Status</label>
<div class="col-sm-9">
<h4 class="det">{{infous.status}}</h4>
</div>
</div>
</form>
</b-col>
<b-col align="left">
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Level</label>
<div class="col-sm-9">
<h4>{{infous.level}} of 3</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Exp</label>
<div class="col-sm-9">
<h4>{{infous.expr}} of 300</h4>
</div>
</div>
<div class="form-group row">
<label for="Usn" class="col-sm-3 col-form-label">Materi terakhir</label>
<div class="col-sm-9">
<b-form-input id="input-default" type="text" v-model="mat" plaintext class="inp"></b-form-input>
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
import router from '../../router'
import axios from 'axios'
const alamat = 'http://localhost:3000/members/'

export default {
  name: 'Dashboard',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    infous: [],
    dialog: false,
    lama: '',
    baru: '',
    konf: '',
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
    mat: '',
    infos: []
  }),
  mounted () {
    this.loadData()
    this.matAkhir()
  },
  methods: {
    loadData: function () {
      const loggedIn = localStorage.getItem('user')
      if (loggedIn === null) {
        router.replace('/login')
      } else {
        this.infous = JSON.parse(loggedIn)
      }
      // alert(loggedIn.email)
      let asd = alamat + this.infous._id
      axios.get(asd).then(response => (this.infos = response.data))
    },
    gantiPass: function () {
      if (this.lama === '' || this.baru === '' || this.konf === '') {
        alert('Inputan belum lengkap')
      } else if (this.lama !== this.infos.password) {
        alert('Password lama salah')
      } else if (this.baru.length < 3 || this.konf < 3) {
        alert('Password minimal 3 karakter')
      } else if (this.baru !== this.konf) {
        alert('Konfirmasi Password tidak cocok')
      } else {
        const value = {
          password: this.baru
        }
        axios({
          method: 'put',
          url: alamat + this.infos._id,
          data: value,
          config: { headers: {'Content-Type': 'application/json'} }
        }).then(function (response) {
          if (response.status === 200) {
            alert('Ganti Password Berhasil!')
            localStorage.clear()
            router.replace('/login')
          }
        }).catch(function (response) {
          alert('Gagal!')
        })
      }
    },
    matAkhir: function () {
      if (this.infous.expr < 20) {
        this.mat = 'Pengenalan Satera Jontal'
      } else if (this.infous.expr < 40) {
        this.mat = 'Pengenalan Lambang'
      } else if (this.infous.expr < 60) {
        this.mat = 'Pengenalan Tanda Baca'
      } else if (this.infous.expr < 80) {
        this.mat = 'Kaidah yang perlu diperhatikan'
      } else if (this.infous.expr < 100) {
        this.mat = 'Test Level 1'
      } else if (this.infous.expr < 125) {
        this.mat = 'Penggunaa Font'
      } else if (this.infous.expr < 150) {
        this.mat = 'Penggunaan Papan Ketik'
      } else if (this.infous.expr < 175) {
        this.mat = 'Satera Jontal dalam kosakata Sumbawa'
      } else if (this.infous.expr < 200) {
        this.mat = 'Test Level 2'
      } else if (this.infous.expr < 250) {
        this.mat = 'Membaca Lawas'
      } else if (this.infous.expr < 300) {
        this.mat = 'Menulis Lawas'
      } else {
        this.mat = 'Test Level 3'
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
