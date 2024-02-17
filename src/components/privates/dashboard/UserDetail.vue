<script setup>
const props = defineProps(["detailData"]);
console.log(props.detailData);
</script>
<template>
  <div v-if="props.detailData" class="flex flex-col p-8 gap-4">
    <div class="flex w-full">
      <div>
        <img
          :src="detailData.profile_picture"
          alt="Profile Picture"
          class="w-32 h-32 rounded-full"
        />
      </div>
      <div class="flex flex-col px-4 justify-center">
        <h1 class="font-bold text-4xl">
          {{ detailData.first_name + " " + detailData.last_name }}
        </h1>
        <p class="font-semibold">{{ detailData.email }}</p>
        <p class="text-clr-text-secondary">{{ detailData.phone }}</p>
      </div>
    </div>
    <div>
      <p>Gender: {{ detailData.gender }}</p>
      <p>Date of Birth: {{ detailData.date_of_birth }}</p>
      <p>Job: {{ detailData.job }}</p>
      <p>
        Address:
        {{
          detailData.street +
          ", " +
          detailData.city +
          ", " +
          detailData.state +
          " " + 
          detailData.zipcode +
          ", " +
          detailData.country
        }}
      </p>
    </div>
  </div>
</template>
