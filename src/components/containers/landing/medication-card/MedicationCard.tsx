import { Medication } from "../../../../types/medication.ts";
import { DOSE_STATUS } from "../../../../constants/enums.ts";

interface MedicationCardProps {
  medication: Medication;
}

const STATUS_MESSAGES = {
  [DOSE_STATUS.CURRENTLY_SHORTAGE]:
    "Available according to the FDA but we're receiving reports of supply issues.",
  [DOSE_STATUS.CURRENT_SHORTAGE_NOT_FOUND]:
    "In shortage. Estimated shortage duration TBD",
  [DOSE_STATUS.SHORTAGE_RESOVLED]:
    "Shortage resolved according to the FDA but we're receiving reports of supply issues.",
};
const STATUS_ICONS = {
  [DOSE_STATUS.CURRENTLY_SHORTAGE]: "😒",
  [DOSE_STATUS.CURRENT_SHORTAGE_NOT_FOUND]: "🔴",
  [DOSE_STATUS.SHORTAGE_RESOVLED]: "😒",
};

export const MedicationCard = ({ medication }: MedicationCardProps) => {
  return (
    <div>
      <div className={"flex justify-start gap-x-2 bg-r-gray-200 pt-2"}>
        <img
          className={"max-w-24"}
          src={medication.img}
          alt={medication.title}
        />
        <div>
          <p className={"text-2xl font-semibold"}>{medication.title}</p>
          <p className={"text-r-gray-100"}>
            {[
              DOSE_STATUS.CURRENTLY_SHORTAGE,
              DOSE_STATUS.CURRENT_SHORTAGE_NOT_FOUND,
            ].includes(medication.status)
              ? "Currently in shortage"
              : "Shortage Resolved"}
          </p>
        </div>
      </div>
      <div className={"bg-white py-5 px-3"}>
        {medication.reports.map((report, index) => (
          <div
            className={`flex justify-start gap-x-3 ${index === medication.reports.length - 1 ? "" : "border-b pb-3 mb-3"}`}
          >
            <p className={"text-3xl"}>{STATUS_ICONS[medication.status]}</p>
            <div className={``}>
              <div key={report.dose} className={"flex justify-between"}>
                <p className={"text-xl font-semibold"}>{report.dose}</p>
                <p
                  className={
                    "bg-r-gray-200 py-1 px-2 rounded-2xl font-semibold"
                  }
                >
                  ⚡ {report.reports} recent reports
                </p>
              </div>
              <p className={" mt-3"}>{STATUS_MESSAGES[medication.status]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
