import { getApi } from "@/apis/axios";
import { IBoard, IBoardCategory } from "./board.types";

export const APIGetBoard = async (): Promise<IBoard[]> => {
  try {
    const res = await getApi("/os01/api/homepage/board");
    console.log("APIGetBoard", res);

    if (!res.data) {
      return [];
    }
    return res.data;
  } catch (error) {
    console.error(error);
    alert("서버에 오류가 발생했습니다.");
    return [];
  }
};

export const APIGetBoardList = async (): Promise<IBoardCategory[]> => {
  try {
    const res = await getApi("/os01/api/homepage/board/list");
    console.log("APIGetBoardList", res);

    if (!res.data) {
      return [];
    }
    return res.data;
  } catch (error) {
    console.error(error);
    alert("서버에 오류가 발생했습니다.");
    return [];
  }
};
