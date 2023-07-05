import { getApi } from "@/apis/axios";
import { IPost } from "./post.types";
import { apiResponseData } from "@/apis/response";

export const APIGetPostList = async (boardId: number): Promise<IPost[]> => {
  const res = await getApi<IPost[]>("/os01/api/homepage/post/list", {
    boardId: boardId,
  });
  return apiResponseData(res) ?? [];
};
