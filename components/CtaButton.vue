<template>
  <div>
    <a
      :href="route"
      class="bg-primary-500 flex transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 rounded-md p-3 px-6 relative text-primary-0 font-base"
      no-prefetch
    >
      Rent Now
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  route: {
    type: String,
    default: "/",
  },
});
</script>

<style lang="scss" scoped></style>
