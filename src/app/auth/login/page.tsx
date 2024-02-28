"use client";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Format email salah").required("Email harus diisi"),
      password: Yup.string().min(8, "Password minimal 8 karakter").required("Password harus diisi"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const isEmailError = Boolean(formik.errors.email && formik.touched.email);
  const isPasswordError = Boolean(formik.errors.password && formik.touched.password);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-3">LOGIN</h1>

      <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-xl flex flex-col gap-5">
        <Input id="email" name="email" type="email" label="Email" value={formik.values.email} onChange={formik.handleChange} isInvalid={isEmailError} errorMessage={isEmailError ? formik.errors.email : ""} onBlur={formik.handleBlur} />

        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          isInvalid={isPasswordError}
          errorMessage={isPasswordError ? formik.errors.password : ""}
          onBlur={formik.handleBlur}
        />

        <Button color="primary" size="lg" className="font-semibold" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
