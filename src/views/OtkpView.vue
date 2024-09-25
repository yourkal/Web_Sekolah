<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
</script>
<template lang="">
  <Header/>
    <!---MAIN WRAPPER START==================================-->
    <div id="main-wrapper" class="clear-fix">
      <!---CONTENT START==================================-->
      <div id="content" class="content-wrapper clearfix">
        <!---SINGLE SERVICE==================================-->
        <div class="single-service-wrapper clearfix">
          <div class="service-title-wrapper">
            <div class="container">
              <div class="row">
                <div class="column column-1 service-title">
                  <!-- <p>Relationship</p> -->
                  <h1> Otomatisasi dan Tata Kelola Perkantoran</h1>
                </div>
              </div>
            </div>
          </div>
  
          <div class="single-service-post">
            <div class="container">
              <div class="row">
                <div class="column column-75 service-post-wrapper">
                  <div class="servicePost-img img-zoom-wrapper">
                    <img
                      src="@/assets/images/single-service.png"
                      alt="service-img"
                      class="res-img"
                    />
                  </div>
  
                  <div class="service-post">
                    <p class="text-light-gray">
                      We live in the world of data now; data allows us to make
                      realistic decisions about the future. No financial
                      department or company can claim to have completed its work
                      unless they have financial projections ready. Consulting WP
                      helps clients create dynamic financial projections that take
                      real data and map out realistic outcomes.
                    </p>
                    <p class="text-light-gray">
                      Smart people know better than to take steps based on gut
                      feelings alone. Financial projections are a necessity for
                      any company. As the leader of the company you need to know
                      how your finances will look the next year.
                    </p>
                    <blockquote class="servicePost-blockquote">
                      <p>
                        konsultan WP – we help companies assess their skills and
                        choose a new direction which utilizes the talents of the
                        team and resources most productively.
                      </p>
                    </blockquote>
                    <p class="text-light-gray">
                      Clapped panda absolutely parrot then crab rode while smartly
                      much darkly in capable piously more misheard excluding along
                      that far a wherever grizzly scurrilously much wow bore
                      ravingly and darn as goodness much fox rueful gosh swore
                      labrador bald gull grew some but the in strict rueful rosily
                      wow this baneful well hotly that. Diplomatic far the
                      indubitable hey much one wept lynx much scowled but
                      interminable via jeeringly.
                    </p>
                  </div>
  
                  <!--SERVICE QA-->
                  <div class="service-qa-wrapper">
                    <div v-for="(faq, index) in faqs" :key="index">
                      <div class="service-quetion" @click="toggleAnswer(index)">
                        <h4>{{ faq.question }}</h4>
                        <i class="qa-icon" :class="{ rotate: faq.showAnswer }"
                          >&#9662;</i
                        >
                        <!-- Ikon down -->
                      </div>
                      <div
                        class="service-answer"
                        :class="{ show: faq.showAnswer }"
                      >
                        <p>{{ faq.answer }}</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!--SIDEBAR RECENT SERVICES-->
                <div class="column column-25 service-sidebar">
                  <div class="recent-services-wrapper">
                    <div class="sideBar-title">
                      <h5 class="text-bold">
                        <span class="side-icon">//</span>
                        <span class="side-title-text">RECENT SERVICES</span>
                      </h5>
                    </div>
                    <div class="recent-services">
                      <div class="services-item">
                        <h4>
                          <a href="singleservice.html">Business Consulting</a>
                        </h4>
                      </div>
                      <div class="services-item">
                        <h4><a href="singleservice.html">Market Research</a></h4>
                      </div>
                      <div class="services-item">
                        <h4><a href="singleservice.html">Risk Management</a></h4>
                      </div>
                      <div class="services-item">
                        <h4>
                          <a href="singleservice.html">Financial Consulting</a>
                        </h4>
                      </div>
                      <div class="services-item">
                        <h4>
                          <a href="singleservice.html">Financial Projection</a>
                        </h4>
                      </div>
                      <div class="services-item">
                        <h4>
                          <a href="singleservice.html">Bond & Commodoties</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <!--END SIDEBAR-->
              </div>
            </div>
          </div>
        </div>
        <!--END SINGLE SERVICE-->
      </div>
      <!--CONTENT END-->
      <Footer/>
    </div>
  </template>
  <script>
  export default {
    components: Header,Footer,
    data() {
      return {
        faqs: [
          {
            question: "Which plan is right for me",
            answer: "With any financial product that you buy, it is important...",
            showAnswer: false,
          },
          {
            question: "What payment method are available",
            answer: "With any financial product that you buy, it is important...",
            showAnswer: false,
          },
          {
            question: "What if I pick wrong plan",
            answer: "With any financial product that you buy, it is important...",
            showAnswer: false,
          },
          {
            question: "Do I have to commit to a contract?",
            answer: "With any financial product that you buy, it is important...",
            showAnswer: false,
          },
        ],
      };
    },
    methods: {
      toggleAnswer(index) {
        this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
      },
    },
  };
  </script>
  <style>
  @import url(../assets/css/style.css);
  </style>
  