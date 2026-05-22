// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="px-[7%] pt-[80px] pb-[40px] bg-[#050505] border-t border-white/[0.08] overflow-hidden">

      <div className="max-w-[1550px] mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-[50px]">

          {/* BRAND */}
          <div>

            <Link
              to="/"
              className="
                inline-block
                text-[2rem]
                font-['Montserrat']
                font-[700]
                text-white
                mb-[20px]
              "
            >
              CC Media™
            </Link>

            <p
              className="
                max-w-[380px]
                leading-[1.9]
                text-[#d0d0d0]
              "
            >
              A creator-first platform by CC Media™
              focused on premium storytelling,
              modern creative culture, and digital
              experiences for the next generation
              of creators.
            </p>

          </div>

          {/* COMPANY */}
          <div>

            <h4
              className="
                text-[1rem]
                font-['Montserrat']
                font-[700]
                text-white
                mb-[20px]
              "
            >
              Company
            </h4>

            <div className="flex flex-col gap-[14px]">

              <HashLink
                smooth
                to="/#about"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                About Us
              </HashLink>

              <HashLink
                smooth
                to="/#services"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Services
              </HashLink>

              <HashLink
                smooth
                to="/#portfolio"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Portfolio
              </HashLink>

              <HashLink
                smooth
                to="/#magazine"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Spotlight Platform
              </HashLink>

            </div>
          </div>

          {/* LEGAL */}
          <div>

            <h4
              className="
                text-[1rem]
                font-['Montserrat']
                font-[700]
                text-white
                mb-[20px]
              "
            >
              Legal
            </h4>

            <div className="flex flex-col gap-[14px]">

              <Link
                to="/privacy-policy"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Privacy Policy
              </Link>

              <Link
                to="/refund-policy"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Refund Policy
              </Link>

              <Link
                to="/terms"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Terms & Conditions
              </Link>

              <Link
                to="/submission-guidelines"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Submission Policy
              </Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h4
              className="
                text-[1rem]
                font-['Montserrat']
                font-[700]
                text-white
                mb-[20px]
              "
            >
              Contact
            </h4>

            <div className="flex flex-col gap-[14px]">

              <a
                href="mailto:support@creatouscollective.media"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                support@creatouscollective.media
              </a>

              <a
                href="https://www.instagram.com/creatouscollectivemedia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/creatous-collective-media/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                LinkedIn
              </a>

              <Link
                to="/"
                className="
                  text-[#cfcfcf]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                CC Media™
              </Link>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-[60px]
            pt-[40px]
            border-t border-white/[0.06]
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-[20px]
            text-[#a6a6a6]
          "
        >

          <p>
            © 2026 CC Media™.
            All Rights Reserved.
          </p>

          <p>
            Where Creators Become Brands.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;