// import { Button, IconButton, InputAdornment } from "@mui/material";
// import * as Yup from "yup";
// import Link from "next/link";
// import { Formik, Form } from "formik";
// import TextFieldWrapper from "../components/Input/TextFieldWrapper";
// import { VisibilityOff, Visibility } from "@mui/icons-material";
// import { useState } from "react";
// import { $axios, $baseURL } from "../components/axios/axios";
// import { useRouter } from "next/router";

// const FORM_VALIDATION = Yup.object().shape({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   email: Yup.string()
//     .email("Enter valid Email Address")
//     .required("Email is required"),
//   role: Yup.string().required("Role is required"),
//   phoneNumber: Yup.string().required("Phone Number is required"),
//   password: Yup.string().required("Password is required"),
//   termsAndConditions: Yup.boolean()
//     .oneOf([true], "The Terms and Conditions must be accepted.")
//     .required("The Terms and Conditions must be accepted."),
// });

// const signup = () => {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [termsAndConditions, setTermsAndConditions] = useState(false);
//   const INITIAL_FORM_VALUES = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     role: "",
//     phoneNumber: "",
//     password: "",
//   };

//   const SignUpUser = (values) => {
//     const { firstName, lastName, email, phoneNumber, password } = values;
//     const user = {
//       firstName,
//       lastName,
//       email,
//       role: "SUPPLIER",
//       phoneNumber,
//       password,
//     };

//     $axios
//       .post(`${$baseURL}/auth/signup`, user)
//       .then((res) => {
//         router.push("/dashboard/verifySignup");

//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen my-auto mx-5">
//       <div className=" border-2 rounded-md border-[#65748B] border-solid border-opacity-25 p-5 flex flex-col w-[400px]">
//         <h2 className="my-2 text-2xl font-black">Create a new account</h2>
//         <p className="mb-5 text-[#03045E] font-medium">
//           Use your email to create new account
//         </p>
//         <Formik
//           initialValues={{ ...INITIAL_FORM_VALUES }}
//           validationSchema={FORM_VALIDATION}
//           onSubmit={(values) => {
//             console.log(values);
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//             /* and other goodies */
//           }) => (
//             <Form>
//               <TextFieldWrapper
//                 name="firstName"
//                 label="First name"
//                 className="mb-5"
//                 size="small"
//               />

//               <TextFieldWrapper
//                 name="lastName"
//                 label="Last name"
//                 className="mb-5"
//                 size="small"
//               />
//               <TextFieldWrapper
//                 name="email"
//                 label="Email Address"
//                 className="mb-5"
//                 size="small"
//               />
//               {/* <TextFieldWrapper
//                 name="role"
//                 label="Role"
//                 className="mb-5"
//                 size="small"
//                 // values={role}
//               /> */}

//               <TextFieldWrapper
//                 name="phoneNumber"
//                 label="Phone Number"
//                 className="mb-5"
//                 size="small"
//               />
//               <TextFieldWrapper
//                 name="password"
//                 label="Password"
//                 className="mb-5"
//                 size="small"
//                 type={showPassword ? "text" : "password"}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="Toggle password visibility"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <div className="text-sm text-[#65748B] my-2 ">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   onChange={() => setTermsAndConditions(!termsAndConditions)}
//                 />
//                 I have read the{" "}
//                 <a
//                   href="/"
//                   className="text-[#03045E] font-semibold border-b-2 border-[#03045e] "
//                 >
//                   Terms and Conditions
//                 </a>
//               </div>
//               <Button
//                 type="submit"
//                 className=" bg-[#03045E] hover:bg-[#0e106a] my-2 py-2 font-semibold normal-case rounded-lg"
//                 variant="contained"
//                 fullWidth
//                 onClick={() => SignUpUser(values)}
//               >
//                 Sign Up Now
//               </Button>
//               <p className=" text-[#65748B] text-sm">
//                 Have an account?{" "}
//                 <Link href="/dashboard/signin">
//                   <a className="text-[#03045E] font-semibold">Sign in</a>
//                 </Link>
//               </p>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default signup;
