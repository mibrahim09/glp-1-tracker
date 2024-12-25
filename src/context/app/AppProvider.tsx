import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext.tsx";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};
