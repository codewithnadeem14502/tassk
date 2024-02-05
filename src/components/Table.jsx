// Table.js
import React, { useState } from "react";
import Search from "./Search";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const itemsPerPage = 5;

  // Dummy data
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Item name with ${index + 1}`,
    description: `Description for Item ${index + 1}`,
  }));

  // Calculate pagination logic here
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    searchResults.length > 0
      ? searchResults.slice(indexOfFirstItem, indexOfLastItem)
      : data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search
  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset pagination when searching
  };

  return (
    <>
      <div className="container p-4">
        <div className="flex justify-between items-center w-full md:flex-row">
          <Search handleSearch={handleSearch} />
          <div className="hidden md:flex justify-between">
            <div>
              <h1 className="text-lg font-semibold text-black lg:text-xl">
                fonder@gmail.com
              </h1>
              <h2>User</h2>
            </div>
            <div>
              <img
                src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                alt="profile"
                className="w-32 h-14 rounded-full "
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-4">
          <div>
            <h2 className="text-lg font-semibold ">All Projects</h2>
          </div>
          <div>
            <button className="m-2 p-3 bg-blue-500 text-white rounded-lg">
              Add Project
            </button>
             
          </div>
        </div>
        <table className="w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="bg-gray-100 border-b text-left p-5">#</th>
              <th className="bg-gray-100 border-b text-left p-5">
                Project Name
              </th>
              <th className="bg-gray-100 border-b text-left p-5">
                Project Name
              </th>
              <th className="bg-gray-100 border-b text-left p-5">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className=" p-4  border-b">{item.id}.</td>
                <td className=" p-4 border-b">{item.name}</td>
                <td className=" p-4  border-b">{item.name}</td>
                <td className=" p-4   border-b">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex-row  md:flex justify-between items-center">
          <div className="text-sm text-gray-600 mb-5">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, data.length)} of {data.length} entries
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Prev
            </button>

            {Array.from(
              {
                length: Math.ceil(
                  (searchResults.length > 0
                    ? searchResults.length
                    : data.length) / itemsPerPage
                ),
              },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(
                  (searchResults.length > 0
                    ? searchResults.length
                    : data.length) / itemsPerPage
                )
              }
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
