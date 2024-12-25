import { ReactNode, useCallback, useEffect, useState } from "react";
import { AppContext } from "./AppContext.tsx";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, isMobile }}>
      {children}
    </AppContext.Provider>
  );
};
