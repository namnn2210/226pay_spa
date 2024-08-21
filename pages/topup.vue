<template>
<div class="card h-100">
  <div class="card-header">
    <b class="card-title">Nạp tiền điện thoại</b>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table">
        <tbody>
        <tr>
          <td class="text-center">Bước 1</td>
          <td></td>
          <td class="text-center">Bước 2</td>
          <td></td>
          <td class="text-center">Bước 3</td>
        </tr>
        <tr>
          <td rowspan="2" class="text-center">
            <img src="/images/computer.jpg"/>
            <div class="text-center">
              Đăng nhập vào <b>226Pay</b> và nhập thông tin
            </div>
          </td>
          <td>
            <i class="bi bi-caret-right-fill"></i>
          </td>
          <td rowspan="2" class="text-center">
            <img src="/images/secure.jpg"/>
            <div class="text-center">
              Xác nhận lại thông tin và nhập mật khẩu cấp 2 hoặc OTP.
            </div>
          </td>
          <td>
            <i class="bi bi-caret-right-fill"></i>
          </td>
          <td rowspan="2" class="text-center">
            <img src="/images/computer.jpg"/>
            <div class="text-center">
              Chờ tin nhắn thông báo đã nạp tiền thành công.
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>
          <b><i class="bi bi-joystick"></i> Nạp tiền điện thoại</b>
        </p>
        <div class="card no-border">
          <div class="card-header card-info">
            Chiết khấu 2.5% cho tất cả nhà mạng
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <Dropdown
                  v-model="selectedCarrier"
                  :options="carriers"
                  placeholder="Chọn nhà mạng"
                  label="Chọn nhà mạng"
                  id="carrierDropdown"
              />
              <div class="mb-3">
                <Dropdown
                    v-model="selectedCarrierMode"
                    :options="carrierMode"
                    placeholder="Chọn loại thuê bao"
                    label="Chọn loại thuê bao"
                    id="carrierModeDropdown"
                />
              </div>
              <div class="mb-3">
                <Dropdown
                    v-model="selectedAmountOption"
                    :options="amountOptions"
                    placeholder="Số tiền"
                    label="Số tiền"
                    id="amountDropdown"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="number" id="phone" class="form-control" required/>
              </div>
              <div class="mb-3">
                <label for="password2" class="form-label">Mật khẩu cấp 2</label>
                <input type="password" id="password2" name="password2" class="form-control" required/>
              </div>
              <button type="submit" class="btn btn-primary mt-3">Đồng ý</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <p>
          <b><i class="bi bi-joystick"></i> Lịch sử giao dịch</b>
        </p>
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <td class="text-center">Số tiền</td>
              <td class="text-center">Tel</td>
              <td class="text-center">Thời gian</td>
            </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import Dropdown from "~/components/Dropdown.vue";
import {ref} from "vue";

// Apply the auth middleware to protect this page
definePageMeta({
  middleware: 'auth'
})

const carriers = [
  { value: 'viettel', name: 'Viettel', image: '/images/vt.png' },
  { value: 'mobifone', name: 'Mobifone', image: '/images/mb-h.png' },
  { value: 'vinaphone', name: 'Vinafone', image: '/images/vn-h.png' },
  { value: 'vnmobile', name: 'VNMobile', image: '/images/vnmobile.png' },
]
const carrierMode = [
  { value: 'prepaid', name: 'Thuê bao trả trước'},
  { value: 'postpaid', name: 'Thuê bao trả sau' },
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
const selectedOption = ref(carriers[0])
const selectedCarrier = ref('')
const selectedCarrierMode = ref('')
const selectedAmountOption = ref('')

const handleSubmit = () => {

}
</script>

<style scoped>
.no-border {
  border: none; /* Remove the border */
  box-shadow: none; /* Remove shadow if present */
}
.card-info {
  background-color: #007bff;
  color: white;
}
</style>