<template>
    <div id="sideMenu">
          <div>
            <div class="my-2">
              <img
                class="img-fluid menu-icon"
                src="../assets/img/icon/bars-solid.svg"
                alt=""
              />
            </div>
            <ul class="p-0">
              <li><a href="#">顯瘦美圖褲系列</a></li>
              <li><a href="#">涼感牛奶絲系列</a></li>
              <li><a href="#">人氣華夫格系列</a></li>
              <li>
                <div @click="saleShow = !saleShow" v-if="!saleShow">優惠活動 +</div>
                <div @click="saleShow = !saleShow" v-else>優惠活動 -</div>
                <div class="side-list" v-show="saleShow">
                  <ul>
                    <li><a href="#">經典美圖褲．2件1200</a></li>
                    <li><a href="#">優惠組合．2件598</a></li>
                    <li><a href="#">優惠組合．2件698</a></li>
                    <li><a href="#">超值折扣．單件129起</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div @click="topShow = !topShow" v-if="!topShow">上身類 +</div>
                <div @click="topShow = !topShow" v-else>上身類 -</div>
                <div class="side-list" v-show="topShow">
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
                <div @click="bottomShow = !bottomShow" v-if="!bottomShow">下身類 +</div>
                <div @click="bottomShow = !bottomShow" v-else>下身類 -</div>
                <div class="side-list" v-show="bottomShow">
                  <ul>
                    <li><a href="#">裙類</a></li>
                    <li><a href="#">短褲</a></li>
                    <li><a href="#">長褲</a></li>
                    <li><a href="#">牛仔褲</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div @click="onePieceShow = !onePieceShow" v-if="!onePieceShow">連身類 +</div>
                <div @click="onePieceShow = !onePieceShow" v-else>連身類 -</div>
                <div class="side-list" v-show="onePieceShow">
                  <ul>
                    <li><a href="#">洋裝</a></li>
                    <li><a href="#">套裝</a></li>
                    <li><a href="#">吊帶 / 連身褲</a></li>
                    <li><a href="#">泳衣 / 比基尼</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div @click="homeWearShow = !homeWearShow" v-if="!homeWearShow">家居內著 +</div>
                <div @click="homeWearShow = !homeWearShow" v-else>家居內著 -</div>
                <div class="side-list" v-show="homeWearShow">
                  <ul>
                    <li><a href="#">內衣</a></li>
                    <li><a href="#">內褲</a></li>
                    <li><a href="#">家居服</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div @click="accessoryShow = !accessoryShow" v-if="!accessoryShow">配件 +</div>
                <div @click="accessoryShow = !accessoryShow" v-else>配件 -</div>
                <div class="side-list" v-show="accessoryShow">
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
          </div>
        </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      saleShow: false,
      topShow: false,
      bottomShow: false,
      onePieceShow: false,
      homeWearShow: false,
      accessoryShow: false
    }
  }
}
</script>

<style>
.menu-icon{
    width: 20px;
    height: 20px;
}

.side-list{
    font-size: 14px;
}

.side-list li{
    padding: 5px 0;
}

@media only screen and (max-width:992px){
   #sideMenu{
       display: none;
   }
}
</style>
