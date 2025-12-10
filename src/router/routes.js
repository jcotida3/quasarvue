const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/home', component: () => import('pages/HomePage.vue') },
                { path: '/second', component: () => import('pages/SecondPage.vue') },
               {path: '/profile', component: () => import('src/pages/ProfilePage.vue')
                }
              ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/auth', component: () => import('pages/LoginPage.vue') }
      
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
