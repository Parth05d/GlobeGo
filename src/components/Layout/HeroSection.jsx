import React from "react";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="grid text-zinc-300 sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto items-center my-10">
      {/* Image */}
      <div className="order-1 md:order-2 flex justify-center">
        <img src="/images/hero-img.png" alt="hero-img" />
      </div>

      {/* Text Content */}
      <div className="order-2 md:order-1 max-w-7xl mx-auto px-4">
        <h1 className="mb-3 text-3xl font-bold">
          Explore the World, One Country at a Time 🌍
        </h1>
        <p className="text-lg">
          From capitals to cultures, from flags to facts — everything you need
          to know about the world is just one click away.
        </p>
        <NavLink to="/country">
          <button className="group flex items-center gap-3 bg-zinc-800 text-zinc-300 border-2 border-zinc-600 px-4 py-2 rounded-xl mt-5 hover:bg-zinc-700 transition">
            Discover Now
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
