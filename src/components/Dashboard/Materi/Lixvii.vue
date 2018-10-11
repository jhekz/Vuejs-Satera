<template>
<div>
<vtb></vtb>
<vfoot></vfoot>
<v-content step="1" class="anim">
<v-container align-center>
<v-stepper v-model="e1" dark class="teal">
<v-stepper-header>
<v-stepper-step :complete="e1 > 1" step="1">Intro</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step :complete="e1 > 2" step="2">Test</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step step="3">Hasil</v-stepper-step>
</v-stepper-header>

<v-stepper-items>
<v-stepper-content step="1">
<v-card class="mb-5 anim" color="teal lighten-1">
<v-container grid-list-xs,sm,md,lg,xl>
<h2 align="center">Penggunaan Papan Ketik</h2>
<p align="justify"> Menurut A. Hijaz HM. Satera Jontal dibawa oleh pedagang bugis dari makasar. Namun dalam perkembangannya, pengucapan dan logatnya mengalami perubahan sesuai dengan kegunaan dan wilayah masing-masing, sehingga ada satera jontal Ano Rawi untuk versi yang digunakan di wilayah Sumbawa bagian barat dan Satera Jontal versi Ano Siyop yang digunakan di wilayah Sumbawa bagian timur. Jadi, kedua versi satera jontal telah sesuai dengan bahasa masyarakat Sumbawa meskipun saat ini telah ditambahkan beberapa huruf dalam Satera Jontal untuk penyesuaiannya dengan zaman dan teknologi. Misalkan penambahan aksara "Za", "Tsa", "Dha" dll. dengan penambahan huruf tersebut maka akan memudahkan misalnya dalam membuat nama "Zubaidah" dalam bentuk satera jontal yang sebenarnya masyarakat sumbawa tetap menyebutnya "Subaidah". Oleh karena itu, pada materi ini kosakata-kosakata yang digunakan dalam pembelajaran satera jontal lebih lanjut akan menggunakan bahasa Sumbawa.

