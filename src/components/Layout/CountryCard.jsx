import React from "react";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function CountryCard({ currCountry }) {
  const { flags, name, capital, region, population } = currCountry;
  return (
    <div className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50  rounded-2xl shadow-lg p-6 w-full max-w-sm text-zinc-200 border border-violet-950/30 hover:scale-105 hover:shadow-violet-500/20 transition-all duration-100 ease-in-out">
      {/* Country Flag */}
      <div className="flex justify-center mb-5">
        <img
          src={flags.png}
          alt={flags.alt}
          className="h-40 object-cover rounded-xl"
        />
      </div>

      {/* Country Name */}
      <h2 className="text-xl text-center text-zinc-300 font-bold tracking-wide">
        {name.common}
      </h2>

      {/* Details Section */}
      <div className="mt-4 space-y-2 text-sm text-zinc-300">
        <p className="text-zinc-400">
          <span className="font-semibold text-zinc-500">Region:</span> {region}
        </p>
        <p className="text-zinc-400">
          <span className="font-semibold text-zinc-500">Capital:</span>{" "}
          {capital[0]}
        </p>
        <p className="text-zinc-400">
          <span className="font-semibold text-zinc-500">Population:</span>{" "}
          {population.toLocaleString()}
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button className="group flex items-center gap-3 bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 text-zinc-300 border-2 border-zinc-600 px-4 py-2 rounded-xl mt-5 hover:bg-zinc-700 transition">
            Read More..
            <TbArrowBigRightLineFilled
              size={20}
              className="transform transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
