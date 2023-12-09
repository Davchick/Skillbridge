import cards from "../data/about.json";

const AboutSection = ({ title, text, type }) => {
  return (
    <div>
      <div>
        <div className="py-[50px]">
          <h3 className="text-2xl text-dark-200 font-medium">{title}</h3>
          <p className="text-dark-350 ">{text}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-[10px] md:gap-[20px] xl:gap-[30px]">
          {title === "Achievements"
            ? cards.achievements.map((card) => {
                return (
                  <div
                    className="p-[30px] rounded-[10px] bg-white border"
                    key={card.text}
                  >
                    <div className="rounded-md border border-primary-900 h-14 w-14 relative bg-primary-970 mb-6">
                      <img
                        src={card.icon}
                        alt={`${title} Icon`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <h4 className="font-medium text-lg pb-1">{card.title}</h4>
                    <p className="text-dark-350">{card.text}</p>
                  </div>
                );
              })
            : cards.goals.map((card) => {
                return (
                  <div
                    className="p-[30px] rounded-[10px] bg-white border"
                    key={card.text}
                  >
                    <div className="rounded-md border border-primary-900 h-14 w-14 relative bg-primary-970 mb-6">
                      <img
                        src={card.icon}
                        alt={`${title} Icon`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <h4 className="font-medium text-lg pb-1">{card.title}</h4>
                    <p className="text-dark-350">{card.text}</p>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
