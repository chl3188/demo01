import React from "react";
import styled from "styled-components";
import { TypeBoard } from "@/apis/homepage/board/board.types";
import { IPost } from "@/apis/homepage/post/post.types";
import BoardTable from "./BoardTable";

interface Props {
  type: TypeBoard;
  data: IPost[];
}

const Board: React.FC<Props> = ({ type, data }) => {
  console.log("table", type);
  if (type === TypeBoard.TABLE) {
    return (
      <BoardContainer>
        <BoardTable data={data} />
      </BoardContainer>
    );
  }

  return <></>;
};
export default Board;

const BoardContainer = styled.div`
  flex: 1;
  min-height: 460px;
`;
