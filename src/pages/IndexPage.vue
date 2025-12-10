<template>
  <q-page class="q-pa-md">

    <!-- User Profile Card -->
    <q-card class="my-card q-pa-md" flat bordered>
      <q-card-section class="row items-center">
        <q-avatar size="56px" class="q-mr-md">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div>
          <div class="text-h6">Jacky Brown Salve</div>
          <div class="text-subtitle2">Student</div>
        </div>
      </q-card-section>
      
      <q-card-actions vertical>
        <q-btn 
          label="Profile Information"
          color="primary" 
          unelevated 
          @click="showProfile = !showProfile"
          icon="person"
        />
        <q-btn 
          label="Student Information" 
          color="secondary" 
          unelevated
          icon="school"
        />
      </q-card-actions>
    </q-card>

    <!-- Transitioned Profile Details -->
    <q-slide-transition>
      <q-card v-if="showProfile" class="q-mt-md q-pa-md" bordered>
        <q-card-section>
          <div class="text-h6">Personal Information</div>

          <q-separator class="q-my-sm" />

          <div><strong>Full Name:</strong> Jacky Brown Salve</div>
          <div><strong>Email:</strong> oppaichan6969@gmail.com</div>
          <div><strong>Civil Status:</strong> Single</div>
          <div><strong>Date of Birth:</strong> May 26, 2002</div>
          <div><strong>Sex Assigned at Birth:</strong> Female</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat round icon="add" color="primary"/>
        </q-card-actions>
      </q-card>
    </q-slide-transition>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const showProfile = ref(false);
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: auto;
  border-radius: 16px;
}
</style>
