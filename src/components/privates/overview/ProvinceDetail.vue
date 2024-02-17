<script setup>
const props = defineProps(["province", "cities"]);
</script>
<template>
  <div class="flex flex-col p-8 gap-4">
    <div class="flex flex-col justify-center">
      <h1 class="font-bold text-4xl">
        {{ province.name }}
      </h1>
      <p class="font-semibold">ID Wilayah: {{ province.wilayah_id }}</p>
    </div>
    <div v-if="cities.length" class="overflow-y-scroll">
      Cities:
      <p v-for="city in cities">- {{ city.name }}</p>
    </div>
    <div v-else>
      No cities in this province.
    </div>
  </div>
</template>
