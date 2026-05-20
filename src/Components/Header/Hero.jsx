import React from "react";
import banner from '../../assets/Cover/E-Book-PNG-Images.png';
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="lg:ml-40 lg:-mt-25 md:-mt-10">
      <section className="">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-xl font-bold leading-none sm:text-6xl">
              Your Next
              <br />
              <span className="text-[#0DD6B8]"> Favorite Book</span> Awaits
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Explore our handpicked collection of e-books
              <br />
              crafted for readers who love to imagine, learn, and dream.
            </p>
            <div className="flex gap-5 lg:mr-60">
              <Link to="/categories" className="btn btn-accent text-white font-semibold lg:text-2xl md:text-lg">
                Browse Library
              </Link>
              <button className="btn btn-outline btn-accent hover:text-white  md:text-lg p-2">
                Sign In
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 md:mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <img
              src={banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
