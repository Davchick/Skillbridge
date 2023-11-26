import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Pricing from "./pages/Pricing";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer limit={2} />
    </BrowserRouter>
  );
};

export default App;
