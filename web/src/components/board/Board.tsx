import React from "react";
import styled from "styled-components";
import { TypeBoard } from "@/apis/homepage/board/board.types";
import { IPost } from "@/apis/homepage/post/post.types";
import BoardTable from "./list/BoardTable";

interface Props {
  type: TypeBoard;
  data: IPost[];
  onClick: (bordId: number) => void;
}

const Board: React.FC<Props> = ({ type, data, onClick }) => {
  if (type === TypeBoard.TABLE) {
    return (
      <BoardContainer>
        <BoardTable data={data} onClick={onClick} />
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
