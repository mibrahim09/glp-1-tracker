import { useForm } from "react-hook-form";
import { REPORTER_TYPE } from "@/constants/enums.ts";

interface GLPFoundReactHookForm {
  zipCode: string;
  medications: { name: string; dose: string }[];
  reporterType: (typeof REPORTER_TYPE)[keyof typeof REPORTER_TYPE];
  email: string;
}

export const GLPFoundForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GLPFoundReactHookForm>();
  return <></>;
};
