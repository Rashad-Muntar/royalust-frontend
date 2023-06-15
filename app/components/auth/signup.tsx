"use client";
import React from "react";
import { Formik } from "formik";
import { SignupSchema } from "@/app/utils/authValidation";
import { signupService } from "@/app/api/auth";
import { useState } from "react";
import Input from "../share/Input";
import Spinner from "../share/spinner";
import Button from "../share/Button";
import Link from "next/link";
import AuthContainer from "./container";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContainer
      heading="SIGN UP"
      subHeading="Join Royalust. This is life beyond the norm"
    >
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          setIsLoading(true);
          try {
            await signupService({
              username: values.username,
              email: values.email,
              password: values.password,
            });
            setIsLoading(false);
            router.push("/auth/login");
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
              text={isLoading ? <Spinner color="white" height="40" width="40"/> : "Sign up"}
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
