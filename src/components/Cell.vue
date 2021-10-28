<template>
  <div id="cell-img" v-on:click="checkCell">
    <v-img v-if="isHeard()" src="../assets/heart.svg"></v-img>
    <v-img v-if="isCross()" src="../assets/cross.svg"></v-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CellType } from "@/types";
import store from "../store";
import { UPDATE_GAME } from "@/store/mutationTypes";

export default Vue.extend({
  name: "Cell",
  props: ["cellInfo"],
  store,
  methods: {
    isHeard: function () {
      let filledWith = this.$props.cellInfo.filledWith;
      return filledWith === CellType.heart;
    },
    isCross: function () {
      let filledWith = this.$props.cellInfo.filledWith;
      return filledWith === CellType.cross;
    },
    isChecked: function () {
      let filledWith = this.$props.cellInfo.filledWith;
      return filledWith !== CellType.unchecked;
    },
    checkCell: function () {
      if (this.isChecked()) {
        return;
      }
      this.$store.commit(UPDATE_GAME, this.$props.cellInfo);
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
