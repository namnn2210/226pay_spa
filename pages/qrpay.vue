<template>
  <div class="card h-100">
    <div class="card-header">
      <div class="row">
        <div class="col-md-6">
          <b class="card-title">Demo - Thanh toán nhanh QR Code</b>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <span>Thanh toán nhanh QR CODE</span>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <Dropdown
                    v-model="selectedWallet"
                    :options="walletOptions"
                    placeholder="Chọn ví"
                    label="Chọn loại ví"
                    id="walletDropdown"
                />
              </div>
              <div class="mb-3">
                <Dropdown
                    v-model="selectedAmount"
                    :options="amountOptions"
                    placeholder="Chọn mệnh giá"
                    label="Chọn mệnh giá"
                    id="amountDropdown"
                />
              </div>
              <div class="mb-3">
                <label for="note" class="form-label">Ghi chú</label>
                <textarea class="form-control" id="note" name="note" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-2">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <b>Dịch vụ thanh toán QR PAY (Momo, Ví điện tử & Ngân hàng). Tích hợp API vào website của bạn.</b>
        <ul>
          <li>Bên trên là phần demo, khi tích hợp vào website của bạn sẽ hiển thị phương thức thanh toán QR Pay tương tự như thế này.</li>
          <li>Thanh toán qua Momo và tất cả các Ví điện tử khác.</li>
          <li>Thanh toán qua tất cả những ngân hàng có hỗ trợ quét mã QR.</li>
          <li>Phí dịch vụ chỉ 8% (Bạn nhận về 92%).</li>
          <li>Hệ thống tự động 24/7.</li>
          <li>Rút tiền ngay.</li>
        </ul>
        <p>
          <b>Hãy liên hệ với 226Pay để được hỗ trợ kết nối nhé.</b>
        </p>
        <p>
          <b>Tải code mẫu <a href="#" class="text-danger">tại đây</a>.</b>
        </p>
        <p>
          <b>Tải tài liệu <a href="#" class="text-danger">tại đây</a>.</b>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown.vue'
useHead({
  title: '226Pay - Thu mua nạp đổi thẻ cào game sang vnđ',  // Set the title for this page
  meta: [
    { name: 'description', content: '226Pay - Thu mua nạp đổi thẻ cào game sang vnđ' }
  ]
})
// Define selected wallet
const selectedWallet = ref('')
const selectedAmount = ref('')
// Define wallet options
const walletOptions = [
  { value: 'qrcode_momo', name: 'QR Code Momo' },
  { value: 'qrcode_bank1', name: 'QR Code Ngân Hàng & Ví Điện Tử 1' },
  { value: 'qrcode_bank2', name: 'QR Code Ngân Hàng & Ví Điện Tử 2' },
]
const amountOptions = [
    { value: 10000, name: '10.000 VND' },
    { value: 20000, name: '20.000 VND' },
    { value: 30000, name: '30.000 VND' },
    { value: 50000, name: '40.000 VND' },
    { value: 100000, name: '100.000 VND' },
    { value: 200000, name: '200.000 VND' },
    { value: 500000, name: '500.000 VND' },

]
</script>

<style scoped>
.text-danger {
  text-decoration: none;
}
</style>
