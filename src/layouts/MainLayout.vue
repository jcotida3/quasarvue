<script setup>
import { ref } from 'vue'
import MainHeader from 'components/MainHeader.vue'


const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}


</script>

<template>
  <q-layout view="hHh lpR fFf">

    <!-- Use the header component -->
    <MainHeader @toggle-drawer="toggleLeftDrawer" />

    <q-drawer show-if-above v-model="leftDrawerOpen" bordered>
      <q-list>

        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-expansion-item group="nav" label="Sample" icon="assignment">
          <q-list padding>
            <q-item  to="/profile" clickable v-close-popup exact><q-item-section>Test 1</q-item-section></q-item>
            <q-item clickable v-close-popup><q-item-section>Test 2</q-item-section></q-item>
            <q-item clickable v-close-popup><q-item-section>Test 3</q-item-section></q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item group="nav" label="Sample" icon="assignment">
          <q-list padding>
            <q-item clickable v-close-popup><q-item-section>Test 2</q-item-section></q-item>
            <q-item clickable v-close-popup><q-item-section>Test 3</q-item-section></q-item>
          </q-list>
        </q-expansion-item>
        <!-- Add other drawers as before -->

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>



<style setup>

</style>
