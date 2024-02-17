<script setup>
const props = defineProps(["showModal", "xButton"]);

const emit = defineEmits(["closeModal"]);
const handleModalClick = () => {
  emit("closeModal");
};
</script>

<template>
  <Transition name="fade" appear>
    <div
      class="modal-overlay fixed top-0 bottom-0 left-0 right-0 z-[60] cursor-default"
      v-if="showModal"
      @click="handleModalClick"
    ></div>
  </Transition>
  <Transition name="pop" appear>
    <div
      class="modal absolute top-0 bottom-0 left-0 right-0 z-[70] m-auto w-1/2 h-fit max-h-[30rem] border rounded-xl shadow-sm bg-white overflow-hidden overflow-y-scroll"
      v-if="showModal"
    >
      <div class="flex flex-col h-fit">
        <button v-if="xButton" class="self-end p-2" @click="handleModalClick">X</button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
