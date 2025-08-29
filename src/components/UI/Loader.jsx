import React from "react";
import earthImg from "/images/earth_img.png";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-24 h-24">
        {/* Earth Image */}
        <img
          src={earthImg}
          alt="Loading..."
          className="w-full h-full rounded-full animate-spin-fast shadow-lg shadow-blue-500/30"
        />

        {/* Orbit Glow */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
      </div>
    </div>
  );
}
