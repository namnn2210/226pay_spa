<template>
  <div class="card h-100">
    <div class="card-header">
      <div class="row">
        <div class="col-md-6">
          <b class="card-title">Nạp tiền game, mobile, và các dịch vụ thẻ cào</b>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="mb-3">
          <p>
            <b><i class="bi bi-joystick"></i> Mua mã thẻ nhanh</b>
          </p>
          <p>
            <a href="#"><button class="btn btn-primary">Mua mã thẻ không cần đăng nhập</button></a>
            <a href="#" class="m-3 text-dark">Mua mã thẻ trực tuyến bằng Internet banking. </a>
          </p>
        </div>
        <div class="mb-3">
          <p>
            <b><i class="bi bi-joystick"></i> Nạp tự động</b>
          </p>
          <p>
            <a href="/topup"><button class="btn btn-primary">Nạp tiền điện thoại</button></a>
            <a href="/topup" class="m-3 text-dark">Nạp tiền điện thoại chiết khấu ưu đãi thao tác nhanh</a>
          </p>
        </div>
        <div class="mb-3">
          <p>
            <b><i class="bi bi-joystick"></i> Mã thẻ trực tuyến</b>
          </p>
          <div class="row justify-content-lg-start g-3 px-5">
            <div
                v-for="option in options"
                :key="option.value"
                class="col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-center"
            >
              <a href="/buy-card-detail">
                <button class="btn p-0">
                  <img :src="option.image" :alt="option.value" class="img-thumbnail" width="100" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '226Pay - Mua mã cào thẻ điện thoại',  // Set the title for this page
  meta: [
    { name: 'description', content: '226Pay - Mua mã cào thẻ điện thoại' }
  ]
})
const options = [
  {value: 'viettel', image: '/images/vt.png'},
  {value: 'mobifone', image: '/images/mb-h.png'},
  {value: 'vinaphone', image: '/images/vn-h.png'},
  {value: 'zing', image: '/images/zing-h.png'},
  {value: 'gate', image: '/images/gate-h.png'},
  {value: 'vnmobile', image: '/images/vnmobile.png'},
  {value: 'garena', image: '/images/garena.png'},
  {value: '3GVINA', image: '/images/3GVINA.png'},
  {value: 'bit', image: '/images/bit.png'},
  {value: 'datavms', image: '/images/DataVMS.png'},
  {value: 'funcard', image: '/images/funcard.png'},
  {value: 'iflix', image: '/images/iflix.png'},
  {value: 'oncash', image: '/images/oncash.png'},
  {value: 'sohacoin', image: '/images/SohaCoin.png'},
  {value: 'vcoin', image: '/images/vcoin.png'},
  {value: 'megacard', image: '/images/megacard.png'},
  {value: 'scoin', image: '/images/scoin.png'},
]
</script>

<style scoped>
.text-dark {
  text-decoration: none;
}

.img-thumbnail {
  max-width: 100px; /* Ensure images are not too large */
}

@media (max-width: 576px) {
  .img-thumbnail {
    max-width: 80px; /* Adjust image size for smaller screens */
  }
}

</style>
