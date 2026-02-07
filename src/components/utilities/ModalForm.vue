<template>
  <v-dialog v-model="modalStore.isActive">
    <v-card title="Add User" prepend-icon="mdi-account">
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Name" v-model="user.name"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              label="Username"
              v-model="user.username"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Email" v-model="user.email"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field label="Phone" v-model="user.phone"></v-text-field>
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
          @click="saveUser"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
//Store
import { useModalStore } from "@/stores/modal";
import { useUserStore } from "@/stores/user";
//Composables
import useModal from "@/composables/modal/useModal";
import useUsers from "@/composables/users/useUsers";
//Store
const modalStore = useModalStore();
const { user } = useUserStore();
//Composables
const { hideModal } = useModal();
const { saveUser } = useUsers();
</script>
