import Form from "../components/Form";
import Slider from "../components/Slider";

const SignUp = () => {
  return (
    <div className="lg:flex flex-row-reverse items-center justify-between gap-10">
      <Form formType={"register"} />
      <Slider />
    </div>
  );
};

export default SignUp;
