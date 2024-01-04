<template>
  <div>
    <div class="flex gap-x-8">
      <HeaderCard 
        class="w-full md:1/2"
        heading="The Best Platform for Car Rental"
        subheading="Ease of doing a car rental safely and reliably. Of course at a low price."
        backgroundImageUrl="/BG_Rounded.svg"
        >
      </HeaderCard>
      <HeaderCard
        :darkBlueBG="true"
        heading="Sports car with the best design and acceleration"
        subheading="Safety and comfort while driving a futuristic and elegant sports car"
        backgroundImageUrl="/BG_Rectangle.svg"
        class="w-1/2 hidden md:block"
      ></HeaderCard>
    </div>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error fetching data.</p>
    </div>
    <div v-else>
      <CarCategory heading="Popular Cars" :showViewAll="true">
        <div v-for="car in filteredPopularCars" :key="car.id">
          <CarCard :car="car"></CarCard>
        </div>
      </CarCategory>

      <CarCategory heading="Recommendation Cars">
        <div v-for="car in filteredCars" :key="car.id">
          <CarCard :car="car"></CarCard>
        </div>
      </CarCategory>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { computed } from 'vue';
import { useSearchStore } from '~/stores/search';

const isLoading = ref(false);
const filteredPopularCars = ref([]);
const filteredCars = ref([]);
const searchStore = useSearchStore();


onMounted(() => {
  searchStore.updateSearchValue("");
})

const { data: cars, pending, error, refresh } = await useAsyncData(() =>
  $fetch("/api/cars")
);

const { data: popularCars } = await useAsyncData(() =>
  $fetch("/api/carspopular")
);


// Use a computed property to get the current search value
const currentSearchValue = computed(() => searchStore.searchValue);

watch(() => {
  const searchTerm = currentSearchValue.value.toLowerCase();
  filteredPopularCars.value = popularCars.value.filter(car => car.name.toLowerCase().includes(searchTerm));
  filteredCars.value = cars.value.data.filter(car => car.name.toLowerCase().includes(searchTerm));

  //console.log(popularCars)
  // Call your custom function here
  //yourCustomFunction(currentSearchValue.value);
});

</script>
