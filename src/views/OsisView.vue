<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
    <Header/>
    <!---HEADER START==================================-->
    <header id="header" class="main-header">
      <div class="header-text service">
        <div class="container">
          <div class="header-title">
            <p class="text-white">Informasi</p>
          </div>
          <div class="header-desc">
            <h1 class="text-white">OSIS SMKN 1 CISARUA</h1>
          </div>
          <hr class="center-hr" />
        </div>
      </div>
    </header>
    <!---EMD HEADER-->
  
    <div class="carousel-wrapper">
      <!-- Teks di atas carousel -->
      <h1 class="carousel-title">OSIS SMKN 1 CISARUA</h1>
  
      <!-- Carousel -->
      <div class="carousel-container">
        <div class="carousel-slide">
          <div class="carousel-item">
            <img src="@/assets/images/about-banner.png" alt="Slide 1" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/about-banner.png" alt="Slide 2" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/about-banner.png" alt="Slide 3" />
          </div>
        </div>
  
        <!-- Tombol navigasi -->
        <button id="prevBtn" class="carousel-btn">Prev</button>
        <button id="nextBtn" class="carousel-btn">Next</button>
      </div>
  
      <!-- Informasi tentang Ekstrakurikuler -->
      <div class="ekstra-info">
        <h2>Organisasi Siswa Intra Sekolah </h2>
        <h4>Pembina: Anton</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A modi eaque dolore cupiditate, possimus repellendus
          aliquam veritatis, cum iste maxime enim praesentium est, laudantium pariatur in ipsum? Enim, quasi incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro molestiae vero quibusdam aspernatur?
          Nesciunt, quam eveniet, dolor sapiente blanditiis nisi quas saepe, architecto tempora atque itaque. Accusamus
          sed ea obcaecati necessitatibus aspernatur eos beatae aliquid eius autem provident repellat error, fugiat nihil
          et dicta consequuntur molestias quos?
        </p>
        <p>
          Cupiditate consequuntur veritatis dolore, unde ab eius, laborum beatae qui nihil impedit ratione placeat
          sapiente doloremque minima nobis, provident nesciunt? Accusantium rem laudantium enim obcaecati quaerat
          delectus consequatur adipisci soluta!
        </p>
  
        <h2>Prestasi</h2>
        <p>Juara 1</p>
      </div>
    </div>
  
    <Footer/>
  </template>
  
  <script>
  export default {
    mounted() {
      import('@/assets/js/script.js'); // Memanggil file JS untuk carousel
    }
  };
  </script>
  
  <style scoped>
  /* Style untuk wrapper carousel */
  .carousel-wrapper {
    margin-top: 10%;
    text-align: center;
    position: relative;
    padding: 20px;
  }
  
  /* Style untuk teks judul */
  .carousel-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 3px solid #2c3e50;
  }
  
  /* Ukuran dan style container carousel */
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .carousel-slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: 0 0 100%;
    box-sizing: border-box;
    padding: 10px;
  }
  
  .carousel-item img {
    width: 80%;
    height: auto;
    border-radius: 10px;
    margin: 0 auto;
  }
  
  /* Style untuk tombol prev dan next */
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
  }
  
  #prevBtn {
    left: 10px;
  }
  
  #nextBtn {
    right: 10px;
  }
  
  .carousel-btn:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  /* Style untuk bagian informasi */
  .ekstra-info {
    margin-top: 20px;
    text-align: left;
    padding: 0 20px;
  }
  
  .ekstra-info h2 {
    font-size: 3rem;
    color: #2c3e50;
    margin-bottom: 15px;
  }
  
  .ekstra-info h4 {
    font-size: 2.5rem;
    color: #7f8c8d;
    margin-bottom: 10px;
  }
  
  .ekstra-info p {
    font-size: 1.7rem;
    color: #34495e;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  /* Responsif untuk layar kecil */
  @media (max-width: 768px) {
    .carousel-title {
      font-size: 2rem;
    }
  
    .carousel-container {
      max-width: 100%;
    }
  
    .ekstra-info {
      padding: 0 10px;
    }
  }
  </style>
  