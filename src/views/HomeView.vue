<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <section class="section s1">
      <img id="cover-h" src="../assets/img/cover/cover-h.gif" alt="" />
      <img id="cover-v" src="../assets/img/cover/cover-v.gif" alt="" />
    </section>
    <section class="section s2">
      <h2 class="text-center my-5">New In</h2>
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3">
            <router-link to="/new">
              <img
                class="img-fluid m-auto"
                src="../assets/img/new-in/top/top.gif"/>
            </router-link>
            <h6 class="text-center mt-3">小領片男友襯衫</h6>
            <p>NT.690</p>
          </div>
          <div class="col-6 col-md-3">
            <router-link to="/new">
              <img
                class="img-fluid m-auto"
                src="../assets/img/new-in/bottom/pants-1.gif"
                alt=""/>
            </router-link>
            <h6 class="text-center mt-3">多摺設計西裝寬褲</h6>
            <p>NT.790</p>
          </div>
          <div class="col-6 col-md-3">
            <router-link to="/new">
              <img
                class="img-fluid m-auto"
                src="../assets/img/new-in/bottom/pant-2.gif"
                alt=""/>
            </router-link>
            <h6 class="text-center mt-3">側邊拼接感牛仔褲</h6>
            <p>NT.1,190</p>
          </div>
          <div class="col-6 col-md-3">
            <router-link to="/new">
              <img
                class="img-fluid m-auto"
                src="../assets/img/new-in/accessory/ear-ing.gif"
                alt=""/>
            </router-link>
            <h6 class="text-center mt-3">時髦可頌麵包耳扣</h6>
            <p>NT.490</p>
          </div>
        </div>
      </div>
    </section>
  </full-page>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      options: {
        anchors: ['page1', 'page2'],
        sectionsColor: ['', '#e2d5b1'],
        autoScrolling: true,
        navigation: true
      }
    }
  }
}
</script>

<style>
#cover-h {
  width: 100%;
  height: 100%;
}

#cover-v {
  object-fit: cover;
  display: none;
}

.fp-table.active{
  justify-content: start;
}

.s2 img{
    width: 16vw;
}

.s2 .col-6{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 992px) {
  #cover-v {
    height: 100%;
    display: block;
  }
  #cover-h {
    display: none;
  }
  .s2 img {
    width: 26vw;
  }
}
</style>
