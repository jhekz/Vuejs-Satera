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
          <h2 align="center">Pengenalan Satera Jontal</h2>
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
              <v-btn color="teal darken-5" dark :disabled="pdata >= 3" @click="lanjut">Lanjutkan</v-btn>
            </div>
          </v-card>
        </v-container>
        <v-btn color="teal" :disabled="pdata < 3" @click="explus" to="/dashboard/belajar">Selesai</v-btn>
      </v-card>
    </v-container>
  </v-content>
</div>
</template>
<script>
import Toolbar from './../Toolbar.vue'
import Footer from './../Footer.vue'
import axios from 'axios'
const belajarR = 'http://localhost:3000/belajars/'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Konversi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    nilai: 0,
    akun: '5b8e3ae8e8d18816382c5438',
    infoku: [],
    sel: '',
    dialog: false,
    nex: 0,
    dataR: [],
    pdata: 1
  }),
  mounted () {
    this.readData()
    this.loadData()
  },
  methods: {
    loadData: function () {
      let asw = Membs + this.akun
      axios.get(asw).then(response => (this.infoku = response.data))
      this.form = this.infoku
    },
    readData: function () {
      let asd = belajarR + this.nilai
      axios.get(asd).then(response => (this.dataR = response.data))
      // this.pdata = this.dataR.length
    },
    lanjut: function () {
      if (this.sel === this.dataR.kunci) {
        alert('Jawaban Benar!')
        this.nilai += 1
        this.pdata += 1
        this.sel = ''
        this.readData()
      } else {
        alert('Jawaban Salah!')
        this.nilai = this.nilai
        this.pdata = this.pdata
        this.readData()
      }
    },
    explus: function () {
      if (this.infoku.exp < 20) {
        const value = {
          exp: 20
        }
        axios({
          method: 'put',
          url: Membs + this.akun,
          data: value,
          config: { headers: {'Content-Type': 'application/json'} }
        }).then(function (response) {
          if (response.status === 200) {
            console.log('Update Success')
          }
        }).catch(function (response) {
          console.log(response)
        })
      } else {
        alert('Terimakasih telah mengulang kembali')
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
