import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-y-5 border rounded-[10px] max-w-[598px]">
      <div className="flex justify-between items-center gap-x-4">
        <p className="font-medium text-dark-150">{question}</p>
        <div
          className={`p-[18px] rounded-md relative bg-primary-950 hover:bg-primary-900 cursor-pointer cross-hover transition duration-300 ${
            isOpen && "rotate-icon bg-primary-900"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="../icons/FAQ-cross.svg"
            alt="Icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {isOpen && (
        <div>
          <p className="text-dark-300 border-t py-5">{answer}</p>
          <div className="py-3 px-5 flex items-center justify-between bg-light-970 rounded-md hover:bg-light-950 border cursor-pointer">
            <p className="font-medium">
              Enrollment Process for Different Courses
            </p>
            <div className="p-[18px] rounded-full relative bg-white border">
              <img
                src="../icons/FAQ-arrow.svg"
                alt="Icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
