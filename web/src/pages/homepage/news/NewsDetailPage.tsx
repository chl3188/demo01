import React from "react";
import { useParams } from "react-router-dom";
import NewsDetailTemplate from "@/components/pages/homepage/news/NewsDetailTemplate";

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <>
      <NewsDetailTemplate />
    </>
  );
};

export default NewsDetailPage;
