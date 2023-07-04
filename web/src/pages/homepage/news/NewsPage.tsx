import React from "react";
import { useQuery } from "@tanstack/react-query";
import { APIGetBoardList } from "@/apis/homepage/board/board";
import NewsTemplate from "@/components/pages/homepage/news/NewsTemplate";

const NewsPage: React.FC = () => {
  const { data } = useQuery(["board-category-list"], APIGetBoardList);
  const boardCategorys = data ?? [];
  console.log("boardCategorys", boardCategorys);

  return (
    <>
      <NewsTemplate></NewsTemplate>
    </>
  );
};

export default NewsPage;
