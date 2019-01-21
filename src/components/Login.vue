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
<b-form>
<b-form-group label="E-mail" horizontal>
<b-form-input type="email" placeholder="contoh@mail.com" v-model="email"></b-form-input>
</b-form-group>
<b-form-group label="Password" horizontal>
<b-form-input type="password" v-model="password"></b-form-input>
</b-form-group>
<hr/>
<b-button class="cyan" @click="login">Masuk</b-button>
</b-form>
</div>
</div>
</div>
<div class="col"></div>
</div>
</div>
</template>
<script>
import router from '../router'
import axios from 'axios'
const alamat = 'http://localhost:3000/login'
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    result: []
  }),
  mounted () {
    this.load()
  },
  methods: {
    load: function () {
      localStorage.clear()
    },
    login: function () {
      const value = {
        email: this.email,
        password: this.password
      }
      axios.post(alamat, value)
        // .then(response => (this.result = response.data))
        .then(function (response) {
          if (response.status === 200) {
            // this.result = response.data
            localStorage.setItem('user', JSON.stringify(response.data))
            router.replace('dashboard/dashboard')
            console.log(response.data)
          } else {
            console.log('Auth gagal')
          }
        })
        .catch(function (response) {
          console.log('Auth gagal')
          alert('email/password salah atau belum terdaftar')
        })
      console.log(this.result)
    }
  }
}
</script>
<style scoped>
.cyan {
  background-color: #607d8b;
  color: white;
}
.cardo:hover {
  box-shadow: 5px 5px 5px #607d8b;
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
