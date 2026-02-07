<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="header in headers" key="header.key" class="text-center">
          {{ header.label }}
        </th>
        <th class="text-center" v-if="showActions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td v-for="header in headers">
          <slot :item="item">
            <p class="text-center">{{ item[header.key] }}</p>
          </slot>
        </td>
        <td v-if="showActions">
          <v-btn
            class="pa-3 ma-3"
            variant="tonal"
            color="info"
            icon="mdi-pencil"
            @click="handleEditButton(item.id)"
          ></v-btn>
          <v-btn
            class="pa-3 ma-3"
            variant="tonal"
            color="error"
            icon="mdi-delete"
            @click="handleDeleteButton(item.id, item.name)"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
//Types
import type { Headers } from "@/types";

defineProps<{
  headers: Headers[];
  items: any[];
  showActions?: boolean;
}>();

const emit = defineEmits<{
  (e: "edit", id: number): void;
  (e: "delete", payload: { id: number; name: string }): void;
}>();

const handleEditButton = (id: number) => {
  emit("edit", id);
};

const handleDeleteButton = (id: number, name: string) => {
  emit("delete", { id, name });
};
</script>
