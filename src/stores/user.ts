import { defineStore } from "pinia";
import type { User } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      id: null as null | number | string,
      name: "",
      username: "",
      email: "",
      phone: "",
    },
    users: [] as User[],
    loading: false,
  }),
  actions: {
    async fetchUsers() {
      const URL_BASE = `https://jsonplaceholder.typicode.com`;
      const URL = `${URL_BASE}/users`;
      try {
        this.loading = true;
        const res = await fetch(URL);
        this.users = await res.json();
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    findUserById(id: number | undefined | string) {
      if (id) {
        let user = this?.users.find((u) => u.id === id);
        if (typeof user?.id == "number") this.user.id = user.id;
        if (typeof user?.name == "string") this.user.name = user.name;
        if (typeof user?.username == "string")
          this.user.username = user.username;
        if (typeof user?.email == "string") this.user.email = user.email;
        if (typeof user?.phone == "string") this.user.phone = user.phone;
      }
    },
    saveUser() {
      if (this.user.id != null) {
        this.findUserByIdAndUpdate(this.user.id);
      } else {
        this.addUser();
      }
      this.clearUser();
    },
    addUser() {
      const newId: string = uuidv4();
      this.users.push({
        id: newId,
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        phone: this.user.phone,
      });
    },
    findUserByIdAndUpdate(id: number | string) {
      let index = this.users.findIndex((u) => u.id === id);

      if (index !== -1) {
        this.users[index]!.name = this.user.name;
        this.users[index]!.username = this.user.username;
        this.users[index]!.phone = this.user.phone;
        this.users[index]!.email = this.user.email;
      } else {
        return;
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
