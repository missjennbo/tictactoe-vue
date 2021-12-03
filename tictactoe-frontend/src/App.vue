<template>
  <v-app>
    <v-main>
      <Game />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Game from "./components/Game.vue";

export default Vue.extend({
  name: "App",

  components: {
    Game: Game,
  },

  data: () => ({
    //
  }),
});
</script>
