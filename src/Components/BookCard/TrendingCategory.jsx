import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CategoryDetails from "./CategoryCard";
import CategoryCard from "./CategoryCard";

const TrendingCategory = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/trendingCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  console.log(cards);
  return (
    <div className="lg:w-[80%] md:w-[91%] mx-auto md:-mt-8 lg:-mt-15">
      <div
        gradient={false}
        pauseOnClick={true}
        powerOnHover={true}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-self-center">
          {cards.map((card, index) => (
            <div key={index}>
              <CategoryCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCategory;
