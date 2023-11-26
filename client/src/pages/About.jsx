import PageInfo from "../components/PageInfo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <PageInfo
        title="About Skillbridge"
        text="Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the skills
          and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      <div className="flex flex-col p-[30px] xl:p-[60px] bg-white rounded-[10px] mt-[50px] bg-logo xl:flex-row xl:justify-between">
        <div className="z-10">
          <h2 className="title">
            <span className="text-primary">Together</span>, lets shape the
            future of digital innovation
          </h2>
          <p className="pt-[10px]">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <Link
          to="/courses"
          className="btn-primary py-[14px] px-5 text-center w-[115px] mt-10 z-10"
        >
          Join Now
        </Link>
      </div>
    </>
  );
};

export default About;
