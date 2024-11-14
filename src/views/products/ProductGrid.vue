<script setup>
import { productsData } from '@/data/products'
</script>

<template>
  <v-row>
    <v-col
      cols="6"
      sm="6"
      md="4"
      lg="3"
      v-for="item in productsData"
      :key="item.id"
    >
      <v-card class="text-center" flat>
        <router-link :to="`/products/${item.id}`">
          <v-img height="auto" :src="item.img" cover />
        </router-link>

        <v-card-title>
          {{ item.title }}
        </v-card-title>

        <v-card-text>
          <span
            v-for="size in item.size"
            :key="size"
            v-text="size"
            class="mx-1"
          />
          <p class="mt-2">NT. {{ item.price }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
:deep(.v-card) {
  border-radius: 0;
}

:deep(.v-card-title) {
  font-size: 1rem;
  font-weight: 600;
}
</style>
