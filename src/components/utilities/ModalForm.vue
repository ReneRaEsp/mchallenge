<template>
  <v-dialog v-model="modalStore.isActive">
    <v-card title="Add User" prepend-icon="mdi-account">
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Name"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Username"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Phone"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close" variant="plain" @click="hideModal"></v-btn>

        <v-btn
          color="primary"
          text="Save"
          variant="tonal"
          @click="showModal"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
//Store
import { useModalStore } from "@/stores/modal";
//Composables
import useModal from "@/composables/modal/useModal";

const modalStore = useModalStore();
const { hideModal, showModal } = useModal();
</script>

<style lang="scss">
.modal-container {
  background-color: blue;
  z-index: 40;
}
</style>
