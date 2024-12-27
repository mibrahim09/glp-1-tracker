import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { REPORTER_TYPE } from "@/constants/enums.ts";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Label } from "@/components/ui/label.tsx";
import { MedicationSubForm } from "@/components/containers/landing/forms/components/medications-sub-form/MedicationSubForm.tsx";
import { MedicationDoses } from "@/types/medications-doses.ts";
import { GLPMissingReactHookForm } from "@/types/forms/glp-missing-form.ts";
import { FoundMedicationFormSchema } from "@/components/containers/landing/glp-form-found/found-medication-form.schema.ts";

const simplifiedMedications: MedicationDoses[] = [
  {
    uid: "med-1-Ozempic",
    title: "Ozempic",
    doses: [
      { uid: "dose-1-Ozempic", dose: ".68mg/1ml" },
      { uid: "dose-2-Ozempic", dose: "1.34mg/1ml" },
      { uid: "dose-3-Ozempic", dose: "2.68mg/1ml" },
    ],
  },
  {
    uid: "med-2-Wegovy",
    title: "Wegovy",
    doses: [
      { uid: "dose-4-Wegovy", dose: "0.25mg/0.5ml" },
      { uid: "dose-5-Wegovy", dose: "0.5mg/0.5ml" },
      { uid: "dose-6-Wegovy", dose: "1mg/0.5ml" },
      { uid: "dose-7-Wegovy", dose: "1.7mg/0.75ml" },
      { uid: "dose-8-Wegovy", dose: "2.4mg/0.75ml" },
    ],
  },
  {
    uid: "med-3-Mounjaro",
    title: "Mounjaro",
    doses: [
      { uid: "dose-9-Mounjaro", dose: "2.5mg/0.5ml" },
      { uid: "dose-10-Mounjaro", dose: "5mg/0.5ml" },
      { uid: "dose-11-Mounjaro", dose: "7.5mg/0.5ml" },
      { uid: "dose-12-Mounjaro", dose: "10mg/0.5ml" },
      { uid: "dose-13-Mounjaro", dose: "12.5mg/0.5ml" },
      { uid: "dose-14-Mounjaro", dose: "15mg/0.5ml" },
    ],
  },
  {
    uid: "med-4-Zepbound",
    title: "Zepbound",
    doses: [
      { uid: "dose-15-Zepbound", dose: "2.5mg/0.5ml" },
      { uid: "dose-16-Zepbound", dose: "5mg/0.5ml" },
      { uid: "dose-17-Zepbound", dose: "10mg/0.5ml" },
      { uid: "dose-18-Zepbound", dose: "15mg/0.5ml" },
    ],
  },
  {
    uid: "med-5-Saxenda",
    title: "Saxenda",
    doses: [
      { uid: "dose-19-Saxenda", dose: "0.6mg/0.1ml" },
      { uid: "dose-20-Saxenda", dose: "1.2mg/0.2ml" },
      { uid: "dose-21-Saxenda", dose: "1.8mg/0.3ml" },
      { uid: "dose-22-Saxenda", dose: "2.4mg/0.4ml" },
      { uid: "dose-23-Saxenda", dose: "3.0mg/0.5ml" },
    ],
  },
  {
    uid: "med-6-Victoza",
    title: "Victoza",
    doses: [
      { uid: "dose-24-Victoza", dose: "0.6mg/ml" },
      { uid: "dose-25-Victoza", dose: "1.2mg/ml" },
      { uid: "dose-26-Victoza", dose: "1.8mg/ml" },
    ],
  },
  {
    uid: "med-7-Trulicity",
    title: "Trulicity",
    doses: [
      { uid: "dose-27-Trulicity", dose: "0.75mg/0.5ml" },
      { uid: "dose-28-Trulicity", dose: "1.5mg/0.5ml" },
      { uid: "dose-29-Trulicity", dose: "3mg/0.5ml" },
      { uid: "dose-30-Trulicity", dose: "4.5mg/0.5ml" },
    ],
  },
];

export const GLPFoundMedicationForm = () => {
  const form = useForm<GLPMissingReactHookForm>({
    resolver: yupResolver(FoundMedicationFormSchema),
    defaultValues: {
      medications: [],
      email: "",
      zipCode: "",
    },
  });

  const onSubmit = (data: GLPMissingReactHookForm) => {
    console.log("onSubmit=", data);
  };

  return (
    <Form {...form}>
      <p className={"text-xl mb-2 font-semibold"}>
        Submit a missing GLP-1 Medication
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZipCode</FormLabel>
              <FormControl>
                <Input placeholder="Zip Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <MedicationSubForm medicationsDoses={simplifiedMedications} />

        <FormField
          control={form.control}
          name="reporterType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who are you?</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value ?? ""}
                  onValueChange={field.onChange}
                >
                  <div className={"flex gap-x-2"}>
                    {Object.values(REPORTER_TYPE).map((type) => (
                      <div
                        key={`reporter-type-${type}`}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem value={type} id={type} />
                        <Label className={"capitalize"} htmlFor={type}>
                          {type?.toString().toLowerCase()}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
