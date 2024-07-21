<script setup>

</script>

<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <RouterLink class="btn btn-secondary" :to="{name: 'NestedOne', replace: true}">Nested One</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="btn btn-primary" :to="{name: 'NestedTwo', replace: true}" >Nested Two</RouterLink>
    </li>
  </ul>
  <hr class="my-4"/>
  <RouterView></RouterView>
</template>

<style scoped>

</style>