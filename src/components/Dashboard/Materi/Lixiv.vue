<template>
  <div>
    <vtb></vtb>
    <vfoot></vfoot>
    <v-content step="1" class="anim">
      <v-container align-center>
        <v-stepper v-model="e1" dark class="teal">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Materi</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Test</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Hasil</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
              class="mb-5 anim"
              color="teal lighten-1"
              >
              <v-container grid-list-xs,sm,md,lg,xl>
                <h2 align="center">Kaidah Penulisan Aksara Yang Harus Diperhatikan</h2>
                <p align="justify">
                  <ol>
                    <li>Titik untuk penanda aksara jangan sampai terlupakan sebab akan berubah menjadi aksara lain. Contoh:
                      <ul>
                        <li>Ga = <b style="font-family: samawa;">g</b> bila tanpa titik <b style="font-family: samawa;">p</b> dibaca Pa</li>
                        <li>Da = <b style="font-family: samawa;">d</b> bila tanpa titik <b style="font-family: samawa;">m</b> dibaca Ma</li>
                        <li>Na = <b style="font-family: samawa;">n</b> bila tanpa titik <b style="font-family: samawa;">t</b> dibaca Ta</li>
                        <li>A = <b style="font-family: samawa;">a</b> bila tanpa titik <b style="font-family: samawa;">w</b> dibaca Wa</li>
                      </ul>
                    </li>
                    <li>Kekan ( <b style="font-family: samawa;"> x </b> ) ditempatkan disudut kanan atas aksara.  </li>
                    <li>Titik untuk penanda bunyi vokal "i" dan "u" berada di atas dan di bawah aksara. Bila berada di dalam aksara akan berubah bunyi. Contoh:
                      <ul>
                        <li>Mi = <b style="font-family: samawa;">mi</b> bila titik di dalam aksara <b style="font-family: samawa;">d</b> dibaca Da</li>
                        <li>Tu = <b style="font-family: samawa;">tu</b> bila titik di dalam aksara <b style="font-family: samawa;">n</b> dibaca Na</li>
                        <li>Wu = <b style="font-family: samawa;">wu</b> bila titik di dalam aksara <b style="font-family: samawa;">a</b> dibaca A</li>
                      </ul>
                    </li>
                    <li>Penanda bunyi vokal "e" dan "o" tidak bersambung dengan aksasra dan tingginya setengah dari tinggi aksara, bila bersambung dan sama tingginya akan lain bacaannya. Contoh:
                      <ul>
                        <li>Po ditulis <b style="font-family: samawa;">po</b> bukan <b style="font-family: samawa;">w</b> sebab dibaca Wa</li>
                        <li>Me ditulis <b style="font-family: samawa;">em</b> bukan <b style="font-family: samawa;">p</b> sebab dibaca Pa</li>
                      </ul>
                    </li>
                  </ol>
                </p>
              </v-container>
            </v-card>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-btn slot="activator" color="teal darken-5" dark>Lanjutkan</v-btn>
              <v-card>
                <v-card-title class="headline">Yakin melanjutkan?</v-card-title>
                <v-card-text>Pastikan anda telah membaca materi dengan benar.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat @click.native="dialog = false">Batal</v-btn>
                  <v-btn color="green darken-1" flat @click="e1 = 2">Lanjutkan</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
            class="mb-5"
            color="teal lighten-1"
            >
            <v-container grid-list-xs,sm,md,lg,xl>
              <div>
                <p align="center">{{soal[in1].isi}}</p>
                <b-form-radio-group id="radios2" v-model="jawaban" name="radioSubComponent">
                  <b-row style="text-align:center;">
                    <b-col>
                      <b-form-radio value="a">
                        <label style="font-family:samawa; font-size:80pt;">{{soal[in1].a}}</label>
                      </b-form-radio>
                    </b-col>
                    <b-col>
                      <b-form-radio value="b">
                        <label style="font-family:samawa; font-size:80pt;">{{soal[in1].b}}</label>
                      </b-form-radio>
                    </b-col>
                  </b-row>
                </b-form-radio-group>
                <label>Selected :</label> {{jawaban}}
                <div align="center"><b-button @click="lanjut" size="sm" variant="warning" :disabled="in1 >= 9">Lanjut</b-button></div><br/>
              </div>
            </v-container>
            </v-card>
            <v-btn
            color="red"
            :disabled="in1 < 8"
            @click="e1 = 3"
            >
            Lanjutkan
          </v-btn>

        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
          class="mb-5"
          color="teal lighten-1"
          height="200px"
          >
          <v-container grid-list-xs,sm,md,lg,xl>
            <h1 align="center">Selamat !!!</h1>
            <hr/>
            <h3 align="center">Anda telah lebih teliti dalam membedakan aksara yang memiliki kesamaan</h3>
            <p>Klik selesai untuk kembali ke menu belajar</p>
          </v-container>
          </v-card>

          <v-btn
          color="teal"
          @click="explus"
          >
          Selesai
        </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</v-content>
</div>
</template>
<script>
import router from '../../../router'
import Toolbar from './../Toolbar.vue'
import Footer from './../Footer.vue'
import axios from 'axios'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Lixiv',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    e1: 0,
    akun: '',
    dialog: false,
    dataKon: '',
    infoku: [],
    in1: 0,
    jawaban: '',
    soal: [
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Da adalah..',
        a: 'd',
        b: 'm',
        benar: 'a'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Ta adalah..',
        a: 'n',
        b: 't',
        benar: 'b'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Pa adalah..',
        a: 'p',
        b: 'g',
        benar: 'a'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Wa adalah..',
        a: 'w',
        b: 'a',
        benar: 'a'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Mi adalah..',
        a: 'mi',
        b: 'd',
        benar: 'a'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Tu adalah..',
        a: 'n',
        b: 'tu',
        benar: 'b'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Wu adalah..',
        a: 'wu',
        b: 'a',
        benar: 'a'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Po adalah..',
        a: 'w',
        b: 'po',
        benar: 'b'
      },
      {
        isi: 'Dibawah ini yang merupakan lambang dari aksara Me adalah..',
        a: 'em',
        b: 'p',
        benar: 'a'
      }
    ],
    skor: 0
  }),
  mounted () {
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
    },
    lanjut: function () {
      if (this.jawaban === this.soal[this.in1].benar) {
        alert('Benar!')
        this.in1 += 1
        this.jawaban = ''
      } else {
        alert('Salah!')
      }
    },
    explus: function () {
      if (this.infous.expr < 80) {
        const value = {
          expr: 80
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
