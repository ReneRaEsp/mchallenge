<template>
  <v-content>
    <v-row>
      <v-col cols="12" class="text-center pt-15">
        <v-btn @click="openAddModal" class="" color="secondary">
          Add User
        </v-btn>
      </v-col>
      <v-col cols="12" class="text-center pa-15 position-relative">
        <Loader v-if="userStore.loading" />
        <Table
          v-else
          :items="userStore.users"
          :headers="headers"
          showActions
          @edit="openEditModal"
          @delete="handleDeleteUser"
        />
        <ModalForm />
      </v-col>
    </v-row>
  </v-content>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
//Stores
import { useUserStore } from "@/stores/user";
//Composables
import useUsers from "@/composables/users/useUsers";
import useModal from "@/composables/modal/useModal";
//Components
import Table from "@/components/utilities/Table.vue";
import ModalForm from "@/components/users/Form.vue";
import Loader from "@/components/utilities/Loader.vue";
//Types
import type { Headers } from "@/types";

//Store
const userStore = useUserStore();
//Composables
const { showModal } = useModal();
const { getUsers } = useUsers();

const headers: Headers[] = [
  { key: "name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
];

//Functions
const openEditModal = (id: number) => {
  showModal(id);
};

const openAddModal = () => {
  userStore.clearUser();
  showModal();
};

type DeletePayload = {
  id: number;
  name: string;
};

const handleDeleteUser = ({ id, name }: DeletePayload) => {
  const confirmed = confirm(
    `¿Are you sure you want to delete this user: ${name}?`,
  );

  if (confirmed) {
    userStore.findUserByIdAndDelete(id);
  } else {
    return;
  }
};

onMounted(() => {
  getUsers();
});
</script>
