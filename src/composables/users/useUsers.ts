import { useUserStore } from "@/stores/user";
import { useModalStore } from "@/stores/modal";

const useUsers = () => {
  const userStore = useUserStore();
  const modalStore = useModalStore();

  const getUsers = async () => {
    userStore.fetchUsers();
  };

  const saveUser = () => {
    userStore.saveUser();
    modalStore.isActive = false;
  };

  return {
    saveUser,
    getUsers,
  };
};

export default useUsers;
