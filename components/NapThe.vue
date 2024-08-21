<template>
  <div v-if="errorMessage" class="error-message">
    {{ errorMessage }}
  </div>
  <form>
    <div class="row">
      <div class="col-md-12">
        <b>1. Chọn loại thẻ cào</b>
        <RadioImage class="mx-5" :options="options" v-model="selectedOption"/>
      </div>
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <b>2. Nhập thông tin thẻ cào</b>
            <p>
              <a href="#" target="_blank" style="font-size: 12px">Lưu ý: Nạp sai seri, mệnh giá có thể mất thẻ. Bấm vào đây xem quy tắc trước
                khi nạp</a>
            </p>
            <div class="mb-3">
              <label for="cardAmount" class="form-label">Mệnh giá thẻ</label>
              <select id="cardAmount" v-model="selectedAmount" class="form-select" required>
                <option value="">Chọn mệnh giá</option>
                <option value="10000">10.000 VND</option>
                <option value="20000">20.000 VND</option>
                <option value="30000">30.000 VND</option>
                <option value="50000">50.000 VND</option>
                <option value="100000">100.000 VND</option>
                <option value="200000">200.000 VND</option>
                <option value="500000">500.000 VND</option>
              </select>
            </div>

            <!-- Input for card code -->
            <div class="mb-3">
              <label for="cardCode" class="form-label">Mã thẻ</label>
              <input type="text" id="cardCode" v-model="cardCode" class="form-control" placeholder="Nhập mã thẻ"
                     required/>
            </div>

            <!-- Input for card serial -->
            <div class="mb-3">
              <label for="cardSerial" class="form-label">Số seri</label>
              <input type="text" id="cardSerial" v-model="cardSerial" class="form-control" placeholder="Nhập số seri"
                     required/>
            </div>
            <button @click="handleSubmit" class="btn btn-primary mt-3">
              <span class="submit-text" v-show="isVisible">Nạp thẻ</span>
              <span class="submit-progress spinner-grow spinner-grow-sm" v-show="isProgress">Đang xử lí... </span>
            </button>
          </div>
          <div class="col-md-6" v-if="authStore.isAuthenticated">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                <tr class="table-active">
                  <th>#</th>
                  <th>Loại thẻ</th>
                  <th>Biểu Phí</th>
                  <th>Trạng thái</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Viettel</td>
                  <td>36%</td>
                  <td class="text-success">Đang hoạt động</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mobifone</td>
                  <td>36%</td>
                  <td class="text-success">Đang hoạt động</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Vinaphone</td>
                  <td>29%</td>
                  <td class="text-success">Đang hoạt động</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>VN-Mobile</td>
                  <td>36%</td>
                  <td class="text-danger">Bảo trì</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Gate</td>
                  <td>30%</td>
                  <td class="text-success">Đang hoạt động</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Zing</td>
                  <td>29%</td>
                  <td class="text-success">Đang hoạt động</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Garena</td>
                  <td>29%</td>
                  <td class="text-success">Đang hoạt động</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useAuthStore} from '~/stores/auth' // Import the Pinia auth store
import RadioImage from '@/components/RadioImage.vue'

const options = [
  {value: 'viettel', image: '/images/vt.png'},
  {value: 'mobifone', image: '/images/mb-h.png'},
  {value: 'vinaphone', image: '/images/vn-h.png'},
  {value: 'zing', image: '/images/zing-h.png'},
  {value: 'gate', image: '/images/gate-h.png'},
  {value: 'vnmobile', image: '/images/vnmobile.png'},
  {value: 'garena', image: '/images/garena.png'}
]
const authStore = useAuthStore()
const selectedOption = ref('') // This will store the selected radio option
const selectedAmount = ref('')  // This will store the selected card amount
const cardCode = ref('')  // This will store the card code input
const cardSerial = ref('')  // This will store the card serial input
const errorMessage = ref('')
const isVisible = ref(true)
const isProgress = ref(false)

// Handle form submission
const handleSubmit = () => {
  // Reset the error message
  errorMessage.value = ''

  // Check if the user is authenticated
  if (!authStore.isAuthenticated) {
    errorMessage.value = 'Bạn chưa đăng nhập'
    return
  }

  if (!selectedOption.value) {
    errorMessage.value = 'Vui lòng nhà cung cấp'
    return;
  }
  if (!selectedAmount.value) {
    errorMessage.value = 'Vui lòng chọn mệnh giá thẻ'
    return;
  }
  if (!cardCode.value || !cardSerial.value) {
    errorMessage.value = 'Vui lòng nhập mã thẻ và seri thẻ'
    return;
  }

  // isVisible.value = false
  // isProgress.value = true

  alert("aaa");

}
</script>
<style scoped>
.error-message {
  background-color: red;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-weight: bold;
}
</style>