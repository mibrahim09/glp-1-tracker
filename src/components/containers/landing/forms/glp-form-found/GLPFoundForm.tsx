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
import { GLPFoundReactHookForm } from "@/types/forms/glp-found-form.ts";
import { MedicationSubForm } from "@/components/containers/landing/forms/components/medications-sub-form/MedicationSubForm.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useContext } from "react";
import { AppContext } from "@/context/app/AppContext.tsx";
import { FoundMedicationFormSchema } from "@/components/containers/landing/forms/glp-form-found/found-medication-form.schema.ts";

export const GLPFoundMedicationForm = () => {
  const { medications } = useContext(AppContext);
  const form = useForm<GLPFoundReactHookForm>({
    resolver: yupResolver(FoundMedicationFormSchema),
    defaultValues: {
      medications: [],
      email: "",
      pharmacyAddress: "",
    },
  });

  const onSubmit = (data: GLPFoundReactHookForm) => {
    console.log("onSubmit=", data);
  };

  return (
    <Form {...form}>
      <p className={"text-xl mb-2 font-semibold"}>I found a GLP-1 Medication</p>
      <Separator className={"my-4"} />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="pharmacyAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pharmacy Address</FormLabel>
              <FormControl>
                <Input placeholder="Pharmacy Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {medications && <MedicationSubForm medicationsDoses={medications} />}

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
        <Separator className={"my-4"} />
        <Button className={"w-full"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
