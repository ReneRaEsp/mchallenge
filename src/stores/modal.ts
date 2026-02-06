import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isShowed: false,
  }),
  actions: {
    hideModal() {
      this.isShowed = false;
    },
    showModal() {
      this.isShowed = true;
    },
  },
});
