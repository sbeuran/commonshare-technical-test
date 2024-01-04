<template>
  <div>
    <div class="flex justify-between my-8 font-bold">
      <h1 class="text-secondary-300">{{ heading }}</h1>
      <a v-if="showViewAll" href="" class="text-primary-500 text-sm">View All</a>
    </div>
    <div class="flex flex-wrap gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  showViewAll: {
    type: Boolean,
    required: false,
    default: false,
  },
  horizontalScroll: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
