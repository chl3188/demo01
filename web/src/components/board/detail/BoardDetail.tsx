import React from "react";
import styled from "styled-components";
import { IPost } from "@/apis/homepage/post/post.types";

interface Props {
  data: IPost | undefined;
}

const BoardDetail: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <>Loading ...</>;
  }

  return (
    <BoardDetailContainer>
      <DetailWrapper>
        <BoardTitle>
          <h3>{data.title}</h3>
        </BoardTitle>
        <BoardInfo>
          <SpanName>
            <strong>{data.userName}</strong>
          </SpanName>
          <SpanDate>{data.createdAt}</SpanDate>
          <SpanHit>
            <strong>조회수</strong> {data.viewCount}
          </SpanHit>
        </BoardInfo>
        <BoardFile></BoardFile>
        <BoardContent></BoardContent>
      </DetailWrapper>
    </BoardDetailContainer>
  );
};
export default BoardDetail;

const BoardDetailContainer = styled.div`
  flex: 1;
  min-height: 460px;
`;

const DetailWrapper = styled.div`
  max-width: 1230px;
  margin: auto;
`;

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
