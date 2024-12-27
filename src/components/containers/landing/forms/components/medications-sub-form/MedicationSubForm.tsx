import { useFormContext } from "react-hook-form";
import { FC } from "react";
import { DosesForm, MedicationDoses } from "@/types/medications-doses.ts";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { CheckedState } from "@radix-ui/react-checkbox";

interface MedicationDoseProps {
  index: number;
  doses: DosesForm[];
}

interface MedicationSubFormProps {
  medicationsDoses: MedicationDoses[];
}

const MedicationDose: FC<MedicationDoseProps> = ({ index, doses }) => {
  const { watch, setValue } = useFormContext();
  const fieldName = `medications[${index}]`;
  const currentFieldValue = watch(`${fieldName}.selected`);
  if (!currentFieldValue) {
    setValue(fieldName, undefined);
    return null;
  }

  const currentChecked = watch(`${fieldName}.dose`) ?? [];
  const onCheck = (checked: CheckedState, doseUid: string) => {
    if (checked) {
      setValue(`${fieldName}.dose`, [...currentChecked, doseUid]);
    } else {
      setValue(
        `${fieldName}.dose`,
        currentChecked.filter((uid: string) => uid !== doseUid),
      );
    }
  };
  return (
    <div className="space-y-1 pl-3 pt-3" key={`${fieldName}.dose`}>
      {doses.map((dose) => (
        <div key={`${fieldName}.dose-${dose.uid}`}>
          <FormItem className={"space-x-2"}>
            <FormControl>
              <Checkbox
                id={`dose-${dose.uid}`}
                onCheckedChange={(checked) => {
                  onCheck(checked, dose.uid);
                }}
              />
            </FormControl>
            <FormLabel>{dose.dose}</FormLabel>
          </FormItem>
        </div>
      ))}
    </div>
  );
};
export const MedicationSubForm = ({
  medicationsDoses,
}: MedicationSubFormProps) => {
  const { setValue } = useFormContext();

  const onCheckChange = (
    checked: CheckedState,
    index: number,
    medicationDoseField: MedicationDoses,
  ) => {
    setValue(`medications[${index}].uid`, medicationDoseField.uid);
    setValue(`medications[${index}].selected`, checked);
  };

  return (
    <div className="space-y-3">
      {medicationsDoses.map((medicationDoseField: MedicationDoses, index) => {
        return (
          <div key={medicationDoseField.uid}>
            <FormItem className={"space-x-2"}>
              <FormControl>
                <Checkbox
                  onCheckedChange={(checked) =>
                    onCheckChange(checked, index, medicationDoseField)
                  }
                />
              </FormControl>
              <FormLabel>{medicationDoseField.title}</FormLabel>
            </FormItem>
            <MedicationDose index={index} doses={medicationDoseField.doses} />
          </div>
        );
      })}
    </div>
  );
};
