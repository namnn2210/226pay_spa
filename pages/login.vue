<template>
<div class="card h-100">
  <div class="card-header">
    <b class="card-title">Đăng nhập</b>
  </div>
  <div class="card-body">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="login">
              <!-- Username input field -->
              <div class="mb-3">
                <label for="username" class="form-label">Tài khoản</label>
                <input
                    type="text"
                    id="username"
                    v-model="username"
                    class="form-control"
                    placeholder="Tài khoản"
                    required
                />
              </div>

              <!-- Password input field -->
              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="form-control"
                    placeholder="Mật khẩu"
                    required
                />
              </div>

              <!-- Error message -->
              <div v-if="errorMessage" class="text-danger mb-3">
                {{ errorMessage }}
              </div>
              <!-- Submit button -->
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <b>Bạn chưa có tài khoản? <a href="#">Đăng kí ngay</a></b>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useAuthStore} from "~/stores/auth";
const authStore = useAuthStore()
// Reactive variables for form data and error messages
const username = ref('')
const password = ref('')
const errorMessage = ref('')

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

</style>