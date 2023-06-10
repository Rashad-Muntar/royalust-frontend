"use client";
import React from "react";
import { Formik } from "formik";
import SignupSchema from "@/app/utils/authValidation";
import signupService from "@/app/api/auth";
import Input from "../share/Input";
import Button from "../share/Button";
import { type } from "os";

const Signup = () => (
  <div>
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
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-2 justify-center"
        >
          {}
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
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
          <Button type="submit" text="Sign up" disabled={isSubmitting} />
          {/* <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
        </form>
      )}
    </Formik>
  </div>
);

export default Signup;
