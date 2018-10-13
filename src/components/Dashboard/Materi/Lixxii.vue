m<template>
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
                <v-container grid-list-xs,sm,md,lg,xl v-if="dataR.kategori === 1">
                  <p align="justify">{{dataR.nomor}}. {{dataR.pertanyaan}}</p>
                  <b-form-radio-group id="radios2" v-model="pilih" name="radioSubComponent">
                    <b-row style="text-align:center;">
                      <b-col>
                        <b-form-radio value="A">
                          <label>{{dataR.jwA}}</label>
                        </b-form-radio>
                      </b-col>
                      <b-col>
                        <b-form-radio value="B">
                          <label>{{dataR.jwB}}</label>
                        </b-form-radio>
                      </b-col>
                      <b-col>
                        <b-form-radio value="C">
                          <label>{{dataR.jwC}}</label>
                        </b-form-radio>
                      </b-col>
                      <b-col>
                        <b-form-radio value="D">
                          <label>{{dataR.jwD}}</label>
                        </b-form-radio>
                      </b-col>
                    </b-row>
                  </b-form-radio-group>
                </v-container>
                <v-container grid-list-xs,sm,md,lg,xl v-else-if="dataR.kategori === 2">
                  <div align="center">
                    <textarea style="text-align: center;" v-model="dataR.judul" disabled rows="7" cols="30"></textarea>
                  </div>
                  <!-- <p align="center"></p> -->
                  <p align="justify">{{dataR.nomor}}. {{dataR.pertanyaan}}</p>
                  <b-form-radio-group id="radios2" v-model="pilih" name="radioSubComponent">
                    <b-row style="text-align:center;">
                      <b-col>
                        <b-form-radio value="A">
                          <textarea style="text-align: center;font-family:samawa;font-size:20pt;" v-model="dataR.jwA" disabled rows="5"  cols="25"></textarea>
                        </b-form-radio>
                      </b-col>
                      <b-col>
                        <b-form-radio value="B">
                          <textarea style="text-align: center;font-family:samawa;font-size:20pt;" v-model="dataR.jwB" disabled rows="5"  cols="25"></textarea>
                        </b-form-radio>
                      </b-col>
                      </b-row>
                      <b-row style="text-align:center;">
                      <b-col>
                        <b-form-radio value="C">
                          <textarea style="text-align: center;font-family:samawa;font-size:20pt;" v-model="dataR.jwC" disabled rows="5"  cols="25"></textarea>
                        </b-form-radio>
                      </b-col>
                      <b-col>
                        <b-form-radio value="D">
                          <textarea style="text-align: center;font-family:samawa;font-size:20pt;" v-model="dataR.jwD" disabled rows="5"  cols="25"></textarea>
                        </b-form-radio>
                      </b-col>
                    </b-row>
                  </b-form-radio-group>
                </v-container>
                <v-container grid-list-xs,sm,md,lg,xl v-else-if="dataR.kategori === 3">
                  <p align="center">{{dataR.pertanyaan}}</p>
                  <b-row>
                    <b-col>
                      <textarea style="text-align: center;font-family:samawa;font-size:20pt;" v-model="dataR.judul" disabled rows="7" cols="30"></textarea>
                    </b-col>
                    <b-col>
                      <v-textarea
                      box
                      label="Tulis Disini"
                      v-model="pilih" rows="9" cols="30"
                      ></v-textarea>
                    </b-col>
                  </b-row>
                </v-container>
                <v-container grid-list-xs,sm,md,lg,xl v-else-if="dataR.kategori === 4">
                  <p align="center">{{dataR.pertanyaan}}</p>
                  <b-row>
                    <b-col>
                      <textarea style="text-align: center;" v-model="dataR.judul" disabled rows="7" cols="30"></textarea>
                    </b-col>
                    <b-col>
                      <v-textarea
                      box
                      label="Tulis Disini"
                      v-model="pilih" rows="9" cols="30"
                      class="satt"
                      ></v-textarea>
                    </b-col>
                  </b-row>
                </v-container>
                <hr/>
                <p align="center"><v-btn color="lime darken-1" small @click="cekL" :disabled="nex === 1">Berikut</v-btn></p>
                <!-- <p align="center">Pilihan Saya: {{pilih}}</p> -->
                <!-- <p align="center">Jawaban Saya : {{jawaban}}</p> -->
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
// const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Lixv',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    nilai: 500,
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
        if (this.nilai2 >= 5) {
          this.nex = 1
        } else {
          this.nilai2 = this.nilai2 + 1
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
      alert('Selamat anda telah berhasil menyelesaikan semua materi pembelajaran')
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
.satt{
  font-family: samawa;
  font-size: 20pt;
  text-align: center;
}
</style>
