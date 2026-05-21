// Navbar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Media", path: "/" },
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Editorial", id: "editorial" },
    { name: "Submit", id: "submit" },
    { name: "About", id: "about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-[18px] bg-black/25 border-b border-white/[0.05]">
      <div className="max-w-[1550px] mx-auto px-[5%] h-[82px] flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/spotlight"
          className="
            font-['Montserrat']
            text-[1rem]
            md:text-[1.1rem]
            font-[700]
            tracking-[4px]
            uppercase
            text-white
          "
        >
          CC Media

          <span className="opacity-40 text-[0.7rem] align-top ml-[2px]">
            ™
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-[45px]">
          {navLinks.map((link) => {

            // ROUTE LINK
            if (link.path) {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                    relative
                    text-[#d9d9d9]
                    text-[0.9rem]
                    font-[400]
                    pb-[8px]
                    transition-all
                    duration-300
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:w-0
                    after:h-[1px]
                    after:bg-white
                    after:transition-all
                    after:duration-300
                    after:content-['']
                    hover:text-white
                    hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              );
            }

            // SECTION LINK
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative
                  text-[0.9rem]
                  font-[400]
                  pb-[8px]
                  transition-all
                  duration-300
                  ${
                    active === link.id
                      ? "text-white after:w-full"
                      : "text-[#d9d9d9] after:w-0 hover:after:w-full"
                  }
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[1px]
                  after:bg-white
                  after:transition-all
                  after:duration-300
                  after:content-['']
                `}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DESKTOP BUTTON */}
          <a
            href="#submit"
            className="
              hidden md:flex
              px-[28px]
              py-[14px]
              bg-white
              text-black
              rounded-full
              text-[0.95rem]
              font-[600]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:-translate-y-[2px]
            "
          >
            Submit Portfolio
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-[1.2rem]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          bg-black/95
          border-t border-white/10
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-6 py-6 flex flex-col gap-5">

          {navLinks.map((link) => {

            // ROUTE LINK
            if (link.path) {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#d9d9d9] text-[1rem] hover:text-white transition"
                >
                  {link.name}
                </Link>
              );
            }

            // SECTION LINK
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-[1rem]
                  transition
                  ${
                    active === link.id
                      ? "text-white"
                      : "text-[#d9d9d9]"
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}

          {/* MOBILE BUTTON */}
          <a
            href="#submit"
            onClick={() => setMenuOpen(false)}
            className="
              mt-4
              w-full
              text-center
              px-6
              py-4
              bg-white
              text-black
              rounded-full
              text-[0.95rem]
              font-[600]
            "
          >
            Submit Portfolio
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;