import { useFormik } from "formik";
import { texts } from "../../lib/texts";
import { adminRoutes } from "../../routes";
import TextInput from "../common/textInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
   const navigate = useNavigate();
   const [serverError, setServerError] = useState("");

   const formik = useFormik({
      initialValues: {
         userName: "admin",
         password: "admin",
      },
      onSubmit: async ({ userName, password }) => {
         await new Promise((resolve) => setTimeout(resolve, 1000));
         if (userName !== "admin" || password !== "admin")
            return setServerError("Wrong email or password");
         navigate(adminRoutes.main.path, { replace: true });
      },
   });

   useEffect(() => {
      if (serverError) setServerError("");
   }, [formik.values]);
   return (
      <section>
         <div className="card bg-base-300">
            <div className="card-body">
               <div className="card-title">{adminRoutes.login.title}</div>
               <form onSubmit={formik.handleSubmit} className="grid gap-3">
                  <TextInput
                     label={texts.login.userName}
                     required
                     {...formik.getFieldProps("userName")}
                  />
                  <TextInput
                     label={texts.login.password}
                     type="password"
                     required
                     {...formik.getFieldProps("password")}
                  />
                  {serverError && (
                     <div role="alert" className="alert alert-error flex">
                        <i className="bi bi-x-circle text-xl"></i>
                        {texts.login.serverError}
                     </div>
                  )}
                  <button
                     disabled={formik.isSubmitting}
                     className="btn btn-primary"
                  >
                     {formik.isSubmitting ? (
                        <div className="loading loading-dots loading-lg"></div>
                     ) : (
                        <span>{texts.login.login}</span>
                     )}
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Login;
