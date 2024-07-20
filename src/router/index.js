import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import PostListView from '@/views/PostListView.vue'
import PostCreateView from '@/views/PostCreateView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import PostEditView from '@/views/PostEditView.vue'


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
    name: 'post-create'
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
    name: 'post-detail'
  },
  {
    path: '/post/:id/edit',
    component: PostEditView,
    name: 'post-edit'
  }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes: routes
});
export default router;