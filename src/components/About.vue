<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute();
  console.log(route.path);
</script>

<template>
  <h1>About</h1>
  <h2>{{$route.name}}</h2>
  <button class="btn btn-primary" @click="$router.push('/')">Home 으로 이동</button>
</template>

<style scoped>

</style>