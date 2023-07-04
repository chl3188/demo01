export interface IBoard {
  id: number;
  board_id: number;
  user_id: number;
  title: string;
  user_name: number;
  content: string;
  view_count: number;
  createdAt: string;
  deletedAt: string;
}

export interface IBoardCategory {
  id: number;
  board_id: number;
  user_id: number;
  title: string;
  user_name: number;
  content: string;
  view_count: number;
  createdAt: string;
  deletedAt: string;
}
