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
                <h2 align="center">Pengenalan Tanda Baca</h2>
                <p align="justify">
                  Pengaruh Aksara Lontara dapat dilihat dari bentuk Satera Jontal itu sendiri. Kemudian pengaruh lainnya adalah cara eja dari Satera Jontal yang menggunakan Bahasa Makasar yaitu :
                </p>
                <b-container class="bv-example-row">
                  <b-row class="anim">
                    <b-col>
                      <v-img
                      src="./../../../static/img/lambang/sattan.jpg"
                      height="200"
                      contain
                      class="teal lighten-1"
                      ></v-img>
                    </b-col>
                </b-row>
                <ul>
                  <li style="font-size:12pt;">KU = <b style="font-family: samawa;">ku</b> dieja Ka Rawa Ku (Rawa artinya di bawah / mempunyai penanda vokal dibawah dan diucap KU)</li>
                  <li style="font-size:12pt;">KI = <b style="font-family: samawa;">ki</b> dieja Ka Rate Ki (Rate artinya di atas / mempunyai penanda vokal diatas dan diucap KI)</li>
                  <li style="font-size:12pt;">KO = <b style="font-family: samawa;">ko</b> dieja Ka Riolo Ko (Riolo artinya di depan / mempunyai penanda vokal diatas dan diucap KO)</li>
                  <li style="font-size:12pt;">KE = <b style="font-family: samawa;">ek</b> dieja Ka Riboko Ko (Riboko artinya di punggung / mempunyai penanda vokal didepan dan diucap KE)</li>
                  <li style="font-size:12pt;">K = <b style="font-family: samawa;">kx</b> ditempatkan di atas aksara untuk mematikan huruf vokal pada aksara tersebut</li>
                  <li style="font-size:12pt;">KATA-KATA = <b style="font-family: samawa;font-size:20pt;">ktZ</b> ditempatkan di akhir kata, digunakan untuk mengulang kata didepannya</li>
                </ul>
                <p style="text-align: justify;font-size: 10pt;color: yellow;">
                  <b>NOTE :</b> Dalam Satera Jontal tanda perulangan sebaiknya tidak digunakan, kecuali dalam hal-hal tertentu misalnya dalam menulis cepat dengan Satera Jontal dan dalam pengenalan akan Satera Jontal yang masih terdapat dalam dokumen, Buk dan Bumung pada masa lalu.
                </p>
                </b-container>

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
            <h3 align="center">Anda telah berhasil mengenal ke-empat tanda baca pada <i>Satera Jontal</i></h3>
            <p>Klik selesai untuk kembali ke menu belajar</p>
          </v-container>
          </v-card>

          <v-btn
          color="teal"
          @click="explus"
          to="/dashboard/belajar"
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
  name: 'Konversi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    e1: 0,
    akun: '',
    dialog: false,
    dataKon: [],
    infoku: [],
    form: {
      exp: ''
    },
    dataR: [],
    isi: '',
    nilai: 400,
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
      this.infous = JSON.parse(loggedIn)
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
        var nn = Math.floor(Math.random() * (25 - 1 + 1)) + 1
        let asd = AksaraR + this.nilai + nn
        axios.get(asd).then(response => (this.dataR = response.data))
      } else {
        alert('Masih salah')
      }
    },
    explus: function () {
      if (this.infous.expr < 60) {
        const value = {
          expr: 60
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
