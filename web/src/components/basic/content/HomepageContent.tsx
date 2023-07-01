import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderLayout from "@/components/basic/layout/HeaderLayout";
import FooterLayout from "@/components/basic/layout/FooterLayout";

const MainPage = React.lazy(() => import("@/pages/homepage/main/MainPage"));

const AppContent: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Body>
        <HeaderLayout />
        <div>
          <div>
            <div>
              <Suspense>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                </Routes>
              </Suspense>
            </div>
            <FooterLayout />
          </div>
        </div>
      </Body>
    </>
  );
};

export default AppContent;

const Body = styled.body`
  display: block;
  margin: 0;
  padding: 0;
`;
