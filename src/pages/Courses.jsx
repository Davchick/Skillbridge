import PageInfo from "../components/PageInfo";
import courses from "../data/courses.json";

const Courses = () => {
  return (
    <>
      <PageInfo
        title="Online Courses on Design and Development"
        text="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />

      <div className="flex flex-col gap-y-4 my-[50px]">
        {courses.map((course) => {
          return (
            <div key={course.title} className="p-6 bg-white rounded-lg">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div>
                  <h5 className="font-semibold text-lg text-dark-150">
                    {course.title}
                  </h5>
                  <p className="text-dark-350 pt-1">{course.description}</p>
                </div>
                <button
                  type="button"
                  className="py-[14px] px-4 rounded-md bg-light-970 border font-medium w-min whitespace-nowrap cursor-pointer h-fit hover:bg-light-950"
                >
                  View Course
                </button>
              </div>

              <div className="grid grid-cols-3 gap-x-[10px] my-6">
                {course.images.map((image) => {
                  return (
                    <img
                      key={image}
                      src={image}
                      alt={`${course.title} image`}
                      className="rounded-md"
                    />
                  );
                })}
              </div>

              <div className="flex flex-col gap-y-4 mb-9 lg:flex-row lg:justify-between lg:items-center">
                <div className="flex gap-x-2 text-dark-350">
                  <span className="py-2 px-3 border rounded-md">
                    {course.period}
                  </span>
                  <span className="py-2 px-3 border rounded-md">
                    {course.difficulty}
                  </span>
                </div>
                <p className="font-medium text-dark-150">By {course.author}</p>
              </div>

              <div className="border rounded-[10px] ">
                <h6 className="border-b px-5 py-[14px] font-semibold text-dark-150">
                  Curriculum
                </h6>
                <div className="p-6 flex flex-col gap-5 lg:flex-row justify-between lg:py-0">
                  {course.steps.map((step, i) => {
                    return (
                      <div
                        className="step-line lg:h-[142px] lg:pr-3 lg:pb-3"
                        key={step}
                      >
                        <div className="pt-5">
                          <span className="font-extrabold text-[30px] text-dark-150">
                            0{i + 1}
                          </span>
                          <p className="text-dark-200 font-medium">{step}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
