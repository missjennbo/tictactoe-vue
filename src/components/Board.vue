<template>
  <v-container>
    <v-row
      justify="center"
      v-for="row in boardData"
      :key="boardData.indexOf(row)"
    >
      <Cell /><Cell /><Cell />
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
  components: { Cell },
  data: () => ({ boardData: store.state.boardData }),
});
</script>
