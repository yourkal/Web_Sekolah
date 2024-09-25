<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <body>
    
    <Header/>
    <div id="main-wrapper" class="clearfix">
    <!---HEADER START
                    ==================================-->
    <header id="header" class="main-header">

      <div class="header-text service" >
        <div class="container">
          <div class="header-title">
            <p class="text-white">Jurusan</p>
          </div>
          <div class="header-desc">
            <h1 class="text-white">KOMPETENSI KEAHLIAN</h1>
          </div>
          <hr class="center-hr" />
        </div>
      </div>
    </header>
    <!---EMD HEADER-->
    <!---CONTENT START==================================-->
    <div id="content" class="content-wrapper clearfix">
      <!---SERVICES LIST START==================================-->
      <section class="Services-list">
        <div class="container">
          <div class="row service-loop-wrap clearfix">
            <div class="column column-3 service-card-tablet">
              <div class="service-cards card">
                <div class="card-img-top img-zoom-wrapper">
                  <img class="service-card-img card-img" src="@/assets/images/services-card-img1.png"
                    alt="Business Consulting" />
                </div>
                <div class="card-body service-card-body">
                  <div class="service-card-title">
                    <router-link to="/rpl">
                      <h3 class="text-bold">Rekayasa Perangkat Lunak</h3>
                    </router-link>
                  </div>
                  <div class="service-card-desc">
                    <p>
                      We live in the world of data now; data allows us to make
                      realistic decisions about the future. No financial...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column column-3 service-card-tablet">
              <div class="service-cards card">
                <div class="card-img-top img-zoom-wrapper">
                  <img class="service-card-img card-img" src="@/assets/images/services-card-img2.png"
                    alt="Market Research" />
                </div>
                <div class="card-body service-card-body">
                  <div class="service-card-title">
                    <router-link to="/otkp">
                      <h3 class="text-bold">Otomatisasi dan Tata Kelola Perkantoran</h3>
                    </router-link>
                  </div>
                  <div class="service-card-desc">
                    <p>
                      We live in the world of data now; data allows us to make
                      realistic decisions about the future. No financial...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column column-3 service-card-tablet">
              <div class="service-cards card">
                <div class="card-img-top img-zoom-wrapper">
                  <img class="service-card-img card-img" src="@/assets/images/services-card-img3.png"
                    alt="Risk Management" />
                </div>
                <div class="card-body service-card-body">
                  <div class="service-card-title">
                    <router-link to="/ph">
                      <h3 class="text-bold">Perhotelan</h3>
                    </router-link>
                  </div>
                  <div class="service-card-desc">
                    <p>
                      We live in the world of data now; data allows us to make
                      realistic decisions about the future. No financial...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column column-3 service-card-tablet">
              <div class="service-cards card">
                <div class="card-img-top img-zoom-wrapper">
                  <img class="service-card-img card-img" src="@/assets/images/services-card-img4.png" alt="Bond & Commodities" />
                </div>
                <div class="card-body service-card-body">
                  <div class="service-card-title">
                    <router-link to="/tkro">
                      <h3 class="text-bold">Teknik Kendaraan Ringan Otomotif</h3>
                    </router-link>
                  </div>
                  <div class="service-card-desc">
                    <p>
                      We live in the world of data now; data allows us to make
                      realistic decisions about the future. No financial...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--END SERVICES LIST-->
    </div>
    <!--END CONTENT-->
  </div>
</body>
<Footer/>
</template>
  
  <script>
  export default {
    components: Header,
  }
  </script>
  
  <style >
  /* Tambahkan styling jika diperlukan */
  </style>
  