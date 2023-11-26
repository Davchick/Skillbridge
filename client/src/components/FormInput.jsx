import { useState } from "react";
import { toast } from "react-toastify";

const FormInput = ({ type, label, placeholder, register, name, error }) => {
  const [isText, setIsText] = useState(type == "password" ? false : true);
  const showPassword = () => {
    setIsText(!isText);
  };

  {
    error &&
      toast.warning(error, {
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
  }

  return (
    <label className="relative font-medium">
      {label}
      <br />
      <input
        type={isText ? "text" : "password"}
        name={name}
        className="relative w-full text-dark-400 mt-[10px] p-5 bg-light-970 border rounded-lg font-normal focus:border-dark-700"
        placeholder={`Enter your ${placeholder}`}
        {...register}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute top-[58px] right-4"
          onClick={showPassword}
        >
          <img
            src={isText ? "./icons/eye.svg" : "./icons/eyeSlash.svg"}
            alt="Eye"
          />
        </button>
      )}
    </label>
  );
};

export default FormInput;
