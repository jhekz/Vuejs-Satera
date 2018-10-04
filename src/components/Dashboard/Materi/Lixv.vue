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
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
              class="mb-5 anim"
              color="teal lighten-1"
              >
              <v-container grid-list-xs,sm,md,lg,xl>
                <p v-for="i in dataS" :key="`${i}`">
                  {{i.nomor}}. {{i.pertanyaan}}
                </p>
              </v-container>
            </v-card>
              <v-btn color="teal darken-5" dark @click="e1 = 2">Lanjutkan</v-btn>

          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
            class="mb-5"
            color="teal lighten-1"
            >
            <v-container grid-list-xs,sm,md,lg,xl>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-container>
          </v-card>
          <v-btn
          color="red"
          @click="e1 = 3"
          >
          Lanjutkan
        </v-btn>

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
import axios from 'axios'
const testR = 'http://localhost:3000/tests/'
const testS = 'http://localhost:3000/tests'
const Membs = 'http://localhost:3000/members/'
export default {
  name: 'Konversi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    nilai: 1,
    akun: '5b8e3ae8e8d18816382c5438',
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
      let asw = Membs + this.akun
      axios.get(asw).then(response => (this.infoku = response.data))
      axios.get(testS).then(response => (this.dataS = response.data))
    },
    readData: function () {
      let asd = testR + this.nilai
      axios.get(asd).then(response => (this.dataR = response.data))
      // this.pdata = this.dataR.length
    },
    explus: function () {
      if (this.infoku.exp < 100) {
        const value = {
          exp: 100
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
