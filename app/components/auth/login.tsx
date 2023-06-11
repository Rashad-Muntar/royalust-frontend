"use client";
import React from "react";
import { Formik } from "formik";
import Cookies from "js-cookie";
import { LoginSchema } from "@/app/utils/authValidation";
import { loginService } from "@/app/api/auth";
import Input from "../share/Input";
import Button from "../share/Button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            const response = await loginService({
              email: values.email,
              password: values.password,
            });
            let currentTime = new Date();
            currentTime.setMinutes(currentTime.getMinutes() + 14);
            let accessTokenExpireDate = currentTime.toUTCString();
            Cookies.set("accessToken", response?.data?.token, {
              expires: new Date(accessTokenExpireDate),
            });
            router.push("/");
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
            className="flex flex-col border-2 justify-center"
          >
            {}
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button type="submit" text="Login" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
