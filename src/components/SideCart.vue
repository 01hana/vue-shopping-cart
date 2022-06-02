<template>
  <transition name="cart">
    <aside id="cart-container">
      <div
        id="cart-head"
        class="d-flex align-items-center justify-content-between mb-3">
        <h5>購物車</h5>
        <span class="cart-closebtn" @click="$emit('cartClose')">&times;</span>
      </div>
      <div class="cart-item d-flex align-items-center justify-content-between mb-3" v-for="i in cart" :key="i.id">
            <div class="d-flex align-items-center">
                <div class="table-container m-3">
                <table>
                    <h6 class="m-0">{{ i.name }}</h6>
                    <tr class="cart-item-info d-flex justify-content-start">
                      <th>Color：</th>
                      <td>{{ i.color }}</td>
                    </tr>
                    <tr class="cart-item-info d-flex justify-content-start">
                      <th>Size：</th>
                      <td>{{ i.size }}</td>
                    </tr>
                    <tr class="cart-item-info d-flex justify-content-start">
                      <th>QTY：</th>
                      <td>{{ i.qty }}</td>
                    </tr>
                    <tr class="cart-item-info d-flex justify-content-start">
                      <th>Price：</th>
                      <td>{{ i.price }}</td>
                    </tr>
                </table>
                </div>
            </div>
            <span @click="remove(i.id)" class="item-delete">&times;</span>
        </div>
        <p class="text-center" v-if="!Object.keys(cart).length">購物車目前沒有商品</p>
        <div class="d-flex justify-content-between mb-5">
            <span>Total：${{ calCartTotal() }}</span>
            <button type="button" class="checkout-btn">Checkout</button>
        </div>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'SideCart',
  props: ['cartShow', 'cart', 'total', 'remove', 'inventory'],
  emits: ['cartClose'],
  methods: {
    calCartTotal () {
      var cartTotal = 0
      this.cart.forEach(p => {
        cartTotal += p.price
      })
      return cartTotal
    }
  }
}
</script>

<style>
#cart-container {
  height: 100%;
  width: 400px;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  background-color: #f1e2ca;
  overflow-x: hidden;
  transition: 0.5s ease;
  padding: 15px 15px 0;
}

.cart-closebtn {
  font-size: 36px;
  padding: 0;
  cursor: pointer;
}

.cart-item-info {
  font-size: 14px;
}

.cart-item img {
  width: 60px;
  height: 70px;
}

.item-delete {
  font-size: 28px;
  cursor: pointer;
}

.checkout-btn{
    width: 120px;
    height: 40px;
    font-size: 14px;
    background-color: white;
    border: 1px solid white;
    border-radius: 5px;
    box-shadow: rgb(221, 216, 216) 0px 3px 3px;
}

.checkout-btn:hover{
  background-color: rgb(78, 77, 77);
  border: 1px solid rgb(83, 83, 83);
  color: white;
}

.cart-enter-from,
.cart-leave-to {
  transform: translateX(100%);
}

.cart-enter-to,
.cart-leave-from {
  transform: translateX(0%);
}

.cart-enter-active,
.cart-leave-active {
  transition: 0.5s ease;
}

@media only screen and (max-width: 768px){
  #cart-container{
    display: none;
  }
}
</style>
