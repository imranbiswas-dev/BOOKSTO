import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const BookCard = ({book}) => {
    const {id,title,author,genre,discountPrice,officialPrice,rating,image} = book
  return (
    <Link to={`/details/${id}`}>
      <div className=" card-side shadow-md bg-base-300 rounded-2xl mb-5 sm:mb-0">
        <figure className="rounded-2xl ">
          <img
          className="h-[356px]"
            src={image}
            alt="Movie"
          />
         
         <div className="w-[90%] mx-auto">
             <p className="badge h-2 sm:h-8  badge-accent  font-bold -mt-7 p-5 sm:p-0 w-full  text-white">{genre}</p>
         </div>
          
        </figure>
        <div className=" space-y-1 p-5 h-[150px]">
            {/* <p className="badge  badge-accent font-bold -mt-15 p-5 sm:p-0 w-full  text-white">{genre}</p> */}
          <div className="flex items-center gap-2 relative">
            <h2 className="md:text-xl font-bold sm:-mt-5 -mt-3 ">{title}</h2>
            {/* <p className="flex items-center gap-2  -mt-3 md:text-xl absolute top-30 "> <FaStarHalfStroke className="text-orange-600" /> {rating}</p> */}
          </div>
          <p className="  font-semibold"> By <span className="text-accent">{author}</span></p>
          
          
       <div className="flex gap-4 items-center">
        <div className="flex gap-3 mt-1">
            <p className="md:text-2xl text-accent">${discountPrice}</p>
            <p className="text-gray-400 "><del>${officialPrice}</del></p>
          </div>
        <p className="flex  items-center gap-1  mt-1 md:text-xl "> <FaStarHalfStroke className="text-orange-600" /> {rating}</p>
       </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
