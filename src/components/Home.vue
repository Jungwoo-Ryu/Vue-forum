<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter();
  function moveToAbout() {
    router.push('/about');
  }
</script>

<template>
  <h1>Home</h1>
  <h2>{{$route.name}}</h2>
  <button class="btn btn-primary" @click="moveToAbout">About 으로 이동</button>
</template>

<style scoped>

</style>