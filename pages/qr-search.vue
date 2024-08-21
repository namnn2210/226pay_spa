<template>
  <div class="card h-100">
    <div class="card-header">
      <b class="card-title">Lịch sử nạp tiền</b>
    </div>
    <div class="card-body">
      <History :columns="columns"/>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
import {ref} from 'vue'
import History from '~/components/History.vue'

const columns = ref([
  { key: 'id', label: 'STT' },
  { key: 'transaction_number', label: 'Mã giao dịch' },
  { key: 'bank_name', label: 'Ngân hàng' },
  { key: 'amount', label: 'Mệnh giá' },
  { key: 'amount_receive', label: 'Thực nhận' },
  { key: 'final_balance', label: 'Số dư cuối' },
  { key: 'start_date', label: 'Bắt đầu' },
  { key: 'end_date', label: 'Kết thúc' },
  { key: 'note', label: 'Ghi chú' },
  { key: 'status', label: 'Trạng thái' },
])
</script>

<style scoped>

</style>