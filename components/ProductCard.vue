<template>
  <div class="card text-center">
    <img
      :src="product.image"
      :title="product.title"
      class="thumb h-1/2 object-contain"
    />
    <p class="title m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"])
</script>

<style scoped></style>
