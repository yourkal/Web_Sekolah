<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
    <Header/>
    <div class="content-wrapper">
      <div class="carousel-section">
        <div class="carousel-wrapper">
          <h1 class="carousel-title">PPDB SMKN 1 CISARUA 2025-2026</h1>
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
            <!-- Navigation buttons -->
            <button id="prevBtn" class="carousel-btn">Prev</button>
            <button id="nextBtn" class="carousel-btn">Next</button>
          </div>
          <h1 class="carousel-title" >
          <a href="https://ppdb.jabarprov.go.id/wilayah-ppdb/cadisdik/BANDUNG%20BARAT/info-pendaftar" >Klik Disini untuk Melihat PPDB</a>
        </h1>
        </div>
      </div>
  
      <!-- Recent Posts Section -->
      <div class="sidebar-wrapper">
        <div class="blogPost-side-menu">
          <div class="recent-post">
            <div class="sideBar-title">
              <h5 class="text-bold">
                <span class="side-icon">//</span>
                <span class="side-title-text">RECENT POST</span>
              </h5>
            </div>
            <ul>
              <li>
                <div class="blog-card">
                  <figure class="card-banner img-holder" style="--width: 768; --height: 558">
                    <img src="@/assets/images/blog-1.jpg" width="768" height="558" loading="lazy" alt="Build A Full Web Chat App From Our Scratch" class="img-cover" />
                  </figure>
                  <div class="card-content">
                    <ul class="card-meta-list">
                      <li class="card-meta-item"><i class="far fa-calendar-alt" aria-hidden="true"></i><time class="card-meta-text" datetime="2022-05-22">May 22,2022</time></li>
                      <li class="card-meta-item"><i class="far fa-comments" aria-hidden="true"></i><p class="card-meta-text">2 Comment</p></li>
                    </ul>
                    <h3 class="h3">
                      <a href="/informasi-detail" class="card-title">Build A Full Web Chat App From Our Scratch</a>
                    </h3>
                    <a href="/informasi-detail" class="btn btn-outline">Read More</a>
                  </div>
                </div>
              </li>
              <!-- Add more recent posts similarly -->
            </ul>
          </div>
        </div>
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
    text-align: center;
    position: relative;
    padding: 20px;
  }
  
  /* Style untuk teks judul */
  .carousel-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #3498db; /* Warna teks biru */
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 3px solid #3498db; /* Garis bawah dengan warna yang sama */
  }
  
  /* Ukuran dan style container carousel */
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 600px; /* Mengurangi ukuran maksimal container carousel */
    margin: auto;
    padding: 10px; /* Tambahkan padding */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Membuat bayangan untuk memperindah */
  }
  
  /* Style untuk slide dan item dalam carousel */
  .carousel-slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: 0 0 100%;
    box-sizing: border-box;
    padding: 10px; /* Membuat padding di sekitar gambar */
  }
  
  .carousel-item img {
    width: 80%; /* Ukuran gambar dikurangi */
    height: auto;
    border-radius: 10px;
    margin: 0 auto; /* Agar gambar tetap berada di tengah */
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
  
  /* Responsif untuk layar kecil */
  @media (max-width: 768px) {
    .carousel-item {
      flex: 0 0 100%; /* Pastikan setiap item mengambil 100% lebar container pada layar kecil */
    }
  
    .carousel-title {
      font-size: 2rem; /* Kurangi ukuran teks pada layar kecil */
    }
  
    .carousel-container {
      max-width: 100%; /* Pastikan lebar penuh pada layar kecil */
    }
  }

  .content-wrapper {
  display: flex; /* Use flexbox to align items horizontally */
  justify-content: space-between; /* Space between carousel and recent posts */
  margin-top: 10%;
}

.carousel-section {
  flex: 0 0 60%; /* Set width for carousel section */
}

.sidebar-wrapper {
  flex: 0 0 35%; /* Set width for sidebar section */
  padding-left: 20px; /* Optional: space between carousel and sidebar */
}

/* Existing styles for carousel and sidebar */
.carousel-wrapper {
  text-align: center;
  position: relative;
  padding: 20px;
}

/* Your existing styles for carousel-title, carousel-container, etc. remain unchanged */

.recent-post {
  margin-top: 20px; /* Space above recent posts */
}
  </style>
  