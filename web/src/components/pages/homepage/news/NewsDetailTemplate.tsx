import React from "react";
import styled from "styled-components";

interface Props {}

const NewsDetailTemplate: React.FC<Props> = ({}) => {
  return (
    <NewsDetailTemplateContainer>
      <TopWrapper>
        <img src="https://toryhair.com/uploaded/banner/94145423156b8abfd6e56448c2d5d64c.jpg" />
        <TopTitle>News</TopTitle>
      </TopWrapper>
      <DetailWrapper>
        <BoardTitle>
          <h3>상호 변경 안내문</h3>
        </BoardTitle>
        <BoardInfo>
          <SpanName>
            <strong>토리헤어</strong>
          </SpanName>
          <SpanDate>2023-06-28</SpanDate>
          <SpanHit>
            <strong>조회수</strong> 109
          </SpanHit>
        </BoardInfo>
        <BoardFile></BoardFile>
        <BoardContent></BoardContent>
      </DetailWrapper>
    </NewsDetailTemplateContainer>
  );
};
export default NewsDetailTemplate;

const NewsDetailTemplateContainer = styled.div`
  flex: 1;
`;

const DetailWrapper = styled.div`
  max-width: 1230px;
  margin: auto;
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

const BoardTitle = styled.div`
  padding: 16px 16px;
  border-bottom: 1px solid #ddd;
`;

const BoardInfo = styled.div`
  padding: 13px 16px;
  color: #767676;
  font-size: 15px;
  line-height: 1.3em;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
`;

const SpanName = styled.span`
  float: left;
  margin-right: 15px;
`;

const SpanDate = styled.span`
  float: left;
`;

const SpanHit = styled.span`
  float: right;
`;

const BoardFile = styled.div`
  position: relative;
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5em;
`;

const BoardContent = styled.div`
  padding: 15px 16px 60px;
  border-bottom: 1px solid #ddd;
`;
