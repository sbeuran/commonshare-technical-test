<template>
  <div class="bg-primary-0 rounded-lg h-full shadow-md p-4 flex flex-col gap-8 sm:max-w-sm">
    <!-- top part of card -->
    <div>
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">{{ car.name }}</div>
        <Icon
          name="mdi:heart"
          class="w-8 h-8 transition-all duration-300 ease-in-out hover:text-red-500 hover:cursor-pointer hover:scale-110"
          :class="carsStore.isCarLiked(car) ? 'text-red-500' : 'text-secondary-300'"
          @click="toggleLike"
        ></Icon>
      </div>

      <div class="text-secondary-300 text-lg font-medium">{{ car.type }}</div>
    </div>
    <div :class="{ flex: wideCard }">
      <div class="relative w-4/5 mx-auto mb-8" :class="{ 'pr-10': wideCard }">
        <img :src="car.img" alt="" class="w-50" />
        <div
          class="absolute bottom-0 h-1/2 inset-x-0 bg-gradient-to-t from-white to-transparent"
        ></div>
      </div>
      <!-- car attributes -->
      <div
        class="flex text-secondary-300 font-medium"
        :class="{
          'flex-col w-1/3 justify-center gap-y-4': wideCard,
          'justify-between': !wideCard,
        }"
      >
        <!-- tank capacity -->
        <div class="flex items-center gap-x-1">
          <Icon name="mdi:gas-station" class="w-5 h-5" />
          <div>{{ car.gasolineLiter }}L</div>
        </div>
        <!-- driving type -->
        <div class="flex items-center gap-x-1">
          <Icon name="mdi:steering" class="w-5 h-5"></Icon>
          <div>{{ car.kindOfTransition }}</div>
        </div>
        <!-- seat number -->
        <div class="flex items-center gap-x-1">
          <Icon name="mdi:account-multiple" class="w-5 h-5"></Icon>
          <div>{{ car.people }} People</div>
        </div>
      </div>
    </div>
    <!-- price and cta button -->
    <div class="flex justify-between items-end">
      <!-- car price -->
      <div class="font-bold text-xl">
        <div>
          ${{ car.pricePerDay }} / <span class="text-secondary-300 text-base">day</span>
        </div>
        <div class="line-through text-secondary-300 text-base mt-1 hidden">
          ${{ car.pricePerDay }}
        </div>
      </div>

      <!-- cta button -->
      <CtaButton :route="'/car/' + car.id"></CtaButton>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useCarsStore } from "@/stores/cars";
const carsStore = useCarsStore();

const props = defineProps({
  wideCard: {
    type: Boolean,
    default: true,
  },
  car: {
    type: Object,
    required: true,
  },
});

function toggleLike() {
  if (carsStore.isCarLiked(props.car)) {
    carsStore.unlikeCar(props.car);
  } else {
    carsStore.likeCar(props.car);
  }
}

</script>
