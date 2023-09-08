<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Go Home</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container mx-auto p-4">
    <slot />
  </div>
  <footer class="shadow-sm bg-white">
    <ul class="container mx-auto p-4 flex justify-around gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
