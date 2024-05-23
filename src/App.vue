<script setup>

</script>

<template>
  <div class="navbar navbar-expand-lg bg-black p-3">
    <router-link to="/" class="nav-link" style="color: white">Home</router-link>
    <router-link to="/list" class="nav-link m-lg-2" style="color: white">List</router-link>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
