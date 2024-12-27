import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MissingFormSchema } from "./missing-form.schema.ts";
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

const simplifiedMedications: MedicationDoses[] = [
  {
    uid: "med-1",
    title: "Ozempic",
    doses: [
      { uid: "dose-1", dose: ".68mg/1ml" },
      { uid: "dose-2", dose: "1.34mg/1ml" },
      { uid: "dose-3", dose: "2.68mg/1ml" },
    ],
  },
  {
    uid: "med-2",
    title: "Wegovy",
    doses: [
      { uid: "dose-4", dose: "0.25mg/0.5ml" },
      { uid: "dose-5", dose: "0.5mg/0.5ml" },
      { uid: "dose-6", dose: "1mg/0.5ml" },
      { uid: "dose-7", dose: "1.7mg/0.75ml" },
      { uid: "dose-8", dose: "2.4mg/0.75ml" },
    ],
  },
  {
    uid: "med-3",
    title: "Mounjaro",
    doses: [
      { uid: "dose-9", dose: "2.5mg/0.5ml" },
      { uid: "dose-10", dose: "5mg/0.5ml" },
      { uid: "dose-11", dose: "7.5mg/0.5ml" },
      { uid: "dose-12", dose: "10mg/0.5ml" },
      { uid: "dose-13", dose: "12.5mg/0.5ml" },
      { uid: "dose-14", dose: "15mg/0.5ml" },
    ],
  },
  {
    uid: "med-4",
    title: "Zepbound",
    doses: [
      { uid: "dose-15", dose: "2.5mg/0.5ml" },
      { uid: "dose-16", dose: "5mg/0.5ml" },
      { uid: "dose-17", dose: "10mg/0.5ml" },
      { uid: "dose-18", dose: "15mg/0.5ml" },
    ],
  },
  {
    uid: "med-5",
    title: "Saxenda",
    doses: [
      { uid: "dose-19", dose: "0.6mg/0.1ml" },
      { uid: "dose-20", dose: "1.2mg/0.2ml" },
      { uid: "dose-21", dose: "1.8mg/0.3ml" },
      { uid: "dose-22", dose: "2.4mg/0.4ml" },
      { uid: "dose-23", dose: "3.0mg/0.5ml" },
    ],
  },
  {
    uid: "med-6",
    title: "Victoza",
    doses: [
      { uid: "dose-24", dose: "0.6mg/ml" },
      { uid: "dose-25", dose: "1.2mg/ml" },
      { uid: "dose-26", dose: "1.8mg/ml" },
    ],
  },
  {
    uid: "med-7",
    title: "Trulicity",
    doses: [
      { uid: "dose-27", dose: "0.75mg/0.5ml" },
      { uid: "dose-28", dose: "1.5mg/0.5ml" },
      { uid: "dose-29", dose: "3mg/0.5ml" },
      { uid: "dose-30", dose: "4.5mg/0.5ml" },
    ],
  },
];

interface GLPMissingReactHookForm {
  zipCode: string;
  medications: { uid: string; dose: string[] }[];
  reporterType: (typeof REPORTER_TYPE)[keyof typeof REPORTER_TYPE];
  email: string;
}

export const GLPMissingForm = () => {
  const form = useForm<GLPMissingReactHookForm>({
    resolver: yupResolver(MissingFormSchema),
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
      <p>Errors={JSON.stringify(form.formState?.errors)}</p>
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
              <FormLabel>Reporter Type</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value ?? ""}
                  onValueChange={field.onChange}
                >
                  {Object.values(REPORTER_TYPE).map((type) => (
                    <div
                      key={`reporter-type-${type}`}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={type} id={type} />
                      <Label htmlFor={type}>{type}</Label>
                    </div>
                  ))}
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
