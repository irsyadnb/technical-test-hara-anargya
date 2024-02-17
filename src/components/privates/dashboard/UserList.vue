<script setup>
import { onMounted, ref } from "vue";
import api from "../../../api";
import TableHeader from "../../shares/tables/TableHeader.vue";
import TableData from "../../shares/tables/TableData.vue";
import BaseModal from "../../shares/modals/BaseModal.vue";
import UserDetail from "./UserDetail.vue";

const users = ref([]);
const user = ref();

const showModal = ref();

const showDetail = async (id) => {
  try {
    const response = await api.get("/users/" + id);

    if (response.data.success) {
      user.value = response.data.user;
      showModal.value = true;
    }
  } catch (error) {
    console.error(error);
  }
};

const headers = [
  "ID",
  "User",
  "Date of Birth",
  "Email",
  "Job",
  "Country",
  "Action",
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day} / ${month} / ${year}`;
};

onMounted(async () => {
  try {
    const response = await api.get("/users");
    users.value = response.data.users;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <table>
    <TableHeader :headers="headers" />
    <TableData
      v-for="user in users"
      :dataContent="[
        user.id,
        user.profile_picture,
        user.first_name + ' ' + user.last_name,
        formatDate(user.date_of_birth),
        user.email,
        user.job,
        user.country,
      ]"
      image="true"
      select="true"
      :is-action="true"
      @-action-button="showDetail"
    />
  </table>
  <BaseModal :show-modal="showModal" x-button="true" @close-modal="showModal = false">
    <UserDetail :detail-data="user" />
  </BaseModal>
</template>
