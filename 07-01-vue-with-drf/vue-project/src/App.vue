<template>
  <header>
    <nav>
      <router-link :to="{ name: 'ArticleView' }">Articles</router-link> |
      <router-link :to="{ name: 'SignUpView'}">회원가입</router-link> |
      <router-link :to="{ name: 'LogInView'}">로그인</router-link>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
