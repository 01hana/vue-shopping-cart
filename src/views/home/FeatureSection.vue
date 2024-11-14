<script setup>
import { featuredItems } from '@/data/index'

import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>

<template>
  <v-container>
    <div class="position-relative">
      <h1 class="heading text-center mb-10">Featured</h1>
    </div>
    <v-row>
      <v-col v-for="item in featuredItems" :key="item.title" cols="6" md="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            :elevation="isHovering ? 6 : 2"
          >
            <router-link to="/products" class="text-decoration-none">
              <v-img :src="item.img" cover :height="mdAndUp ? 300 : auto">
                <v-card-title class="text-h6 text-white d-flex flex-column">
                  <p class="mt-4">
                    {{ item.title }}
                  </p>

                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold">
                      {{ item.text }}
                    </p>
                  </div>
                </v-card-title>
              </v-img>
            </router-link>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 2.5rem;
}

.heading::after {
  content: 'Categories';
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
