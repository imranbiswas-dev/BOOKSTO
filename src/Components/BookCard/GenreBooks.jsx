import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookCard from "./BookCard";

const GenreBooks = () => {
  const { genreName } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((book) => book.genre === genreName);
        setBooks(filtered);
      });
  }, [genreName]);
  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-accent">
          {genreName} Books
        </h2>

        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            {books.map((book) => (
              <BookCard book={book} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No books available for this genre.
          </p>
        )}
      </div>
    </div>
  );
};

export default GenreBooks;
