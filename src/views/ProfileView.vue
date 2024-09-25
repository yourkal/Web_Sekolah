<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template lang="">
  <Header />
  <div id="main-wrapper" class="clearfix">
    <!---HEADER START==================================-->
    <header id="header" class="main-header">
      <div class="header-text service">
        <div class="container">
          <div class="header-title">
            <p class="text-white">Profile</p>
          </div>
          <div class="header-desc">
            <h1 class="text-white">SMK Negeri 1 Cisarua</h1>
          </div>
          <hr class="center-hr" />
        </div>
      </div>
    </header>
    <!---EMD HEADER-->

    <!---CONTENT START
                    ==================================-->
    <div id="sambutan" class="content-wrapper clearfix">
      <!--ABOUT START-->
      <section class="About-us" id="sambutan">
         <!--- #ABOUT-->
         <section class="section about" id="about" aria-label="about">
          <div class="container">
            <figure class="about-banner">
              <img src="@/assets/images/hero-img-smk-2.png" width="1252" height="1347" loading="lazy" alt="about banner"
                class="w-100" />
            </figure>

            <div class="about-content">
              <p class="section-subtitle">
                Haikal Ahmad Ridho. S.Kom, S.Pd, S.Tr.Ak
              </p>

              <h2 class="h2 section-title">
                "Kami Berkomitmen Memberikan Yang Terbaik Untuk Siswa-Siswi
                Kami"
              </h2>

              <p class="section-text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit tellus, luc tus nec ullamcorper mattis, pulvinar dapibus
                leo. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                Ut elit tellus, luc tus nec ullam corpe
              </p>

              <ul class="about-list">
                <li class="about-item">
                  <div class="item-icon">
                    <i class="fas fa-folder" aria-hidden="true"></i>
                  </div>

                  <div>
                    <h3 class="h3 item-title">Sekolah Ramah Anak</h3>

                    <p class="item-text">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    </p>
                  </div>
                </li>

                <li class="about-item">
                  <div class="item-icon">
                    <i class="fas fa-chart-pie" aria-hidden="true"></i>
                  </div>

                  <div>
                    <h3 class="h3 item-title">Sekolah Ramah Lingkungan</h3>

                    <p class="item-text">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    </p>
                  </div>
                </li>
              </ul>

              <a href="#" class="btn btn-secondary">Selengkapnya..</a>
            </div>
          </div>
        </section>
      </section>

      <section class="About-us" id="visi-misi">
        <div class="vision-mission-section" id="visi-misi">
          <h1>Visi Misi SMKN 1 Cisarua</h1>

          <div class="vision">
            <h2>Visi</h2>
            <p>
              "Menjadi sekolah unggul yang menghasilkan lulusan beriman,
              bertaqwa, berprestasi, dan berdaya saing global."
            </p>
          </div>

          <div class="mission">
            <h2>Misi</h2>
            <ul>
              <li>
                Meningkatkan keimanan dan ketaqwaan melalui pendidikan agama.
              </li>
              <li>
                Meningkatkan kualitas pendidikan dengan kurikulum yang relevan.
              </li>
              <li>
                Memfasilitasi siswa untuk berprestasi di tingkat lokal,
                nasional, dan internasional.
              </li>
              <li>
                Menanamkan nilai-nilai kewirausahaan dan keterampilan hidup.
              </li>
              <li>
                Membangun budaya lingkungan yang bersih, sehat, dan hijau.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="facilities-section" id="fasilitas">
        <h1>Fasilitas Sekolah</h1>
        <div class="grid-container">
          <div class="grid-item large">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 1" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 2" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 3" />
          </div>
          <div class="grid-item tall">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 4" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 5" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 5" />
          </div>
          <div class="grid-item wide">
            <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" alt="Fasilitas 6" />
          </div>
        </div>
      </div>
      <!--END ABOUT-->
    </div>
    <!--CONTENT END-->
  </div>
  <Footer/>
</template>

<script>
export default {
  components: Header,
};
</script>

<style>
@import url("../assets/css/style.css");
</style>
