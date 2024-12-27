import { useCallback, useState } from "react";
import { LandingReportSection } from "./report-section/LandingReportSection.tsx";
import { LandingShortageSection } from "./shortage-section/LandingShortageSection.tsx";
import { Dialog } from "../../shared/dialog/Dialog.tsx";
import { GLPMissingForm } from "./glp-missing-form/GLPMissingForm.tsx";
import { LandingMapAndReports } from "@/components/containers/landing/map-and-reports/LandingMapAndReports.tsx";

export const LandingPageView = () => {
  const [isFoundGlpModalOpen, setIsFoundGlpModalOpen] = useState(false);
  const [isMissingGlpModalOpen, setIsMissingGlpModalOpen] = useState(false);

  const onFoundGLPSClick = useCallback(() => {
    setIsFoundGlpModalOpen(true);
  }, []);

  const onMissingGLPSClick = useCallback(() => {
    setIsMissingGlpModalOpen(true);
  }, []);

  return (
    <>
      <Dialog isOpen={isFoundGlpModalOpen} setIsOpen={setIsFoundGlpModalOpen}>
        <p>Glp found dialog</p>
      </Dialog>

      <Dialog
        isOpen={isMissingGlpModalOpen}
        setIsOpen={setIsMissingGlpModalOpen}
      >
        <GLPMissingForm />
      </Dialog>
      <div className={"min-h-svh"}>
        <p className={"font-semibold text-4xl"}>GLP-1 Supply Tracker</p>
        <p className={"mt-5"}>
          Stay up-to-date on where GLP-1s are in shortage ⚡ and where folks are
          having success finding them 🙌
        </p>
        <LandingMapAndReports />
        <LandingReportSection
          onMissingGLPSClick={onMissingGLPSClick}
          onFoundGLPSClick={onFoundGLPSClick}
        />
        <LandingShortageSection />
      </div>
    </>
  );
};
