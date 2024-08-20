<template>
  <div class="radio-image-group">
    <label v-for="option in options" :key="option.value" class="radio-image-label">
      <div class="image-container">
        <!-- Radio button positioned inside the image, top-left corner -->
        <input type="radio" name="imageRadio" :value="option.value" :checked="modelValue === option.value" @change="$emit('update:modelValue', option.value)" class="radio-input" />
        <img :src="option.image" :alt="option.value" class="img-thumbnail" :class="{ selected: modelValue === option.value }"
        />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
// Props for receiving data
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})
// const options = [
//   { value: 'viettel', image: '/images/vt.png' },
//   { value: 'mobifone', image: '/images/mb-h.png' },
//   { value: 'vinaphone', image: '/images/vn-h.png' },
//   { value: 'zing', image: '/images/zing-h.png' },
//   { value: 'gate', image: '/images/gate-h.png' },
//   { value: 'vnmobile', image: '/images/vnmobile.png' },
//   { value: 'garena', image: '/images/garena.png' }
// ]
</script>

<style scoped>
.radio-image-label {
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
}

.image-container {
  position: relative;
  display: inline-block;
}

.radio-input {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1; /* Ensure radio button is on top of the image */
}

.img-thumbnail {
  border: 2px solid transparent;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.3s ease;
  width: 150px; /* Adjust image size */
  height: auto;
}

.img-thumbnail.selected {
  border-color: #007bff; /* Highlight the selected image with a blue border */
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
</style>
