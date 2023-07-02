import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderLayout from "../layout/HeaderLayout";
import FooterLayout from "../layout/FooterLayout";

const MainPage = React.lazy(() => import("@/pages/homepage/main/MainPage"));
const NewsPage = React.lazy(() => import("@/pages/homepage/news/NewsPage"));

const AppContent: React.FC = () => {
  useEffect(() => {}, []);

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
                  <Route path="/news" element={<MainPage />} />
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
