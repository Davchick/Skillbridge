import { useState } from "react";

const FormInput = ({ type, label, placeholder, register, name, error }) => {
  const [isText, setIsText] = useState(type == "password" ? false : true);
  const showPassword = () => {
    setIsText(!isText);
  };

  return (
    <label className="relative font-medium">
      {label}
      <br />
      <input
        type={isText ? "text" : "password"}
        name={name}
        className={`input ${error ? "border-red-300 border-2 focus:border-red-300" : ""}`}
        placeholder={`Enter your ${placeholder}`}
        {...register}
      />
      {error && <p className="font-normal text-sm pt-1 pl-1 text-[#ec6a68]">{error + "!"}</p>}
      {type === "password" && (
        <button
          type="button"
          className="absolute top-[56px] right-4"
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
