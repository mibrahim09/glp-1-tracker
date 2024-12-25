import React, { createContext } from "react";

interface AppContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

export const AppContext = createContext<AppContext>({
  setIsLoading: () => {
    throw new Error("setIsLoading must be used within AppProvider");
  },
  isLoading: false,
  isMobile: false,
});
