<template>
  <div>
    <vtb></vtb>
    <vfoot></vfoot>
    <v-content step="1" class="anim">
      <v-container align-center>
        <v-stepper v-model="e1" dark class="teal">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Test</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Result</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
              class="mb-5 anim"
              color="teal lighten-1"
              >
              <v-container grid-list-xs,sm,md,lg,xl>
                <p>{{dataR.nomor}}. {{dataR.pertanyaan}}</p>
                <b-form-radio-group id="radios2" v-model="pilih" name="radioSubComponent">
                  <b-row style="text-align:center;">
                    <b-col>
                      <b-form-radio value="A">
                        <label style="font-family:samawa;font-size:25pt;" v-if="dataR.kategori === 2">{{dataR.jwA}}</label>
                        <label v-else-if="dataR.kategori === 1">{{dataR.jwA}}</label>
                      </b-form-radio>
                    </b-col>
                    <b-col>
                      <b-form-radio value="B">
                        <label style="font-family:samawa;font-size:25pt;" v-if="dataR.kategori === 2">{{dataR.jwA}}</label>
                        <label v-else-if="dataR.kategori === 1">{{dataR.jwB}}</label>
                      </b-form-radio>
                    </b-col>
                    <b-col>
                      <b-form-radio value="C">
                        <label style="font-family:samawa;font-size:25pt;" v-if="dataR.kategori === 2">{{dataR.jwC}}</label>
                        <label v-else-if="dataR.kategori === 1">{{dataR.jwC}}</label>
                      </b-form-radio>
                    </b-col>
                    <b-col>
                      <b-form-radio value="D">
                        <label style="font-family:samawa;font-size:25pt;" v-if="dataR.kategori === 2">{{dataR.jwD}}</label>
                        <label v-else-if="dataR.kategori === 1">{{dataR.jwD}}</label>
                      </b-form-radio>
                    </b-col>
                  </b-row>
                </b-form-radio-group>
                <hr/>
                <p align="center"><v-btn color="lime darken-1" small @click="cekL" :disabled="nex === 1">Berikut</v-btn></p>
                <p align="center">Pilihan Saya: {{pilih}}</p>
                <p align="center">Jawaban Saya : {{jawaban}}</p>
              </v-container>
            </v-card>
              <v-btn color="teal darken-5" dark @click="validasi" :disabled="nex === 0">Lanjutkan</v-btn>

          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
            class="mb-5"
            color="teal lighten-1"
            >
            <v-container grid-list-xs,sm,md,lg,xl>
              <h2>Hasil Test Level 2</h2>
              <p v-if="valid === 1">
                Selamat anda telah menjawab semua soal dengan benar!. Silahkan klik selesai untuk mempelajari materi selanjutnya!
              </p>
              <p v-else-if="valid === 0">
                Maaf, masih terdapat jawaban yang salah. Silahkan klik ulang
              </p>
            </v-container>
          </v-card>
          <v-btn color="red" @click="ulangi" v-if="valid === 0">Ulang</v-btn>
          <v-btn color="teal darken-5" @click="explus" v-else-if="valid === 1">Selesai</v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</v-content>
</div>
</template>
<script>
import Toolbar from './../Toolbar.vue'
import Footer from './../Footer.vue'
import router from '../../../router'
import axios from 'axios'
const testR = 'http://localhost:3000/tests/'
const testS = 'http://localhost:3000/tests'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Lixv',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    nilai: 100,
    nilai2: 1,
    akun: '',
    pilih: '',
    jawaban: [],
    valid: '',
    kunci: [],
    infoku: [],
    sel: '',
    e1: 0,
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
      const loggedIn = localStorage.getItem('user')
      if (loggedIn === null) {
        router.replace('/login')
      } else {
        this.infous = JSON.parse(loggedIn)
      }
      this.akun = this.infous._id
      axios.get(testS).then(response => (this.dataS = response.data))
    },
    readData: function () {
      let asd = testR + this.nilai + this.nilai2
      axios.get(asd).then(response => (this.dataR = response.data))
      // this.pdata = this.dataR.length
    },
    cekL: function () {
      if (this.pilih === '') {
        alert('Jawaban masih kosong!')
      } else {
        this.jawaban.push(this.pilih)
        this.kunci.push(this.dataR.kunci)
        if (this.nilai >= this.dataS.length) {
          this.nex = 1
        } else {
          this.nilai = this.nilai + 1
          this.readData()
          this.pilih = ''
        }
      }
    },
    ulangi: function () {
      this.jawaban = []
      this.nilai2 = 1
      this.kunci = []
      this.readData()
      this.nex = 0
      this.pilih = ''
      this.e1 = 1
    },
    validasi: function () {
      this.e1 = 2
      const x1 = this.jawaban.join()
      const x2 = this.kunci.join()
      console.log(this.jawaban.toString() + '----------------' + this.kunci.toString())
      if (x1 === x2) {
        this.valid = 1
        console.log('sama' + this.valid)
      } else {
        this.valid = 0
        console.log('beda' + this.valid)
      }
    },
    explus: function () {
      if (this.infous.expr < 200) {
        const value = {
          expr: 200,
          level: 3
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
