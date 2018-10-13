<template>
<div>
<vtb></vtb>
<vfoot></vfoot>
<v-content step="1" class="moves">
<v-container align-center v-if="fal === false">
<v-textarea
label="Tulis disini"
autofocus
v-model="konv"
rows="7"
></v-textarea>
<v-btn block color="teal" dark @click="fal = true">Tukar</v-btn>
<v-textarea
v-model="konv"
style="font-family:sumbawa;font-size:20pt;"
readonly
rows="7"
></v-textarea>
</v-container>
<v-container align-center v-else-if="fal === true">
<v-textarea
label="Tulis disini"
autofocus
v-model="konv"
style="font-family:sumbawa;font-size:20pt;"
rows="7"
></v-textarea>
<v-btn block color="teal" dark @click="fal = false">Tukar</v-btn>
<v-textarea
v-model="konv"
readonly
rows="7"
></v-textarea>
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
    konv: '',
    fal: false
  })
}
</script>
<style scoped>
.blug{
  background-color: teal;
  color: white;
}
@keyframes move {
  from {
    top: -100%;
  }
  to {
    top: 0%;
  }
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
