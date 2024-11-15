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

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
