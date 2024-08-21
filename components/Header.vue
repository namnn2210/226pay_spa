<template>
  <div class="container-sm p-3 ">
    <div class="row align-items-center">
      <div class="col-md-3 mt-1">
        <a href="/" class="navbar-brand">
          <img src="/logo.png" alt="Logo" height="40">
        </a>
      </div>
      <div class="col-md-9 mt-1 text-end">
        <template v-if="authStore.isAuthenticated">
          <img src="/images/banner.png" alt="banner" width="660px">
        </template>
        <template v-else>
          <form class="d-inline-flex" @submit.prevent="login">
            <div class="me-2">
              <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="username"
                  placeholder="Tài khoản"
                  aria-label="Username"
              />
            </div>
            <div class="me-2">
              <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="Mật khẩu"
                  aria-label="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
          </form>
        </template>
      </div>
    </div>
  </div>
  <div class="bg-light ">
    <div class="container px-0">
      <nav class="navbar navbar-bg navbar-expand-lg d-flex navbar-light mx-3">
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 d-flex justify-content-center">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/"><b class="text-white">Đổi thẻ</b></NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/qrpay"><b class="text-white">QR Pay (Momo & Bank)</b></NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/buy-card"><b class="text-white">Mua thẻ</b></NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b class="text-white">Tra cứu</b>
              </a>
              <ul class="dropdown-menu">
                <li><NuxtLink class="nav-link" to="/card-search"><b class="text-white">Lịch sử đổi thẻ</b></NuxtLink></li>
                <li><NuxtLink class="nav-link" to="/qr-search"><b class="text-white">Lịch sử QR Pay</b></NuxtLink></li>
                <li><NuxtLink class="nav-link" to="/card-search"><b class="text-white">Lịch sử chung</b></NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/api"><b class="text-white">Tích hợp API</b></NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/payment"><b class="text-white">Thanh toán</b></NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/account"><b class="text-white">Tài khoản</b></NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const { $isClient } = useNuxtApp()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

// Load the user from localStorage on mount
onMounted(() => {
  if ($isClient) {
    authStore.loadUserFromLocalStorage()
  }
})

const login = async () => {
  try {
    await authStore.login(username.value, password.value)
    username.value = ''
    password.value = ''
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<style scoped>
.navbar-bg, .dropdown-menu {
  background-color: #06C;
}
</style>