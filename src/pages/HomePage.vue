<template>
  <q-page class="row no-wrap" style="min-height: 100vh;">

    <!-- Left Column: Login -->
    <div class="col-12 md:col-6 flex flex-center" style="background-color: #800000;">
      <div class="q-pa-md" style="max-width: 400px; width: 100%;">
        <!-- Logo -->
        <q-img src="images/upheader.png" class="q-mb-lg" style="width: 150px; height: 150px;" />

        <!-- Title -->
        <div class="text-h6 q-mb-md text-white text-center">
          Welcome to UP Cebu AMIS
        </div>

        <!-- Login Button -->
        <q-btn
          label="Login with UPmail"
          unelevated
          style="width: 100%; background-color: white; color: #800000;"
        />

        <!-- Mac users notice -->
        <div class="text-subtitle2 q-mt-md text-white text-center">
          <strong>For Mac users:</strong> Please use Chrome.  
          <q-btn flat label="Support Form" class="text-white q-ml-xs" target="_blank" href="https://support.upcebu.edu.ph/" />
        </div>
      </div>
    </div>

    <!-- Right Column: Single Announcement Card -->
    <div class="col-12 md:col-6 flex flex-center" style="background-color: #f5f5f5;">
      <div class="q-pa-md" style="max-width: 500px; width: 100%;">
        <div class="text-h6 q-mb-md text-center">Announcement</div>

        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-subtitle1">AMIS Training</div>
            <div class="text-caption">Dec 15, 2025</div>
            <div class="q-mt-sm">Training session for AMIS users.</div>
          </q-card-section>
        </q-card>
        
      </div>
    </div>

  </q-page>
</template>

<script setup>
// No functions, no interactivity — purely a template design
</script>

<style>
/* Optional: ensure full height for the layout */
html, body, #q-app {
  height: 100%;
}
</style>
