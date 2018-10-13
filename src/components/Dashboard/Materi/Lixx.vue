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
                <h2 align="center">Membaca Lawas</h2>
                <p align="justify"> Lawas adalah seni sastra Samawa, berupa untaian kata dengan ketentuan penggalan pada tiap barisnya. Lawas lebih mirip dengan puisi dan sajak, lawas menggunakan kata-kata yang bermakna konotasi luas, pemahaman dan penalarannya lebih membutuhkan ketelitian.
                Pada materi kali ini, pengguna akan memperlajari cara membaca lawas tersebut dengan cara melihat teks berbentuk satera jontal kemudian menuliskannya kedalam bentuk latin. Klik tombol dibawah untuk melihat contohnya. </p>
                <v-dialog v-model="dialogs3" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <v-btn slot="activator" color="teal darken-1" dark>Contoh Kata</v-btn>
                    <v-card>
                        <v-card-title class="headline">Contoh Kata</v-card-title>
                        <v-card-text>
                            <b-container class="bv-example-row">
                                <b-row class="text-center">
                                    <b-col>
                                        <v-textarea
                                        name="input-7-1"
                                        label="Satera Jontal"
                                        v-model="dataR.jontal"
                                        rows="7"
                                        readonly
                                        row-height="50"
                                        class="satt"
                                        ></v-textarea>
                                    </b-col>
                                    <b-col>
                                        <v-textarea
                                        name="input-7-1"
                                        label="Latin"
                                        v-model="dataR.latin"
                                        rows="7"
                                        readonly
                                        ></v-textarea>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" dark @click.native="dialogs3 = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
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
                <h4>Penting!</h4>
                <ul>
                <li>Harap gunakan huruf kapital pada tiap kata/huruf awal di setiap baris.</li>
                <li>Perhatikan ruang setiap baris</li>
                </ul>
                <b-row class="text-center">
                    <b-col>
                        <v-textarea
                        name="input-7-1"
                        label="Satera Jontal"
                        v-model="dataR.jontal"
                        rows="7"
                        readonly
                        style="font-family: samawa;font-size: 20pt;"
                        ></v-textarea>
                    </b-col>
                    <b-col>
                        <v-textarea
                        name="input-7-1"
                        label="Latin"
                        v-model="isi"
                        rows="7"
                        :disabled="skor >= 5"
                        ></v-textarea>
                    </b-col>
                </b-row>
                <br/>
                <div align="center"><b-button @click="lanjut" size="sm" variant="warning" :disabled="skor >= 5">Lanjut</b-button></div><br/>
                <p align="center"> Poin Saya : {{skor}}</p>
              </div>
            </v-container>
            </v-card>
            <v-btn
            color="red"
            :disabled="skor < 5"
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
            <h3 align="center">Anda telah berhasil membaca lawas dalam bentuk <i>Satera Jontal</i></h3>
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
const Aksara = 'http://localhost:3000/Konversis'
const AksaraR = 'http://localhost:3000/Konversis/'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Lixii',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    e1: 0,
    akun: '',
    dialog: false,
    dialogs3: false,
    dataKon: [],
    infoku: [],
    infous: [],
    form: {
      exp: ''
    },
    dataR: [],
    isi: '',
    nilai: 700,
    nilai2: 2,
    skor: 0
  }),
  mounted () {
    this.loadData()
    this.readData()
  },
  methods: {
    loadData: function () {
      // let asw = Membs + this.akun
      axios.get(Aksara).then(response => (this.dataKon = response.data))
      // axios.get(asw).then(response => (this.infoku = response.data))
      // this.form = this.infoku
      const loggedIn = localStorage.getItem('user')
      if (loggedIn === null) {
        router.replace('/login')
      } else {
        this.infous = JSON.parse(loggedIn)
      }
      this.akun = this.infous._id
    },
    readData: function () {
      let asd = AksaraR + this.nilai + this.nilai2
      axios.get(asd).then(response => (this.dataR = response.data))
    },
    lanjut: function () {
      if (this.isi === this.dataR.latin) {
        alert('Benar')
        this.skor = this.skor + 1
        this.isi = ''
        var nn = Math.floor(Math.random() * (5 - 1 + 1)) + 1
        let asd = AksaraR + this.nilai + nn
        axios.get(asd).then(response => (this.dataR = response.data))
      } else {
        console.log(this.dataR.latin)
        console.log('--------------')
        console.log(this.isi)
        alert('Masih salah')
      }
    },
    explus: function () {
      if (this.infous.expr < 250) {
        const value = {
          expr: 250
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
.satt{
    font-family: samawa;
    font-size: 20pt;
}
.satt:hover{
    font-family: arial;
    font-size: 12pt;
}
</style>
