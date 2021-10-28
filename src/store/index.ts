import Vue from "vue";
import Vuex from "vuex";
import { CellInfo, CellType, Player } from "@/types";
import { getCellTypeFor, getNextPlayer, isGameFinished, isUnmarked, } from "@/store/gameUtils";
import { RESET_GAME, UPDATE_GAME } from "@/store/mutationTypes";

Vue.use(Vuex);

interface State {
  gameFinished: boolean;
  currentPlayer: Player;
  boardData: CellInfo[][];
}

const getDefaultState = () => ({
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
});

const updateGame = (currentState: State, clickedCell: CellInfo) => {
  if (currentState.gameFinished) {
    return currentState;
  }
  const cell = currentState.boardData[clickedCell.row][clickedCell.column];
  if (isUnmarked(cell)) {
    currentState.boardData[clickedCell.row][clickedCell.column].filledWith =
      getCellTypeFor(currentState.currentPlayer);
  }
  currentState.gameFinished = isGameFinished(
    currentState.boardData,
    currentState.currentPlayer
  );
  currentState.currentPlayer = getNextPlayer(currentState.currentPlayer);
  return currentState;
};

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    [UPDATE_GAME]: (state: State, cellInfo: CellInfo) => {
      Object.assign(state, updateGame(state, cellInfo));
    },
    [RESET_GAME]: (state: State) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {},
  modules: {},
});
