import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderLayout from "@/components/basic/layout/HeaderLayout";
import FooterLayout from "@/components/basic/layout/FooterLayout";

const MainPage = React.lazy(() => import("@/pages/homepage/main/MainPage"));
const NewsPage = React.lazy(() => import("@/pages/homepage/news/NewsPage"));

const AppContent: React.FC = () => {
  return (
    <>
      <div>
        <HeaderLayout />
        <div>
          <div>
            <div>
              <Suspense>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/news" element={<NewsPage />} />
                </Routes>
              </Suspense>
            </div>
            <FooterLayout />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppContent;