Tekan tombol dibawah ini untuk menampilkan contoh kata dalam bahasa Sumbawa dan bentuknya dalam penulisan Satera Jontal. </p>
<hr/>
<b-row style="text-align:center;">
<b-col>
<v-dialog v-model="dialogs" fullscreen hide-overlay transition="dialog-bottom-transition">
<v-btn slot="activator" color="teal darken-1" dark>Aksara Induk</v-btn>
<v-card>
<v-card-title class="headline">Aksara Induk</v-card-title>
<v-card-text>
<div class="table-responsive">
<table class="table">
<thead class="thead-dark">
<tr><th>No</th><th>Latin</th><th>Satera Jontal</th><th>Tombol</th><th>Keterangan</th></tr>
</thead>
<tbody>
<tr v-for="aks in aksara" :key="`c${aks.no}`">
<td width="5%" align="center">{{aks.no}}</td>
<td width="15%" align="center">{{aks.latin}}</td>
<td width="15%" align="center" style="font-family: samawa;font-size:20pt;">{{aks.sat}}</td>
<td width="15%" align="center">{{aks.sat}}</td>
<td align="center">{{aks.ket}}</td>
</tr>
</tbody>
</table>
</div>
</v-card-text>
<v-card-actions>
<v-spacer></v-spacer>
<v-btn color="green darken-1" dark @click.native="dialogs = false">Close</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</b-col>
<b-col>
<v-dialog v-model="dialogs2" fullscreen hide-overlay transition="dialog-bottom-transition">
<v-btn slot="activator" color="teal darken-1" dark>Huruf Vocal</v-btn>
<v-card>
<v-card-title class="headline">Huruf Vocal</v-card-title>
<v-card-text>
<div class="table-responsive">
<table class="table">
<thead class="thead-dark">
<tr><th>No</th><th>Diakritik</th><th>Satera Jontal</th><th>Tombol</th><th>Keterangan</th></tr>
</thead>
<tbody>
<tr v-for="voc in vocal" :key="`b${voc.diak}`">
<td width="5%" align="center" colspan="5">{{voc.das}}</td>
<td width="15%" align="center" style="font-family: samawa;font-size:20pt;">{{voc.diak}}</td>
<td width="15%" align="center" style="font-family: samawa;font-size:20pt;">{{voc.out}}</td>
<td width="15%" align="center">{{voc.tom}}</td>
<td align="center">{{voc.ket}}</td>
</tr>
</tbody>
</table>
</div>
</v-card-text>
<v-card-actions>
<v-spacer></v-spacer>
<v-btn color="green darken-1" dark @click.native="dialogs2 = false">Close</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</b-col>
<b-col>
<v-dialog v-model="dialogs3" fullscreen hide-overlay transition="dialog-bottom-transition">
<v-btn slot="activator" color="teal darken-1" dark>Tanda Diakritik</v-btn>
<v-card>
<v-card-title class="headline">Tanda Diakritik</v-card-title>
<v-card-text>
<div class="table-responsive">
<table class="table">
<thead class="thead-dark">
<tr><th>No</th><th>Latin</th><th>Satera Jontal</th><th>Tombol</th><th>Keterangan</th></tr>
</thead>
<tbody>
<tr v-for="dia in diakritik" :key="`a${dia.no}`">
<td width="5%" align="center">{{dia.no}}</td>
<td width="15%" align="center">{{dia.latin}}</td>
<td width="15%" align="center" style="font-family: samawa;font-size:20pt;">{{dia.sat}}</td>
<td width="15%" align="center">{{dia.sat}}</td>
<td align="center">{{dia.ket}}</td>
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
</b-col>
</b-row>
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
<v-card class="mb-5" color="teal lighten-1">
<v-container grid-list-xs,sm,md,lg,xl>
<h2 align="center">Uji Tombol</h2>
<div>
<p align="center" style="font-family:sumbawa;font-size:50pt;">{{dataR.jontal}}</p><br/>
<div align="center"><b-form-input type="text" v-model="isi" class="col-md-1 pb-2" style="text-align: center;" :disabled="skor >= 15"></b-form-input></div><br/>
<div align="center"><b-button @click="lanjut" size="sm" variant="warning" :disabled="skor >= 15">Lanjut</b-button></div><br/>
<p align="center"> Poin Saya : {{skor}}</p>
</div>
</v-container>
</v-card>
<v-btn color="teal darken-5" @click="e1 = 3" :disabled="skor < 15">
Lanjutkan
</v-btn>
</v-stepper-content>
<v-stepper-content step="3">
<v-card class="mb-5" color="teal lighten-1" height="200px">
<v-container grid-list-xs,sm,md,lg,xl>
<h1 align="center">Selamat !!!</h1>
<hr/>
<h3 align="center"></h3>
<p>Anda telah berhasil mengenal keymap dari font satera jontal !</p>
</v-container>
</v-card>
<v-btn color="teal" @click="explus">
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
const AksaraR = 'http://localhost:3000/Konversis/'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Lixvii',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    dialog: false,
    dialogs: false,
    dialogs2: false,
    dialogs3: false,
    dataR: [],
    nilai: 100,
    nilai2: 1,
    infous: [],
    skor: 0,
    isi: '',
    e1: 0,
    aksara: [
      {no: 1, latin: 'ka', sat: 'k', tombol: 'k', ket: ''},
      {no: 2, latin: 'ga', sat: 'g', tombol: 'g', ket: ''},
      {no: 3, latin: 'nga', sat: 'N', tombol: 'g', ket: ''},
      {no: 4, latin: 'ca', sat: 'c', tombol: 'g', ket: ''},
      {no: 5, latin: 'ja', sat: 'j', tombol: 'g', ket: 'Untuk variasi lain, dapat menggunakan tombol J dan L'},
      {no: 6, latin: 'nya', sat: 'Y', tombol: 'g', ket: ''},
      {no: 7, latin: 'ta', sat: 't', tombol: 'g', ket: ''},
      {no: 8, latin: 'da', sat: 'd', tombol: 'g', ket: ''},
      {no: 9, latin: 'na', sat: 'n', tombol: 'g', ket: ''},
      {no: 10, latin: 'pa', sat: 'p', tombol: 'g', ket: ''},
      {no: 11, latin: 'ba', sat: 'b', tombol: 'g', ket: ''},
      {no: 12, latin: 'ma', sat: 'm', tombol: 'g', ket: ''},
      {no: 13, latin: 'ya', sat: 'y', tombol: 'g', ket: ''},
      {no: 14, latin: 'ra', sat: 'r', tombol: 'g', ket: 'Untuk variasi lain, dapat menggunakan tombol R'},
      {no: 15, latin: 'la', sat: 'l', tombol: 'g', ket: ''},
      {no: 16, latin: 'wa', sat: 'w', tombol: 'g', ket: ''},
      {no: 17, latin: 'sa', sat: 's', tombol: 'g', ket: ''},
      {no: 18, latin: 'a', sat: 'a', tombol: 'g', ket: 'Untuk variasi lain, dapat menggunakan tombol A dan H'},
      {no: 19, latin: 'ha', sat: 'h', tombol: 'g', ket: ''},
      {no: 20, latin: 'za', sat: 'z', tombol: 'g', ket: ''},
      {no: 21, latin: 'kha', sat: 'K', tombol: 'g', ket: ''},
      {no: 22, latin: 'sya', sat: 'S', tombol: 'g', ket: ''},
      {no: 23, latin: 'fa', sat: 'f', tombol: 'g', ket: ''},
      {no: 24, latin: 'qa', sat: 'q', tombol: 'g', ket: ''},
      {no: 25, latin: 'dha', sat: 'd', tombol: 'g', ket: ''}
    ],
    diakritik: [
      {no: 1, latin: 'i', sat: 'i', tombol: 'k', ket: 'Mengubah vokal menjadi “i” Diletakkan di atas aksara.'},
      {no: 2, latin: 'u', sat: 'u', tombol: 'g', ket: 'Mengubah vokal menjadi “u” Diletakkan di bawah aksara.'},
      {no: 3, latin: 'e', sat: 'e', tombol: 'g', ket: 'Mengubah vokal menjadi “e” Diletakkan di depan aksara.'},
      {no: 4, latin: 'o', sat: 'o', tombol: 'g', ket: 'Mengubah vokal menjadi “o” Diletakkan di belakang aksara'},
      {no: 5, latin: 'kekan (pemati vocal/virama)', sat: 'x', tombol: 'g', ket: 'Mematikan bunyi vokal Diletakkan di atas aksara. '},
      {no: 6, latin: 'tanda ulang', sat: 'Z', tombol: 'Z', ket: 'Menandakan suatu kata dibaca 2x Diletakkan di akhir kata.'}
    ],
    vocal: [
      {das: 'a', diak: '-', out: 'a', tom: 'a', ket: 'Huruf Vocal "A"'},
      {das: 'a', diak: 'i', out: 'ai', tom: 'ai', ket: 'Huruf Vocal "I"'},
      {das: 'a', diak: 'u', out: 'au', tom: 'au', ket: 'Huruf Vocal "U"'},
      {das: 'a', diak: 'e', out: 'ea', tom: 'ea', ket: 'Huruf Vocal "E"'},
      {das: 'a', diak: 'o', out: 'ao', tom: 'ao', ket: 'Huruf Vocal "O"'}
    ]
  }),
  mounted () {
    this.loadData()
    this.readData()
  },
  methods: {
    loadData: function () {
      // let asw = Membs + this.akun
      // axios.get(Aksara).then(response => (this.dataKon = response.data))
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
      if (this.isi === this.dataR.jontal) {
        alert('Benar')
        this.skor = this.skor + 1
        this.isi = ''
        var nn = Math.floor(Math.random() * (30 - 1 + 1)) + 1
        let asd = AksaraR + this.nilai + nn
        axios.get(asd).then(response => (this.dataR = response.data))
      } else {
        alert('Masih salah')
      }
    },
    explus: function () {
      if (this.infous.expr < 150) {
        const value = {
          expr: 150
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
