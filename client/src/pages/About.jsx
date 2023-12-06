import PageInfo from "../components/PageInfo";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";

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

      <AboutSection
        title="Achievements"
        text="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
      />

      <AboutSection
        title="Our Goals"
        text="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"
      />

      <div className="flex flex-col p-[30px] xl:p-[60px] bg-white rounded-[10px] mt-[50px] bg-logo xl:flex-row xl:justify-between mb-[50px] xl:mb-[100px] ">
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
