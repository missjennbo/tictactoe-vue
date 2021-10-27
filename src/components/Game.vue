<template>
  <v-container>
    <v-row justify="center">
      <h1>Tic Tac Toe</h1>
    </v-row>
    <v-row justify="center">
      <p>{{ currentPlayer }} ist dran!</p>
    </v-row>
    <v-row justify="center">
      <Board />
    </v-row>
    <v-row justify="center">
      <v-btn style="margin-top: 20px;" v-on:click="resetGame">Reset</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Board from "@/components/Board.vue";

export default Vue.extend({
  name: "Game",
  components: { Board },
  data: () => ({ currentPlayer: "Jenny" }),
  methods: {
    resetGame: () => {
      alert("resetGame");
    },
  },
});
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
