import { Medication } from "@/types/medication.ts";
import { MedicationCard } from "../medication-card/MedicationCard.tsx";

const medications: Medication[] = [
  {
    title: "Ozempic",
    img: "https://images.ctfassets.net/jj2wf7627pjc/2CiYOgDaIwEowCl0a659Ya/87283c34d789b23effae241e0f05a684/Ozempic.png",
    status: "CURRENTLY_SHORTAGE",
    reports: [
      { dose: ".68mg/1ml", reports: 2101 },
      { dose: "1.34mg/1ml", reports: 791 },
      { dose: "2.68mg/1ml", reports: 735 },
    ],
  },
  {
    title: "Wegovy",
    img: "https://images.ctfassets.net/jj2wf7627pjc/MBitSIhcqxF4liIZEezJE/e046098c436f8557625f7a39f72882c8/Wegovy.png",
    status: "CURRENTLY_SHORTAGE",
    reports: [
      { dose: "0.25mg/0.5ml", reports: 17331 },
      { dose: "0.5mg/0.5ml", reports: 11319 },
      { dose: "1mg/0.5ml", reports: 6211 },
      { dose: "1.7mg/0.75ml", reports: 2114 },
      { dose: "2.4mg/0.75ml", reports: 2157 },
    ],
  },
  {
    title: "Mounjaro",
    img: "https://images.ctfassets.net/jj2wf7627pjc/oeicaeaXznAU1LeVggJfK/cfba204cee6dc1ade23b625687db3837/Mounjaro.png",
    status: "SHORTAGE_RESOVLED",
    reports: [
      { dose: "2.5mg/0.5ml", reports: 8432 },
      { dose: "5mg/0.5ml", reports: 5218 },
      { dose: "7.5mg/0.5ml", reports: 3654 },
      { dose: "10mg/0.5ml", reports: 2876 },
      { dose: "12.5mg/0.5ml", reports: 1987 },
      { dose: "15mg/0.5ml", reports: 1543 },
    ],
  },
  {
    title: "Zepbound",
    img: "https://images.ctfassets.net/jj2wf7627pjc/6f9CoalS1U35ZqYaebFBKX/e80925bd8f88198a1b9bd17db452b9c4/Zepbound.png",
    status: "SHORTAGE_RESOVLED",
    reports: [
      { dose: "2.5mg/0.5ml", reports: 4231 },
      { dose: "5mg/0.5ml", reports: 3187 },
      { dose: "10mg/0.5ml", reports: 2543 },
      { dose: "15mg/0.5ml", reports: 1876 },
    ],
  },
  {
    title: "Saxenda",
    img: "https://images.ctfassets.net/jj2wf7627pjc/QXQViwqVrcK4uvM32PFwg/da8cfe3eaef3eef60a5773081e836f3c/Saxenda.png",
    status: "SHORTAGE_RESOVLED",
    reports: [
      { dose: "0.6mg/0.1ml", reports: 3421 },
      { dose: "1.2mg/0.2ml", reports: 2765 },
      { dose: "1.8mg/0.3ml", reports: 1987 },
      { dose: "2.4mg/0.4ml", reports: 1432 },
      { dose: "3.0mg/0.5ml", reports: 1123 },
    ],
  },
  {
    title: "Victoza",
    img: "https://images.ctfassets.net/jj2wf7627pjc/17kW1FWG5f2MKFprHtIoUQ/7df0a0f36351f93a33ceaae68ae925f0/Victoza.png",
    status: "SHORTAGE_RESOVLED",
    reports: [
      { dose: "0.6mg/ml", reports: 2876 },
      { dose: "1.2mg/ml", reports: 1987 },
      { dose: "1.8mg/ml", reports: 1543 },
    ],
  },
  {
    title: "Trulicity",
    img: "https://images.ctfassets.net/jj2wf7627pjc/17kW1FWG5f2MKFprHtIoUQ/7df0a0f36351f93a33ceaae68ae925f0/Victoza.png",
    status: "SHORTAGE_RESOVLED",
    reports: [
      { dose: "0.75mg/0.5ml", reports: 3254 },
      { dose: "1.5mg/0.5ml", reports: 2765 },
      { dose: "3mg/0.5ml", reports: 1876 },
      { dose: "4.5mg/0.5ml", reports: 1234 },
    ],
  },
];

export const LandingShortageSection = () => {
  return (
    <div className={"mt-5"}>
      <p className={"text-xl font-semibold"}>GLP-1 Shortage Status</p>
      <p className={"text-lg text-r-gray-100"}>
        See the shortage status of GLP-1s according to the FDA and how it
        compares against community reports.
      </p>
      <div className={"mt-5"}>
        <div className={"grid grid-cols-1 2xl:grid-cols-2 gap-5"}>
          {medications.map((medication) => (
            <MedicationCard key={medication.title} medication={medication} />
          ))}
        </div>
      </div>
    </div>
  );
};
