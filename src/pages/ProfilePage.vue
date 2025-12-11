<template>
  <q-page class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
  { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
  { name: 'age', label: 'Age', field: 'age', align: 'right', sortable: true },
]

const rows = ref([
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Alice Johnson', age: 28 },
])
</script>
