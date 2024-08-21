<template>
  <div class="card h-100">
    <div class="card-header">
      <b class="card-title">Lịch sử giao dịch</b>
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
  { key: 'card_code', label: 'Mã thẻ' },
  { key: 'card_serial', label: 'Mã seri' },
  { key: 'card_type', label: 'Loại thẻ' },
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