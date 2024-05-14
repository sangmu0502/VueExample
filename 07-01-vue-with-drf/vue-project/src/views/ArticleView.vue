<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name:'CreateView'}">
    [CREATE]
    </router-link>
    <ArticleList />
  </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleList.vue'
// ArticleView 컴포넌트가 마운트 될 때 getArticles 함수가 실행되도록 함
// 해당 컴포넌트가 렌더링 될 때 항상 최신 게시글 목록을 불러오기 위함.
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { RouterLink } from 'vue-router'

const store = useCounterStore()

onMounted(() => {
  store.getArticles()
})
// 장고에서 오류였으면 200ok가 아닌데 200ok인거 보니까 서버에서는 응답을 해줬고, 브라우저가 응답을 통과시키지 않음

</script>

<style>

</style>
