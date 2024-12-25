import { Button } from "../../../shared/button/Button.tsx";

interface LandingReportSectionProps {
  onMissingGLPSClick: () => void;
  onFoundGLPSClick: () => void;
}

export const LandingReportSection = ({
  onMissingGLPSClick,
  onFoundGLPSClick,
}: LandingReportSectionProps) => {
  return (
    <div className={"flex justify-center border-b-[1px] pb-5"}>
      <div className={"mt-10"}>
        <p className={"text-xl font-semibold"}>
          Let’s help each other track and find GLP-1 supply.
        </p>
        <div
          className={"grid grid-cols-1 xl:grid-cols-2 gap-6 text-r-gray-100"}
        >
          <div className={"mt-3"}>
            <p className={"font-semibold"}>Need supply?</p>
            <p className={"mb-4"}>
              We'll let you know when supply is found nearby and notify the FDA
              about the shortage.
            </p>
          </div>
          <div className={"mt-3 xl:pl-4 xl:border-l xl:border-l-gray-300"}>
            <p className={"font-semibold"}>Found supply?</p>
            <p className={"mb-4"}>
              Share with us and we’ll notify patients nearby.
            </p>
          </div>
        </div>
        <div
          className={
            "grid grid-cols-1 xl:grid-cols-2 gap-6 text-r-gray-100 mt-4"
          }
        >
          <div>
            <Button onClick={onMissingGLPSClick} color={"primary"}>
              I can't find GLP-1s ⚡
            </Button>
          </div>
          <div className={" xl:pl-4"}>
            <Button onClick={onFoundGLPSClick} color={"secondary"}>
              I found GLP-1s 🙌
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
