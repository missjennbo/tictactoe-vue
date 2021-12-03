import { CellInfo, CellType, Player } from "@/types";
import { all, equals } from "ramda";

export const getCellTypeFor = (currentPlayer: Player): CellType =>
  currentPlayer === Player.cross ? CellType.cross : CellType.heart;

export const getNextPlayer = (currentPlayer: Player): Player =>
  currentPlayer === Player.heart ? Player.cross : Player.heart;

export const isUnmarked = (cell: CellInfo): boolean =>
  cell.filledWith === CellType.unchecked;

export const hasThreeInRow = (
  boardData: CellInfo[][],
  marker: CellType
): boolean => {
  for (const row of boardData) {
    const allMarkerOfRow = row.map((r) => r.filledWith);
    const rowCompletelyMarked = all(equals(marker))(allMarkerOfRow);
    if (rowCompletelyMarked) {
      return true;
    }
  }
  return false;
};

export const hasThreeInColumn = (
  boardData: CellInfo[][],
  marker: CellType
): boolean => {
  const columns = boardData[0].map((cellInfo: CellInfo) => [
    boardData[0][cellInfo.column],
    boardData[1][cellInfo.column],
    boardData[2][cellInfo.column],
  ]);
  for (const column of columns) {
    const allMarkerOfColumn = column.map((c) => c.filledWith);
    const columnCompletelyMarked = all(equals(marker))(allMarkerOfColumn);
    if (columnCompletelyMarked) {
      return true;
    }
  }
  return false;
};

export const hasThreeDiagonal = (
  boardData: CellInfo[][],
  marker: CellType
): boolean => {
  const diagonal = [
    boardData[0][0].filledWith,
    boardData[1][1].filledWith,
    boardData[2][2].filledWith,
  ];
  const diagonalReverse = [
    boardData[2][0].filledWith,
    boardData[1][1].filledWith,
    boardData[0][2].filledWith,
  ];

  const diagonalCompletelyMarked = all(equals(marker))(diagonal);
  const diagonalReverseCompletelyMarked = all(equals(marker))(diagonalReverse);

  return diagonalCompletelyMarked || diagonalReverseCompletelyMarked;
};

export const isGameFinished = (
  boardData: CellInfo[][],
  currentPlayer: Player
): boolean => {
  const markerForCurrentPlayer = getCellTypeFor(currentPlayer);
  return (
    hasThreeInRow(boardData, markerForCurrentPlayer) ||
    hasThreeInColumn(boardData, markerForCurrentPlayer) ||
    hasThreeDiagonal(boardData, markerForCurrentPlayer)
  );
};
