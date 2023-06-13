import { Formik } from "formik";
import { ReactNode } from "react";
import { useEffect, useState } from "react";
import AuthContainer from "../auth/container";
import Input from "../share/Input";
import Button from "../share/Button";
import { updateProfileSchema } from "@/app/utils/authValidation";
import { useSelector } from "react-redux";
import { updateProfile, getUserInfo } from "@/app/api/user";

const UpdateProfile = () => {
  const currentUser = useSelector((state: any) => state.user?.currentUser);
  const username:string = currentUser?.username
  const email:string = currentUser?.email
  console.log(currentUser)
  return (
    <AuthContainer>
        
      <Formik
        initialValues={{ username, email }}
        validationSchema={updateProfileSchema}
        enableReinitialize={true}
        onSubmit={async (values) => {
            console.log(values)
          try {
            const response = await updateProfile({
              id: currentUser._id,
              username: values?.username,
              email: values?.email,
            });
            return response;
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
            className="flex flex-col justify-center"
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
              text="Update Profile"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default UpdateProfile;
