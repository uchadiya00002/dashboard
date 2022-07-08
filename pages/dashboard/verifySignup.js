import React from "react";
import { Button } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../components/Input/TextFieldWrapper";
import { useRouter } from "next/router";
import { $axios, $baseURL } from "../../components/axios/axios";

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid Email Address")
    .required("Email is required"),
  otp: Yup.string().required("OTP is required"),
});

const verifySignup = () => {
  const router = useRouter();

  const verifySignUpUser = (values) => {
    const { email, otp } = values;
    const user = {
      email,
      otp,
    };

    $axios
      .post(`${$baseURL}/auth/verify-otp`, user)
      .then((res) => {
        router.push("/dashboard/signin");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const INITIAL_FORM_VALUES = {
    email: "",
    otp: "",
  };

  return (
    <div className="flex items-center justify-center h-screen my-auto mx-5">
      <div className=" border-2 rounded-md border-[#65748B] border-solid border-opacity-25 p-5 flex flex-col content-center w-[500px]">
        <h2 className="my-2 text-2xl font-black">Verify Signup</h2>
        <p className="mb-5 text-[#03045E] font-medium">
          Enter your email address and OTP
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

              <TextFieldWrapper name="otp" label="OTP" className="mb-5" />

              <Button
                type="submit"
                fullWidth
                className=" bg-[#03045E] hover:bg-[#0e106a] my-2 py-3 font-semibold normal-case rounded-lg ml-auto"
                variant="contained"
                onClick={() => verifySignUpUser(values)}
              >
                Verify
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default verifySignup;
