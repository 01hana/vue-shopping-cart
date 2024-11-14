<script setup>
const {
  title = '',
  transition = '',
  icon = '',
  type = ''
} = defineProps({
  title: String,
  transition: String,
  icon: String,
  type: String
})

const isDialogOpen = defineModel()

const animationMap = {
  success: 'animate__animated animate__fadeInUp',
  info: 'animate__animated animate__zoomIn',
  warning: 'animate__animated animate__tada',
  error: 'animate__animated  animate__tada'
}

const animationClass = computed(() => animationMap[type])
</script>

<template>
  <v-dialog
    v-model="isDialogOpen"
    maxWidth="400"
    class="text-center mx-auto"
    :transition
    opacity="0.15"
  >
    <v-card rounded="0" class="pa-4">
      <v-card-text>
        <Transition appear :enter-active-class="animationClass">
          <v-icon class="mb-3" :icon size="75" />
        </Transition>

        <v-card-title class="font-weight-bold">{{ title }}</v-card-title>

        <slot name="content" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
