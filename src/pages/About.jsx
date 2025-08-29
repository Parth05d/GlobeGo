import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl font-bold text-violet-700 mb-6">
        About GlobeGo 🌍
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Welcome to{" "}
        <span className="font-semibold text-violet-400">GlobeGo</span>, your
        interactive guide to the world! Our app helps you{" "}
        <span className="text-violet-400 font-semibold">
          explore every country
        </span>{" "}
        across the globe with just a few clicks. Whether you’re a curious
        learner, a traveler, or someone who simply loves geography, GlobeGo
        brings the world right to your fingertips.
      </p>

      <h2 className="text-2xl font-semibold text-violet-600 mb-4">
        What You Can Do with GlobeGo
      </h2>
      <ul className="text-left text-gray-300 mb-6 space-y-2 list-disc list-inside">
        <li>
          🌐{" "}
          <span className="font-semibold text-violet-400">
            Discover Countries
          </span>{" "}
          – Browse through every nation on Earth.
        </li>
        <li>
          📜{" "}
          <span className="font-semibold text-violet-400">
            Learn Key Details
          </span>{" "}
          – Get information like region, population, languages, currency, and
          more.
        </li>
        <li>
          🏳️ <span className="font-semibold text-violet-400">View Flags</span> –
          See the national flag of each country in high quality.
        </li>
        <li>
          🔍{" "}
          <span className="font-semibold text-violet-400">Search Easily</span> –
          Quickly find the country you want to explore.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-violet-600 mb-4">
        Our Mission
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        We believe knowledge should be simple and accessible. With GlobeGo, we
        aim to make{" "}
        <span className="text-violet-400 font-semibold">
          global exploration fun and educational
        </span>
        , inspiring curiosity about the world we live in.
      </p>

      <h2 className="text-2xl font-semibold text-violet-600 mb-4">
        Why GlobeGo?
      </h2>
      <ul className="text-left text-gray-300 space-y-2 list-disc list-inside">
        <li>✨ Clean and intuitive interface</li>
        <li>📊 Accurate and up-to-date data</li>
        <li>🎒 Perfect for students, travelers, and geography lovers alike</li>
      </ul>
    </div>
  );
}
