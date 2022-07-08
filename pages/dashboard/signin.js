import { Button, IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../components/Input/TextFieldWrapper";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { $axios, $baseURL } from "../../components/axios/axios";
import { useRouter } from "next/router";

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("required*"),
  password: Yup.string().required("required*"),
});

const signin = () => {
  const router = useRouter();

  const SigninUser = (values) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };

    $axios
      .post(`${$baseURL}/auth/login`, user)
      .then((res) => {
        router.push("/dashboard/dashboard");

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const INITIAL_FORM_VALUES = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center  h-screen my-auto mx-5 flex-wrap ">
      <div className="w-[480px] border-2 rounded-md border-[#65748B] border-solid border-opacity-25 p-5 ">
        <h2 className="my-2 text-2xl font-bold">Sign In</h2>
        <div className="flex justify-between  my-5  ">
          <Button
            variant="contained"
            startIcon={<FaFacebookF className="pr-1.5" />}
            className="bg-[#4267B2] hover:bg-[#396cd3] py-2 px-2 rounded-lg  text-center   items-center mb-3  font-bold  text-base w-[48%] normal-case"
          >
            Login with Facebook
          </Button>
          <Button
            variant="contained"
            startIcon={<FaGoogle className="pr-1.5" size={25} />}
            className="bg-[#db4a39] hover:bg-[#f43939] py-2 rounded-lg  mb-3 text-center   items-center font-bold text-base w-[48%] normal-case"
          >
            Login with Google
          </Button>
        </div>
        <p className="mb-7 text-[#03045E] font-medium text-center  ">
          Or login with email address
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
                size="small"
              />
              <TextFieldWrapper
                name="password"
                size="small"
                label="Password"
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

              <Button
                onClick={() => SigninUser(values)}
                className=" bg-[#03045E] hover:bg-[#0e106a] py-2 font-semibold normal-case  rounded-lg"
                variant="contained"
                fullWidth="true"
              >
                Sign In Now
              </Button>
            </Form>
          )}
        </Formik>

        <p className="my-2 text-[#65748B] text-sm">
          Don’t have an account?{" "}
          <Link href="/dashboard/signup">
            <a className="text-[#03045E] font-semibold">Sign up</a>
          </Link>
          <p className="my-1 text-[#65748B] text-sm">
            {/* Don’t have an account?{" "} */}
            <Link href="/dashboard/forgotPassword">
              <a className="">Forgot password?</a>
            </Link>
          </p>
        </p>
      </div>
    </div>
  );
};

export default signin;
