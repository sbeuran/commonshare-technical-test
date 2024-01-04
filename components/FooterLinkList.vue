<template>
  <ul class="flex flex-col gap-y-4 my-8">
    <li class="font-bold text-2xl">{{ heading }}</li>
    <li class="text-secondary-300" v-for="link in links" :key="link.url">
      <a :href="link.url">{{ link.label }}</a>
    </li>
  </ul>
</template>

<script setup>
// Define the prop
const props = defineProps({
  links: {
    type: Array,
    required: true,
    default: () => [],
  },
  heading: { type: String, required: true },
});
</script>

<style lang="scss" scoped></style>
