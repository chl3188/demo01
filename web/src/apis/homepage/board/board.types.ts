export enum TypeBoard {
  TABLE = 1,
  CAD = 2,
  IMAGE = 3,
}

export interface IBoardCategory {
  id: number;
  category: string;
  type: number;
  publish: number;
  createdAt: string;
  deletedAt: string;
}
