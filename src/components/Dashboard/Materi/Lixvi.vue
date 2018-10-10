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
    						<v-card class="mb-5 anim" color="teal lighten-1">
    							<v-container grid-list-xs,sm,md,lg,xl>
    								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    						<v-card	class="mb-5" color="teal lighten-1">
    							<v-container grid-list-xs,sm,md,lg,xl>
    								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    							</v-container>
    						</v-card>
    						<v-btn color="teal darken-5" @click="e1 = 3">
    							Lanjutkan
    						</v-btn>
    					</v-stepper-content>
    					<v-stepper-content step="3">
    						<v-card	class="mb-5" color="teal lighten-1"	height="200px">
    							<v-container grid-list-xs,sm,md,lg,xl>
    							</v-container>
    						</v-card>
    						<v-btn color="teal"	to="/dashboard/belajar">
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
// import router from '../../../router'
import Toolbar from './../Toolbar.vue'
import Footer from './../Footer.vue'
export default {
  name: 'Konversi',
  components: {
    'vtb': Toolbar,
    'vfoot': Footer
  },
  data: () => ({dialog: false, e1: 0})
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
