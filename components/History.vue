<template>
  <form>
    <div class="row d-flex">
      <div class="col-md-2">
        <Dropdown
            v-model="selectedStatus"
            :options="statusDropdown"
            placeholder="Tất cả"
            id="statusDropdown"
        />
      </div>
      <div class="col-md-4">
        <input class="form-control" type="text" placeholder="Tìm kiếm">
      </div>
      <div class="col-md-2">
        <input class="form-control" type="date" id="start_date">
      </div>
      <div class="col-md-2">
        <input class="form-control" type="date" id="end_date">
      </div>
      <div class="col-md-2">
        <button class="form-control btn btn-primary" id="search">Tìm kiếm</button>
      </div>
    </div>
  </form>
  <div class="row">
    <div class="col-md-6">
      <span class="text-primary">Tổng nạp:</span>
      <span class="text-primary mx-4">Thực nhận:</span>
      <span class="text-primary mx-3">Xem thống kê: <b><a href="#">Tại đây</a></b></span>
    </div>
  </div>
  <div class="table-responsive mt-2">
    <table class="table table-bordered">
      <tr class="thead">
        <tr>
          <th v-for="column in columns" :key="column.key">
            {{ column.label }}
          </th>
        </tr>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from "~/components/Dropdown.vue";
// Props to accept dynamic data
const props = defineProps({
  statusDropdown: {
    type: Array,
    default: () => [
      { value: 'success', name: 'Thành công' },
      { value: 'failed', name: 'Thất bại' }
    ]
  },
  columns: {
    type: Array,
    default: () => [
      { key: 'id', label: 'ID' },
      { key: 'transaction', label: 'Transaction' },
      { key: 'amount', label: 'Amount' },
      { key: 'status', label: 'Status' },
    ]
  }
})
// Variables for v-model bindings and state
const selectedStatus = ref('')
</script>

<style scoped>

</style>