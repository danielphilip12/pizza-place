<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Pizza Place</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-link bg-info me-2 rounded" to="/">Home</RouterLink>
            <RouterLink class="nav-link bg-info me-2 rounded" to="/orders">Orders</RouterLink>
            <RouterLink class="nav-link bg-info me-2 rounded" to="/neworder">New Order</RouterLink>
            <RouterLink class="nav-link bg-info me-2 rounded" to="/about">About</RouterLink>
            <!-- <RouterLink class="nav-link" to="/">Pricing</RouterLink> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>

<!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
