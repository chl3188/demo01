import React from "react";
import styled from "styled-components";
import SubMenuItem from "./SubMenuItem";
import { IBoardCategory } from "@/apis/homepage/board/board.types";

interface Props {
  categorys: IBoardCategory[];
  onChangeTab: (tab: number) => void;
}

const SubMenu: React.FC<Props> = ({ categorys, onChangeTab }) => {
  return (
    <SubMenuContainer>
      <BoardList>
        {categorys.map((item, index) => (
          <BoardListItem
            key={`board-category-list-${item.id}`}
            onClick={() => {
              onChangeTab(index);
            }}
          >
            <SubMenuItem data={item} />
          </BoardListItem>
        ))}
      </BoardList>
    </SubMenuContainer>
  );
};

export default SubMenu;
const SubMenuContainer = styled.div``;

const BoardList = styled.div`
  display: flex;
  margin: 0 -50px;
  position: relative;
  z-index: 5;
  padding: 0;
  padding-inline-start: 40px;
`;

const BoardListItem = styled.div`
  padding: 0 50px;
  width: auto !important;
  margin: 0;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;
