import { getApi } from "@/apis/axios";
import { IBoardCategory } from "./board.types";
import { apiResponseData } from "@/apis/response";

export const APIGetBoardList = async (): Promise<IBoardCategory[]> => {
  const res = await getApi<IBoardCategory[]>("/os01/api/homepage/board/list");
  return apiResponseData(res) ?? [];
};
