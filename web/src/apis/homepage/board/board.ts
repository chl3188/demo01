import { getApi } from "@/apis/axios";
import { IBoard, IBoardCategory } from "./board.types";
import { apiResponseData } from "@/apis/response";

export const APIGetBoard = async (): Promise<IBoard[]> => {
  const res = await getApi<IBoard[]>("/os01/api/homepage/board");
  return apiResponseData(res) ?? [];
};

export const APIGetBoardList = async (): Promise<IBoardCategory[]> => {
  const res = await getApi<IBoardCategory[]>("/os01/api/homepage/board/list");
  return apiResponseData(res) ?? [];
};
