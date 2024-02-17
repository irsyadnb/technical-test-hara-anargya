<script setup>
import TableData from "../../shares/tables/TableData.vue";
import TableHeader from "../../shares/tables/TableHeader.vue";
import cityProvinceAPI from "../../../api/cityprovince";
import { ref, onMounted } from "vue";

const header = ["ID", "Name", "Province Name", "Ref ID"];
const cityList = ref();
const localAPI = cityProvinceAPI();
onMounted(() => {
  cityList.value = localAPI.getCities();
});
</script>

<template>
  <div class="border rounded-xl p-4 pt-1 bg-clr-background-base-one">
    <h1 class="text-lg font-semibold py-4">Cities</h1>
    <table>
      <TableHeader :headers="header" />
      <TableData
        v-for="c in cityList"
        :data-content="[
          c.id,
          'iconoir:city',
          c.name,
          localAPI.getProvinceByCityId(c.id),
          c.ref_id ? c.ref_id : 'No ref_id',
        ]"
        icon="true"
      />
    </table>
  </div>
</template>
