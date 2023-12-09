import features from "../data/pricing.json";

const PricingPlan = ({ period, price, type }) => {
  const getIcon = (access) => {
    if (access === "true") {
      return "../icons/pricing-checkbox.svg";
    } else {
      return "../icons/pricing-cross.svg";
    }
  };
  return (
    <div className="bg-light-970 rounded-xl p-5 pt-[30px] w-fit m-auto">
      <h4 className="font-medium py-2 rounded bg-primary-970 border-2 border-primary-950">
        {type === "free" ? "Free" : "Pro"} Plan
      </h4>
      <span className="font-medium text-dark-300 py-[20px] block">
        <span className="text-[50px] font-semibold text-dark-150">
          {price}$
        </span>
        /{period}
      </span>
      <div className="bg-white rounded-md p-5">
        <h5 className="font-medium pb-5">Available Features</h5>
        <ul className="flex flex-col gap-5">
          {type === "free"
            ? features.free.map((feature) => {
                return (
                  <li
                    className="border rounded-md p-3 flex items-center gap-2 text-left"
                    key={feature.text}
                  >
                    <div
                      className={`min-h-[24px] min-w-[24px] relative rounded ${
                        feature.access === "false"
                          ? "bg-white border"
                          : "bg-primary-950"
                      }`}
                    >
                      <img
                        src={getIcon(feature.access)}
                        alt="icon"
                        className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    {feature.text}
                  </li>
                );
              })
            : features.pro.map((feature) => {
                return (
                  <li
                    className="border rounded-md p-3 flex items-center gap-2 text-left"
                    key={feature.text}
                  >
                    <div
                      className={`min-h-[24px] min-w-[24px] relative rounded ${
                        feature.access === "false"
                          ? "bg-white border"
                          : "bg-primary-950"
                      }`}
                    >
                      <img
                        src={getIcon(feature.access)}
                        alt="icon"
                        className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    {feature.text}
                  </li>
                );
              })}
        </ul>
        <button
          type="button"
          className="w-full p-[18px] bg-primary mt-[30px] rounded-b-md btn-primary"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
