<script setup>
import HeaderTop from './HeaderTop.vue'
</script>

<template>
  <v-layout>
    <v-container fluid class="pa-0">
      <HeaderTop />

      <v-main style="min-height: 300px" class="pa-6">
        <RouterView />
      </v-main>
    </v-container>
  </v-layout>
</template>
