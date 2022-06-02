import SideCart from '@/components/SideCart.vue'

export default {
  name: 'App',
  components: {
    SideCart
  },
  data () {
    return {
      searchShow: false,
      sidenavShow: false,
      saleShow: false,
      topShow: false,
      bottomShow: false,
      onePieceShow: false,
      homeWearShow: false,
      accessoryShow: false,
      cartShow: false,
      inventory: {
        id: 0,
        name: '',
        color: '',
        size: '',
        qty: 0,
        price: 0
      },
      cart: [],
      total: 0
    }
  },
  computed: {
    totalQuantity () {
      return this.total
    }
  },
  methods: {
    check (newinput) {
      var flag = -1
      this.cart.forEach(i => {
        if (i.color === newinput.color && i.size === newinput.size) {
          flag = i.id
        }
      })
      return flag
    },
    addToCart (name, price) {
      this.total += this.inventory.qty
      var cartindex = this.check(this.inventory)
      if (cartindex !== -1) {
        this.cart[cartindex].qty = this.cart[cartindex].qty + this.inventory.qty
      } else {
        var temp = { id: 0, name: '', color: '', qty: 0, size: '', price: 0 }
        temp.id = this.inventory.id
        temp.name = name
        temp.price = price * this.inventory.qty
        temp.color = this.inventory.color
        temp.qty = this.inventory.qty
        temp.size = this.inventory.size
        this.cart.push(temp)
        this.inventory.id++
      }
      this.inventory.qty = 0
      this.cart.forEach(element => {
        console.log(element)
      })
    },
    removeItem (indexRemove) {
      var removeItem = this.cart.map(function (item) {
        return item.id
      }).indexOf(indexRemove)
      this.total -= this.cart[removeItem].qty
      this.cart.splice(removeItem, 1)
    }
  }
}
