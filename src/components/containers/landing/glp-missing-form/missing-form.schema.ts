import * as yup from "yup";

export const MissingFormSchema = yup.object().shape({
  zipCode: yup.string().required(),
});
