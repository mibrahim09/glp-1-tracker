import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useEffect, useState } from "react";
import { LandingReportSection } from "./report-section/LandingReportSection.tsx";
import { LandingShortageSection } from "./shortage-section/LandingShortageSection.tsx";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const states = ["California", "Colardo", "Nevada", "Oklahoma", "Arizona"];
// const medications = [
//   {
//     name: "Ozempic",
//     dosages: [
//       { dose: "0.25 mg/0.5 mL", status: "In shortage", reports: 14836 },
//       { dose: "0.5 mg/0.5 mL", status: "Available", reports: 9095 },
//       { dose: "1 mg/0.5 mL", status: "Available", reports: 5144 },
//       { dose: "2 mg/1.5 mL", status: "Available", reports: 2005 },
//     ],
//   },
//   {
//     name: "Wegovy",
//     dosages: [
//       { dose: "0.25 mg/0.5 mL", status: "In shortage", reports: 14836 },
//       { dose: "0.5 mg/0.5 mL", status: "Available", reports: 9095 },
//       { dose: "1 mg/0.5 mL", status: "Available", reports: 5144 },
//       { dose: "1.7 mg/0.75 mL", status: "Available", reports: 1959 },
//       { dose: "2.4 mg/0.75 mL", status: "Available", reports: 2005 },
//     ],
//   },
//   {
//     name: "Mounjaro",
//     dosages: [{ dose: "2.5 mg/0.5 mL", status: "Available", reports: 1125 }],
//   },
//   {
//     name: "Zepbound",
//     dosages: [{ dose: "2.5 mg/0.5 mL", status: "Available", reports: 3542 }],
//   },
// ];

const reports = [
  {
    type: "SHORTAGE",
    medication: "Ozempic",
    location: "California",
    date: "Last week",
  },
  {
    type: "SUPPLY",
    medication: "Trulicity",
    location: "New York",
    date: "Yesterday",
  },
  {
    type: "SHORTAGE",
    medication: "Rybelsus",
    location: "Texas",
    date: "Today",
  },
  {
    type: "SUPPLY",
    medication: "Victoza",
    location: "Florida",
    date: "2 days ago",
  },
  {
    type: "SHORTAGE",
    medication: "Byetta",
    location: "Illinois",
    date: "Last month",
  },
  {
    type: "SUPPLY",
    medication: "Ozempic",
    location: "Georgia",
    date: "Last week",
  },
  {
    type: "SHORTAGE",
    medication: "Trulicity",
    location: "Ohio",
    date: "Yesterday",
  },
  {
    type: "SUPPLY",
    medication: "Rybelsus",
    location: "North Carolina",
    date: "Today",
  },
  {
    type: "SHORTAGE",
    medication: "Victoza",
    location: "Michigan",
    date: "2 days ago",
  },
  {
    type: "SUPPLY",
    medication: "Byetta",
    location: "Pennsylvania",
    date: "Last month",
  },
];

export const LandingPageView = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedReport, setSelectedReport] = useState<{
    type: string;
    medication: string;
    location: string;
    date: string;
  }>();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("selecting random state");
      const report = reports[Math.floor(Math.random() * states.length)];
      setIsFading(true);
      setTimeout(() => {
        setSelectedReport(report);
        setSelectedState(report.location);
        setIsFading(false);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [
    selectedState,
    setSelectedState,
    setSelectedReport,
    selectedReport,
    setIsFading,
    isFading,
  ]);

  return (
    <>
      <div className={"min-h-svh"}>
        <p className={"font-semibold text-4xl"}>GLP-1 Supply Tracker</p>
        <p className={"mt-5"}>
          Stay up-to-date on where GLP-1s are in shortage ⚡ and where folks are
          having success finding them 🙌
        </p>
        <div className={""}>
          <ComposableMap projection="geoAlbersUsa" width={1152}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      geo.properties.name === selectedState
                        ? "#FDB462"
                        : "#D6D6DA"
                    }
                    stroke="#FFFFFF"
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
        {selectedReport && (
          <div
            className={`mt-5 report-container ${isFading ? "fade-out" : "fade-in"}`}
          >
            <span
              className={"flex gap-x-1 items-center justify-center text-lg"}
            >
              <p className={"text-3xl"}>
                {selectedReport.type === "SHORTAGE" ? "⚡" : "🙌"}
              </p>
              {selectedReport.type === "SHORTAGE" ? (
                <>
                  <p className={"font-bold"}>Patient</p> report shortage in
                  <p className={"font-bold"}>
                    {selectedReport.medication}
                  </p>in {selectedReport.location}
                  <p className={"uppercase font-light text-xs"}>
                    ({selectedReport.date})
                  </p>
                </>
              ) : (
                <>
                  <p className={"font-bold"}>Supplier</p> found
                  <p className={"font-bold"}>{selectedReport.medication}</p>
                  shortage in {selectedReport.location}
                  <p className={"uppercase font-light text-xs"}>
                    ({selectedReport.date})
                  </p>
                </>
              )}
            </span>
          </div>
        )}
        <LandingReportSection />
        <LandingShortageSection />
      </div>
    </>
  );
};
