<template>
  <v-content>
    <v-row>
      <v-col class="pa-14 position-relative">
        <Table :items="data" :headers="headers" />
        <ModalForm />
      </v-col>
    </v-row>
  </v-content>
</template>

<script setup lang="ts">
//Composables
import useUsers from "@/composables/users/useUsers";
//Components
import Table from "@/components/utilities/Table.vue";
import ModalForm from "@/components/utilities/ModalForm.vue";

import type { Headers } from "@/types";

const { data } = useUsers();

const headers: Headers[] = [
  { key: "name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
];
</script>
