<script setup>
import { lists } from '@/data/products'

const activeItem = ref('all')
const firstPanel = ref(0)

function changeItem(id) {
  activeItem.value = id
}
</script>

<template>
  <section class="left-col-wrap">
    <aside class="left-col">
      <v-expansion-panels
        flat
        v-model="firstPanel"
        expand-icon="mdi-menu-down"
        collapse-icon="mdi-menu-up"
        multiple
      >
        <v-expansion-panel
          v-for="{ id, title, children } in lists"
          :key="id"
          class="ma-0"
          :hide-actions="!children"
        >
          <v-expansion-panel-title
            class="font-weight-bold"
            :class="{
              'text-primary': activeItem == id
            }"
            @click="changeItem(id)"
          >
            {{ title }}
          </v-expansion-panel-title>

          <v-expansion-panel-text v-if="children">
            <v-list class="py-0">
              <v-list-item
                v-for="{ id, title } in children"
                :key="id"
                :class="{
                  'text-primary': activeItem == id
                }"
                @click="changeItem(id)"
              >
                {{ title }}
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </aside>
  </section>
</template>

<style scoped>
:deep(.v-list-item--active > .v-list-item__overlay),
:deep(.v-list-item:hover > .v-list-item__overlay) {
  opacity: 0;
}

:deep(
    .v-expansion-panel--active
      > .v-expansion-panel-title:not(.v-expansion-panel-title--static)
  ),
:deep(.v-list-item--density-default.v-list-item--one-line) {
  min-height: 38px;
}

:deep(.v-expansion-panel-text__wrapper) {
  padding-bottom: 0;
  padding-top: 0;
}

:deep(.v-expansion-panel-title:hover > .v-expansion-panel-title__overlay) {
  opacity: 0;
}

:deep(.v-list-item:hover) {
  color: rgb(var(--v-theme-primary));
}

@media screen and (width > 960px) {
  .left-col {
    border-right: 1px solid #eee;
  }

  .left-col-wrap {
    position: sticky;
    top: 110px;
  }

  .left-col {
    max-height: calc(100vh - 210px);
    height: calc(100vh - 230px);
    overflow-y: auto;
  }

  .left-col::-webkit-scrollbar {
    width: 7px;
  }

  .left-col::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }

  .left-col::-webkit-scrollbar-track {
    background: #eee;
    border-radius: 10px;
  }
}
</style>
