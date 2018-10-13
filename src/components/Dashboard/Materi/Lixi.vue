<template>
  <div>
    <vtb></vtb>
    <vfoot></vfoot>
    <v-content step="1" class="anim">
      <v-container align-center>
        <v-card
        class="mb-5 anim"
        color="teal"
        >
        <v-container align-center>
          <h2 align="center" style="color: white;">Pengenalan Satera Jontal</h2>
          <v-card color="teal lighten-1" dark>
            <div class="container">
              <p align="justify">{{dataR.isi}}</p><br/>
              <p align="justify">{{dataR.pertanyaan}}</p>
              <b-form-radio-group id="radios2" v-model="sel" name="radioSubComponent">
                <b-form-radio value="A">{{dataR.jwA}}</b-form-radio><br/>
                <b-form-radio value="B">{{dataR.jwB}}</b-form-radio><br/>
                <b-form-radio value="C">{{dataR.jwC}}</b-form-radio><br/>
                <b-form-radio value="D">{{dataR.jwD}}</b-form-radio>
              </b-form-radio-group>
              <!-- <p align="justify">{{pdata}}</p><br/> -->
              <v-btn color="teal darken-5" dark :disabled="nex === 1" @click="lanjut">Lanjutkan</v-btn>
            </div>
          </v-card>
        </v-container>
        <v-btn color="teal" :disabled="nex === 0" dark @click="explus">Selesai</v-btn>
      </v-card>
    </v-container>
  </v-content>
</div>
</template>
<script>
import Toolbar from './../Toolbar.vue'
import Footer from './../Footer.vue'
import axios from 'axios'
import router from '../../../router'
const Membs = 'http://localhost:3000/members/'
const belajarR = 'http://localhost:3000/belajars/'
const belajarS = 'http://localhost:3000/belajars'
export default {
  name: 'Lixi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    nilai: 0,
    akun: '',
    infoku: [],
    infous: [],
    sel: '',
    dialog: false,
    nex: 0,
    dataR: [],
    dataS: [],
    pdata: 1
  }),
  mounted () {
    this.readData()
    this.loadData()
  },
  methods: {
    loadData: function () {
      // let asw = Membs + this.akun
      // axios.get(asw).then(response => (this.infoku = response.data))
      // this.form = this.infoku
      axios.get(belajarS).then(response => (this.dataS = response.data))
      const loggedIn = localStorage.getItem('user')
      if (loggedIn === null) {
        router.replace('/login')
      } else {
        this.infous = JSON.parse(loggedIn)
      }
      this.akun = this.infous._id
    },
    readData: function () {
      let asd = belajarR + this.nilai
      axios.get(asd).then(response => (this.dataR = response.data))
      // this.pdata = this.dataR.length
    },
    lanjut: function () {
      if (this.sel === this.dataR.kunci) {
        alert('Jawaban Benar!')
        if (this.nilai >= this.dataS.length - 1) {
          this.nex = 1
        } else {
          this.nilai += 1
          // this.pdata += 1
          this.nex = 0
          this.sel = ''
          this.readData()
        }
      } else {
        alert('Jawaban Salah!')
        this.nilai = this.nilai
        this.pdata = this.pdata
        this.readData()
      }
    },
    explus: function () {
      if (this.infous.expr < 20) {
        const value = {
          expr: 20
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
