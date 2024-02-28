import { FormikErrors } from "formik";

type InputType = "text" | "email" | "password" | "number" | "checkbox" | "radio" | "file" | "submit" | "reset" | "button";

type InputGroupType<T> = {
  name: keyof FormikErrors<T>;
  label: string;
  placeholder: string;
  type: InputType;
  disabled?: boolean;
};
