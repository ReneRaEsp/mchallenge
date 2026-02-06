import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isActive: false,
  }),
  actions: {
    hideModal() {
      this.isActive = false;
    },
    showModal() {
      this.isActive = true;
    },
  },
});
