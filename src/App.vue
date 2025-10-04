<script setup lang="ts">
import { getProducts } from './api/getProducts'
import { computed, onMounted, ref } from 'vue'

const inputValue = ref('')
const items = ref([])

onMounted(async () => {
  const res = await getProducts()
  items.value = res.products
})
const productListWithFilters = computed(() => {
  const searchValue = inputValue.value.toLowerCase()

  if (!items.value.length) return
  return items.value.filter((item) => item.name.toLowerCase().includes(searchValue))
})
</script>

<template>
  <el-input v-model="inputValue" style="width: 240px" placeholder="Please search your products" />
  <el-descriptions>
    <el-descriptions-item v-for="item in productListWithFilters" :key="item.id">
      {{ item.name }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<style scoped></style>
