import { useState } from "react";
import { Link } from "react-router-dom";
import PageInfo from "../components/PageInfo";
import PricingPlan from "../components/PricingPlan";
import items from "../data/faq.json";
import FAQItem from "../components/FAQItem";

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
      <div className="bg-white rounded-xl p-5 text-center flex flex-col gap-[30px] lg:p-12 lg:flex-row w-fit m-auto mb-[90px] lg:mb-[120px]">
        <PricingPlan period={isActive} price={freePrice} type={"free"} />
        <PricingPlan period={isActive} price={proPrice} type={"pro"} />
      </div>

      {/* FAQ */}
      <div className="rounded-xl bg-white p-6 mb-[50px] flex flex-col gap-x-20 justify-between lg:flex-row lg:p-8 xl:p-14">
        <div className="mb-10 lg:max-w-[450px]">
          <h2 className="title pb-2">Frequently Asked Questions</h2>
          <p className="text-dark-200 pb-5">
            Still you have any questions? Contact our Team via{" "}
            <Link to="mailto:support@skillbridge.com" className="underline">
              support@skillbridge.com
            </Link>
          </p>
          <button
            type="button"
            className="border py-[14px] px-5 rounded-md font-medium "
          >
            See All FAQ
          </button>
        </div>

        <div className="flex flex-col gap-y-5 w-fit m-auto lg:m-0">
          {items.map((item) => {
            return (
              <FAQItem
                question={item.question}
                answer={item.answer}
                key={item.question}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
