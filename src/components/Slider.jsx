import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css/bundle";
import slides from "../data/slider.json";

const Slider = () => {
  const [slider, setSlider] = useState({});
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onInit={(e) => setSlider(e)}
      className="flex flex-col-reverse gap-10"
    >
      <div>
        <h2 className="font-medium text-[28px] text-dark-150 pb-1">
          Students Testimonials
        </h2>
        <p className="text-dark-350">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>

      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.image}>
            <div className="flex flex-col border rounded-[10px]">
              <p className="p-[30px] bg-white rounded-t-[10px]">{slide.text}</p>
              <div className="flex justify-between py-5 px-[30px] border-t">
                <div className="flex gap-[10px] items-center">
                  <img
                    src={slide.image}
                    alt="Author Image"
                    width="50"
                    className="rounded-md"
                  />
                  <span className="font-semibold">{slide.name}</span>
                </div>

                <button
                  type="button"
                  className="rounded-md border py-[14px] px-4 whitespace-nowrap"
                >
                  Read Full Story
                </button>
              </div>
            </div>
            <div className="pt-5 flex gap-[10px] m-auto w-fit pb-[50px]">
              <button
                type="button"
                className="border rounded-md"
                onClick={() => slider.slidePrev()}
              >
                <img
                  src="../icons/slider-left.svg"
                  alt="Previous Slide Button"
                  className="py-[21px] px-[19px]"
                />
              </button>
              <button
                type="button"
                className="border rounded-md"
                onClick={() => slider.slideNext()}
              >
                <img
                  src="../icons/slider-right.svg"
                  alt="Next Slide Button"
                  className="py-[21px] px-[19px]"
                />
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
