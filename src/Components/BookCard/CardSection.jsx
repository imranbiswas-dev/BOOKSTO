import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const CardSection = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const thriller = books.filter((p) => p.genre === "Mystery & Thriller");
  const romance = books.filter((p) => p.genre === "Romance");
  const science = books.filter((p) => p.genre === "Science Fiction");
  const SelfHelp = books.filter((p) => p.genre === "Self-Help & Nonfiction");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text- lg:text-4xl w-11/12 mx-auto pt-5">
        Browse through all our categories <br /> & Grab your favorite book.
      </h1>
      <h1 className="text-2xl mt-10 lg:text-4xl mb-3 lg:mb-8"><span className="text-accent font-semibold ">Mystery & Thriller:</span> Unravel the Secrets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center gap-5 lg:gap-10">
        {thriller.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
       <h1 className="text-2xl lg:text-4xl mt-10 mb-3 lg:mb-8"><span className="text-accent font-semibold ">Romance:</span> Love in Every Chapter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center gap-5 lg:gap-10">
        {romance.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
       <h1 className="text-2xl mt-10 lg:text-4xl mb-3 lg:mb-8"><span className="text-accent font-semibold ">Science Fiction:</span> Beyond the Stars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center gap-5 lg:gap-10">
        {science.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
      <h1 className="text-2xl mt-10 lg:text-4xl mb-3 lg:mb-8"><span className="text-accent font-semibold ">Self Help & Nonfiction:</span>Grow, Learn, and Transform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center gap-5 lg:gap-10">
        {SelfHelp.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
