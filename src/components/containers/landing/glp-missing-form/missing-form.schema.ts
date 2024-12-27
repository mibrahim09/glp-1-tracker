import * as yup from "yup";
import { REPORTER_TYPE } from "@/constants/enums.ts";

export const MissingFormSchema = yup.object().shape({
  zipCode: yup.string().required(),
  email: yup.string().email().required(),
  reporterType: yup.string().required().oneOf(Object.values(REPORTER_TYPE)),
  medications: yup
    .array(
      yup.object({
        uid: yup.string().required(),
        dose: yup.array(yup.string().required()).required(),
      }),
    )
    .required(),
});
