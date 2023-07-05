import React from "react";
import styled from "styled-components";
import { IPost } from "@/apis/homepage/post/post.types";

interface Props {
  postList: IPost[];
}

const BoardTableItem: React.FC<Props> = ({ postList }) => {
  return (
    <BoardListTableBody>
      {postList &&
        postList.map((post) => (
          <BoardListTableTr key={`post-list-${post.id}`}>
            <BoardListTableItemTh>{post.id}</BoardListTableItemTh>
            <BoardListTableItemTh>{post.title}</BoardListTableItemTh>
            <BoardListTableItemTh>{post.userName}</BoardListTableItemTh>
            <BoardListTableItemTh>{post.createdAt}</BoardListTableItemTh>
            <BoardListTableItemTh>{post.viewCount}</BoardListTableItemTh>
          </BoardListTableTr>
        ))}
    </BoardListTableBody>
  );
};
export default BoardTableItem;

const BoardListTableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const BoardListTableTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const BoardListTableItemTh = styled.th`
  display: table-cell;
  vertical-align: inherit;
  margin: 0;
  height: 53px;
  padding: 9px 5px;
  color: #505050;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Pagination = styled.div`
  letter-spacing: -0.04em;
  margin: 100px 0;
`;
