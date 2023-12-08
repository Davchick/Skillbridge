import { Link } from "react-router-dom";
import LinkedIn from "../UI/icons/LinkedIn";
import Location from "../UI/icons/Location";
import Facebook from "../UI/icons/Facebook";
import Twitter from "../UI/icons/Twitter";
import Email from "../UI/icons/Email";
import Phone from "../UI/icons/Phone";

const Footer = () => {
  return (
    <footer className="pt-[50px] px-5 bg-white footer lg:mt-[100px]">
      <div className="flex flex-wrap justify-between items-start px-3 md:justify-evenly xl:justify-center xl:gap-x-[50px] gap-x-4 gap-y-7 pt-6 pb-5 xl:pb-12">
        <div className="inline-flex flex-col gap-y-3 xl:w-[550px]">
          <Link to="/" className="w-11">
            <img className="pb-[30px]" src="./logo.svg" alt="Logotype" />
          </Link>
          <Link to="mailto: hello@skillbridge.com" className="flex gap-x-[6px]">
            <Email />
            <span className="hover-link"> hello@skillbridge.com</span>
          </Link>
          <Link to="tel: +9191813232309" className="flex gap-x-[6px]">
            <Phone />
            <span className="hover-link"> +91 91813 23 2309</span>
          </Link>
          <Link
            to="https://maps.app.goo.gl/tbKogEW4ouk4mky88"
            target="_blank"
            className="flex gap-x-[6px]"
          >
            <Location />
            <span className="hover-link">Somewhere in the World</span>
          </Link>
        </div>

        <div className="text-dark-350 flex flex-col w-[140px] gap-y-1">
          <h6 className=" text-dark-150 text-lg font-semibold pb-[6px]">
            Home
          </h6>
          <Link className="max-w-fit hover-link" to="#">
            Benefits
          </Link>
          <Link className="max-w-fit hover-link" to="/courses">
            Our Courses
          </Link>
          <Link className="max-w-fit hover-link" to="#">
            Our Testimonials
          </Link>
          <Link className="max-w-fit hover-link" to="#">
            Our FAQ
          </Link>
        </div>

        <div className="text-dark-350 flex flex-col w-[140px] gap-y-1">
          <h6 className=" text-dark-150 text-lg font-semibold pb-[6px]">
            About Us
          </h6>
          <Link className="max-w-fit hover-link " to="#">
            Company
          </Link>
          <Link className="max-w-fit hover-link " to="#">
            Achievements
          </Link>
          <Link className="max-w-fit hover-link " to="#">
            Our Goals
          </Link>
        </div>

        <div className="text-dark-350 flex flex-col w-[140px] gap-y-1">
          <h6 className=" text-dark-150 text-lg font-semibold pb-[6px]">
            Social Profiles
          </h6>
          <div className="flex gap-x-[14px]">
            <Link
              to="https://facebook.com"
              className="hover:bg-primary-700 transition-colors p-3 rounded bg-light-950"
            >
              <Facebook />
            </Link>
            <Link
              to="https://twitter.com"
              className="hover:bg-primary-700 transition-colors p-3 rounded bg-light-950"
            >
              <Twitter />
            </Link>
            <Link
              to="https://linkedin.com"
              className="hover:bg-primary-700 transition-colors p-3 rounded bg-light-950"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center w-full p-5 text-dark-400 border-t border-gray-100">
        <p>© 2023 Skillbridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
