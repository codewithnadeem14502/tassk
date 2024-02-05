import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full items-center ">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
        className="bg-gray-100 m-3 p-3 text-white rounded-lg"
      />
      <button
        className="m-3 p-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg "
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
export default Search;
