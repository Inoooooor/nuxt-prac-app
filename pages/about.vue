<template>
  <div class="">ABOUT</div>
  <div>{{ data }}</div>
</template>
<script setup>
const { data } = useFetch("/api/currency/GBP")
</script>
<style lang="css"></style>
