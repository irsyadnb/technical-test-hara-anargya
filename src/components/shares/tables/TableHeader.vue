<script setup>
defineProps(["headers"]);
</script>

<template>
  <thead>
    <tr class="bg-clr-background-base-two">
      <th
        v-for="header in headers"
        class="text-start py-4 text-clr-text-secondary"
      >
        {{ header }}
      </th>
    </tr>
  </thead>
</template>

<!-- :class="'w-' + percentage[index] + '/12'" -->
