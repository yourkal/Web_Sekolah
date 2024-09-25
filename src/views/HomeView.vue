<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TheWelcome from "../components/TheWelcome.vue";
import router from "@/router";
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="top">
    <Header/>

    <main>
      <article>
        <!-- #HERO -->
        <section class="section hero" aria-label="hero" id="home">
          <div class="container-fluid p-0">
            <!-- Bagian Gambar dan Teks -->
            <div class="hero-section position-relative">
              <img src="@/assets/images/smk-negeri-1-cisarua.jpeg" class="img-fluid hero-image"
                alt="Gambar Latar Belakang" />
              <div class="overlay-text mt-5">
                <h1 class="main-text mt-5">SMK NEGERI 1 CISARUA</h1>
                <!-- <p class="sub-text">Jl. Kolonel Masturi No.300, RT.04/RW.14, Jambudipa, Kec. Cisarua, Kabupaten Bandung Barat, Jawa Barat 40551</p> -->
                <!-- <p class="price-match-text">SMK Unggulan yang Menghasilkan SDM Bermutu dan Berdaya Saing Tinggi.</p> -->
                <!-- <RouterLink class=" btn mb-5 btn-warning book-button" to="/order">ORDER NOW!</RouterLink> -->
              </div>
            </div>
          </div>
        </section>

        <!-- - #Jurusan-->
        <section class="section features" id="features" aria-label="features">
          <div class="container">
            <p class="section-subtitle">Jurusan Kami</p>

            <h2 class="h2 section-title">Jurusan Sekolah</h2>

            <ul class="features-list">
              <li class="features-item">
                <div class="features-card">
                  <div class="card-icon">
                    <i class="fas fa-code" aria-hidden="true"></i>
                  </div>

                  <h3 class="h3 card-title">RPL</h3>

                  <p class="card-text">Rekayasa Perangkat Lunak</p>
                </div>
              </li>

              <li class="features-item">
                <div class="features-card">
                  <div class="card-icon">
                    <i class="fas fa-archive" aria-hidden="true"></i> <!-- Icon arsip -->
                  </div>

                  <h3 class="h3 card-title">OTKP</h3>

                  <p class="card-text">Otomatisasi dan Tata Kelola Perkantoran</p>
                </div>
              </li>

              <li class="features-item">
                <div class="features-card">
                  <div class="card-icon">
                    <i class="fas fa-hotel" aria-hidden="true"></i> <!-- Icon hotel -->
                  </div>

                  <h3 class="h3 card-title">PH</h3>

                  <p class="card-text">Perhotelan</p>
                </div>
              </li>

              <li class="features-item">
                <div class="features-card">
                  <div class="card-icon">
                    <i class="fas fa-wrench" aria-hidden="true"></i> <!-- Icon mesin -->
                  </div>

                  <h3 class="h3 card-title">TKRO</h3>

                  <p class="card-text">Teknik Kendaraan Ringan Otomotif</p>
                </div>
              </li>
            </ul>
          </div>
        </section>


        <!-- Data siswa & Sarana Prasarana section -->
        <section class="us_section layout_padding" id="data-siswa-prasarana">
          <div class="container">
            <div class="heading_container">
              <h2>Data Siswa & Sarana Prasarana Sekolah</h2>
            </div>

            <div class="us_container">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="box">
                    <div class="img-box">
                      <i class="fas fa-user-graduate fa-3x"></i>
                    </div>
                    <div class="detail-box">
                      <h2>1,777</h2>
                      <p>Siswa</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="box">
                    <div class="img-box">
                      <i class="fas fa-chalkboard-teacher fa-3x"></i>
                    </div>
                    <div class="detail-box">
                      <h2>77</h2>
                      <p>Tenaga Didik</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="box">
                    <div class="img-box">
                      <i class="fas fa-desktop fa-3x"></i>
                    </div>
                    <div class="detail-box">
                      <h2>777</h2>
                      <p>Komputer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="box">
                    <div class="img-box">
                      <i class="fas fa-school fa-3x"></i>
                    </div>
                    <div class="detail-box">
                      <h2>70</h2>
                      <p>Kelas</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="box">
                    <div class="img-box">
                      <i class="fas fa-graduation-cap fa-3x"></i>
                    </div>
                    <div class="detail-box">
                      <h2>4</h2>
                      <p>Jurusan</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="box">
                    <div class="img-box">
                      <i class="fas fa-flask fa-3x"></i>
                    </div>
                    <div class="detail-box">
                      <h2>7</h2>
                      <p>Laboratorium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <!-- - #ABOUT 2-->
        <!-- <section class="section about-2" id="about-2" aria-label="about">
          <div class="container">
            <div class="about-content">
              <p class="section-subtitle">Cool & Amazing Design</p>

              <h2 class="h2 section-title">
                We Develop Amazing App For Startups
              </h2>

              <p class="section-text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit tellus, luc tus nec ullamcorper mattis, pulvinar dapibus
                leo. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                Ut elit tellus, luc tus nec ullam corper.
              </p>

              <p class="section-text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit tellus, luc tus nec ullamcorper mattis, pulvinar dapibus
                leo. Lorem ipsum dolor.
              </p>

              <a href="#" class="btn btn-secondary">Discover More</a>
            </div>

            <figure class="about-banner">
              <img src="@/assets/images/about-banner-2.png" width="1146" height="1226" loading="lazy" alt="about banner"
                class="w-100" />
            </figure>
          </div>
        </section> -->

        <!-- - #BLOG-->
        <section class="section blog" id="blog" aria-label="blog">
          <div class="container">
            <p class="section-subtitle">Informasi</p>

            <h2 class="h2 section-title">Informasi Seputar SMKN 1 Cisarua</h2>

            <ul class="blog-list">
              <li>
                <div class="blog-card">
                  <figure class="card-banner img-holder" style="--width: 768; --height: 558">
                    <img src="@/assets/images/blog-1.jpg" width="768" height="558" loading="lazy"
                      alt="Build A Full Web Chat App From Our Scratch" class="img-cover" />
                  </figure>

                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <i class="far fa-calendar-alt" aria-hidden="true"></i>
                        <time class="card-meta-text" datetime="2022-05-22">May 22,2022</time>
                      </li>

                      <li class="card-meta-item">
                        <i class="far fa-comments" aria-hidden="true"></i>
                        <p class="card-meta-text">2 Comment</p>
                      </li>
                    </ul>

                    <h3 class="h3">
                      <a href="/informasi-detail" class="card-title">Build A Full Web Chat App From Our Scratch</a>
                    </h3>

                    <a href="/informasi-detail" class="btn btn-outline">Read More</a>
                  </div>
                </div>
              </li>

              <li>
                <div class="blog-card">
                  <figure class="card-banner img-holder" style="--width: 768; --height: 558">
                    <img src="@/assets/images/blog-2.jpg" width="768" height="558" loading="lazy"
                      alt="Brush Strokes Energize Trees In Paintings" class="img-cover" />
                  </figure>

                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <i class="far fa-calendar-alt" aria-hidden="true"></i>
                        <time class="card-meta-text" datetime="2022-05-22">May 22,2022</time>
                      </li>

                      <li class="card-meta-item">
                        <i class="far fa-comments" aria-hidden="true"></i>
                        <p class="card-meta-text">2 Comment</p>
                      </li>
                    </ul>

                    <h3 class="h3">
                      <a href="#" class="card-title">Brush Strokes Energize Trees In Paintings</a>
                    </h3>

                    <a href="#" class="btn btn-outline">Read More</a>
                  </div>
                </div>
              </li>

              <li>
                <div class="blog-card">
                  <figure class="card-banner img-holder" style="--width: 768; --height: 558">
                    <img src="@/assets/images/blog-3.jpg" width="768" height="558" loading="lazy"
                      alt="Insights on How to Improve Your Teaching." class="img-cover" />
                  </figure>

                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <i class="far fa-calendar-alt" aria-hidden="true"></i>
                        <time class="card-meta-text" datetime="2022-05-22">May 22,2022</time>
                      </li>

                      <li class="card-meta-item">
                        <i class="far fa-comments" aria-hidden="true"></i>
                        <p class="card-meta-text">2 Comment</p>
                      </li>
                    </ul>

                    <h3 class="h3">
                      <a href="#" class="card-title">Insights on How to Improve Your Teaching.</a>
                    </h3>

                    <a href="#" class="btn btn-outline">Read More</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- - #HUBUNGI KAMI-->
        <!-- <a href="https://wa.me/6281220325302?text=Saya%20ingin%20konsul" target="_blank" class="btn-booking">
          <i class="fas fa-comments"></i> Hubungi Kami
        </a> -->

      </article>

      <Footer/>
    </main>
  </div>
</template>

<script>
export default {
  components: Header,
};
</script>

<style>
@import url(../assets/css/style.css);

/* Style for logo and text */
.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 40px;
  /* Adjust size as needed */
  height: auto;
  margin-right: 10px;
  /* Space between logo and text */
}
</style>
