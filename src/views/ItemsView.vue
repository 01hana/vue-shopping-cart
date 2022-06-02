<template>
  <div class="container-fluid" id="carousel-container">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/new-in/top/top-1.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/new-in/top/top-1-1.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/new-in/top/top-1-2.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/new-in/top/top-1-3.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/new-in/top/top-1-4.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/new-in/top/top-1-5.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/new-in/top/top-1-6.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <section class="col-lg-2 mt-5">
        <SideMenu />
      </section>
      <div class="col-lg-5 offset-lg-1 mt-5">
        <main>
          <div class="row">
            <div class="col-lg-2">
              <div id="scroll-img">
                <img
                  v-for="i in items[href].scroll"
                  :key="i"
                  @click="changeImg(i)"
                  :src="i"
                  class="mb-2"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-9 offset-lg-1">
              <img
                :src="items[href].src"
                id="main-img"
                class="m-auto"
                alt=""
              />
            </div>
          </div>
        </main>
      </div>
      <div class="col-lg-3 offset-lg-1 mt-lg-5 mb-3">
        <div class="col-12">
          <h6 class="m-0">{{ items[href].name }}</h6>
          <p class="my-4">NT.{{ items[href].price }}</p>
          <div class="d-flex align-items-center my-2">
            <div class="m-1" v-for="c in items[href].color" :key="c">
              <input type="radio" :value="c" v-model="inventory.color" name="color"/>
              <label class="colorPicked">{{ c }}</label>
            </div>
          </div>
          <div class="my-4">
            <div>
              <label for="size">Size：</label>
              <select class="size" v-model="inventory.size">
                <option disabled value="">請選擇</option>
                <option v-for="s in items[href].size" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
          </div>
          <div class="my-4">
            <label for="quantity">Quantity：</label>
            <input
              class="qtyInput text-center"
              type="number"
              name="quantity"
              min="1"
              max="10"
              v-model.number="inventory.qty"
            />
          </div>
          <div class="my-4 d-flex align-items-center addToCart">
            <button
              type="button"
              class="btn"
              @click="addToCart(items[href].name, items[href].price)"
              :disabled="!cartIsValid"
            >
              加入購物車
            </button>
            <span class="wishlist-box mx-3">
              <img class="wishlist" src="../assets/img/icon/heart.svg" alt="" />
            </span>
          </div>
          <div class="d-flex align-items-center">
            <div class="product-info">
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                商品資訊
              </button>
              <div
                class="modal fade"
                id="staticBackdrop2"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        商品資訊
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      有挺度襯衫布料 / 胸口兩側打細褶造型 / 袖口鬆緊帶設計<br /><br />
                      *實品顏色依單品照為主<br />
                      棉 100%<br />
                      厚薄:適中<br />
                      彈性:適中<br />
                      素材產地 / 中國<br />
                      加工產地 / 中國
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="size-guide">
              <button type="button" class="btn">尺寸指南</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/js/items.js"></script>

<style>
#scroll-img {
  width: 10vw;
  height: 515px;
  flex-direction: column;
  overflow-y: scroll;
}

#scroll-img::-webkit-scrollbar {
  display: none;
}

#scroll-img img {
  width: 8vw;
  cursor: pointer;
}

#main-img {
  max-width: 400px;
  height: 515px;
}

.col-lg-3 {
  background-color: white;
}

.colorPicked {
  font-size: 15px;
}

.size {
  font-size: 14px;
  width: 8vw;
  border: 1px solid lightgray;
  border-radius: 5px;
}

.qtyInput {
  width: 8vw;
  font-size: 1vw;
  border: 1px solid lightgray;
  border-radius: 5px;
}

.addToCart .btn {
  width: 12vw;
  background-color: #d8c5a6;
  font-size: 14px;
}

.addToCart .btn:hover {
  color: white;
}

.wishlist {
  width: 18px;
  height: 18px;
}

.product-info .btn,
.size-guide .btn {
  font-size: 14px;
  background-color: lightgray;
  margin-right: 10px;
}

#carousel-container {
  display: none;
}

@media only screen and (max-width: 992px) {
  .col-lg-5 {
    display: none;
  }
  #carousel-container {
    display: block;
  }
  .size{
    width: 15vw;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .product-info .btn, .size-guide .btn{
    width: 20vw;
  }
  .addToCart .btn{
    width: 40vw;
  }
  .qtyInput{
    width: 15vw;
    border: 1px solid gray;
  }
}
</style>
