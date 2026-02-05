<template>
  <v-content>
    <v-row>
      <v-col class="pa-14">
        <Table :items="data" :headers="headers" />
      </v-col>
    </v-row>
  </v-content>
</template>

<script setup lang="ts">
import useUsers from "@/composables/users/useUsers";
import Table from "@/components/utilities/Table.vue";

import type { Headers } from "@/types";

const { data } = useUsers();

const headers: Headers[] = [
  { key: "name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
];
</script>
