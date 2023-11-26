import FormInput from "./FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const Form = ({ formType }) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onRegister = async (data) => {
    const loading = toast.loading("Please wait...");
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      if (res.ok === false) {
        toast.update(loading, {
          render: responseData,
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
        return;
      }
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

      console.log(responseData);
      navigate("/");
    } catch (err) {
      toast.update(loading, {
        render: "Something went wrong, please try again",
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
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      if (res.ok === false) {
        toast.update(loading, {
          render: responseData,
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
        return;
      }
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

      console.log(responseData);
      navigate("/");
    } catch (err) {
      toast.update(loading, {
        render: "Something went wrong, please try again",
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
    <div className="p-[30px] my-[50px] bg-white rounded-[10px] max-w-[540px] relative m-auto">
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
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name should to include minimum 2 symbols",
                },
              })}
              error={errors.fullName ? errors.fullName.message : ""}
            />
            <FormInput
              placeholder="Email"
              type="email"
              label="Email"
              name="email"
              register={register("email", {
                required: "Email is required",
              })}
              error={errors.email ? errors.email.message : ""}
            />
            <FormInput
              placeholder="Password"
              type="password"
              label="Password"
              name="password"
              register={register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password should to include minimum 5 symbols",
                },
              })}
              error={errors.password ? errors.password.message : ""}
            />
            <div className="flex gap-x-2 items-center">
              <input
                className="checkbox"
                type="checkbox"
                onClick={() => setIsDisabled(!isDisabled)}
              />
              <p className="text-dark-400">
                I agree with{" "}
                <span className="underline cursor-pointer">Terms of Use</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
            <button
              type="submit"
              className="btn-primary bg-primary"
              disabled={isDisabled}
            >
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
              label="Email"
              type="email"
              name="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              error={errors.email ? errors.email.message : ""}
            />
            <FormInput
              placeholder="Password"
              label="Password"
              type="password"
              name="password"
              register={register("password", {
                required: "Password is required",
              })}
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
