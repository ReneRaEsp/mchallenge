import { ref } from "vue";

import type { User } from "@/types";

import { useUserStore } from "@/stores/user";

const useUsers = () => {
  const URL_BASE = `https://jsonplaceholder.typicode.com`;

  const user = ref<User>({
    id: null,
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const userStore = useUserStore();

  const getUsers = async () => {
    const URL = `${URL_BASE}/users`;
    try {
      const res = await fetch(URL);
      userStore.users = await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  const addUser = () => {
    let newId = null;
    try {
      if (userStore?.users) {
        newId = userStore?.users[userStore?.users?.length - 1]?.id;
      } else {
        newId = 1;
      }
      user.value.id = newId;
      userStore.users.push(user.value);
    } catch (e) {
      console.log(e);
    }
  };

  getUsers();

  return {
    user,
    addUser,
  };
};

export default useUsers;
