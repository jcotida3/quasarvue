<template>
  <q-page class="q-pa-none">

    <div class="row" style="min-height: 100vh;">
      <!-- LEFT COLUMN -->
      <q-card
        class="col-12 col-md-6 flex flex-center bg-white text-black q-pa-xl"
        style="min-height: 100vh;"
      >
        <div class="text-center" style="max-width: 350px;">
          <!-- Logo -->
          <q-img
            src="/images/upheader.png"
            style="width: 120px; height: 120px;"
            class="q-mb-lg"
          />

          <!-- Welcome Text -->
          <div class="text-h6 q-mb-md">
            Welcome to the UP Cebu Academic Management Information System
          </div>

          <div class="text-subtitle2 q-mb-lg">Version</div>

          <!-- Login Button -->
          <q-btn
            label="Login with UPmail"
            color="red-10"
            unelevated
            class="full-width q-mb-lg"
          />

          <div class="text-caption q-mb-md">
            <strong>For Mac users:</strong> Please use the Chrome browser, as Safari is not currently supported. 
            If you are unable to log in using your UP Mail, accomplish this AMIS support form to notify us: 
            <a href="https://support.upcebu.edu.ph/" target="_blank">https://support.upcebu.edu.ph/</a>
          </div>

          <div class="text-caption">
            To help you get started, we will be conducting a series of AMIS user training sessions. Updates on the schedule will be provided soon. 
            Additionally, <strong>UVEC class</strong> will be made available as a <strong>resource hub</strong> for reference materials and guides.
          </div>
        </div>
      </q-card>

      <!-- RIGHT COLUMN -->
      <q-card
  class="col-12 col-md-6 flex flex-center bg-primary text-black q-pa-md"
  style="min-height: 100vh; overflow-y: auto;"
>
  <div style="max-width: 400px; width: 100%;" class="bg-white q-pa-lg">
    <div class="text-h6 q-mb-md" style="color:#8B2233;">
      Schedule for Activities
    </div>
    <q-separator 
    color="primary"
    size="1px"
    class="q-my-md" />

    <!-- Activity Card 1 -->
    <q-card flat bordered class="q-mb-md" style="background-color: white; color:black;">
      <q-card-section>
        <div id="title" class=" bg-primary rounded-borders text-subtitle1 q-mb-sm">1st Semester SY 2025-2026 (1251)</div>
        <div class="text-caption">
          <strong>Undergraduate and other Graduate Programs:</strong><br>
          Classes begin August 11, 2025
        </div>
      </q-card-section>
    </q-card>

    <!-- Activity Card 2 -->
    <q-card flat bordered class="q-mb-md" style="background-color:white; color:black;">
      <q-card-section>
        <div id="title" class="bg-primary rounded-borders text-subtitle1 q-mb-sm">1st Trimester SY 2025-2026 (1254)</div>
        <div class="text-caption">
          <strong>MBA Program:</strong><br> Classes begin August 11, 2025<br>
          <strong>Master of Education Program:</strong><br> Classes begin August 11, 2025
        </div>
      </q-card-section>
    </q-card>

    <!----Calendars---->
    <div class="text-h6" style="color:#8B2233;">
      Calendars
    </div>
    <q-separator 
    color="primary"
    size="1px"
    class="q-my-md" />
    <div class="q-gutter-md q-mt-sm">
    <q-card flat bordered class="bg-primary rounded-borders text-subtitle1">
      <div class="text-caption text-white q-py-sm">
          2025-2026 UP Cebu Academic:<br>Calendar (Semestral for Undergraduate and Graduate Programs except MBA and MEd) <br>
        </div> 
    </q-card>
    <q-card flat bordered class="bg-primary rounded-borders text-subtitle1">
      <div class="text-caption text-white q-py-sm">
          2025-2026 UP Cebu Academic:<br>Calendar (Semestral for Undergraduate and Graduate Programs except MBA and MEd) <br>
        </div> 
    </q-card>
    </div>
  </div>
</q-card>
    </div>

  </q-page>
</template>

<style scoped>
.q-page {
  overflow-x: hidden;
}
#title {
  border-radius: 15px;
  padding-left: 10px;
  color: white;
}


.text-caption {
  padding-left: 10px;
}
</style>
