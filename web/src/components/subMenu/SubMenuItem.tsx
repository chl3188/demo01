import { IBoardCategory } from "@/apis/homepage/board/board.types";
import React from "react";
import styled from "styled-components";

interface Props {
  data: IBoardCategory;
}

const SubMenuItem: React.FC<Props> = ({ data }) => {
  return (
    <BoardContainer>
      <BoardListItemTitle>{data.category}</BoardListItemTitle>
    </BoardContainer>
  );
};
export default SubMenuItem;

const BoardContainer = styled.div``;

const BoardListItemTitle = styled.a`
  display: inline-block;
  line-height: 70px;
  font-size: 18px;
  color: #505050;
  font-weight: 600;
  position: relative;

  &:active {
    color: #425537;
  }
`;
