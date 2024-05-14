<template>
  <div>
    <h5>{{ article.id }}</h5>
    <p>{{ article.title }}</p>
    <p>{{ article.content }}</p>
    <router-link :to="{ name: 'DetailView', params: { id: article.id } }">
      [DETAIL]
    </router-link>
    <hr>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  article: Object
})
</script>
