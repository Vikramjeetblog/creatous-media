// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-[7%] pt-[80px] pb-[40px] bg-[#050505] border-t border-white/[0.08] overflow-hidden">

      <div className="max-w-[1550px] mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-[50px]">

          {/* BRAND */}
          <div>

            <Link
              to="/spotlight"
              className="
                inline-block

                text-[2rem]
                font-['Montserrat']
                font-[700]

                text-white

                mb-[20px]
              "
            >
              Spotlight™
            </Link>

            <p
              className="
                max-w-[380px]

                leading-[1.9]

                text-[#d0d0d0]
              "
            >
              A creator-first platform by CC Media™
              built to showcase emerging artists,
              creators, storytellers, and modern
              creative culture globally.
            </p>

          </div>

          {/* PLATFORM */}
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
              Platform
            </h4>

            <div className="flex flex-col gap-[14px]">

              <a
                href="#editorial"
                className="
                  text-[#cfcfcf]

                  transition-all
                  duration-300

                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Editorial
              </a>

              <a
                href="#features"
                className="
                  text-[#cfcfcf]

                  transition-all
                  duration-300

                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Features
              </a>

              <a
                href="#submit"
                className="
                  text-[#cfcfcf]

                  transition-all
                  duration-300

                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Submit
              </a>

              <a
                href="#about"
                className="
                  text-[#cfcfcf]

                  transition-all
                  duration-300

                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                About
              </a>

            </div>
          </div>

          {/* RESOURCES */}
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
              Resources
            </h4>

            <div className="flex flex-col gap-[14px]">

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
                Submission Guidelines
              </Link>

              <Link
                to="/submit-portfolio"
                className="
                  text-[#cfcfcf]

                  transition-all
                  duration-300

                  hover:text-white
                  hover:translate-x-[4px]
                "
              >
                Submit Portfolio
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

            </div>
          </div>

          {/* CONNECT */}
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
              Connect
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
                href="#"
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
                href="#"
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
            © 2026 Spotlight Platform™.
            All Rights Reserved.
          </p>

          <p>
            Powered by CC Media™
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;