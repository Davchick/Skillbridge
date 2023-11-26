import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="pt-10 px-5 max-w-[1400px] m-auto">
        <Header />
        <main className="xl:px-[60px]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
