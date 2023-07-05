import React from "react";
import styled from "styled-components";

interface Props {
  SubMenu: React.ReactElement;
  Board: React.ReactElement;
}

const NewsTemplate: React.FC<Props> = ({ SubMenu, Board }) => {
  return (
    <NewsTemplateContainer>
      <TopWrapper>
        <img src="https://toryhair.com/uploaded/banner/94145423156b8abfd6e56448c2d5d64c.jpg" />
        <TopTitle>News</TopTitle>
      </TopWrapper>
      <BoardListWrapper>{SubMenu}</BoardListWrapper>
      <BoardWrapper>{Board}</BoardWrapper>
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

const BoardWrapper = styled.div`
  max-width: 1230px;
  margin: auto;
`;
