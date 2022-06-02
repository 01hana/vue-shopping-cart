<template>
  <header>
    <div class="container-fluid p-0">
      <div id="hamburger">
        <img
          @click="sidenavShow = !sidenavShow"
          id="hamburger-icon"
          src="./assets/img/icon/bars-solid.svg"
          alt=""
        />
      </div>
      <transition name="sidenav">
        <aside id="sidenav" v-show="sidenavShow">
          <ul>
            <div class="div1">
              <input id="sidenav-input" type="text" placeholder="Search.." />
              <img
                id="sidenav-search-btn"
                class="sidenav-icon"
                src="./assets/img/icon/search.svg"
                alt=""
              />
            </div>
            <div class="closebtn" @click="sidenavShow = !sidenavShow">
              &times;
            </div>
            <li><a href="#">本週新品</a></li>
            <li><a href="#">熱銷補貨</a></li>
            <li><a href="#">人氣預定</a></li>
            <li><a href="#">顯瘦美圖褲系列</a></li>
            <li><a href="#">涼感牛奶絲系列</a></li>
            <li><a href="#">More real 運動織帶系列</a></li>
            <li>
              <a href="#" @click="saleShow = !saleShow" v-if="!saleShow"
                >優惠活動 +</a
              >
              <a href="#" @click="saleShow = !saleShow" v-else>優惠活動 -</a>
              <div class="sidenav-list" v-show="saleShow">
                <ul>
                  <li><a href="#">經典美圖褲．2件1200</a></li>
                  <li><a href="#">優惠組合．2件598</a></li>
                  <li><a href="#">優惠組合．2件698</a></li>
                  <li><a href="#">超值折扣．單件129起</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" @click="topShow = !topShow" v-if="!topShow"
                >上身類 +</a
              >
              <a href="#" @click="topShow = !topShow" v-else>上身類 -</a>
              <div class="sidenav-list" v-show="topShow">
                <ul>
                  <li><a href="#">BRA T</a></li>
                  <li><a href="#">短袖</a></li>
                  <li><a href="#">無袖 / 背心</a></li>
                  <li><a href="#">七分 / 長袖</a></li>
                  <li><a href="#">襯衫</a></li>
                  <li><a href="#">外套 / 罩衫</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" @click="bottomShow = !bottomShow" v-if="!bottomShow"
                >下身類 +</a
              >
              <a href="#" @click="bottomShow = !bottomShow" v-else>下身類 -</a>
              <div class="sidenav-list" v-show="bottomShow">
                <ul>
                  <li><a href="#">裙類</a></li>
                  <li><a href="#">短褲</a></li>
                  <li><a href="#">長褲</a></li>
                  <li><a href="#">牛仔褲</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                @click="onePieceShow = !onePieceShow"
                v-if="!onePieceShow"
                >連身類 +</a
              >
              <a href="#" @click="onePieceShow = !onePieceShow" v-else
                >連身類 -</a
              >
              <div class="sidenav-list" v-show="onePieceShow">
                <ul>
                  <li><a href="#">洋裝</a></li>
                  <li><a href="#">套裝</a></li>
                  <li><a href="#">吊帶 / 連身褲</a></li>
                  <li><a href="#">泳衣 / 比基尼</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                @click="homeWearShow = !homeWearShow"
                v-if="!homeWearShow"
                >家居內著 +</a
              >
              <a href="#" @click="homeWearShow = !homeWearShow" v-else
                >家居內著 -</a
              >
              <div class="sidenav-list" v-show="homeWearShow">
                <ul>
                  <li><a href="#">內衣</a></li>
                  <li><a href="#">內褲</a></li>
                  <li><a href="#">家居服</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                @click="accessoryShow = !accessoryShow"
                v-if="!accessoryShow"
                >配件 +</a
              >
              <a href="#" @click="accessoryShow = !accessoryShow" v-else
                >配件 -</a
              >
              <div class="sidenav-list" v-show="accessoryShow">
                <ul>
                  <li><a href="#">生活小物</a></li>
                  <li><a href="#">首飾</a></li>
                  <li><a href="#">帽子</a></li>
                  <li><a href="#">髮飾 / 眼鏡</a></li>
                  <li><a href="#">包 / 圍巾 / 皮帶</a></li>
                  <li><a href="#">鞋 / 襪</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="div2">
            <a href="#">
              <img
                class="sidenav-icon"
                title="login"
                src="./assets/img/icon/circle-user.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                class="sidenav-icon"
                title="order tracking"
                src="./assets/img/icon/rectangle-list.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                class="sidenav-icon"
                title="shopping cart"
                src="./assets/img/icon/cart-shopping.svg"
                alt=""
              />
            </a>
            <span class="cart-qty text-center">{{ totalQuantity }}</span>
            <a href="#">
              <img
                class="sidenav-icon"
                title="QA"
                src="./assets/img/icon/circle-question.svg"
                alt=""
              />
            </a>
          </div>
        </aside>
      </transition>
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="collapse navbar-collapse" id="Navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/new" class="nav-link">New</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Restock</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Pre-order</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Story</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Outlet</a>
            </li>
          </ul>
        </div>
        <div class="navbar-brand m-0 p-0" id="brand">
          <router-link to="/">
            <h1 class="m-0">PAZZO</h1>
          </router-link>
        </div>
      </nav>
      <div id="navbar-rest">
        <ul>
          <li>
            <div>
              <transition name="search">
                <input
                  id="input"
                  type="text"
                  placeholder="Search.."
                  v-show="searchShow"
                />
              </transition>
              <img
                @click="searchShow = !searchShow"
                id="search-btn"
                class="navbar-icon"
                src="./assets/img/icon/search.svg"
                alt=""
              />
            </div>
          </li>
          <li>
            <a href="#"
              ><img
                class="navbar-icon"
                title="login"
                src="./assets/img/icon/circle-user.svg"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="navbar-icon"
                title="wishlists"
                src="./assets/img/icon/heart.svg"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                @click="cartShow = !cartShow"
                id="shopping-cart"
                class="navbar-icon"
                title="shopping cart"
                src="./assets/img/icon/cart-shopping.svg"
                alt=""
            /></a>
          </li>
          <span class="cart-qty text-center">{{ totalQuantity }}</span>
        </ul>
      </div>
    </div>
  </header>
  <router-view :inventory="inventory" :addToCart="addToCart"/>
  <SideCart
      v-show="cartShow"
      @cartClose="cartShow = !cartShow"
      :inventory="inventory"
      :cart="cart"
      :total="total"
      :remove="removeItem"
    />
</template>

<script src="./assets/header/header.js"></script>

<style src="./assets/header/header-style.css"></style>
