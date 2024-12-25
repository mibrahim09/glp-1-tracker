import BaskLogo from "../../../assets/bask-logo.svg";

export const MainLoadingView = () => {
  return (
    <div className={"flex justify-center items-center h-svh"}>
      <div className={"flex flex-col items-center"}>
        <img
          className={"w-32 animate-logoSpin"}
          src={BaskLogo}
          alt="BaskLogo"
        />
        <p className={"text-xl font-light mt-4 animate-pulseFontWeight"}>
          Please wait till while we fetch your data
        </p>
      </div>
    </div>
  );
};
