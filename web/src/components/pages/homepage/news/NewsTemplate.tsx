import Board from "@/components/board/Board";
import React from "react";
import styled from "styled-components";

const NewsTemplate: React.FC = () => {
  return (
    <NewsTemplateContainer>
      <TopWrapper>
        <img src="https://toryhair.com/uploaded/banner/94145423156b8abfd6e56448c2d5d64c.jpg" />
        <TopTitle>News</TopTitle>
      </TopWrapper>
      <BoardListWrapper>
        <BoardList>
          <BoardListItem>
            <BoardListItemTitle>공지사항</BoardListItemTitle>
          </BoardListItem>
          <BoardListItem>
            <BoardListItemTitle>신규매장오픈</BoardListItemTitle>
          </BoardListItem>
          <BoardListItem>
            <BoardListItemTitle>이벤트</BoardListItemTitle>
          </BoardListItem>
        </BoardList>
      </BoardListWrapper>
      <BoardWrapper>
        <Board></Board>
      </BoardWrapper>
    </NewsTemplateContainer>
  );
};
export default NewsTemplate;

const NewsTemplateContainer = styled.div`
  flex: 1;
`;

const TopWrapper = styled.div``;

const TopTitle = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 30%;
  transform: translateY(-50%);
  left: 0;
  font-size: 60px;
  color: #fff;
  font-family: "Josefin Sans";
  font-weight: 600;
  z-index: 1;
  line-height: 1.1em;
  letter-spacing: -0.03em;
`;

const BoardListWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: #fff;
  z-index: 10;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #dfdfdf;
    z-index: 1;
    box-sizing: border-box;
  }
`;

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

const BoardWrapper = styled.div`
  max-width: 1230px;
  margin: auto;
`;
