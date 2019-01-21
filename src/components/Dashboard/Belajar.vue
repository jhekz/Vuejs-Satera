<template>
  <div id="">
    <vtb></vtb>
    <vfoot></vfoot>
    <v-content class="moves">
      <div class="container">
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-btn slot="activator" color="red" absolute fab bottom right dark>Info</v-btn>
          <v-card>
            <v-card-title class="headline">My Info</v-card-title>
            <v-card-text>
              <div class="form-group row">
                <label for="Usn" class="col-sm-3 col-form-label">Level</label>
                <div class="col-sm-9">
                  <div >{{infos.level}}</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="Usn" class="col-sm-3 col-form-label">exp</label>
                <div class="col-sm-9">
                  <div>{{infos.expr}}</div>
                </div>
              </div>
              <p>Selesaikan setiap materi dan test untuk menambah exp dan menaikkan level anda</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-tabs
        color="teal"
        dark
        slider-color="blue-grey lighten-5"
        fixed-tabs
        >
        <v-tab ripple>
          Level 1
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text class="tel">
              <b-container class="bv-example-row">
                <b-row class="anim">
                  <b-col>
                    <b-card bg-variant="light"
                    header-bg-variant="dark"
                    header-text-variant="white"
                    border-variant="dark"
                    header="Pengenalan Satera Jontal"
                    class="text-center">
                    <p class="card-text">
                      Require : Level 1 & Exp 0
                      <v-btn color="teal" small dark to="/learn/lixi">Mulai <v-icon>play_arrow</v-icon></v-btn>
                    </p>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card bg-variant="light"
                  header-bg-variant="dark"
                  header-text-variant="white"
                  border-variant="dark"
                  header="Pengenalan Lambang"
                  class="text-center">
                  <p class="card-text">
                    Require : Level 1 & Exp 20
                    <v-btn color="teal" small dark to="/learn/lixii" :disabled="infos.expr < 20">Mulai <v-icon>play_arrow</v-icon></v-btn>
                  </p>
                </b-card>
              </b-col>
              <b-col>
                <b-card bg-variant="light"
                header-bg-variant="dark"
                header-text-variant="white"
                border-variant="dark"
                header="Pengenalan Tanda Baca"
                class="text-center">
                <p class="card-text">
                  Require : Level 1 & Exp 40
                  <v-btn color="teal" to="/learn/lixiii" small dark :disabled="infos.expr < 40">Mulai <v-icon>play_arrow</v-icon></v-btn>
                </p>
              </b-card>
            </b-col>
          </b-row>
          <br/>
          <b-row class="anim">
            <b-col>
              <b-card bg-variant="light"
              header-bg-variant="dark"
              header-text-variant="white"
              border-variant="dark"
              header="Kaidah yang perlu diperhatikan"
              class="text-center">
              <p class="card-text">
                Require : Level 1 & Exp 60
                <v-btn color="teal" small dark to="/learn/lixiv" :disabled="infos.expr < 60">Mulai <v-icon>play_arrow</v-icon></v-btn>
              </p>
            </b-card>
          </b-col>
          <b-col>
            <b-card bg-variant="light"
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            header="Test"
            class="text-center">
            <p class="card-text">
              Require : Level 1 & Exp 80
              <v-btn color="teal" small dark :disabled="infos.expr < 80" to="/learn/lixv">Mulai <v-icon>play_arrow</v-icon></v-btn>
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </v-card-text>
</v-card>
</v-tab-item>
<v-tab ripple>
  Level 2
