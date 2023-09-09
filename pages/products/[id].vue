<template>
  <ProductDetails :product="product" />
</template>

<script setup>
definePageMeta({
  layout: "products",
})
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

//fetch the product

const { data: product } = await useFetch(uri, { key: id })
</script>

<style lang="scss" scoped></style>
