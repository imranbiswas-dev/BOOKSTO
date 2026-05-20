import React from "react";
import Hero from "../../Components/Header/Hero";
import CardSection from "../../Components/BookCard/CardSection";
import Trending from "../../Components/BookCard/Trending";
import TrendingCategory from "../../Components/BookCard/TrendingCategory";
import EbookPolicy from "../../Components/EbookPolicy";
import Best from "../../Components/BookCard/best";
import Blog from "../../Components/BookCard/Blog";
import Discount from "../../Components/BookCard/Discount";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingCategory />
      <Trending />
      <Discount />
      <Best />
      <Blog />
      <EbookPolicy />
    </div>
  );
};

export default Home;
