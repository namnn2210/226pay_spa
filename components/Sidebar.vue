<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <div class="row">
          <div class="col-md-12 mt-3">
            <template v-if="authStore.isAuthenticated">
              <div class="card">
                <div class="card-header">
                  <b class="card-title">Thông tin tài khoản</b>
                </div>
                <div class="card-body">
                  <div class="text-center text-primary">
                    <b>{{ authStore.user?.username }}</b>
                  </div>
                  <div class="mt-3">
                    <span>Tổng số tiền: </span><b class="text-success">0 DCoin</b>
                  </div>
                  <div class="mt-4">
                    <span>Có thể sử dụng: </span><b class="text-primary">0 DCoin</b>
                  </div>
                  <div class="mt-4">
                    <span>Chờ giao dịch: </span><b class="text-danger">0 DCoin</b>
                  </div>
                  <div class="mt-3">
                    <ul>
                      <li>
                        <NuxtLink class="nav-link" to="#"><i class="bi bi-gear"></i> Đổi mật khẩu</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="#"><i class="bi bi-person"></i> Thông tin tài khoản</NuxtLink>
                      </li>
                      <li>
                        <a href="#" class="nav-link" @click.prevent="logout"><i class="bi bi-door-open"></i> Đăng xuất</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
            <div class="card">
              <div class="card-header">
                <b class="card-title">Liên hệ - Hỗ trợ</b>
              </div>
              <div class="card-body">
                <div class="mt-2">
                  <b>Tổng đài: </b><span>0798.507.5555</span>
                </div>
                <div class="mt-4">
                  <b>Hotline: </b><span>0798.507.5555</span>
                </div>
                <div class="mt-4">
                  <b>Facebook: </b><span>Fb/thumuamathe</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <div class="card">
              <div class="card-header">
                <b class="card-title">Thông báo</b>
              </div>
              <div class="card-body">
                <div class="mt-2">
                  <b>Thanh toán quét mã QR Pay (Qua Momo & Bank) - Tích hợp API - Phí chỉ 8%</b>
                </div>
                <div class="mt-4">
                  <span>Phương thức thanh toán mới qua QR Code (Momo & Bank) - Tự động 24/7 - Mức phí chỉ 8% -  Tích hợp API</span>
                </div>
                <div class="mt-4">
                  <ul>
                    <li v-for="(item, index) in notifications" :key="index" class="mt-1">
                      <i class="bi bi-info-circle"></i>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <div class="card">
              <div class="card-header">
                <b class="card-title">Hướng dẫn</b>
              </div>
              <div class="card-body">
                <ul>
                  <li v-for="(item, index) in tutorials" :key="index" class="mt-1">
                    <i class="bi bi-info-circle"></i>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 mt-3">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const router = useRouter()
const authStore = useAuthStore()
const { $isClient } = useNuxtApp()
onMounted(() => {
  if ($isClient) {
    authStore.loadUserFromLocalStorage()
  }
})
const notifications = [
  'Đổi thẻ cào thành tiền mặt - Uy tín 15 năm hoặt động',
  'Cách đổi thẻ Viettel sang Garena, đổi thẻ cào sang thẻ Garena',
  'Kết thúc chương trình ưu đãi phí dịch vụ QR PAY'
]
const tutorials = [
  'Bảng giá, bảng phí dịch vụ',
  'Quy tắc phạt sai mệnh giá, seri',
  'Cách đổi thẻ Viettel, Mobi, Vina, Gate, Zing sang các loại thẻ khác',
  'Hướng dẫn đổi thẻ cào thành tiền mặt'
]
const logout = () => {
  authStore.logout()
  router.push('/')  // Redirect to homepage after logout
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
ul li {
  text-align: left;
}
</style>