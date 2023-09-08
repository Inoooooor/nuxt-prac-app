<template>
  <div>
    <p>Product details for next id {{ id }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
})
const { id } = useRoute().params
</script>

<style lang="scss" scoped></style>
