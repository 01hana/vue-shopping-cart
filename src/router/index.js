import { createRouter, createWebHistory } from 'vue-router'

import pages from './routes/pages'
import other from './routes/other'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...pages, ...other]
})

router.beforeEach(to => {
  const { productsData } = storeToRefs(useProducts())

  if (to.name === 'product-detail') {
    const existPRoduct = productsData.value.some(
      item => item.id === to.params.id
    )

    if (!existPRoduct) return { name: 'error' }
  }
})

export default router
