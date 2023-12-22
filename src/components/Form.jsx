import ky from "ky";
import FormInput from "./FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchema } from "../utils/validation/yup";

const Form = ({ formType }) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ValidationSchema),
  });

  const BASE_URL = ky.create({
    prefixUrl: import.meta.env.VITE_BASE_URL,
  });

  const onRegister = async (data) => {    
    const loading = toast.loading("Please wait...");
    try {
      const res = await BASE_URL.post("auth/register", {
        json: data,
      }).json();
      console.log(res);

      toast.update(loading, {
        render: "Account created successfully",
        type: "success",
        isLoading: false,
        pauseOnFocusLoss: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      navigate("/");
    } catch (err) {
      console.log(err.message);
      toast.update(loading, {
        render: err.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  const onLogin = async (data) => {
    const loading = toast.loading("Please wait...");
    try {
      const res = await BASE_URL.post("auth/login", {
        json: data,
      }).json();
      console.log(res);

      toast.update(loading, {
        render: "You logged in successfully",
        type: "success",
        isLoading: false,
        pauseOnFocusLoss: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.update(loading, {
        render: err.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="p-[30px] my-[50px] bg-white rounded-[10px] max-w-[540px] relative m-auto lg:mx-0 w-full md:min-w-[430px]">
      {formType === "register" ? (
        <>
          <div className="text-center pb-[30px]">
            <h1 className="title">Sign Up</h1>
            <p className="text-dark-300">
              Create an account to unlock exclusive features.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onRegister)}
            className="flex flex-col gap-y-5"
          >
            <FormInput
              placeholder="Name"
              type="text"
              label="Full Name"
              name="fullName"
              register={register("fullName", {
                required: "Name is a required field",
              })}
              error={errors.fullName ? errors.fullName.message : ""}
            />
            <FormInput
              placeholder="Email"
              type="email"
              label="Email"
              name="email"
              register={register("email")}
              error={errors.email ? errors.email.message : ""}
            />
            <FormInput
              placeholder="Password"
              type="password"
              label="Password"
              name="password"
              register={register("password")}
              error={errors.password ? errors.password.message : ""}
            />
            <div className="flex gap-x-2 items-center">
              <input
                className="checkbox"
                type="checkbox"
                {...register("checkbox", { required: true })}
              />
              <p className="text-dark-400">
                I agree with{" "}
                <span className="underline cursor-pointer">Terms of Use</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
            <button type="submit" className="btn-primary bg-primary">
              Sign Up
            </button>
            <div className="line">
              <p className="relative block w-fit m-auto bg-white px-4 z-20">
                OR
              </p>
            </div>
            <button className="py-4 flex items-center gap-[14px] rounded-md bg-light-970 font-medium px-4 justify-center hover:bg-light-950">
              <img src="./icons/google.svg" alt="Google Icon" /> Sign up with
              Google
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-medium underline inline-flex">
                Login <img src="./icons/linkArrow.svg" alt="Login" />
              </Link>
            </p>
          </form>
        </>
      ) : (
        <>
          <div className="text-center pb-[30px]">
            <h1 className="title">Login</h1>
            <p className="text-dark-300">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onLogin)}
            className="flex flex-col gap-y-5"
          >
            <FormInput
              placeholder="Email"
              type="email"
              label="Email"
              name="email"
              register={register("email")}
              error={errors.email ? errors.email.message : ""}
            />
            <FormInput
              placeholder="Password"
              type="password"
              label="Password"
              name="password"
              register={register("password")}
              error={errors.password ? errors.password.message : ""}
            />
            <Link to="/forgot" className="ml-auto hover:underline w-fit">
              Forgot Password?
            </Link>
            <div className="flex gap-x-2 items-center">
              <input className="checkbox" type="checkbox" />
              <p className="text-dark-400">Remember Me</p>
            </div>
            <button type="submit" className="btn-primary bg-primary">
              Login
            </button>
            <div className="line">
              <p className="relative block w-fit m-auto bg-white px-4 z-20">
                OR
              </p>
            </div>
            <button className="py-4 flex items-center gap-[14px] rounded-md bg-light-970 font-medium px-4 justify-center hover:bg-light-950">
              <img src="./icons/google.svg" alt="Google Icon" /> Login with
              Google
            </button>
            <p className="text-center">
              Dont have an account?{" "}
              <Link to="/sign-up" className="font-medium underline inline-flex">
                Sign Up <img src="./icons/linkArrow.svg" alt="Sign Up" />
              </Link>
            </p>
          </form>
        </>
      )}
    </div>
  );
};
export default Form;
