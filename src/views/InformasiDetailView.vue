<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template lang="">
    <Header/>
    <div>
       <!---MAIN WRAPPER START==================================-->
  <div id="main-wrapper" class="clearfix">
    <!---CONTENT START==================================-->
    <div id="content" class="content-wrapper clearfix">
      <!---BLOG START==================================-->
      <section class="BlogPost">
        <div class="container">
          <div class="row blogPost-wrapper">
            <div class="column column-75 clearfix">
              <div class="blog-single content-section blog-wrapper">
                <div class="blogPost-img-wrapper">
                  <div class="blogPost-img img-zoom-wrapper">
                    <img src="@/assets/images/blog-1.jpg" alt="blogpost-title" class="res-img" />
                  </div>
                </div>
                <div class="blogPost-title-wrapper">
                  <h1 class="blogPost-title">Build A Full Web Chat App From Our Scratch</h1>
                  <div class="the-author">
                    <span class="author-name-wrap">By</span>
                    <a class="author-name" href="#"> Daniel Zelda </a>
                    <span class="post-date"> / september 25,2018</span>
                  </div>
                </div>
                <div class="blogPost-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    suscipit odio ante, id dapibus elit condimentum vitae.
                    Maecenas eget orci vitae enim accumsan mollis. In congue
                    nunc velit, sit amet eleifend velit cursus vitae. Morbi
                    lorem massa, lobortis id bibendum et, rhoncus porttitor
                    tortor. Aenean eget orci pulvinar, tincidunt neque quis,
                    aliquam lectus. Etiam nec malesuada tortor. Sed id
                    condimentum turpis. Quisque non fermentum est. Integer
                    lobortis turpis a justo dignissim, sit amet accumsan sem
                    pulvinar. Morbi mollis vitae libero in rhoncus. Vestibulum
                    at arcu faucibus, congue diam sit amet, viverra velit. Sed
                    rutrum urna ut dolor dignissim suscipit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Maecenas ultrices justo metus, quis facilisis
                    justo interdum nec. Donec luctus ligula elit, eget varius
                    urna sodales at. Mauris enim risus, cursus at nulla eget,
                    mattis imperdiet orci.
                  </p>
                  
                </div>
                <div class="blogPost-tag-wrapper">
                  <ul class="tag-wrapper">
                    <li>
                      <p class="text-bold">TAGS: </p>
                    </li>
                    <li>
                      <a class="tag" href="blog.html">clients</a>
                    </li>
                    <li>
                      <a class="tag" href="blog.html">company</a>
                    </li>
                    <li>
                      <a class="tag" href="blog.html">consultant</a>
                    </li>
                    <li>
                      <a class="tag" href="blog.html">departement</a>
                    </li>
                    <li>
                      <a class="tag" href="blog.html">industry</a>
                    </li>
                  </ul>
                </div>
                <div class="author-desc-wrapper">
                  <div class="user-avatar">
                    <img src="@/assets/blog/res-img.png" alt="user-avatar" class="res-img" />
                  </div>
                  <div class="author-desc-body">
                    <div class="author-desc">
                      <div class="author-name">
                        <a href="#">Daniel Zelda</a>
                      </div>
                      <p>
                        Suspendisse eget ullamcorper turpis. Donec condimentum
                        pulvinar lorem, sit amet ultrices diam bibendum non.
                        Suspendisse potenti. Integer dapibus ligula tortor. Nam
                        metus diam, tempus non egestas quis, blandit quis eros.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="column column-25 sidebar-wrapper">
                <div class="blogPost-side-menu">
                  
                  <div class="recent-post">
                    <div class="sideBar-title">
                      <h5 class="text-bold">
                        <span class="side-icon">//</span>
                        <span class="side-title-text">RECENT POST</span>
                      </h5>
                    </div>
                    
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
                            <a href="/informasi" class="card-title"
                              >Build A Full Web Chat App From Our Scratch</a
                            >
                          </h3>

                          <a href="/informasi" class="btn btn-outline"
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
                            <a href="#" class="card-title"
                              >Brush Strokes Energize Trees In Paintings</a
                            >
                          </h3>

                          <a href="#" class="btn btn-outline">Read More</a>
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
                            <a href="#" class="card-title"
                              >Insights on How to Improve Your Teaching.</a
                            >
                          </h3>

                          <a href="#" class="btn btn-outline">Read More</a>
                        </div>
                      </div>
                    </li>
                </div>

                  
                  <div class="recent-comments">
                    <div class="sideBar-title">
                      <h5 class="text-bold">
                        <span class="side-icon">//</span>
                        <span class="side-title-text">RECENT COMMENTS</span>
                      </h5>
                    </div>
                    <div class="comment-wrapper">
                      <p class="user-name text-green">
                        Rizki Akmanda
                        <span class="blog-title">
                          <a href="singlePost.html">on Curabitur Augue Eros</a>
                        </span>
                      </p>
                    </div>
                    <div class="comment-wrapper">
                      <p class="user-name text-green">
                        Bown
                        <span class="blog-title">
                          <a href="singlePost.html">
                            on Fusce Ut Hendrerit Ex, Nec Rutrum Nunc
                          </a>
                        </span>
                      </p>
                    </div>
                    <div class="comment-wrapper">
                      <p class="user-name text-green">
                        Daniel Zelda
                        <span class="blog-title">
                          <a href="singlePost.html">
                            on Fusce Ut Hendrerit Ex, Nec Rutrum Nunc
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="categories">
                    <div class="sideBar-title">
                      <h5 class="text-bold">
                        <span class="side-icon">//</span>
                        <span class="side-title-text">CATEGORIES</span>
                      </h5>
                    </div>
                    <div class="category-wrapper mt-3">
                      <p class="category-name">Bussiness</p>
                    </div>
                    <div class="category-wrapper">
                      <p class="category-name">Engineering</p>
                    </div>
                    <div class="category-wrapper">
                      <p class="category-name">Management</p>
                    </div>
                    <div class="category-wrapper">
                      <p class="category-name">Marketing</p>
                    </div>
                    <div class="category-wrapper">
                      <p class="category-name">News</p>
                    </div>
                    <div class="category-wrapper">
                      <p class="category-name">Resource</p>
                    </div>
                  </div>
                  <div class="follow-us">
                    <div class="sideBar-title">
                      <h5 class="text-bold">
                        <span class="side-icon">//</span>
                        <span class="side-title-text">FOLLOW US</span>
                      </h5>
                    </div>
                    <div class="sosmed-icon-wrapper">
                      <a href="index.html" target="_blank">
                        <div class="icon-wrapper">
                          <i class="fab fa-facebook-f"></i>
                        </div>
                      </a>
                      <a href="index.html" target="_blank">
                        <div class="icon-wrapper">
                          <i class="fab fa-twitter"></i>
                        </div>
                      </a>
                      <a href="index.html" target="_blank">
                        <div class="icon-wrapper">
                          <i class="fab fa-linkedin-in"></i>
                        </div>
                      </a>
                      <a href="index.html" target="_blank">
                        <div class="icon-wrapper">
                          <i class="fab fa-instagram"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <!--END BLOG POST-->
    </div>
    <!--END CONTENT-->
  </div>
  <!--END MAIN WRAPPER-->
    </div>
    <Footer/>
</template>
<script>
export default {
    
}
</script>
<style >
    @import url("../assets/css/style.css");
</style>