<template>
      <q-toolbar class="my-header">
        <q-btn flat dense round icon="menu" @click="$emit('toggle-drawer')" />

        <q-toolbar-title>AMIS</q-toolbar-title>
      </q-toolbar>
</template>

<style>
  .my-header {
  background-color: #800008 !important;
  color: white;
}
</style>
<script setup>
defineEmits(['toggle-drawer'])
</script>

