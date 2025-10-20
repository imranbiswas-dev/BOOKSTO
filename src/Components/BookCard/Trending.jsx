import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Trending = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/trending.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-center mb-3"><span className="text-[#0DD6B8] text-xl md:text-3xl lg:text-4xl font-semibold">Trending Now:</span> <br /> Mystery, Romance, SFF & More!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-self-center md:gap-11 lg:gap-20 gap-3">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
