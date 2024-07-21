import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import PostListView from '@/views/PostListView.vue'
import PostCreateView from '@/views/PostCreateView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import PostEditView from '@/views/PostEditView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedOne from '@/views/nested/NestedOne.vue'
import NestedTwo from '@/views/nested/NestedTwo.vue'
import NestedHome from '@/views/nested/NestedHome.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/posts',
    component: PostListView,
    name: 'posts-list'
  },
  {
    path: '/posts/create',
    component: PostCreateView,
    name: 'posts-create'
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
    name: 'posts-detail',
    props: route => ({
      id: parseInt(route.params.id)
    }),
    // props: route => ({id: parseInt(route.params.id)})

  },
  {
    path: '/post/:id/edit',
    component: PostEditView,
    name: 'posts-edit'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHome,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOne,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwo,
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory('/'),
  // history: createWebHashHistory(),
  routes: routes
});
export default router;