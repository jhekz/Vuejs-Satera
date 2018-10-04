<template>
<div id="">
<v-navigation-drawer
v-model="drawer"
fixed
app
dark
clipped
class="teal lighten-1"
>
<v-list dense>
<router-link to="/dashboard/dashboard" style="color:white;text-decoration:none;">
<v-list-tile @click="as">
<v-list-tile-action>
<v-icon>person</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>Profil</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</router-link>
<router-link to="/dashboard/belajar" style="color:white;text-decoration:none;">
<v-list-tile @click="as">
<v-list-tile-action>
<v-icon>school</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>Belajar</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</router-link>
<router-link to="/dashboard/tulis" style="color:white;text-decoration:none;">
<v-list-tile @click="as">
<v-list-tile-action>
<v-icon>keyboard</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>Tulis</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</router-link>
<router-link to="/dashboard/konversi" style="color:white;text-decoration:none;">
<v-list-tile @click="as">
<v-list-tile-action>
<v-icon>swap_horiz</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>Konversi</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</router-link>
</v-list>
</v-navigation-drawer>
<v-toolbar color="teal" dark fixed app clipped-left>
<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
<v-toolbar-title>Satera Jontal</v-toolbar-title>
<v-spacer></v-spacer>
<v-toolbar-items>
<v-btn flat>
<v-icon>settings_power</v-icon>
<b>Keluar</b>
</v-btn>
</v-toolbar-items>
</v-toolbar>
</div>
</template>
<script>
var a = 1
export default {
  name: '',
  data () {
    return {
      dialog: false,
      drawer: null
    }
  },
  methods: {
    as: function () {
      a = a + 1
    }
  }
}
</script>
<style scoped>
</style>
