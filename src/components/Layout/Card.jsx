import React from "react";

export default function Card({ country }) {
  return (
    <div className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50  rounded-2xl shadow-lg p-6 w-full max-w-sm text-zinc-200 border border-violet-950/30 hover:scale-105 hover:shadow-violet-500/20 transition-all duration-100 ease-in-out">
      {/* Country Name */}
      <h2 className="text-xl font-bold tracking-wide">{country.name}</h2>

      {/* Details Section */}
      <div className="mt-4 space-y-2 text-sm text-zinc-300">
        <p className="text-zinc-400">
          <span className="font-semibold text-zinc-500">Capital:</span>{" "}
          {country.capital}
        </p>
        <p className="text-zinc-400">
          <span className="font-semibold text-zinc-500">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
        <p className="text-zinc-400">
          <span className="font-semibold text-zinc-500">Interesting Fact:</span>{" "}
          {country.facts}
        </p>
      </div>
    </div>
  );
}
