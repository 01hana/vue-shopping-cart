<template>
  <section id="cover">
    <div class="container mt-sm-5 d-flex align-items-center justify-content-center">
      <h1 class="text-center text-white">New In</h1>
    </div>
  </section>

  <main>
    <div class="container">
      <div class="row ">
        <section class="col-lg-2 mt-5">
          <SideMenu />
        </section>
        <section class="col-12 col-lg-9 offset-lg-1 mt-5">
          <div class="row row-main">
            <div class="col-lg-3 col-md-4 col-6 mb-5" v-for="i in items" :key="i.id">
                <router-link :to="{ name: 'items', params: { href: i.id }}">
                  <div class="img-container">
                  <img
                    :src="i.view"
                    class="img-fluid m-auto d-block"
                    alt=""
                  />
                </div>
                </router-link>
                <div>
                  <p class="my-1">{{ i.name }}</p>
                  <p class="my-1">NT.{{ i.price }}</p>
                </div>
            </div>
            <div id="pages" class="d-flex justify-content-center">
              <a href="#" class="text-dark">1</a>
              <a href="#" class="text-dark">2</a>
              <a href="#" class="text-dark">3</a>
              <a href="#" class="text-dark">4</a>
              <a href="#" class="text-dark">5</a>
              <a href="#" class="text-dark">></a>
              <a href="#" class="text-dark">>></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script src="../assets/js/new.js"></script>

<style>
#cover .container{
    height: 50vh;
    background: linear-gradient(to right top, #d4d3a1, #97a87e);
    box-shadow:  3px 3px 5px #bebebe ;
}

section ul li{
    list-style: none;
    font-family: "TTNorms-Regular", Helvetica, "微軟正黑體", sans-serif;
    padding: 8px 0;
    cursor: pointer;
}

section ul li:hover{
    color: rgb(131, 129, 129);
}

section ul li a{
    text-decoration: none;
    color: #333333;
}

section ul li a:hover{
    color: rgb(131, 129, 129);
}

.img-container{
    overflow: hidden;
    transition: 1s ease-in-out;
}

.row-main img:hover{
    transform: scale(1.5);
}

#pages a{
    text-align: center;
    text-decoration: none;
    margin: 0 6px;
}
</style>
