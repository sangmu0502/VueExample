import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })
  
  // 서버로 요청을 보내고 응답 데이터 처리
  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    })
    .then(response => {
      console.log(response)
      console.log(response.data)
      articles.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  const signUp = function (payload) {
    // 1. 사용자 입력 데이터를 받아
    const { username, password1, password2 } = payload
    
    // 2. axios로 django에 요청을 보냄
    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username,
        password1,
        password2,
      }
    })
    .then((response) => {
      // console.log('회원가입 성공!')
      const password = password1
      logIn({ username, password })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  const router = useRouter()
  
  const logIn = function(payload) {
    // 1. 사용자 입력 데이터를 받아
    const { username, password } = payload
    
    // 2. axios로 django에 요청을 보냄
    axios({
      method:'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username,
        password
      }
    })
      .then((response) => {
        // console.log('로그인 완료')
        // console.log(response.data.key)
        // 3. 로그인 성공 후 응답 받은 토큰 저장
        token.value = response.data.key
        router.push({ name: 'ArticleView' })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return { articles, API_URL, getArticles, signUp, logIn, token, isLogin }
}, { persist: true })
