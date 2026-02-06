import { useModalStore } from "@/stores/modal";
import { useUserStore } from "@/stores/user";

const useModal = () => {
  const modal = useModalStore();
  const userStore = useUserStore();

  const hideModal = () => {
    modal.isActive = false;
    userStore.clearUser();
  };

  const showModal = (id: number) => {
    modal.isActive = true;
    userStore.findUserById(id);
  };

  return {
    hideModal,
    showModal,
  };
};

export default useModal;
