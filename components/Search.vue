<template>
  <div class="basis-9/12 relative">
    <input
      @input="updateSearchValue"
      v-model="searchValue"
      type="text"
      class="rounded-full text-secondary-400 w-full border border-gray-200 text-sm px-4 py-3 pl-10 transition-all ease-in-out duration-300 focus:outline-primary-500"
      placeholder="Search something here..."
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-secondary-400 absolute top-3 left-3"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSearchStore } from '~/stores/search';

export default {
  setup() {
    const searchValue = ref("");
    const searchStore = useSearchStore();

    function updateSearchValue() {
      searchStore.updateSearchValue(searchValue.value);
    }

    return {
      searchValue,
      updateSearchValue,
    };
  },
};
</script>
