import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import BookDetailsCars from "./BookDetailsCars";
import BookCard from "./BookCard";
import Marquee from "react-fast-marquee";

const BookDetailsSection = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const filteredBooks = data.filter((book) => book.id == id);

    setMyBooks(filteredBooks);
  }, [data, id]);

  return (
    <div>
      <h1>
        <p className="text-lg md:text-2xl lg:text-4xl text-center p-5 text-[#0DD6B8] font-semibold">
          Start your reading journey with us today!
        </p>
      </h1>
      {/* Book Details */}
      <div>
        {myBooks.map((book) => (
          <BookDetailsCars book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookDetailsSection;
