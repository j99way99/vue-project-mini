import {
  createRouter,
  createWebHistory
} from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import SalesList from '../views/SalesList.vue'
import ImageInsert from '../views/ImageInsert.vue'
// import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import PostAddView from '../views/PostAddView';
import PostDetailView from '../views/PostDetailView';

const routes = [{
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
      {
    path: '/new',
    name: 'new',
    component: PostAddView
  },
  {
    path: '/post/:id',
    name: 'detail',
    component: PostDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router