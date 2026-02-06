import { useModalStore } from "@/stores/modal";

const useModal = () => {
  const modal = useModalStore();

  const hideModal = () => {
    modal.isActive = false;
  };

  const showModal = () => {
    modal.isActive = true;
  };

  return {
    hideModal,
    showModal,
  };
};

export default useModal;
