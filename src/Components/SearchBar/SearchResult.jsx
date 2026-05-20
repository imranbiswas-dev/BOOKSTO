import React, { useEffect, useState } from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const SearchResult = () => {
  const [books, setBooks] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        if (query) {
          const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||  item.genre.toLowerCase().includes(query.toLowerCase())
          );
          setBooks(filtered);
        } else {
          setBooks([]);
        }
      });
  }, [query]);
  return (
    <div className="p-2">
      <h2 className="text-xl font-bold mb-4">
        Search Results for "{query}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link to={`/details/${book.id}`}>
            <div className=" card-side shadow-md bg-base-300 rounded-2xl">
              <figure className="rounded-2xl ">
                <img
                  className="h-[420px]"
                  src={book.image}
                  alt="Movie"
                />

                <div className="w-[90%] mx-auto">
                  <p className="badge h-2 sm:h-8  badge-accent  font-bold -mt-7 p-5 sm:p-0 w-full  text-white">
                    {book.genre}
                  </p>
                </div>
              </figure>
              <div className=" space-y-1 p-5 h-[150px]">
                {/* <p className="badge  badge-accent font-bold -mt-15 p-5 sm:p-0 w-full  text-white">{genre}</p> */}
                <div className="flex items-center gap-2 relative">
                  <h2 className="md:text-xl font-bold sm:-mt-5 -mt-3 ">
                    {book.title}
                  </h2>
                  {/* <p className="flex items-center gap-2  -mt-3 md:text-xl absolute top-30 "> <FaStarHalfStroke className="text-orange-600" /> {rating}</p> */}
                </div>
                <p className="text-[#0DD6B8]  font-semibold"> By {book.author}</p>

                <div className="flex gap-4 items-center">
                  <div className="flex gap-3 mt-1">
                    <p className="md:text-2xl">${book.discountPrice}</p>
                    <p className="text-gray-400 ">
                      <del>${book.officialPrice}</del>
                    </p>
                  </div>
                  <p className="sm:flex  items-center gap-1  mt-1 md:text-xl hidden">
                    {" "}
                    <FaStarHalfStroke className="text-orange-600" /> {book.rating}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
