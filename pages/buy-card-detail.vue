<template>
  <div class="card">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

// Function to handle option selection
const selectOption = (option) => {
  selectedOption.value = option
}

// Function to check if an option is selected
const isSelected = (option) => {
  return selectedOption.value && selectedOption.value.value === option.value
}
</script>

<style scoped>
.card-title {
  color: #06C
}
</style>