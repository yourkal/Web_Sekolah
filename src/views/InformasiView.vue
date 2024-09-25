<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template lang="">
  <body>
    <Header />
    <!---HEADER START==================================-->
    <header id="header" class="main-header">
      <div class="header-text service">
        <div class="container">
          <div class="header-title">
            <p class="text-white">Informasi</p>
          </div>
          <div class="header-desc">
            <h1 class="text-white">Informasi Sekolah</h1>
          </div>
          <hr class="center-hr" />
        </div>
      </div>
    </header>
    <!---EMD HEADER-->
    <!---MAIN WRAPPER START ==================================-->
    <div id="main-wrapper" class="clearfix">
      <!---CONTENT START
                    ==================================-->
      <div id="content" class="content-wrapper clearfix">
        <!---BLOGS START
                                    ==================================-->
        <section class="Blogs">
          <div class="container">
            <div class="row clearfix">
              <div class="column column">
                <div class="row blog-loop-wrapper">
                  <ul class="blog-list">
                    <li>
                      <div class="blog-card">
                        <figure
                          class="card-banner img-holder"
                          style="--width: 768; --height: 558"
                        >
                          <img
                            src="@/assets/images/blog-1.jpg"
                            width="768"
                            height="558"
                            loading="lazy"
                            alt="Build A Full Web Chat App From Our Scratch"
                            class="img-cover"
                          />
                        </figure>

                        <div class="card-content">
                          <ul class="card-meta-list">
                            <li class="card-meta-item">
                              <i
                                class="far fa-calendar-alt"
                                aria-hidden="true"
                              ></i>
                              <time class="card-meta-text" datetime="2022-05-22"
                                >May 22,2022</time
                              >
                            </li>

                            <li class="card-meta-item">
                              <i class="far fa-comments" aria-hidden="true"></i>
                              <p class="card-meta-text">2 Comment</p>
                            </li>
                          </ul>

                          <h3 class="h3">
                            <a href="/informasi-detail" class="card-title"
                              >Build A Full Web Chat App From Our Scratch</a
                            >
                          </h3>

                          <a href="/informasi-detail" class="btn btn-outline"
                            >Read More</a
                          >
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="blog-card">
                        <figure
                          class="card-banner img-holder"
                          style="--width: 768; --height: 558"
                        >
                          <img
                            src="@/assets/images/blog-2.jpg"
                            width="768"
                            height="558"
                            loading="lazy"
                            alt="Brush Strokes Energize Trees In Paintings"
                            class="img-cover"
                          />
                        </figure>

                        <div class="card-content">
                          <ul class="card-meta-list">
                            <li class="card-meta-item">
                              <i
                                class="far fa-calendar-alt"
                                aria-hidden="true"
                              ></i>
                              <time class="card-meta-text" datetime="2022-05-22"
                                >May 22,2022</time
                              >
                            </li>

                            <li class="card-meta-item">
                              <i class="far fa-comments" aria-hidden="true"></i>
                              <p class="card-meta-text">2 Comment</p>
                            </li>
                          </ul>

                          <h3 class="h3">
                            <a href="/informasi-detail" class="card-title"
                              >Brush Strokes Energize Trees In Paintings</a
                            >
                          </h3>

                          <a href="/informasi-detail" class="btn btn-outline">Read More</a>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="blog-card">
                        <figure
                          class="card-banner img-holder"
                          style="--width: 768; --height: 558"
                        >
                          <img
                            src="@/assets/images/blog-3.jpg"
                            width="768"
                            height="558"
                            loading="lazy"
                            alt="Insights on How to Improve Your Teaching."
                            class="img-cover"
                          />
                        </figure>

                        <div class="card-content">
                          <ul class="card-meta-list">
                            <li class="card-meta-item">
                              <i
                                class="far fa-calendar-alt"
                                aria-hidden="true"
                              ></i>
                              <time class="card-meta-text" datetime="2022-05-22"
                                >May 22,2022</time
                              >
                            </li>

                            <li class="card-meta-item">
                              <i class="far fa-comments" aria-hidden="true"></i>
                              <p class="card-meta-text">2 Comment</p>
                            </li>
                          </ul>

                          <h3 class="h3">
                            <a href="/informasi-detail" class="card-title"
                              >Insights on How to Improve Your Teaching.</a
                            >
                          </h3>

                          <a href="/informasi-detail" class="btn btn-outline">Read More</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <!--END BLOGS-->
      </div>
      <!--CONTENT END-->
    </div>
  </body>
  <Footer />
</template>
<script>
export default {};
</script>
<style>
@import url("../assets/css/style.css");
</style>
