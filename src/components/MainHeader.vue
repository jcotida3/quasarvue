<template>
  <q-header class=" my-header text-black">
    <q-toolbar class="row items-center q-gutter-x-md">
      
        <q-btn class="q-mr-md" dense flat round icon="menu" @click="$emit('toggle-drawer')" />        
     
       <img src="/images/upheader.png" class="logo-image" />
        <div class="text-h6 text-md-h5 text-lg-h4">AMIS</div>
  <q-space/>
      <q-avatar class="bg-white full-avatar">
        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
      </q-avatar>

    </q-toolbar>
  </q-header>
</template>


<script setup>
// No internal state needed; emits toggle event for drawer
</script>
<style scoped>
.my-header {
  background-color: #F3F4F6;
}
.logo-image {
  width: 40px;      /* set desired width */
  height: auto;     /* maintain aspect ratio */
}

/* Avatar styling */

</style>
