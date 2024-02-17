<script setup>
import province from "../../../assets/js/province";
import TableData from "../../shares/tables/TableData.vue";
import TableHeader from "../../shares/tables/TableHeader.vue";
import cityProvinceAPI from "../../../api/cityprovince";

import { onMounted, ref, watch } from "vue";
import BaseModal from "../../shares/modals/BaseModal.vue";
import ProvinceDetail from "./ProvinceDetail.vue";

const localAPI = cityProvinceAPI();

const header = ["#", "Name", "Province ID", ""];
const provinceList = ref([province]);
const provsort = ref("id-asc");
const selectedProvince = ref();
const provinceCities = ref();
const showModal = ref();

const showDetail = (id) => {
  selectedProvince.value = localAPI.getProvinceById(id);
  provinceCities.value = localAPI.getCitiesByProvinceId(id);
  showModal.value = true;
};

const handleSortChange = () => {
  const [option, order] = provsort.value.split("-");
  if (option === "id") {
    provinceList.value = localAPI.sortProvinceById(order);
    console.log(provinceList.value);
    return;
  }
  provinceList.value = localAPI.sortProvinceByName(order);
  console.log(provinceList.value);
};

watch(provsort, handleSortChange);

onMounted(() => {
  provinceList.value = localAPI.getProvinces();
});
</script>

<template>
  <div class="border rounded-xl p-4 pt-1 bg-clr-background-base-one">
    <div class="flex justify-between items-center">
      <h1 class="text-lg font-semibold py-4">Provinces</h1>
      <div class="text-sm">
        <label for="provsort">Sort by:</label>
        <select name="provsort" v-model="provsort" @change="handleSortChange">
          <option value="id-asc">ID (asc)</option>
          <option value="id-desc">ID (desc)</option>
          <option value="name-asc">Name (asc)</option>
          <option value="name-desc">Name (desc)</option>
        </select>
      </div>
    </div>
    <table>
      <TableHeader :headers="header" />
      <TableData
        v-for="(p, index) in provinceList"
        :key="[p.id]"
        :data-content="[index+1, 'streamline:city-hall', p.name, p.wilayah_id]"
        icon="true"
        is-action="true"
        @-action-button="showDetail"
      />
    </table>
    <BaseModal :show-modal="showModal" @close-modal="showModal = false">
      <ProvinceDetail :province="selectedProvince" :cities="provinceCities" />
    </BaseModal>
  </div>
</template>
