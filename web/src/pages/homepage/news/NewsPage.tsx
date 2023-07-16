import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APIGetBoardList } from "@/apis/homepage/board/board";
import { APIGetPostList, APIGetPostDetail } from "@/apis/homepage/post/post";
import NewsTemplate from "@/components/pages/homepage/news/NewsTemplate";
import Board from "@/components/board/Board";
import SubMenu from "@/components/subMenu/SubMenu";
import BoardDetail from "@/components/board/detail/BoardDetail";

const NewsPage: React.FC = () => {
  const [tab, setTab] = useState<number>(0);
  const [postId, setPostId] = useState<number>(0);
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  const { data: categoryData } = useQuery(
    ["board-category-list"],
    APIGetBoardList
  );

  const { data: postLists } = useQuery(["post-list", tab], () => {
    return APIGetPostList(boardCategorys[tab] ? boardCategorys[tab].id : 1);
  });

  const { data: postData } = useQuery(["post-detail", postId], () => {
    return APIGetPostDetail(postId);
  });

  const boardCategorys = categoryData ?? [];
  const postList = postLists ?? [];

  const handleChangeTab = (tab: number) => {
    setTab(tab);
    setIsShowDetail(false);
  };

  const handleClickPost = (postId: number) => {
    console.log("handleClickPost", postId);
    setPostId(postId);
    setIsShowDetail(true);
  };

  return (
    <>
      <NewsTemplate
        isShowDetail={isShowDetail}
        SubMenu={
          <SubMenu categorys={boardCategorys} onChangeTab={handleChangeTab} />
        }
        Board={
          <Board
            type={boardCategorys[tab] ? boardCategorys[tab].type : 0}
            data={postList}
            onClick={handleClickPost}
          />
        }
        Detail={<BoardDetail data={postData} />}
      />
    </>
  );
};

export default NewsPage;
