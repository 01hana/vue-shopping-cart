export const useCart = defineStore('cart', () => {
  const cartItems = ref([])

  const cartCount = computed(() =>
    cartItems.value.reduce((acc, item) => (acc += item.quantity), 0)
  )
  const cartTotal = computed(() =>
    cartItems.value.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    )
  )

  function removeItem(id) {
    cartItems.value = cartItems.value.filter(item => item.id !== id)
  }

  return {
    cartItems,
    cartCount,
    cartTotal,

    removeItem
  }
})
