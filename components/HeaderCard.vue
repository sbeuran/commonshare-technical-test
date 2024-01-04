<template>
  <div
    class="rounded-lg shadow-md p-4 relative flex flex-col gap-4 max-w sm:max-w-sm lg:max-w-2xl lg:p-8"
    :class="{
    'transition-all ease-in-out duration-300 hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg': detailPage,
    'bg-primary-500': darkBlueBG,
    'bg-information-500': !darkBlueBG
  }"
  >
    <h3 class="text-white z-10 relative font-semibold text-2xl lg:leading-10 lg:text-3xl lg:w-4/6">
      {{ heading }}
    </h3>
    <div class="text-white z-10 relative text-md w-4/5 lg:w-4/6 lg:leading-8">
      {{ subheading }}
    </div>
    <div class="my-4" :class="heading.length === 0 ? 'm-0' : 'lg:mb-28'">
      <button
        v-if="showCta"
        class="rounded-md z-10 relative p-4 px-8 text-primary-0 font-base"
        :class="darkBlueBG ? 'bg-information-500' : 'bg-primary-500'"
      >
        Rental Car
      </button>
    </div>
    <img
      :src="carImageUrl"
      class="mx-auto lg:absolute z-10 relative lg:bottom-0 lg:left-0 lg:right-0"
      :class="{ 
        'w-3/5': !detailPage,
        'w-full object-cover h-full rounded-md': detailPage && !carImageUrl.includes('.avif'),
      }"
      alt=""
    />
    <img
      :src="backgroundImageUrl"
      class="mx-auto absolute bottom-0 w-full h-full left-0 object-cover right-0"
      alt=""
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showCta: {
    type: Boolean,
    default: true,
  },
  carImageUrl: {
    type: String,
    default: "/placeholder.png",
  },
  backgroundImageUrl: {
    type: String,
  },
  darkBlueBG: {
    type: Boolean,
    default: false,
  },
  heading: {
    type: String,
    default: "The Best Platform for Car Rental",
  },
  subheading: {
    type: String,
    default: "Ease of doing a car rental safely and reliably. Of course at a low price.",
  },
  detailPage: {
    type: Boolean,
    default: false,
  },
});

</script>

<style lang="scss" scoped></style>
