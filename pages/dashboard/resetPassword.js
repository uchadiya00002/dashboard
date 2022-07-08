import { Button, IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../components/Input/TextFieldWrapper";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";
import { $axios, $baseURL } from "../../components/axios/axios";

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid Email Address")
    .required("Email is required"),
  newPassword: Yup.string().required("New password is required"),
  otp: Yup.string().required("OTP is required"),
  // confirmPassword: Yup.string()
  //   .required("Confirm password is required")
  //   .when("password", {
  //     is: (val) => (val && val.length > 0 ? true : false),
  //     then: Yup.string().oneOf(
  //       [Yup.ref("password")],
  //       "Both password need to be the same"
  //     ),
  //   }),
});

const resetPassword = () => {
  const router = useRouter();

  const verifyResetPassword = (values) => {
    const { email, otp, newPassword } = values;

    const user = {
      email,
      newPassword,
      otp,
    };

    $axios
      .post(`${$baseURL}/auth/reset-password`, user)
      .then((res) => {
        console.log(res);
        router.push("/dashboard/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const INITIAL_FORM_VALUES = {
    email: "",
    newPassword: "",
    otp: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen my-auto mx-5">
      <div className=" border-2 rounded-md border-[#65748B] border-solid border-opacity-25 p-5 flex flex-col w-[400px]">
        <h2 className="my-2 text-2xl font-black">Reset Password</h2>
        <p className="mb-5 text-[#03045E] font-medium">
          OTP is sent to your registered Email Address
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

              <TextFieldWrapper
                name="newPassword"
                label="New password"
                className="mb-5"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextFieldWrapper name="otp" label="OTP" className="mb-5" />

              <Button
                type="submit"
                fullWidth
                className=" bg-[#03045E] hover:bg-[#0e106a] my-2 py-3 font-semibold normal-case rounded-lg"
                variant="contained"
                onClick={() => verifyResetPassword(values)}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default resetPassword;
