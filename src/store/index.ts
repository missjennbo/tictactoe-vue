import Vue from "vue";
import Vuex from "vuex";
import { CellType, Player } from "@/types";

Vue.use(Vuex);

export interface State {
  gameFinished: boolean;
}

export default new Vuex.Store({
  state: {
    gameFinished: false,
    currentPlayer: Player.heart,
    boardData: [
      [
        { filledWith: CellType.unchecked, row: 0, column: 0 },
        { filledWith: CellType.unchecked, row: 0, column: 1 },
        { filledWith: CellType.unchecked, row: 0, column: 2 },
      ],
      [
        { filledWith: CellType.unchecked, row: 1, column: 0 },
        { filledWith: CellType.unchecked, row: 1, column: 1 },
        { filledWith: CellType.unchecked, row: 1, column: 2 },
      ],
      [
        { filledWith: CellType.unchecked, row: 2, column: 0 },
        { filledWith: CellType.unchecked, row: 2, column: 1 },
        { filledWith: CellType.unchecked, row: 2, column: 2 },
      ],
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
