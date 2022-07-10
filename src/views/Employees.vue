<template>
  <div class="employee-page">
    <q-table
      class="employee-page__table"
      :rows="employees.list"
      :loading="employees.loading"
      :columns="columns"
      row-key="id"
      flat
      bordered
      selection="multiple"
      v-model:selected="selected"
      v-model:pagination="pagination"
      :rows-per-page-options="[10, 20]"
      :expanded="expanded"
      @request="handlePagination"
    >
      <template v-slot:pagination="scope">
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />

        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />

        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="last_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox dense v-model="props.selected"></q-checkbox>
          </q-td>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-btn
              v-if="col.name == 'time'"
              size="sm"
              round
              flat
              :icon="props.expand ? 'mdi-chevron-down ' : 'mdi-chevron-right'"
              @click="toggleExpanded(props.key)"
            />
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <CheckInTable :check-in="checkIn" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useEmployee } from "../use/employees";
import moment from "moment";

export default {
  setup() {
    const { fetchEmployees, employees, fetchCheckInInfo, checkIn } =
      useEmployee();
    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 100,
    });
    onMounted(() => {
      fetchEmployees({ limit: 10, page: 1 });
    });
    const columns = [
      {
        name: "time",
        required: true,
        label: "ID",
        align: "right",
        field: "id",
        // field: (row) => row.name,
        // format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
        sortable: true,
      },
      {
        name: "department",
        label: "Department",
        field: "department",
        align: "left",
        format: (val: any) => `${val.map((e: any) => e.toUpperCase() + " ")}`,
      },
      { name: "email", label: "Email", field: "email", align: "left" },
      {
        name: "phone",
        label: "Phone",
        field: "phone",
        // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "dob",
        label: "DOB",
        field: "birthday",
        sortable: true,
        format: (val: Date) => `${moment(val).format("DD-MM-YYYY")}`,
      },
      { name: "country", label: "Country", field: "country" },
    ];
    const handlePagination = (page: any) => {
      pagination.value.page = page.pagination.page;
      console.log(page, "pagination..........");
      fetchEmployees({
        page: page.pagination.page,
        limit: pagination.value.rowsPerPage,
      });
    };
    const expanded = ref<any>([]);
    const selected = ref<any>();
    const toggleExpanded = async (val: any) => {
      expanded.value = expanded.value[0] === val ? [] : [val];
      await fetchCheckInInfo(val).then(() => {
        console.log(checkIn.list, "respose from fetch employye api");
      });
      // await fetchIps(val, { size: 5, page: 1 }, props.type).then(() => {
      //   if (props.type == "internal") {
      //     console.log(internalIpData, "meta");
      //     totalInternal.value = internalIpData.meta.total;
      //     internalPageCount.value = internalIpData.meta.totalPages;
      //   } else {
      //     totalExternal.value = externalIpData.meta.total;
      //     externalPageCount.value = externalIpData.meta.totalPages;
      //   }
      // });
    };

    return {
      employees,
      columns,
      pagination,
      handlePagination,
      selected,
      expanded,
      toggleExpanded,
      checkIn,
    };
  },
};
</script>
<style lang="scss">
.employee-page {
  display: flex;
  width: 100%;
  &__table {
    width: 100%;
    overflow: visible;
  }
}
</style>
