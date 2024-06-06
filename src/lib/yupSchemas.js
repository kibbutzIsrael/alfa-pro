import * as Yup from "yup";

export const joinFormSchema = Yup.object({
   fullName: Yup.string()
      .min(2, "Full name must be at least 2 characters long")
      .max(50, "Full name cannot exceed 50 characters")
      .required("Full name is required"),
   email: Yup.string()
      .email("Invalid email address")
      .max(100, "Email cannot exceed 100 characters")
      .required("Email is required"),
   phoneNumber: Yup.string()
      .matches(/^05\d([- ]?\d){7}$/, "Phone number is not valid")
      .required("Phone number is required"),
   academicInstitution: Yup.string().max(
      100,
      "Academic institution name cannot exceed 100 characters"
   ),
   whichProject: Yup.string().oneOf(
      ["adoptGrandpa", "HospitalVisit"],
      "Invalid project selection"
   ),
   howYouHearAboutUs: Yup.string().max(
      100,
      "Response cannot exceed 100 characters"
   ),
});
