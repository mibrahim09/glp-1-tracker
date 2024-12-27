import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/app/AppContext.tsx";
import { Header } from "../components/header/Header.tsx";
import { Footer } from "../components/footer/Footer.tsx";
import { MainLoadingView } from "../components/containers/main-loading-view/MainLoadingView.tsx";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, setIsLoading } = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading]);
  return (
    <>
      {isLoading ? <MainLoadingView /> : null}
      {!isLoading ? (
        <>
          <Header />
          <div className={"bg-neutral-100 px-6 md:px-24 lg:px-96 py-5"}>
            {children}
          </div>
          <Footer />
        </>
      ) : null}
    </>
  );
};
