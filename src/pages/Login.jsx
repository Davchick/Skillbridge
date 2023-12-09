import Form from "../components/Form";
import Slider from "../components/Slider";

const Login = () => {
  return (
    <div className="lg:flex flex-row-reverse items-center justify-between gap-10">
      <Form formType={"login"} />
      <Slider />
    </div>
  );
};

export default Login;
