import { useState } from "react";
import PageInfo from "../components/PageInfo";
import PricingPlan from "../components/PricingPlan";

const Pricing = () => {
  const [isActive, setIsActive] = useState("monthly");
  let freePrice = 0;
  let proPrice = isActive === "monthly" ? 79 : 790;

  return (
    <>
      <PageInfo
        title="Our Pricings"
        text="Welcome to SkillBridge Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />

      {/* Buttons */}
      <div className="bg-white p-3 text-dark-300 text-medium rounded-lg w-fit m-auto mt-[50px] mb-[40px]">
        <button
          type="button"
          onClick={() => setIsActive("monthly")}
          className={` transition-colors py-4 px-6 rounded-md ${
            isActive === "monthly" ? "btn-primary bg-primary" : ""
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setIsActive("yearly")}
          className={` transition-colors py-4 px-6 rounded-md ${
            isActive === "yearly" ? "btn-primary bg-primary" : ""
          }`}
        >
          Yearly
        </button>
      </div>
        
      {/* Price Plans */}
      <div className="bg-white rounded-xl p-5 text-center flex gap-[30px] flex-wrap w-fit m-auto mb-[170px]">
        <PricingPlan period={isActive} price={freePrice} type={"free"} />
        <PricingPlan period={isActive} price={proPrice} type={"pro"} />
      </div>
    </>
  );
};

export default Pricing;
