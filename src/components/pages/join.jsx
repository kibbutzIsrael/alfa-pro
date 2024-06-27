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
import TimeLine from "../common/timeLine";

const Join = () => {
   const [formResult, setFormResult] = useState(null);

   const { userObject: fields, activities } = texts;

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
         <div className="max-w-lg mx-auto">
            <h2 className="text-lg font-semibold">
               {texts.joinTimeLine.title}
            </h2>
            <TimeLine data={texts.joinTimeLine.steps} />
            <div className="divider"></div>
         </div>

         <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
               <h2 className="text-lg font-semibold">
                  {texts.common.joinForm}
               </h2>

               <p className="">
                  <span className="text-error text-xl">*</span> - שדות חובה
               </p>
               <div>
                  <TextInput
                     label={fields.fullName}
                     required
                     {...formik.getFieldProps("fullName")}
                  />
                  <InputError fieldName="fullName" formik={formik} />
               </div>
               <div>
                  <TextInput
                     label={fields.email}
                     required
                     {...formik.getFieldProps("email")}
                  />
                  <InputError fieldName="email" formik={formik} />
               </div>
               <div>
                  <TextInput
                     label={fields.phoneNumber}
                     required
                     {...formik.getFieldProps("phoneNumber")}
                  />
                  <InputError fieldName="phoneNumber" formik={formik} />
               </div>

               <div>
                  <TextInput
                     label={fields.academicInstitution}
                     {...formik.getFieldProps("academicInstitution")}
                  />
                  <InputError fieldName="academicInstitution" formik={formik} />
               </div>

               <div>
                  <SelectInput
                     label={fields.whichProject}
                     {...formik.getFieldProps("whichProject")}
                  >
                     {Object.keys(activities).map((activity) => (
                        <option key={activity} value={activity}>
                           {activities[activity].title}
                        </option>
                     ))}
                  </SelectInput>
                  <InputError fieldName="whichProject" formik={formik} />
               </div>

               <div>
                  <TextInput
                     label={fields.howYouHearAboutUs}
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
                  {texts.common.join}
               </button>
            </div>
         </form>
      </section>
   );
};

export default Join;
