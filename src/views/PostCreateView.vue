<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { createPost, getPosts } from '@/api/posts.js'

const router = useRouter()
const goListPage = () => router.push({ name: 'posts-list' })

const form = ref({
  id: Number,
  title: null,
  content: null
})

const save = async () => {
  try {
    const {data} = await getPosts();
    form.id = parseInt(data.length)-1;
    console.log(form)
    await createPost({
      ...form.value,
      createdAt: Date.now()
    });
    router.push({name: 'posts-list'});
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <h2>게시글 등록</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="form.title" type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea
          v-model="form.content"
          class="form-control" id="content" rows="3"></textarea>
      </div>
      <button class="btn btn-outline-danger" @click="goListPage">cancel</button>
      <button class="btn btn-outline-success">save</button>
    </form>
  </div>
</template>

<style scoped>

</style>