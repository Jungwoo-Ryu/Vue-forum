<script setup>

</script>

<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <div class="text-muted">요청한 페이지 찾을 수 없음</div>
    {{ $route.params.pathMatch}}
    <div class="mt-4">
      <RouterLink to="/">
        <button class="btn btn-primary">HOME</button>
      </RouterLink>

    </div>
  </div>
</template>

<style scoped>

</style>