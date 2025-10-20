import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="Search"
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered md:w-full w-full"
        />
      </form>
    </div>
  );
};

export default SearchBar;
