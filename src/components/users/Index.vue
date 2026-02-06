<template>
  <v-content>
    <v-row>
      <v-col cols="12" class="text-center pt-15">
        <v-btn @click="showModal" class="" color="secondary"> Add User </v-btn>
      </v-col>
      <v-col cols="12" class="pa-15 position-relative">
        <Table :items="userStore.users" :headers="headers" />
        <ModalForm />
      </v-col>
    </v-row>
  </v-content>
</template>

<script setup lang="ts">
//Stores
import { useUserStore } from "@/stores/user";
//Composables
import useUsers from "@/composables/users/useUsers";
import useModal from "@/composables/modal/useModal";
//Components
import Table from "@/components/utilities/Table.vue";
import ModalForm from "@/components/utilities/ModalForm.vue";
//Types
import type { Headers } from "@/types";

//Store
const userStore = useUserStore();
//Composables
const { showModal } = useModal();
useUsers();

const headers: Headers[] = [
  { key: "name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
];
</script>
