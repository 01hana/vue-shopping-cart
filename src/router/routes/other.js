export default [
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/error/ErrorView.vue'),
    meta: {
      layout: 'misc',
      resource: 'other',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'error',
  },
]
