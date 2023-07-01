import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DefaultLayout = React.lazy(
  () => import("./components/basic/layout/DefaultLayout")
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
