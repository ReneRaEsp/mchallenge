import { defineStore } from "pinia";
import type { User } from "@/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[],
    loading: false,
  }),
  actions: {},
});
