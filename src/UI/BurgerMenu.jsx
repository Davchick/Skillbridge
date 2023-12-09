import { useState } from "react";
import Navigation from "../components/Navigation";

const BurgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickBurger = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div
        onClick={() => clickBurger()}
        className={`absolute top-0 left-0 w-full h-full bg-dark opacity-40 z-10 cursor-pointer transition-all ${
          isClicked ? " block" : "hidden"
        }`}
      ></div>

      <div
        onClick={() => clickBurger()}
        className={`lg:hidden inline-flex flex-col gap-[5px] cursor-pointer relative ${
          isClicked && "gap-0"
        }`}
      >
        <div
          className={`w-7 h-[2px] bg-dark-300 rounded transition-all ${
            isClicked && "absolute top-1/2 rotate-45"
          }`}
        ></div>
        <div
          className={`w-7 h-[2px] bg-dark-300 rounded transition-all ${
            isClicked && "absolute top-1/2 -rotate-45"
          }`}
        ></div>
        <div
          className={`w-4 h-[2px] bg-dark-300 rounded ml-[12px] transition-all ${
            isClicked && "opacity-0"
          }`}
        ></div>
      </div>

      <Navigation
        styles={`absolute left-0 top-0 h-[100vh] w-1/2 transition-all bg-white z-20 p-12 ${
          isClicked ? "block" : "hidden"
          }`}
        onClick={() => clickBurger()}
      />
    </>
  );
};

export default BurgerMenu;
