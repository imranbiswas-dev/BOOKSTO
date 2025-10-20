import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Aside from "../Components/Aside/Aside";

const Layout = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-12">
        <aside className="col-span-2 hidden lg:inline-block">
          <Aside />
        </aside>

        <main className="col-span-10">
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
