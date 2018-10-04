<template>
<div class="container-fluid mari">
<p align="left"><router-link to="/"><v-icon>home</v-icon></router-link></p>
<div class="row" style="margin-top:50px;">
<div class="col"></div>
<div class="col-5" align="left">
<div class="card cardo">
<div class="card-header cyan">
<b>Daftar</b>
</div>
<div class="card-body">
<form>
<div class="form-group row">
<label for="staticEmail" class="col-sm-4 col-form-label">Nama</label>
<div class="col-sm-8">
<input type="text" class="form-control sm" v-model="form.nama">
</div>
</div>
<fieldset class="form-group">
<div class="row">
<legend class="col-form-label col-sm-4 pt-0">Status</legend>
<div class="col-sm-8">
<b-form-select v-model="form.status" :options="options" class="mb-3" size="small"/>
</div>
</div>
</fieldset>
<fieldset class="form-group">
<div class="row">
<legend class="col-form-label col-sm-4 pt-0">Kota</legend>
<div class="col-sm-8">
<b-form-select v-model="form.kota" :options="options2" class="mb-3" size="small"/>
</div>
</div>
</fieldset>
<div class="form-group row">
<label for="inputPassword" class="col-sm-4 col-form-label">Username</label>
<div class="col-sm-8">
<input type="text" class="form-control sm" placeholder="Username" v-model="form.username">
</div>
</div>
<div class="form-group row">
<label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
<div class="col-sm-8">
<input type="password" class="form-control sm" placeholder="Password" v-model="form.password">
</div>
</div>
<div class="form-group row">
<label for="inputPassword" class="col-sm-4 col-form-label">Email</label>
<div class="col-sm-8">
<input type="text" class="form-control sm" placeholder="contoh@email.com" v-model="form.email">
</div>
</div>
<button class="btn cyan" @click="cek">Daftar</button>
</form>
</div>
</div>
</div>
<div class="col"></div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      options: [{
        value: null,
        text: 'Pilih status pekerjaan anda'
      },
      {
        value: 'bekerja',
        text: 'Bekerja'
      },
      {
        value: 'mahasiswa',
        text: 'Mahasiswa'
      },
      {
        value: 'siswa',
        text: 'Siswa'
      },
      {
        value: 'lain',
        text: 'Lainnya'
      }
      ],
      options2: [{
        value: null,
        text: 'Pilih daerah asal'
      },
      {
        value: 'sumbawa',
        text: 'Sumbawa'
      },
      {
        value: 'luar',
        text: 'Selain Sumbawa'
      }
      ],
      form: {
        nama: '',
        username: '',
        status: null,
        kota: null,
        email: '',
        password: ''
      }
    }
  },
  methods: {
    cek: function () {
      console.log(this.form.nama)
      console.log(this.form.username)
      console.log(this.form.status)
      console.log(this.form.kota)
      console.log(this.form.email)
      console.log(this.form.password)
    }
  }
}
</script>
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
