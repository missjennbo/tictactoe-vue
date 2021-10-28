<template>
  <v-container>
    <v-row justify="center">
      <h1>Tic Tac Toe</h1>
    </v-row>
    <v-row justify="center">
      <p>{{ $store.state.currentPlayer }} ist dran!</p>
    </v-row>
    <v-row justify="center">
      <Board v-bind:board-data="boardData"/>
    </v-row>
    <v-row justify="center">
      <v-btn style="margin-top: 20px" v-on:click="resetGame">Reset</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Board from "@/components/Board.vue";
import store from "../store";
import { RESET_GAME } from "@/store/mutationTypes";

export default Vue.extend({
  name: "Game",
  components: { Board },
  store,
  data: () => ({ boardData: store.state.boardData }),
  methods: {
    resetGame: function () {
      this.$store.commit(RESET_GAME);
    },
  },
});
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
