<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="header in headers" key="header.key" class="text-left">
          {{ header.label }}
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td v-for="header in headers">
          <slot :item="item">
            <td>{{ item[header.key] }}</td>
          </slot>
        </td>
        <td>
          <v-btn
            class="pa-3 ma-3"
            variant="tonal"
            color="info"
            icon="mdi-pencil"
          ></v-btn>
          <v-btn
            class="pa-3 ma-3"
            variant="tonal"
            color="error"
            icon="mdi-delete"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import type { Headers } from "@/types";

defineProps<{
  headers: Headers[];
  items: any[];
}>();
</script>
