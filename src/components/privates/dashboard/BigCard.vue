<script setup>
const bigCardData = [
  ["Pending", "2480,30", "2.15%", "increase"],
  ["Paid", "84.310", "1.10%", "decrease"],
  ["Rejected", "12.155", "2.15%%", "increase"],
];
</script>

<template>
  <div
    v-for="data in bigCardData"
    class="flex flex-col w-full border rounded-xl mb-4 bg-clr-background-base-one"
  >
    <div class="flex flex-col p-6">
      <div class="flex justify-between items-center">
        <p class="text-clr-text-secondary font-medium">{{ data[0] }}</p>
        <button>
          <Icon
            icon="solar:square-transfer-horizontal-broken"
            class="w-9 h-9"
          />
        </button>
      </div>
      <div>
        <p class="text-2xl">{{ data[1] }}</p>
      </div>
    </div>
    <div
      class="flex justify-between px-6 py-3 text-xs bg-clr-background-base-two rounded-xl"
    >
      <div class="flex gap-2">
        <!-- #4CBF93 -->
        <div v-if="data[3] == 'increase'" class="flex gap-1 text-[#4CBF93]">
          <Icon icon="ph:arrow-up-bold" class="rotate-45" />
          <p>{{ data[2] }}</p>
        </div>
        <div v-else class="flex gap-1 text-[#EE7C85]">
          <Icon icon="ph:arrow-up-bold" class="rotate-[150deg]" />
          <p>{{ data[2] }}</p>
        </div>

        <p>Last Month</p>
      </div>
      <button class="text-clr-text-secondary font-semibold">View More</button>
    </div>
  </div>
</template>
