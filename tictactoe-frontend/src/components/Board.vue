<template>
  <v-container>
    <v-row
      justify="center"
      v-for="row in boardData"
      :key="boardData.indexOf(row)"
    >
      <Cell v-bind:cell-info="row[0]" :key="boardData.indexOf(row) + '1'" />
      <Cell v-bind:cell-info="row[1]" :key="boardData.indexOf(row) + '2'" />
      <Cell v-bind:cell-info="row[2]" :key="boardData.indexOf(row) + '3'" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
import Cell from "@/components/Cell.vue";

export default Vue.extend({
  name: "Board",
  store,
  props: ["boardData"],
  components: { Cell },
});
</script>
