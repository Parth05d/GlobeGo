import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bol mb-3">GlobeGo 🌍</h2>
          <p className="text-sm">
            Explore countries, learn about the world, and discover facts at your
            fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="hover:text-violet-700 transition duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className="hover:text-violet-700 transition duration-200"
              >
                Countries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-violet-700 transition duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-violet-700 transition duration-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/parth05d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-700 transition duration-200 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parth05d/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-700 transition duration-200 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} GlobeGo. All rights reserved.
      </div>
    </footer>
  );
}
