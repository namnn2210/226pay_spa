<!-- components/Header.vue -->
<template>
  <div class="container-sm p-3">
    <div class="row align-items-center">
      <div class="col-md-6">
        <a href="/" class="navbar-brand">
          <img src="/logo.png" alt="Logo" height="40">
        </a>
      </div>
      <div class="col-md-6 text-end">
        <!-- Login Form -->
        <form class="d-inline-flex">
          <div class="me-2">
            <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                placeholder="Tài khoản"
                aria-label="Username"
            />
          </div>
          <div class="me-2">
            <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Mật khẩu"
                aria-label="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="bg-light">
    <div class="container px-0">
      <nav class="navbar navbar-expand-lg d-flex navbar-light">
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 d-flex justify-content-center">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Đổi thẻ</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/qrpay">QR Pay (Momo & Bank)</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/buy-card">Mua thẻ</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/search">Tra cứu</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/api">Tích hợp API</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/payment">Thanh toán</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/account">Tài khoản</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>




</template>

<script setup>
// No script needed for basic setup
</script>

<style scoped>
/* Optional custom styles for your navbar */
</style>
