<script setup>
defineProps(["id", "text"]);
const emit = defineEmits(["actionButton"]);

const handleButtonClick = (id) => {
  console.log('clicked on action button component')
  emit("actionButton", id);
};
</script>

<template>
  <button class="p-1 shadow-md font-semibold" @click="handleButtonClick(id)">
    {{ text }}
  </button>
</template>
