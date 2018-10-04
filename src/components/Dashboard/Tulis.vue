<template>
  <div>
    <vtb></vtb>
    <vfoot></vfoot>
    <v-content step="1" class="moves">
      <v-container align-center>
        <div class="text-xs-center">
          <v-textarea
          label="Tulis"
          v-model="nilai"
          style="font-family:sumbawa;font-size:20pt;text-align:center;"
          ></v-textarea>
          <v-bottom-sheet v-model="sheet" hide-overlay inset class="hidden-md-and-down">
            <v-btn
            slot="activator"
            color="teal"
            dark
            block
            class="hidden-sm-and-down"
            >
            Tampil Keyboard
          </v-btn>

          <v-list  style="position:inherit;">
            <b-container class="bv-example-row">
              <b-row>
                <b-col v-for="i in 12" :key="`1${i}`">
                  <b-button class="tel sat" size="lg" @click="submit(i-1)">{{keybar1[i-1]}}</b-button>
                </b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col v-for="j in 12" :key="`2${j}`">
                  <b-button class="tel sat" size="lg" @click="submit1(j-1)">{{keybar2[j-1]}}</b-button>
                </b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col v-for="k in 12" :key="`3${k}`">
                  <b-button class="tel sat" size="lg" @click="submit2(k-1)">{{keybar3[k-1]}}</b-button>
                </b-col>
              </b-row>
              <hr/>
              <b-row>
                <b-col>
                  <b-button class="tel" size="md" @click="entering">Enter</b-button>
                </b-col>
                <b-col cols="8">
                  <b-button class="tel" size="lg" style="width:100%;" @click="spacing">Space</b-button>
                </b-col>
                <b-col>
                  <b-button class="tel" size="md" @click="backing">Backspace</b-button>
                </b-col>
              </b-row>
            </b-container>
          </v-list>
        </v-bottom-sheet>
      </div>
    </v-container>
  </v-content>
</div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'
export default {
  name: 'Konversi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({
    nilai: '',
    sheet: false,
    keybar1: [
      'k', 'g', 'N', 'c', 'j', 'J', 'L', 'Y', 't', 'd', 'n', 'p'
    ],
    keybar2: [
      'b', 'm', 'y', 'r', 'R', 'l', 'w', 's', 'a', 'A', 'H', 'h'
    ],
    keybar3: [
      'z', 'K', 'S', 'f', 'q', 'D', 'i', 'u', 'e', 'o', 'x', 'Z'
    ],
    keybar4: [
      'Backspace', 'Space', 'New Line'
    ]
  }),
  methods: {
    submit: function (e) {
      this.nilai = this.nilai + this.keybar1[e]
    },
    submit1: function (e) {
      this.nilai = this.nilai + this.keybar2[e]
    },
    submit2: function (e) {
      this.nilai = this.nilai + this.keybar3[e]
    },
    spacing: function (e) {
      this.nilai = this.nilai + ' '
    },
    entering: function (e) {
      this.nilai = this.nilai + '\n'
    },
    backing: function (e) {
      let pjg = this.nilai
      this.nilai = pjg.length ? pjg.substring(0, pjg.length - 1) : pjg
    }
  }
}
</script>
<style scoped>
.blug{
  background-color: teal;
  color: white;
}
@keyframes move {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0%;
  }
}
.sat{
  font-family: sumbawa;
  font-size: 15pt;
  width: 45px;
}
.sat:hover{
  box-shadow: 5px 5px 5px #607D8B;
  background-color: black;
}
.moves{
  position: relative;
  animation: 1s move;
}
.tel{
  background-color: #26A69A;
  color: white;
}
.inp{
  color:white;
  font-weight: bold;
}
</style>
