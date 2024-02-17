<script setup>
import { ref, computed, watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";

const props = defineProps(["navList", "url", "icons"]);
const router = useRoute();

const computedUrl = computed(() => router.path);

const activeUrl = ref("");

watchEffect(() => {
  activeUrl.value = computedUrl.value;
});
</script>

<template>
  <div class="col-span-1 border h-screen bg-clr-background-base-one">
    <div class="flex flex-col items-center justify-center">
      <p class="font-extrabold text-4xl p-8">heyLink.</p>
      <div
        v-for="(content, index) in navList"
        class="flex flex-col items-start p-2 rounded-md w-5/6"
        :class="{
          'bg-clr-nav-selected': activeUrl == url[index],
        }"
      >
        <RouterLink :to="url[index]">
          <div class="flex items-center text-lg gap-2">
            <Icon :icon="icons[index]"/>
            {{ content }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
