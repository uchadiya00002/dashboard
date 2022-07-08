import React from "react";
import { Button } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../components/Input/TextFieldWrapper";
import { $axios, $baseURL } from "../../components/axios/axios";
import { useRouter } from "next/router";
import Link from "next/link";

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid Email Address")
    .required("Email is required"),
});

const forgotPassword = () => {
  const router = useRouter();

  const verifyForgotPassword = (values) => {
    const { email } = values;
    const user = {
      email,
    };

    $axios
      .post(`${$baseURL}/auth/forgot-password`, user)
      .then((res) => {
        console.log(res);
        router.push("/dashboard/resetPassword");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const INITIAL_FORM_VALUES = {
    email: "",
  };

  return (
    <div className="flex items-center justify-center h-screen my-auto mx-5">
      <div className=" border-2 rounded-md border-[#65748B] border-solid border-opacity-25 p-5 flex flex-col content-center w-[500px]">
        <h2 className="my-2 text-2xl font-black">Forgot Password</h2>
        <p className="mb-5 text-[#03045E] font-medium">
          Use your registered email to reset password
        </p>
        <Formik
          initialValues={{ ...INITIAL_FORM_VALUES }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
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
            <Form>
              <TextFieldWrapper
                name="email"
                label="Email Address"
                className="mb-5"
              />

              <Button
                type="submit"
                fullWidth
                className=" bg-[#03045E] hover:bg-[#0e106a] my-2 py-3 font-semibold normal-case rounded-lg ml-auto"
                variant="contained"
                onClick={() => verifyForgotPassword(values)}
              >
                Send Email
              </Button>
            </Form>
          )}
        </Formik>
        <Link href="/dashboard/resendOtp">
          <a className="my-1 text-[#65748B] text-sm">Resend OTP</a>
        </Link>
      </div>
    </div>
  );
};

export default forgotPassword;
