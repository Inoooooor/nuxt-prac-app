<template>
  <Head>
    <Title>Nuxt Prac {{ product.title }}</Title>
    <Meta
      name="description"
      :content="product.description"
    />
  </Head>
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

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true })
}
</script>

<style lang="scss" scoped></style>
