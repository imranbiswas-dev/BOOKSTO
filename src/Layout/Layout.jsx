import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Aside from "../Components/Aside/Aside";

const Layout = () => {
  return (
    <div>
      <section className="">
        <main className="">
          <Navbar />
          <div className="w-11/12 mx-auto">
            <Outlet />
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
