<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="my-header text-black">
      <q-toolbar class="row items-center q-gutter-x-md">
      
      <!-- Menu button -->
      <q-btn class="q-mr-md" dense flat round icon="menu" @click="toggleLeftDrawer" />
      <div class="text-h6 text-md-h5 text-lg-h4">AMIS</div>
      <q-space/>

      <q-avatar>
      <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png">
      </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" bordered>
  <q-list>

    <q-item clickable v-ripple @click="navigate('/')">
      <q-item-section avatar>
        <q-icon name="dashboard" />
      </q-item-section>
      <q-item-section>Dashboard</q-item-section>
    </q-item>

    <!-- First dropdown -->
    <q-expansion-item group="nav" label="Sample" icon="assignment">
      <q-list padding>
        <q-item clickable v-close-popup>
          <q-item-section>Test 1</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Test 2</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Test 3</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <!-- Second dropdown -->
    <q-expansion-item group="nav" label="Test" icon="assignment">
      <q-list padding>
        <q-item clickable v-close-popup>
          <q-item-section>Test A</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Test B</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Test C</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <!-- Third dropdown -->
    <q-expansion-item group="nav" label="Another Test" icon="assignment">
      <q-list padding>
        <q-item clickable v-close-popup>
          <q-item-section>Item X</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Item Y</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Item Z</q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </q-list>
</q-drawer>

  <q-page-container>
  <router-view></router-view>
</q-page-container>



  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style setup>

  .my-header {
    background-color: #F3F4F6;
  }

  .full-avatar {
  width: 120px;        /* set desired width */
  height: auto;        /* adjust height automatically */
  border-radius: 0;    /* remove circular crop */
}

.full-avatar img {
  width: 100%;
  height: auto;        /* keep aspect ratio */
  object-fit: contain; /* show full image without cropping */
}
</style>
<!-- 
<q-page class="bg-grey-1">
  <div class="q-pa-md"> 
    <p class="text-h6 text-md-h5 text-lg-h4">Good Morning!</p>
    <p>Warren Miguel</p>
    <q-card class="q-mb-md bg-yellow-1">
      <q-card-section class="q-pa-lg row q-gutter-x-md">Card 1 Content
        <div class="flex">
        <q-card class="bg-red-1">Another Content</q-card>
        <q-card class="bg-red-1">Another Content</q-card>
        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>Card 2 Content</q-card-section>
    </q-card>

  </div>
</q-page> -->