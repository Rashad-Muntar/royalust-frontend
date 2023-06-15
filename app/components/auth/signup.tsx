"use client";
import React from "react";
import { Formik } from "formik";
import { SignupSchema } from "@/app/utils/authValidation";
import { signupService } from "@/app/api/auth";
import Input from "../share/Input";
import Button from "../share/Button";
import Link from "next/link";
import AuthContainer from "./container";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  return (
    <AuthContainer
      heading="SIGN UP"
      subHeading="Join Royalust and enjoy feel of life"
    >
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          try {
            const response = await signupService({
              username: values.username,
              email: values.email,
              password: values.password,
            });
            router.push("/auth/login");
            return response;
          } catch (error: any) {
            throw new Error(error.message);
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
              placeholder="Enter your username"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <Input
              placeholder="Enter your email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button
              style="outline"
              type="submit"
              text="Sign up"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
      <div className="flex justify-center items-center mt-5">
        <p className="mr-3 text-sm">Are you already a member?</p>
        <Link href="/auth/login">
          <p className="text-sky-400">Log in</p>
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Signup;
