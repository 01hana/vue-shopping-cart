<script setup>
import image from '@images/pattern/error.png'
</script>

<template>
  <v-empty-state title="Oops! You're lost." text="查詢的頁面不存在" :image>
    <v-btn prepend-icon="mdi-keyboard-return" variant="outlined" to="/">
      返回
    </v-btn>
  </v-empty-state>
</template>
