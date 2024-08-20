<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

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
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header/>
    <div class="container mt-2">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="row">
            <div class="col-md-12 mt-3">
              <div class="card">
                <div class="card-header">
                  <span class="card-title">Liên hệ - Hỗ trợ</span>
                </div>
                <div class="card-body">
                  <div class="mt-2">
                    <b>Tổng đài: </b><span>1900.636.151 (Phím 1)</span>
                  </div>
                  <div class="mt-4">
                    <b>Hotline: </b><span>0966.915.906</span>
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
                  <span class="card-title">Thông báo</span>
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
                      <li v-for="(item, index) in notifications" :key="index">
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
                  <span class="card-title">Hướng dẫn</span>
                </div>
                <div class="card-body">
                  <ul>
                    <li v-for="(item, index) in tutorials" :key="index">
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
    <Footer/>
  </div>
</template>

<style scoped>

</style>