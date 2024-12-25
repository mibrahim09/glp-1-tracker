import { useForm } from "react-hook-form";
import { REPORTER_TYPE } from "../../../../constants/enums.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { MissingFormSchema } from "./missing-form.schema.ts";

interface GLPMissingReactHookForm {
  zipCode: string;
  // medications: { name: string; dose: string }[];
  // reporterType: (typeof REPORTER_TYPE)[keyof typeof REPORTER_TYPE];
  // email: string;
}

export const GLPMissingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GLPMissingReactHookForm>({
    resolver: yupResolver(MissingFormSchema),
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("zipCode")} />
      {errors.zipCode && <p>Invalid ZipCode</p>}
      {/*<input {...register("lastName", { required: true })} />*/}
      {/*{errors.lastName && <p>Last name is required.</p>}*/}
      {/*<input {...register("age", { pattern: /\d+/ })} />*/}
      {/*{errors.age && <p>Please enter number for age.</p>}*/}
      <input type="submit" />
    </form>
  );
};
