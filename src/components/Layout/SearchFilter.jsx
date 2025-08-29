import React from "react";

export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  country,
  setCountry,
}) {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleSort = (value) => {
    const sortCountry = [...country].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountry(sortCountry);
  };
  return (
    <div className="grid grid-cols-3 mb-10">
      <div className="">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 text-zinc-300 border-2 border-zinc-600 px-3 py-1 rounded-xl mt-5 hover:bg-zinc-700 transition"
        />
      </div>

      <div className="flex justify-evenly">
        <button
          onClick={() => handleSort("asc")}
          className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 text-zinc-300 border-2 border-zinc-600 px-3 py-1 rounded-xl mt-5 hover:bg-zinc-700 transition"
        >
          Ascending
        </button>
        <button
          onClick={() => handleSort("des")}
          className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 text-zinc-300 border-2 border-zinc-600 px-3 py-1 rounded-xl mt-5 hover:bg-zinc-700 transition"
        >
          Descending
        </button>
      </div>

      <div className="flex justify-end">
        <select
          className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50  text-zinc-300 border border-zinc-600 px-4 py-2 rounded-xl mt-5  shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600  cursor-pointer transition"
          value={filter}
          onChange={handleDropdown}
        >
          <option className="bg-zinc-900 text-zinc-300">All</option>
          <option className="bg-zinc-900 text-zinc-300">Africa</option>
          <option className="bg-zinc-900 text-zinc-300">America</option>
          <option className="bg-zinc-900 text-zinc-300">Asia</option>
          <option className="bg-zinc-900 text-zinc-300">Europe</option>
          <option className="bg-zinc-900 text-zinc-300">Oceania</option>
        </select>
      </div>
    </div>
  );
}
