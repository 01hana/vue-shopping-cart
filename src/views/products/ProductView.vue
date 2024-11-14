<script setup>
import MeneList from './MeneList.vue'
import ProductGrid from './ProductGrid.vue'
</script>

<template>
  <v-container fluid>
    <v-row class="ga-4">
      <v-col cols="12" md="3" lg="2" offset-lg="1">
        <MeneList />
      </v-col>

      <v-col cols="12" md="8">
        <ProductGrid />
      </v-col>
    </v-row>
  </v-container>
</template>
