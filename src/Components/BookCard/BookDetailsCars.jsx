import React from "react";
import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import EbookPolicy from "../EbookPolicy";

const BookDetailsCard = ({ book }) => {
  const {
    image,
    title,
    summary,
    author,
    discountPrice,
    officialPrice,
    rating,
  } = book;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 bg-base-300 p-6 rounded-2xl shadow-md">
        {/* Left: Book Image */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Right: Book Info */}
        <div className="md:w-2/3 w-full space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-[#0DD6B8]">
              ${discountPrice}
            </p>
            <p className="line-through text-gray-400  text-lg">
              ${officialPrice}
            </p>
            
          </div>

          <div className="flex items-center">
            <span className="text-yellow-500 text-xl mr-2">★</span>
            <p className="font-medium">{rating} / 5</p>
          </div>

          <p className="text-gray-600 dark:text-gray-400">{summary}</p>

          <p>
            <span className="font-semibold">
              <span className="text-[#0DD6B8] font-semibold">Author:</span>
            </span>{" "}
            {author}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <button className="btn btn-accent text-white btn-sm">
              Add To Cart
            </button>
            <button className="btn btn-outline btn-sm btn-accent hover:text-white">
              Buy To Read
            </button>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <FaHeart className="text-error cursor-pointer" />
            <span className="text-sm text-gray-600">Add to Wishlist</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            <span className="font-semibold">Share:</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Policy */}
      <section>
        <EbookPolicy />
      </section>
    </div>
  );
};

export default BookDetailsCard;
