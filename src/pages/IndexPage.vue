<script setup>

</script>

<template>
  <q-page class="q-pa-lg">
    <div class="row q-gutter-md full-height">

      <div class="col-12 col-md-3 bg-white q-pa-md shadow-2" style="max-width: 280px; min-width: 250px;">
        
        <div class="q-mb-lg text-center">
          <q-avatar size="64px" color="black" text-color="white" icon="person" />
        </div>

        <q-list separator>
          <q-expansion-item group="nav"  label="Profile Information">
            <q-item clickable>Item</q-item>
            <q-item clickable>Item</q-item>
            <q-item clickable>Item</q-item>
          </q-expansion-item>
          <q-expansion-item group="nav" label="Profile Information">
            <q-item clickable>Item</q-item>
            <q-item clickable>Item</q-item>
            <q-item clickable>Item</q-item>
          </q-expansion-item>
          <q-expansion-item  group="nav" label="Profile Information">
            <q-item clickable>Item</q-item>
            <q-item clickable>Item</q-item>
            <q-item clickable>Item</q-item>
          </q-expansion-item>
          
        </q-list>
        <q-list>
          <q-expansion-item label="Test" clickable class="bg-yellow-1">
            <q-item clickable>
            <q-item-section class="bg-red-1">Test</q-item-section>
            <q-item-section side><q-icon name="home"/></q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </div>

      <div class="col-12 col-md bg-white q-pa-md shadow-2">
        <q-card flat class="q-pa-lg">
          
          <div class="row items-center q-mb-md">
            <div class="text-h6 text-weight-medium">
              Contact and Address Information
            </div>
            <q-icon name="edit" size="xs" color="blue" class="q-ml-sm cursor-pointer" />
          </div>
          
          <div class="q-mb-lg">
            <q-badge color="green-4" class="q-mr-sm">Primary</q-badge>
            <span class="text-subtitle1 text-weight-regular">Address</span>
            <div class="text-grey-7 q-mt-sm">-- No Active Primary Address Found --</div>
          </div>
          
          <div>
            <q-badge color="green-4" class="q-mr-sm">Primary</q-badge>
            <span class="text-subtitle1 text-weight-regular">Contact</span>
            <div class="text-grey-7 q-mt-sm">-- No Active Primary Contact Found --</div>
          </div>
          
        </q-card>
        <q-card class="bg-primary xs:full-width sm:w-1/2 md:w-1/3 lg:w-1/4">
  
</q-card>

      </div>

    </div>
  </q-page>
</template>

<style scoped>
/* Ensure the page uses the full viewport height */
.q-page {
  min-height: calc(100vh - 50px); /* Adjust 50px for Quasar header/footer if they exist */
}
</style>