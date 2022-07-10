<template>
  <q-table
    class="checkin-table"
    :loading="checkIn.loading"
    :rows="checkIn.list"
    :columns="columns"
    row-key="id"
    flat
    bordered
  >
  </q-table>
</template>
<script lang="ts">
import moment from "moment";
export default {
  props: {
    checkIn: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const columns = [
      {
        name: "checkin",
        required: true,
        label: "CheckIn",
        align: "left",
        field: "checkin",
        // field: (row) => row.name,
        format: (val: Date) => `${moment(val).format("DD-MM-YYYY")}`,
      },
      {
        name: "location",
        align: "left",
        label: "Location",
        field: "location",
      },
      {
        name: "purpose",
        align: "left",
        label: "Purpose",
        field: "purpose",
      },
    ];
    return {
      columns,
    };
  },
};
</script>
<style lang="">
</style>