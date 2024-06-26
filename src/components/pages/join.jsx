import { useFormik } from "formik";
import PageTitle from "../common/pageTitle";
import TextInput from "../common/textInput";
import SelectInput from "../common/selectInput";
import { joinFormSchema } from "../../lib/yupSchemas";
import InputError from "../common/inputError";
import { texts } from "../../lib/texts";
import { addVolunteer } from "../../lib/volunteerServices";
import { useEffect, useState } from "react";
import { cn } from "../../lib/cn";

const Join = () => {
   const [formResult, setFormResult] = useState(null);
   const formik = useFormik({
      validateOnMount: true,
      initialValues: {
         fullName: "",
         email: "",
         phoneNumber: "",
         academicInstitution: "",
         whichProject: "",
         howYouHearAboutUs: "",
      },
      onSubmit: async (values) => {
         try {
            const { data } = await addVolunteer(values);
            setFormResult({
               ok: true,
               message: texts.volunteerRegistrationSuccess,
            });
            console.log(data);
         } catch (error) {
            console.log(error);
            setFormResult({
               ok: false,
               message: error.response.data.message,
            });
         }
      },
      validationSchema: joinFormSchema,
   });

   //reset alert after user types
   useEffect(() => {
      if (formResult) setFormResult(null);
   }, [formik.values]);
   return (
      <section>
         <PageTitle title={texts.routesTitles.join} />
         <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
               <div>
                  <TextInput
                     label={"Full Name"}
                     required
                     {...formik.getFieldProps("fullName")}
                  />
                  <InputError fieldName="fullName" formik={formik} />
               </div>
               <div>
                  <TextInput
                     label={"Email"}
                     required
                     {...formik.getFieldProps("email")}
                  />
                  <InputError fieldName="email" formik={formik} />
               </div>
               <div>
                  <TextInput
                     label={"Phone"}
                     required
                     {...formik.getFieldProps("phoneNumber")}
                  />
                  <InputError fieldName="phoneNumber" formik={formik} />
               </div>

               <div>
                  <TextInput
                     label={"Academic Institution"}
                     {...formik.getFieldProps("academicInstitution")}
                  />
                  <InputError fieldName="academicInstitution" formik={formik} />
               </div>

               <div>
                  <SelectInput
                     label={"Which Project"}
                     {...formik.getFieldProps("whichProject")}
                  >
                     <option value="adoptGrandpa">אמץ סבא</option>
                     <option value="HospitalVisit">ביקור חולים</option>
                  </SelectInput>
                  <InputError fieldName="whichProject" formik={formik} />
               </div>

               <div>
                  <TextInput
                     label={"How did you hear about us?"}
                     {...formik.getFieldProps("howYouHearAboutUs")}
                  />
                  <InputError fieldName="howYouHearAboutUs" formik={formik} />
               </div>
               {formResult && (
                  <div
                     role="alert"
                     className={cn(
                        "alert flex col-span-2",
                        formResult?.ok ? "alert-success" : "alert-error"
                     )}
                  >
                     {formResult?.ok ? (
                        <i className="bi bi-check-circle text-xl"></i>
                     ) : (
                        <i className="bi bi-x-circle text-xl"></i>
                     )}
                     <span>{formResult?.message}</span>
                  </div>
               )}
               <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="btn btn-primary text-lg col-span-2"
               >
                  Join
               </button>
            </div>
         </form>
      </section>
   );
};

export default Join;
