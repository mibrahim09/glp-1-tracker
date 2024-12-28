import { ReactNode, useCallback, useEffect, useState } from "react";
import { AppContext } from "./AppContext.tsx";
import { useNotifications } from "@/hooks/use-notifications.tsx";
import { MedicationNotification } from "@/types/notifications.ts";
import { useMedications } from "@/hooks/use-medications.tsx";
import { MedicationDoses } from "@/types/medications-doses.ts";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { getNotifications } = useNotifications();
  const { getMedications } = useMedications();

  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [notifications, setNotifications] =
    useState<MedicationNotification[]>();

  const [medications, setMedications] = useState<MedicationDoses[]>();

  const handleWindowSizeChange = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const loadInitialData = useCallback(async () => {
    const notifications = await getNotifications();
    const medications = await getMedications();
    setMedications(medications);
    setNotifications(notifications);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) {
      loadInitialData();
    }
  }, []);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, isMobile, notifications, medications }}
    >
      {children}
    </AppContext.Provider>
  );
};
