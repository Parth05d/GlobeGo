import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CountryDetailsCard({ country }) {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  if (!country)
    return <p className="text-white text-center text-lg">No data available</p>;

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-10 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-full shadow-md hover:bg-zinc-700 transition-all duration-200 border border-zinc-700"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 text-zinc-200 border border-zinc-700 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-10">
        {/* Flag Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt || country.name?.common}
            className="w-72 h-48 rounded-lg shadow-lg object-cover border border-gray-600"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col space-y-6 w-full">
          {/* Country Name */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
              {country.name?.official || "N/A"}
            </h1>
            <p className="text-lg text-gray-400 italic">
              {country.name?.common || "N/A"}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
            <Detail
              label="Population"
              value={country.population?.toLocaleString()}
            />
            <Detail label="Region" value={country.region} />
            <Detail label="Sub Region" value={country.subregion} />
            <Detail label="Capital" value={country.capital?.join(", ")} />
            <Detail label="Top Level Domain" value={country.tld?.join(", ")} />

            <Detail
              label="Currencies"
              value={
                country.currencies
                  ? Object.values(country.currencies)
                      .map(
                        (currency) => `${currency.name} (${currency.symbol})`
                      )
                      .join(", ")
                  : "N/A"
              }
            />

            <Detail
              label="Languages"
              value={
                country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"
              }
            />

            <Detail
              label="Borders"
              value={
                country.borders?.length > 0
                  ? country.borders.join(", ")
                  : "No Borders"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small reusable component for each detail item */
function Detail({ label, value }) {
  return (
    <p>
      <span className="font-semibold text-gray-300">{label}:</span>{" "}
      {value || "N/A"}
    </p>
  );
}
