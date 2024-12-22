import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage.tsx";

export const ViteRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <LandingPage />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