</v-tab>
<v-tab-item>
  <v-card flat>
    <v-card-text class="tel">
      <b-container class="bv-example-row">
        <b-row class="anim">
          <b-col>
            <b-card bg-variant="light"
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            header="Penggunaan Font"
            class="text-center">
            <p class="card-text">
              Require : Level 2 & Exp 100
              <v-btn color="teal" small dark :disabled="infos.expr < 100" to="/learn/lixvi">Mulai <v-icon>play_arrow</v-icon></v-btn>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card bg-variant="light"
          header-bg-variant="dark"
          header-text-variant="white"
          border-variant="dark"
          header="Penggunaan Papan Ketik"
          class="text-center">
          <p class="card-text">
            Require : Level 2 & Exp 125
            <v-btn color="teal" small dark :disabled="infos.expr < 125" to="/learn/lixvii">Mulai <v-icon>play_arrow</v-icon></v-btn>
          </p>
        </b-card>
      </b-col>
    </b-row>
    <br/>
    <b-row class="anim">
      <b-col>
        <b-card bg-variant="light"
        header-bg-variant="dark"
        header-text-variant="white"
        border-variant="dark"
        header="Satera Jontal Dalam Kosakata Sumbawa"
        class="text-center">
        <p class="card-text">
          Require : Level 2 & Exp 150
          <v-btn color="teal" small dark :disabled="infos.expr < 150" to="/learn/lixviii">Mulai <v-icon>play_arrow</v-icon></v-btn>
        </p>
      </b-card>
    </b-col>
    <b-col>
      <b-card bg-variant="light"
      header-bg-variant="dark"
      header-text-variant="white"
      border-variant="dark"
      header="Test 2"
      class="text-center">
      <p class="card-text">
        Require : Level 2 & Exp 175
        <v-btn color="teal" small dark :disabled="infos.expr < 175" to="/learn/lixix">Mulai <v-icon>play_arrow</v-icon></v-btn>
      </p>
    </b-card>
  </b-col>
</b-row>
</b-container>
</v-card-text>
</v-card>
</v-tab-item>
<v-tab ripple>
  Level 3
</v-tab>
<v-tab-item>
  <v-card flat>
    <v-card-text class="tel">
      <b-row class="anim">
        <b-col>
          <b-card bg-variant="light"
          header-bg-variant="dark"
          header-text-variant="white"
          border-variant="dark"
          header="Membaca Lawas"
          class="text-center">
          <p class="card-text">
            Require : Level 3 & Exp 200
            <v-btn color="teal" small dark :disabled="infos.expr < 200" to="/learn/lixx">Mulai <v-icon>play_arrow</v-icon></v-btn>
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="light"
        header-bg-variant="dark"
        header-text-variant="white"
        border-variant="dark"
        header="Menulis Lawas"
        class="text-center">
        <p class="card-text">
          Require : Level 3 & Exp 250
          <v-btn color="teal" small dark :disabled="infos.expr < 250" to="/learn/lixxi">Mulai <v-icon>play_arrow</v-icon></v-btn>
        </p>
      </b-card>
    </b-col>
    <b-col>
      <b-card bg-variant="light"
      header-bg-variant="dark"
      header-text-variant="white"
      border-variant="dark"
      header="Test 3"
      class="text-center">
      <p class="card-text">
        Require : Level 3 & Exp 300
        <v-btn color="teal" small dark :disabled="infos.expr < 300" to="/learn/lixxii">Mulai <v-icon>play_arrow</v-icon></v-btn>
      </p>
    </b-card>
  </b-col>
  </b-row>
    </v-card-text>
    </v-card>
  </v-tab-item>
</v-tabs>
</div>
</v-content>
</div>
</template>
<script>
import router from '../../router'
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'
// import axios from 'axios'
// const memberR = 'http://localhost:3000/members/'
export default {
  name: 'Dashboard',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    infos: [],
    nilai: '5b8e3ae8e8d18816382c5438',
    dialog: false
  }),
  mounted () {
    this.loadData()
  },
  methods: {
    loadData: function () {
      const loggedIn = localStorage.getItem('user')
      if (loggedIn === null) {
        router.replace('/login')
      } else {
        this.infos = JSON.parse(loggedIn)
      }
      // let asd = memberR + this.nilai
      // axios.get(asd).then(response => (this.infos = response.data))
    }
  }
}
</script>
<style scoped>
@keyframes move {
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
}
.moves{
  position: relative;
  animation: 1s move;
}
.tel{
  background-color: #26A69A;
}
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
  animation-duration: 1s;
}
</style>
