import React from "react";
import { Link, useNavigate } from "react-router";

const CategoryCard = ({ card }) => {
  const navigate = useNavigate();
  const { image, name } = card;
  return (
    <Link>
      <div
        key={name}
        onClick={() => navigate(`/genre/${name}`)}
        className="mx-3 lg:mx-5"
      >
        <img className="w-40 lg:w-66 lg:h-46 h-24" src={image} alt="" />
        <h1 className="text-center font-semibold lg:text-xl mt-2">{name}</h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
