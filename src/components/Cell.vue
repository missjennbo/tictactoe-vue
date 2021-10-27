<template>
  <div id="cell-img" v-on:click="checkCell">
    <v-img v-if="isChecked()" src="../assets/heart.svg"></v-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CellType } from "@/types";

export default Vue.extend({
  name: "Cell",
  data: () => ({ cellType: CellType.unchecked }),
  methods: {
    isChecked: function () {
      return this.cellType !== CellType.unchecked;
    },
    checkCell: function () {
      this.cellType = CellType.heart;
    },
  },
});
</script>

<style scoped>
#cell-img {
  width: 200px;
  min-width: 200px;
  min-height: 200px;
  padding: 20px;
  border: 1px solid;
}
</style>
