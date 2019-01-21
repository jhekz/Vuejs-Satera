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
                <h2 align="center">Satera Jontal Dalam Kosakata Sumbawa</h2>
                <p align="justify">
                   Menurut A. Hijaz HM. Satera Jontal dibawa oleh pedagang bugis dari makasar. Namun dalam perkembangannya, pengucapan dan logatnya mengalami perubahan sesuai dengan kegunaan dan wilayah masing-masing, sehingga ada satera jontal Ano Rawi untuk versi yang digunakan di wilayah Sumbawa bagian barat dan Satera Jontal versi Ano Siyop yang digunakan di wilayah Sumbawa bagian timur. Jadi, kedua versi satera jontal telah sesuai dengan bahasa masyarakat Sumbawa meskipun saat ini telah ditambahkan beberapa huruf dalam Satera Jontal untuk penyesuaiannya dengan zaman dan teknologi. Misalkan penambahan aksara "Za", "Tsa", "Dha" dll. dengan penambahan huruf tersebut maka akan memudahkan misalnya dalam membuat nama "Zubaidah" dalam bentuk satera jontal yang sebenarnya masyarakat sumbawa tetap menyebutnya "Subaidah". Oleh karena itu, pada materi ini kosakata-kosakata yang digunakan dalam pembelajaran satera jontal lebih lanjut akan menggunakan bahasa Sumbawa.
                </p>
                <p align="justify">Tekan tombol dibawah ini untuk menampilkan contoh kata dalam bahasa Sumbawa dan bentuknya dalam penulisan Satera Jontal.</p>
                <v-dialog v-model="dialogs3" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <v-btn slot="activator" color="teal darken-1" dark>Contoh Kata</v-btn>
                    <v-card>
                        <v-card-title class="headline">Contoh Kata</v-card-title>
                        <v-card-text>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead style="background-color: teal; text-align: center; color: white;">
                                        <tr>
                                            <th>No</th>
                                            <th>Latin</th>
                                            <th>Satera Jontal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="index in dataKon.slice(95, 100).reverse()" :key="`a${index._id}`">
                                            <td width="10%" align="center">{{index._id}}</td>
                                            <td width="40%" align="center">{{index.latin}}</td>
                                            <td width="50%" align="center" class="sattj">{{index.jontal}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                <p align="center" style="font-family:sumbawa;font-size:50pt;">{{dataR.jontal}}</p><br/>
                <div align="center"><b-form-input type="text" v-model="isi" class="col-md-1 pb-2" style="text-align: center;" :disabled="skor >= 15"></b-form-input></div><br/>
                <div align="center"><b-button @click="lanjut" size="sm" variant="warning" :disabled="skor >= 15">Lanjut</b-button></div><br/>
                <p align="center"> Poin Saya : {{skor}}</p>
              </div>
            </v-container>
            </v-card>
            <v-btn
            color="red"
            :disabled="skor < 15"
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
            <h3 align="center">Anda telah berhasil menulis kata dalam bahasa Sumbawa menggunakan font <i>Satera Jontal</i></h3>
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
const Aksara = 'http://localhost:3000/Konversis/'
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
    nilai: 500,
    nilai2: 1,
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
      if (this.isi === this.dataR.jontal) {
        alert('Benar')
        this.skor = this.skor + 1
        this.isi = ''
        var nn = Math.floor(Math.random() * (20 - 1 + 1)) + 1
        let asd = AksaraR + this.nilai + nn
        axios.get(asd).then(response => (this.dataR = response.data))
      } else {
        alert('Masih salah')
      }
    },
    explus: function () {
      if (this.infous.expr < 175) {
        const value = {
          expr: 175
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
.sattj{
    font-size: 20pt;
    font-family: samawa;
}
.sattj:hover{
    font-size: 20pt;
    font-family: arial;
    color: red;
}
</style>
