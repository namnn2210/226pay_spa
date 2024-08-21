<template>
  <div class="mb-3">
    <select :id="id" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" class="form-select" required>
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,  // The bound value passed from parent
  options: {
    type: Array,
    required: true,  // The options array passed from parent
    default: () => []
  },
  placeholder: {
    type: String,
    default: 'Select an option'  // Default placeholder
  },
  label: {
    type: String,
    default: 'Select'  // Default label
  },
  id: {
    type: String,
    default: 'dropdown'  // Default ID for the dropdown
  }
})

const emit = defineEmits(['update:modelValue'])  // Declare the emit for v-model compatibility
</script>

<style scoped>
/* Add custom styles here if necessary */
</style>
