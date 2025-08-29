import React from "react";

import countryData from "../API/countryData.json";
import Card from "../components/Layout/Card";
import HeroSection from "../components/Layout/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          🌎 Did You Know?
          <br /> Facts About the World
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {countryData.map((country) => (
            <Card key={country.id} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}
