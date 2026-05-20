import { useEffect, useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Genre list (with All button)
  const genres = [
    "All",
    "Mystery & Thriller",
    "Romance",
    "Science Fiction",
    "Self-Help & Nonfiction",
  ];

  // Filtered books
  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold text-center mb-6">
        📚 Explore Our Book Library
      </h1>

      {/* Genre Buttons */}
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-5 py-2 rounded-full border transition font-medium ${
              selectedGenre === genre
                ? "bg-accent text-white border-accent"
                : "border-accent text-accent hover:bg-accent hover:text-white"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {filteredBooks.map((book) => (
            <BookCard book={book}/>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}
    </div>
  );
};

export default Library;
