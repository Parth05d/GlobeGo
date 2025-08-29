import React, { useEffect, useState, useTransition } from "react";
import { countryApiData } from "../API/countryApi";
import CountryCard from "../components/Layout/CountryCard";
import Loader from "../components/UI/Loader";
import SearchFilter from "../components/Layout/SearchFilter";

export default function Country() {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await countryApiData();
      setCountry(res.data);
    });
  }, []);

  console.log(search);

  const searchCountry = (currCountry) => {
    if (search) {
      return currCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (currCountry) => {
    if (filter === "All") return country;
    return currCountry.region === filter;
  };

  const filterCountry = country.filter(
    (currCountry) => searchCountry(currCountry) && filterRegion(currCountry)
  );

  if (isPending) return <Loader />;
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          country={country}
          setCountry={setCountry}
        />
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterCountry.map((currCountry) => {
            return (
              <CountryCard
                key={currCountry.name.common}
                currCountry={currCountry}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
