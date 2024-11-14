import { productsData as data } from '@/data/products'

export const useProducts = defineStore('products', () => {
  const productsData = computed(() => data)

  return { productsData }
})
