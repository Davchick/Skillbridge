import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";

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
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer limit={2} />
    </BrowserRouter>
  );
};

export default App;
