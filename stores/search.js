import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    searchValue: "",
  }),
  actions: {
    updateSearchValue(newValue) {
      this.searchValue = newValue;
    },
  },
  persist: true,
});
