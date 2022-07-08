import { Button, IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../components/Input/TextFieldWrapper";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";

const FORM_VALIDATION = Yup.object().shape({
  password: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

const settings = () => {
  const INITIAL_FORM_VALUES = {
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col  mx-5  mt-5 w-[45%] xs:w-full ">
      <h1 className="font-bold text-2xl	mb-6">Settings</h1>
      <div className="ml-5 ">
        <div className="mb-5">
          <h2 className="font-semibold text-xl mb-3">Notifications</h2>
          <p className="text-[#65748B]">Manage the notifications</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col mr-16">
            <h1 className="text-lg ">Notifications</h1>

            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Email
            </label>
            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Push Notifications
            </label>
            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Text Messages
            </label>
            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Phone Calls
            </label>
          </div>
          <div className="flex flex-col mr-16">
            <h1 className="text-lg ">Messages</h1>
            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Email
            </label>
            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Push Notifications
            </label>
            <label>
              <input type="checkbox" className="mr-3 my-3" />
              Phone Calls
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <Button
            className=" bg-[#03045E] hover:bg-[#0e106a] py-3 font-semibold normal-case  rounded-lg ml-auto  "
            variant="contained"
          >
            Save
          </Button>
        </div>
        <div className="mb-5">
          <h1 className="font-semibold text-xl mb-3">Password</h1>
          <p className="text-[#65748B]">Update password</p>
        </div>
        <div className="flex flex-col ">
          <Formik
            initialValues={{ ...INITIAL_FORM_VALUES }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <TextFieldWrapper
                name="password"
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

              <TextFieldWrapper
                name="confirmPassword"
                label="Confirm password"
                className="mb-2"
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
            </Form>
          </Formik>
          <Button
            className=" bg-[#03045E] hover:bg-[#0e106a] py-3 font-semibold normal-case  mt-3 rounded-lg ml-auto "
            variant="contained"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default settings;
