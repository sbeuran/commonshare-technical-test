import { defineStore } from "pinia";

export const useCarsStore = defineStore({
  id: "cars",
  state: () => ({
    likedCars: [],
  }),
  actions: {
    likeCar(car) {
      if (!this.likedCars.find((c) => c.id === car.id)) {
        this.likedCars.push(car);
      }
    },
    unlikeCar(car) {
      this.likedCars = this.likedCars.filter((c) => c.id !== car.id);
    },
    isCarLiked(car) {
      return this.likedCars.some((c) => c.id === car.id);
    },
  },
  persist: true,
});
