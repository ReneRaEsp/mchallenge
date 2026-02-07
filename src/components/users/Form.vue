<template>
  <v-dialog v-model="modalStore.isActive">
    <v-card title="Add User" prepend-icon="mdi-account">
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              label="Name"
              v-model="name"
              :error-messages="nameError"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              label="Username"
              v-model="username"
              :error-messages="usernameError"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              label="Email"
              v-model="email"
              type="email"
              :error-messages="emailError"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              label="Phone"
              v-model="phone"
              :error-messages="phoneError"
            ></v-text-field>
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
          @click="onSubmit"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useForm, useField } from "vee-validate";
import { userSchema } from "@/schemas/userSchema";
//Store
import { useModalStore } from "@/stores/modal";
import { useUserStore } from "@/stores/user";
//Composables
import useModal from "@/composables/modal/useModal";
import useUsers from "@/composables/users/useUsers";
//Store
const modalStore = useModalStore();
const userStore = useUserStore();
//Composables
const { hideModal } = useModal();
const { saveUser } = useUsers();

//Validations
const { handleSubmit, setValues, resetForm } = useForm({
  validationSchema: userSchema,
  initialValues: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
});

const { value: name, errorMessage: nameError } = useField("name");
const { value: username, errorMessage: usernameError } = useField("username");
const { value: email, errorMessage: emailError } = useField("email");
const { value: phone, errorMessage: phoneError } = useField("phone");

watch(
  () => userStore.user.id,
  (id) => {
    if (id !== null) {
      setValues({
        name: userStore.user.name,
        username: userStore.user.username,
        email: userStore.user.email,
        phone: userStore.user.phone,
      });
    } else {
      resetForm();
    }
  },
);

const onSubmit = handleSubmit((values) => {
  Object.assign(userStore.user, values);
  saveUser();
  resetForm();
});
</script>
