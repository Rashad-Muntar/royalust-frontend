import { Formik } from "formik";
import AuthContainer from "../auth/container";
import { useState } from "react";
import Input from "../share/Input";
import Spinner from "../share/spinner";
import Button from "../share/Button";
import { updateProfileSchema } from "@/app/utils/authValidation";
import { useSelector } from "react-redux";
import { updateProfile } from "@/app/api/user";

const UpdateProfile = () => {
  const currentUser = useSelector((state: any) => state.user?.currentUser);
  const username:string = currentUser?.username
  const [isLoading, setIsLoading] = useState(false);
  const email:string = currentUser?.email

  return (
    <AuthContainer>
      <Formik
        initialValues={{ username, email }}
        validationSchema={updateProfileSchema}
        enableReinitialize={true}
        onSubmit={async (values) => {
            setIsLoading(true);
          try {
             await updateProfile({
              id: currentUser._id,
              username: values?.username,
              email: values?.email,
            });
            setIsLoading(false);
          } catch (error: any) {
            return error.message;
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-[100%] items-center"
          >
            {}
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && errors.username}
            <Input
              placeholder="Enter Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Button
              style="py-[10px] mt-4 bg-primaryBlack text-primaryWhite"
              type="submit"
              text={ isLoading ? <Spinner color="white" width="26" height="26"/> : "Update Profile"}
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default UpdateProfile;
