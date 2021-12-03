export enum Player {
  heart = "Herz",
  cross = "Kreuz",
}

export enum CellType {
  heart,
  cross,
  unchecked,
}

export interface CellInfo {
  filledWith: CellType;
  row: number;
  column: number;
}
