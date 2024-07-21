<script setup>

import { useRoute, useRouter } from 'vue-router'
import { getPostById } from '@/api/posts.js'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute();
const id = route.params.id;
const props = defineProps({
  id: Number,
})
const goListPage = () => router.push({name: 'posts-list'});
const goEditPage = () => router.push({name: 'posts-edit', params: {id: props.id} });
const form = ref({});


const fetchPost = async () => {
  const {data} = await getPostById(props.id);
  console.log(data);
  form.value = {...data};
}
fetchPost();

console.log('posts:', props.id, ' ', getPostById(props.id));

</script>

<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{form.content}}</p>
    <p class="text-muted">{{form.createdAt}}</p>
    <hr class="my-4"/>
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>