import React from "react";
import Hero from "../../Components/Header/Hero";
import CardSection from "../../Components/BookCard/CardSection";
import Trending from "../../Components/BookCard/Trending";
import TrendingCategory from "../../Components/BookCard/TrendingCategory";
import EbookPolicy from "../../Components/EbookPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingCategory />
      <Trending />
      <EbookPolicy />
    </div>
  );
};

export default Home;
