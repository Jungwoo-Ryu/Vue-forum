<script setup>
import { useRoute, useRouter } from 'vue-router'

  const route = useRoute();
  const router = useRouter();
  const id = route.params.id;

  const goDetailPage = () => router.push({name: 'posts-detail', params: {id} });
</script>

<template>
  <div>
    <h2>게시글 수정</h2>
    <form action="post">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <button class="btn btn-outline-danger"
        @click="goDetailPage">취소</button>
      <button class="btn btn-outline-success">수정</button>
    </form>
  </div>
</template>

<style scoped>

</style>