import { ref } from "vue";
import type { Ref } from "vue";

const useUsers = () => {
  const data: Ref = ref([]);

  const URL_BASE = `https://jsonplaceholder.typicode.com`;

  const getUsers = async () => {
    const URL = `${URL_BASE}/users`;
    try {
      const res = await fetch(URL);
      data.value = await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  getUsers();

  return { data };
};

export default useUsers;
