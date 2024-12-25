import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage.tsx";
import { MainLayout } from "./layouts/MainLayout.tsx";

export const ViteRouter = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
