import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="pt-10 px-5 max-w-[1400px] m-auto content w-full">
        <Header />
        <main className="xl:px-[60px] flex-1">
          <Outlet />
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
