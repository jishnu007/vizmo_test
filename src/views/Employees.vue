<template>
  <div class="employee-page">
    <q-input
      v-model="searchKey"
      placeholder="Find Employee"
      outlined
      dense
      append-icon="mdi-magnify"
      class="employee-page__search"
      @keyup="searchHandler"
    />
    <div class="q-pa-md">
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
        :rows-per-page-options="[5,7,10]"
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
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useEmployee,params } from "../use/employees";
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
    const query = ref<params>({ limit: 10, page:1 });
    onMounted(() => {
      fetchEmployees(query.value);
    });

    const columns = [
      {
        name: "time",
        required: true,
        label: "ID",
        align: "right",
        field: "id",
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
      },
      {
        name: "dob",
        label: "DOB",
        field: "birthday",
        format: (val: Date) => `${moment(val).format("DD-MM-YYYY")}`,
      },
      { name: "country", label: "Country", field: "country" },
    ];
    const handlePagination = (page: any) => {
      query.value={
        page: page.pagination.page,
        limit: pagination.value.rowsPerPage,
      }
      if(page.pagination.sortBy){
        query.value={...query.value,sortBy:page.pagination.sortBy}
      }
      pagination.value.page = page.pagination.page;
      console.log(page, "pagination..........");
      fetchEmployees(query.value);
    };
    const expanded = ref<any>([]);
    const selected = ref<any[]>([]);
    const searchKey = ref<string>("");
    const toggleExpanded = async (val: any) => {
      expanded.value = expanded.value[0] === val ? [] : [val];
      await fetchCheckInInfo(val);
    };
    const getDebouncedFunction = (callback: any) => {
      let timer: any;
      return (...args: any) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          callback(...args);
        }, 600);
      };
    };
    const searchHandler = getDebouncedFunction(async () => {
      query.value={...query.value,search:searchKey.value.trim(),page:1}
      await fetchEmployees(query.value);
    });
  

    return {
      employees,
      columns,
      pagination,
      handlePagination,
      selected,
      expanded,
      toggleExpanded,
      checkIn,
      searchKey,
      searchHandler,
    };
  },
};
</script>
<style lang="scss">
.employee-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__table {
    width: 100%;
    overflow: visible;
    height: 78vh;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 100px;
    }

    th {
      position: sticky !important;
      z-index: 1 !important;
      background: #fff;
    }
    tr:first-child {
      th {
        top: 0;
      }
    }
  }
  &__search {
    display: flex;
    margin: 12px;
    max-width: 250px;
  }
  table {
  }
}
</style>
