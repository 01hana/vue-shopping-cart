<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const cartStore = useCart()

const { cartItems, cartCount, cartTotal } = storeToRefs(cartStore)
const { removeItem } = cartStore

const menus = [
  {
    name: 'home',
    title: '首頁',
    to: '/'
  },
  {
    name: 'products',
    title: '全部商品',
    to: '/products'
  }
]

const menuOpen = ref(false)
const cartMenu = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <v-toolbar density="compact" color="white" class="header-top px-2">
    <v-toolbar-title class="text-h3" style="min-width: 100px">
      <router-link to="/">
        <v-img
          max-width="160"
          src="https://static.tpx.tw/sff/pazzo-v2/static/img/pazzo-logo.svg"
          cover
        />
      </router-link>
    </v-toolbar-title>

    <v-list
      v-if="!mobile"
      class="d-flex align-center mx-auto"
      active-class="font-weight-bold"
    >
      <v-list-item v-for="item in menus" :key="item" :to="item.to">
        {{ item.title }}
      </v-list-item>
    </v-list>

    <v-spacer />

    <v-btn icon="mdi-magnify" variant="text" />
    <v-btn v-show="!mobile" icon="mdi-account-circle-outline" variant="text" />

    <v-menu
      v-model="cartMenu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text"
          min-width="48"
          min-height="48"
          width="48"
          rounded="xl"
        >
          <v-badge color="black" :content="cartCount">
            <v-icon icon="mdi-cart-outline" size="24" />
          </v-badge>
        </v-btn>
      </template>

      <v-card min-width="300" rounded="0">
        <template v-if="cartCount">
          <v-list v-for="item in cartItems" :key="item.id">
            <v-list-item class="py-2">
              <template v-slot:prepend>
                <v-avatar rounded="0">
                  <v-img alt="John" :src="item.img" />
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-btn
                  icon="mdi-close"
                  variant="text"
                  density="comfortable"
                  @click="removeItem(item.id)"
                />
              </template>

              <v-list-item-title class="font-weight-bold mb-2">
                {{ item.title }}
              </v-list-item-title>

              <div class="text-body-2">
                <p>尺寸 {{ item.size }}</p>
                <p>顏色 {{ item.color }}</p>
                <p>數量 x {{ item.quantity }}</p>
              </div>

              <span class="text-black mt-2 d-block">NT. {{ item.price }}</span>
            </v-list-item>
            <v-divider />
          </v-list>

          <h5 class="text-h6 text-end px-4 py-2">Total: NT. {{ cartTotal }}</h5>
        </template>

        <template v-else>
          <div class="pa-4 text-center">購物車內尚無商品!</div>
        </template>

        <v-card-actions v-if="cartCount" class="pa-4">
          <v-btn variant="outlined" text="前往結帳" rounded="0" class="w-100" />
        </v-card-actions>
      </v-card>
    </v-menu>

    <v-app-bar-nav-icon
      v-show="mobile"
      variant="text"
      @click.stop="toggleMenu"
    />
  </v-toolbar>

  <v-navigation-drawer v-model="menuOpen" temporary>
    <v-list>
      <v-list-item>
        <v-list-item-title class="text-h4">Pazzo</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="item in menus" :key="item" :to="item.to">
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.header-top {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0 0 8px #eee;
}

:deep(.v-toolbar-title__placeholder) {
  overflow: unset;
}

:deep(.v-toolbar__content) {
  min-height: 70px;
}

:deep(.v-list-item--active > .v-list-item__overlay) {
  background-color: transparent;
}

:deep(.v-list-item:hover > .v-list-item__overlay) {
  opacity: 0;
}
</style>
