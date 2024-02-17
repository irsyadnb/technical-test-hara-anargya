<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/shares/navbars/Sidebar.vue";
import Topbar from "./components/shares/navbars/Topbar.vue";
const navList = ["Dashboard", "Overview"];
const url = ["/", "/overview"];
const icons = [
  "solar:home-smile-linear",
  "material-symbols:chart-data-outline",
];
</script>

<template>
  <div class="grid grid-cols-4 h-screen overflow-hidden bg-clr-background-base-three">
    <Sidebar :navList="navList" :url="url" :icons="icons" />
    <div class="flex flex-col col-span-3 overflow-y-scroll">
      <Topbar />
      <RouterView class=" p-4" />
    </div>
  </div>
</template>

<style scoped></style>
