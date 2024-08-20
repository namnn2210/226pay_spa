<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-md-6">
          <b class="card-title">Nạp tiền qua thẻ cào</b>
        </div>
        <div class="col-md-6 text-end">
          <b class="card-title">Tải module thích hợp</b>
        </div>
      </div>
    </div>
    <div class="card-body">
      <NapThe/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NapThe from '@/components/NapThe.vue' // Import the RadioImage component

const options = [
  {value: 'viettel', name: 'Viettel'},
  {value: 'mobifone', image: '/images/mb-h.png'},
  {value: 'vinaphone', image: '/images/vn-h.png'},
  {value: 'zing', image: '/images/zing-h.png'},
  {value: 'gate', image: '/images/gate-h.png'},
  {value: 'vnmobile', image: '/images/vnmobile.png'},
  {value: 'garena', image: '/images/garena.png'}
]
</script>

<style scoped>
.card-title {
  color: #06C
}
</style>