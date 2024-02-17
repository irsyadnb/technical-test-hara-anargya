<script setup>
import CityList from "../components/privates/overview/CityList.vue";
import ProvinceList from "../components/privates/overview/ProvinceList.vue";
</script>

<template>
  <div class="col-span-3 flex flex-col gap-5">
    <ProvinceList />
    <CityList />
  </div>
</template>
