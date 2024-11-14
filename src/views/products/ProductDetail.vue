<script setup>
import { useDisplay } from 'vuetify'

const { id } = defineProps({
  id: String
})

const { mdAndDown } = useDisplay()

const { productsData } = storeToRefs(useProducts())
const { cartItems } = storeToRefs(useCart())

const [isDialogOpen, setDialogOpen] = useState(false)
const [isDisabled, setDisabled] = useState(true)

const productData = ref({})
const productCover = ref('')
const tab = ref(null)
const recommandItems = ref([])
const product = reactive({
  color: '',
  size: '',
  quantity: 1,
  price: ''
})

onMounted(() => {
  const targetItem = productsData.value.find(item => item.id == id)

  productData.value = targetItem
  productCover.value = productData.value.img

  getRecommandData()
})

function getRecommandData() {
  const items = productsData.value.filter(item => item.id !== id)

  const randomItems = items.sort(() => Math.random()).slice(0, 8)

  recommandItems.value = randomItems
}

function changeImage(item) {
  productCover.value = item
}

function changeColor(value) {
  product.color = value
}

function changeSize(value) {
  product.size = value
}

function checkCartItem(newItem) {
  let existItemId = null

  cartItems.value.forEach(item => {
    if (item.color === newItem.color && item.size === newItem.size) {
      existItemId = item.id
    }
  })

  return existItemId
}

function addToCart() {
  const { title, img, price } = productData.value

  product.price = price

  const newId = `${id}-${product.size}-${product.color}`

  const data = { id: newId, title, img, ...product }

  const existItemId = checkCartItem(data)

  if (existItemId) {
    const existingItem = cartItems.value.find(item => item.id === existItemId)

    existingItem.quantity += data.quantity
  } else {
    cartItems.value.push(data)
  }

  product.quantity = 1

  setDialogOpen(true)
}

watch(
  () => [product.color, product.size],
  ([newColor, newSize]) => {
    if (!newColor || !newSize) return

    setDisabled(false)
  }
)
</script>

<template>
  <v-container class="pa-0 pa-md-4">
    <v-row>
      <v-col
        cols="12"
        md="7"
        lg="6"
        offset-xl="1"
        class="d-flex"
        :class="[mdAndDown ? 'flex-column' : 'align-center']"
      >
        <div class="silde-wrap order-lg-1 order-2">
          <v-slide-group
            class="pa-4"
            selected-class="bg-success"
            show-arrows
            :direction="mdAndDown ? 'horizontal' : 'vertical'"
            :next-icon="mdAndDown ? 'mdi-menu-right' : 'mdi-menu-down'"
            :prev-icon="mdAndDown ? 'mdi-menu-left' : 'mdi-menu-up'"
          >
            <v-slide-group-item v-for="item in productData.imgs" :key="item">
              <v-card
                class="mx-4 my-2 object-fit"
                color="grey-lighten-1"
                :height="mdAndDown ? 150 : 120"
                :width="mdAndDown ? 120 : 100"
                :image="item"
                @click="changeImage(item)"
              />
            </v-slide-group-item>
          </v-slide-group>
        </div>

        <v-img :src="productCover" class="order-lg-2 order-1" cover />
      </v-col>

      <v-col cols="12" md="5" lg="4" class="ps-md-16">
        <v-card flat class="pt-md-12">
          <v-card-title class="d-flex justify-space-between flex-wrap">
            {{ productData.title }}
            <span>NT. {{ productData.price }}</span>
          </v-card-title>

          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <v-list class="d-flex">
                <v-list-item
                  v-for="{ title, value } in productData.colors"
                  :key="title"
                  :value="title"
                  class="px-2"
                  :active="product.color === title"
                  active-class="border-sm"
                  @click="changeColor(title)"
                >
                  <div class="color-wrap" :class="`bg-${value}`" />
                </v-list-item>
              </v-list>
              <span>{{ product.color }}</span>
            </div>

            <v-list class="d-flex mb-4">
              <v-list-item
                v-for="size in productData.size"
                :key="size"
                :value="size"
                :active="product.size === size"
                active-class="border-sm"
                @click="changeSize(size)"
              >
                {{ size }}
              </v-list-item>
            </v-list>

            <v-number-input
              control-variant="split"
              variant="outlined"
              :min="1"
              :max="30"
              density="comfortable"
              v-model="product.quantity"
              rounded="0"
            />

            <v-btn
              text="加入購物車"
              rounded="0"
              variant="flat"
              color="black"
              class="w-100"
              :disabled="isDisabled"
              @click="addToCart"
            />
          </v-card-text>

          <v-divider class="my-4" />

          <v-card-text>
            <v-tabs v-model="tab">
              <v-tab value="info">商品資訊</v-tab>
              <v-tab value="size-guide">尺寸指南</v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="info">
                <v-sheet class="pa-4"> 商品資訊... </v-sheet>
              </v-tabs-window-item>
              <v-tabs-window-item value="size-guide">
                <v-sheet class="pa-4"> 尺寸指南... </v-sheet>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-divider class="my-4" />

      <v-col cols="12">
        <v-sheet>
          <h6 class="text-h6">推薦商品</h6>
          <div>
            <v-slide-group
              class="py-4"
              :show-arrows="mdAndDown"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"
            >
              <v-slide-group-item v-for="item in recommandItems" :key="item.id">
                <v-card
                  class="mx-4 my-2 object-fit"
                  color="grey-lighten-1"
                  height="250"
                  width="200"
                  :image="item.img"
                >
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <AlertDialog
    v-model="isDialogOpen"
    title="商品已加入購物車"
    icon="mdi:mdi-check-circle-outline"
    type="success"
    transition="scale-transition"
  />
</template>

<style scoped>
.silde-wrap {
  max-height: calc(100vh - 300px);
  overflow: auto;
}

:deep(.v-card) {
  border-radius: 0;
  object-fit: cover;
  object-position: center;
}

:deep(.v-list-item:hover > .v-list-item__overlay),
:deep(.v-list-item--active > .v-list-item__overlay),
:deep(
    .v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,
    .v-btn--disabled.v-btn--variant-flat .v-btn__overlay
  ) {
  opacity: 0;
}

:deep(.v-btn.v-btn--density-default) {
  height: 48px;
}

.color-wrap {
  width: 25px;
  height: 25px;
}

@media (width > 1600px) {
  .v-container {
    max-width: 1320px;
  }
}

@media screen and (width > 960px) {
  .silde-wrap {
    max-height: calc(100vh - 250px);
    overflow: auto;
  }
}
</style>
