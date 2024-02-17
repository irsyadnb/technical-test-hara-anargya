<script setup>
import ActionButton from "../../privates/ActionButton.vue";

const props = defineProps([
  "dataContent",
  "dataContext",
  "image",
  "icon",
  "select",
  "isAction",
]);

const emit = defineEmits(["ActionButton"]);
const handleActionButtonClick = (id) => {
  emit("ActionButton", id);
};

const otherData = props.dataContent.slice(3);
</script>

<template>
  <tbody>
    <tr>
      <td>{{ dataContent[0] }}</td>
      <td class="flex gap-4 items-center font-semibold">
        <img
          v-if="image"
          :src="dataContent[1]"
          class="w-7 h-7 rounded-full"
          alt="Profile Picutre"
        />
        <Icon v-if="icon" :icon="dataContent[1]" class="w-7 h-7" />
        <p>{{ dataContent[2] }}</p>
      </td>
      <td v-for="(d, index) in otherData" class="">{{ d }}</td>
      <td v-if="isAction" class="flex gap-2">
        <ActionButton v-if="select" text="Select" />
        <ActionButton
          @action-button="handleActionButtonClick"
          :id="dataContent[0]"
          text="View Detail"
        />
      </td>
    </tr>
  </tbody>
</template>
