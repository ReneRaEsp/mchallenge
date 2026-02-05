<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="header in headers" class="text-left">{{ header }}</th>
      </tr>
    </thead>
    <tbody></tbody>
  </v-table>
</template>

<script setup lang="ts">
const headers: Array<String> = ["Name", "Username", "Email", "Phone"];
</script>
