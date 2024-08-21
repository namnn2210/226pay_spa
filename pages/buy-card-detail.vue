<template>
  <div class="card h-100">
    <div class="card-header">Mua thẻ game</div>
    <div class="card-body">
      <div class="mb-3">
        <p>
          <b><i class="bi bi-joystick"></i> Lựa chọn loại thẻ</b>
        </p>
        <div class="row justify-content-lg-start g-3 px-5">
          <div
              v-for="option in options"
              :key="option.value"
              class="col-lg-2 col-md-2 col-sm-4 col-4 d-flex justify-content-center"
          >
            <button
                :class="['btn', isSelected(option) ? 'btn-danger' : 'btn-outline-primary', 'p-1', 'text-center','w-75']"
                @click="selectOption(option)"
            >
              {{ option.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col-md-4">
            <p>
              <b><i class="bi bi-joystick"></i> Mua thẻ {{selectedOption.name}} <img :src="selectedOption.image" :alt="selectedOption.value" class="img-thumbnail" width="50" /></b>
            </p>
            <div class="card">
              <div class="card-header">
                Thẻ {{selectedOption.name}} chiết khấu 1.5%
              </div>
              <div class="card-body">
                <form @submit.prevent="handleSubmit">
                  <Dropdown
                      v-model="selectedAmount"
                      :options="amountOptions"
                      placeholder="Chọn mệnh giá"
                      label="Chọn mệnh giá"
                      id="amountDropdown"
                  />
                  <div class="mb-3">
                    <label for="quantity" class="form-label">Số lượng</label>
                    <input type="number" id="quantity" v-model="quantity" class="form-control"
                           :class="{ 'is-invalid': quantityError }"
                           required/>
                    <div v-if="quantityError" class="alert alert-danger mt-1" role="alert">{{ quantityError }}</div>
                  </div>
                  <div class="mb-3">
                    <label for="password2" class="form-label">Mật khẩu cấp 2</label>
                    <input type="password" id="password2" v-model="password2" class="form-control"
                           required/>
                  </div>
                  <button type="submit" class="btn btn-primary mt-3">Đồng ý</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-header">
                <b>Danh sách thẻ</b>
              </div>
              <div class="card-body">

              </div>
            </div>
          </div>
          <div class="col-md-4">
            <p>
              <b><i class="bi bi-joystick"></i> Lịch sử giao dịch</b>
            </p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <td class="text-center">SL</td>
                  <td class="text-center">Loại thẻ</td>
                  <td class="text-center">Thời gian</td>
                </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
import { ref } from 'vue'
import Dropdown from "~/components/Dropdown.vue";

const options = [
  { value: 'viettel', name: 'Viettel', image: '/images/vt.png' },
  { value: 'mobifone', name: 'Mobifone', image: '/images/mb-h.png' },
  { value: 'vinaphone', name: 'Vinafone', image: '/images/vn-h.png' },
  { value: 'zing', name: 'Zing', image: '/images/zing-h.png' },
  { value: 'gate', name: 'Gate', image: '/images/gate-h.png' },
  { value: 'vnmobile', name: 'VNMobile', image: '/images/vnmobile.png' },
  { value: 'garena', name: 'Garena', image: '/images/garena.png' },
  { value: 'bit', name: 'Bit', image: '/images/bit.png' },
  { value: 'funcard', name: 'FunCard', image: '/images/funcard.png' },
  { value: 'iflix', name: 'Iflix', image: '/images/iflix.png' },
  { value: 'oncash', name: 'OnCash', image: '/images/oncash.png' },
  { value: 'sohacoin', name: 'SohaCoin', image: '/images/SohaCoin.png' },
  { value: 'vcoin', name: 'VCoin', image: '/images/vcoin.png' },
  { value: 'megacard', name: 'MegaCard', image: '/images/megacard.png' },
  { value: 'scoin', name: 'Scoin', image: '/images/scoin.png' }
]

// State to track the selected option
const selectedOption = ref(options[0])
const selectedAmount = ref('')
const quantity = ref<number | null>(null) // Quantity must be a number
const quantityError = ref('') // To store quantity validation errors
const password2 = ref('')
let amountOptions : { value: string; name: string }[] = []

// Function to handle option selection
const selectOption = (option) => {
  selectedOption.value = option
  setAmountOption(option.name)
}

const setAmountOption = (optionName) => {
  amountOptions = [
    { value: optionName + '-' + '10', name: optionName + ' ' + '10'},
    { value: optionName + '-' + '20', name: optionName + ' ' + '20'},
    { value: optionName + '-' + '50', name: optionName + ' ' + '50'},
    { value: optionName + '-' + '100', name: optionName + ' ' + '100'},
    { value: optionName + '-' + '200', name: optionName + ' ' + '200'},
    { value: optionName + '-' + '500', name: optionName + ' ' + '500'},
  ]
}

// Initialize default amount options when the component is mounted
onMounted(() => {
  setAmountOption(selectedOption.value.name)
})

// Function to check if an option is selected
const isSelected = (option) => {
  return selectedOption.value && selectedOption.value.value === option.value
}

const validateQuantity = () => {
  if (quantity.value === null || quantity.value <= 0) {
    quantityError.value = 'Số lượng phải lớn hơn 0'
    return false
  }
  quantityError.value = '' // Clear the error if valid
  return true
}

// Handle form submission and validation
const handleSubmit = () => {
  if (validateQuantity()) {
    alert('Form submitted successfully!')
    // Proceed with form submission logic
  }
}
</script>

<style scoped>
.is-invalid {
  border-color: red;
}
</style>