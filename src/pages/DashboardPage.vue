<script setup>
import BigCard from "../components/privates/dashboard/BigCard.vue";
import UserList from "../components/privates/dashboard/UserList.vue";
</script>

<template>
  <div class="col-span-3">
    <div class="flex justify-between gap-2">
      <BigCard />
    </div>
    <div class="border rounded-md bg-clr-background-base-one">
      <div class="flex flex-col">
        <h1 class="font-bold p-3 py-6">User List</h1>
        <UserList />
      </div>
    </div>
  </div>
</template>
