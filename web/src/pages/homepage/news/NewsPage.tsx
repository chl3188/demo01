import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APIGetBoardList } from "@/apis/homepage/board/board";
import { APIGetPostList } from "@/apis/homepage/post/post";
import NewsTemplate from "@/components/pages/homepage/news/NewsTemplate";
import Board from "@/components/board/Board";
import SubMenu from "@/components/subMenu/SubMenu";

const NewsPage: React.FC = () => {
  const [tab, setTab] = useState<number>(0);
  const { data: categoryData } = useQuery(
    ["board-category-list"],
    APIGetBoardList
  );
  const { data: postData } = useQuery(["board-list", tab], () => {
    return APIGetPostList(boardCategorys[tab] ? boardCategorys[tab].id : 1);
  });

  const boardCategorys = categoryData ?? [];
  const postList = postData ?? [];

  const handleChangeTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <>
      <NewsTemplate
        SubMenu={
          <SubMenu categorys={boardCategorys} onChangeTab={handleChangeTab} />
        }
        Board={
          <Board
            type={boardCategorys[tab] ? boardCategorys[tab].type : 0}
            data={postList}
          />
        }
      />
    </>
  );
};

export default NewsPage;
