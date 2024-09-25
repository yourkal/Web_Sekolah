<template lang="">
    <div>
        <!-- - #HEADER-->
    <header class="header" data-header>
      <div class="container">
        <a href="#" class="logo">
          <img src="@/assets/images/LOGOSMK.png" alt="Logo" class="logo-img" />
          SMKN 1 CISARUA
        </a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list container">
            <li class="dropdown">
              <a href="/" class="navbar-link" data-nav-link>Beranda</a>
            </li>

            <li class="dropdown">
              <a href="/profile" class="navbar-link" data-nav-link>Profil</a>
              <ul class="dropdown-menu">
                <!-- <li><a href="#sambutan" class="navbar-link">Sambutan Kepala Sekolah</a></li>
                <li><a href="#visi-misi" class="navbar-link">Visi-Misi</a></li>
                <li><a href="#fasilitas" class="navbar-link">Fasilitas Sekolah</a></li> -->
                <li><a href="/eksrakulikuler" class="navbar-link">Eksrakulikuler</a></li>
                <li><a href="/osis" class="navbar-link">Osis</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <router-link to="/jurusan" class="navbar-link">Jurusan</router-link>
              <ul class="dropdown-menu">
                <router-link to="/rpl" class="navbar-link">RPL</router-link>
                <router-link to="/otkp" class="navbar-link">OTKP</router-link>
                <router-link to="/ph" class="navbar-link">PH</router-link>
                <router-link to="/tkro" class="navbar-link">TKRO</router-link>
              </ul>
            </li>


            <li class="dropdown">
              <a href="/informasi" class="navbar-link" data-nav-link>Informasi</a>
            </li>

            <li>
              <a href="/ppdb" class="navbar-link" data-nav-link>PPDB</a>
            </li>

            <li>
              <a href="#" class="btn btn-primary">Login</a>
            </li>
          </ul>
        </nav>

        <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <i class="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </header>
    </div>
</template>
<script>
export default {
    name : "Header",
    mounted() {
      import('@/assets/js-header/index.js'); // Memanggil file JS untuk header
    }
}
</script>
<style>
    @import url("../assets/css/style.css");
</style>