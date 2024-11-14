export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/products/ProductView.vue')
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('@/views/products/ProductDetail.vue'),
    props: true
  }
]
