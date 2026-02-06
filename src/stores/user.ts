import { defineStore } from "pinia";
import type { User } from "@/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: { id: null, name: "", username: "", email: "", phone: "" },
    users: [] as User[],
    loading: false,
  }),
  actions: {
    findUserById(id: number) {
      let user = this?.users.find((u) => u.id === id);
      if (typeof user?.name == "string") {
        this.user.name = user.name;
      }
      if (typeof user?.username == "string") {
        this.user.username = user.username;
      }
      if (typeof user?.email == "string") {
        this.user.email = user.email;
      }
      if (typeof user?.phone == "string") {
        this.user.phone = user.phone;
      }
    },
    findUserByIdAndDelete(id: number) {
      let newUsers = this.users.filter((item) => item.id !== id);
      this.users = newUsers;
    },
    clearUser() {
      this.user.id = null;
      this.user.name = "";
      this.user.username = "";
      this.user.email = "";
      this.user.phone = "";
    },
  },
});
