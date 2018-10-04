<template>
<div class="container-fluid mari">
<p align="left"><router-link to="/"><v-icon>home</v-icon></router-link></p>
<div class="row" style="margin-top:50px;">
<div class="col"></div>
<div class="col-10" align="left">
<b-table striped hover :items="items" responsive="true" :fields="field" align="justify"></b-table>
</div>
<div class="col"></div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      field: ['no', 'menu', 'deskripsi'],
      items: [{
        no: 1,
        menu: 'Daftar',
        deskripsi: 'Dibutuhkan oleh pengguna baru untuk dapat mengakses fitur belajar, menulis dan mengkonversi aksara. Isi kolom pendaftaran dengan data diri secara benar.'
      },
      {
        no: 2,
        menu: 'Masuk',
        deskripsi: 'Dibutuhkan oleh pengguna yang telah melakukan registrasi sebelumnya untuk dapat mengakses kembali aplikasi dengan data-data yang telah tersimpan. Gunakan Email dan Password untuk masuk ke aplikasi. '
      },
      {
        no: 3,
        menu: 'Bantuan',
        deskripsi: 'Dibutuhkan untuk melihat dan mengetahui fungsi dari setiap menu.'
      },
      {
        no: 4,
        menu: 'Tentang',
        deskripsi: 'Informasi mengenai aplikasi dan profil pemilik'
      },
      {
        no: 5,
        menu: 'Profil',
        deskripsi: 'Informasi mengenai data pribadi dan akun dari pengguna'
      },
      {
        no: 6,
        menu: 'Belajar',
        deskripsi: 'Menu yang digunakan untuk memulai proses belajar. Terdapat level dan experience yang dimana keduanya befungsi sebagai penanda materi yang dipelajari.'
      },
      {
        no: 7,
        menu: 'Tulis',
        deskripsi: 'Menu yang digunakan untuk menulis menggunakan aksara Satera Jontal menggunakan papan ketik fisik maupun virtual.'
      },
      {
        no: 8,
        menu: 'Konversi',
        deskripsi: 'Menu yang digunakan untuk mengkonversi huruf, kata, kalimat maupun paragraf dari bentuk latin ke bentuk aksara Satera Jontal, begitupula sebaliknya.'
      },
      {
        no: 9,
        menu: 'Keluar',
        deskripsi: 'Menuju ke halaman awal dan mematikan sesi login'
      }
      ]
    }
  }
}
</script>
<style scoped>
.cyan{
background-color: #42A5F5;
color: white;
}
.cardo:hover{
box-shadow: 5px 5px 5px #42A5F5;
transition: 0.5s;
position: relative;
}
@keyframes move {
from {
left: -100%;
}
to {
left: 0%;
}
}
.mari {
position: relative;
animation: 1s move;
}
</style>
