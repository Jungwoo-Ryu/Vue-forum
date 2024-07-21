<script setup>

import { useRouter } from 'vue-router'

const router = useRouter();
const goListPage = () => router.push({name:'posts-list'})
</script>

<template>
  <div>
    <h2>게시글 등록</h2>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <button class="btn btn-outline-danger" @click="goListPage">cancel</button>
      <button class="btn btn-outline-success">save</button>
    </form>
  </div>
</template>

<style scoped>

</style>