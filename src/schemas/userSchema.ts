import * as yup from "yup";

export const userSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Minimum 3 characters")
    .max(30, "Maximum 30 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .max(255, "Email is too long"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(7, "Phone number too short")
    .max(30, "Phone number too long"),
});
