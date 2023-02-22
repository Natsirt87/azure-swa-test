<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar  from "./components/Navbar.vue";
</script>

<template>
  <Navbar class="fixed z-10"/>
  <div style="margin-left: 64px">
    <RouterView />
  </div>
</template>
