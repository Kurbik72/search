<script setup lang="ts">
import { getProducts } from './api/getProducts'
import { onMounted, ref, watch } from 'vue'

const inputValue = ref('')
const items = ref([])

onMounted(async () => {
  const res = await getProducts()
  items.value = res.products
})
watch(inputValue, (newVal) => {
  if (!items.value.length) return
  const sortedList = items.value.filter((item) =>
    item.name.toLowerCase().includes(newVal.toLowerCase()),
  )
  console.log(sortedList)
})
</script>

<template>
  <el-input v-model="inputValue" style="width: 240px" placeholder="Please search your products" />
  <el-descriptions>
    <el-descriptions-item v-for="item in items" :key="item.id">
      {{ item.name }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<style scoped></style>
