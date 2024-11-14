<script setup>
import { productItems } from '@/data/index'
</script>

<template>
  <v-container>
    <div class="position-relative">
      <h1 class="heading text-center mb-10">New In</h1>
    </div>
    <v-row>
      <v-col
        v-for="item in productItems"
        :key="item.title"
        cols="6"
        md="4"
        lg="3"
      >
        <v-card elevation="0" class="text-center">
          <router-link
            :to="`/products/${item.id}`"
            class="text-decoration-none"
          >
            <v-img :src="item.img" cover height="290" />
          </router-link>

          <v-card-title class="text-body-1 font-weight-bold">{{
            item.title
          }}</v-card-title>

          <v-card-subtitle class="text-subtitle-1 text-black">
            NT.{{ item.price }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          variant="outlined"
          text="See more products"
          rounded
          append-icon="mdi-arrow-right-thin"
          to="/products"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 2.5rem;
}

.heading::after {
  content: 'Products';
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 5rem;
  line-height: 1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.04);
  writing-mode: horizontal-tb;
  font-family: Verdana, sans-serif;
}

.v-container {
  padding: 100px 0;
}
</style>
