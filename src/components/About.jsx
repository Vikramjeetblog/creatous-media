import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-black
        px-[7%]
        py-[120px]
        md:py-[160px]
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-white/5
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-[1550px] mx-auto relative z-10">

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-[0.8rem]
            tracking-[5px]
            uppercase
            text-white/50
            mb-[24px]
          "
        >
          About Us
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            max-w-[1100px]
            text-[2.7rem]
            sm:text-[4rem]
            md:text-[5.5rem]
            leading-[1.05]
            font-[700]
            tracking-[-3px]
            text-white
          "
        >
          Building Modern Brands
          Through Storytelling,
          Culture & Creative Identity.
        </motion.h2>

        {/* CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-[70px]
            mt-[80px]
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p
              className="
                text-[1.05rem]
                leading-[2]
                text-[#bdbdbd]
              "
            >
              CC Media™ is a next-generation creative ecosystem
              focused on branding, storytelling, digital experiences,
              production, and modern creative culture.
            </p>

            <p
              className="
                text-[1.05rem]
                leading-[2]
                text-[#bdbdbd]
                mt-[30px]
              "
            >
              We work with creators, startups, artists,
              restaurants, hospitality brands, fashion labels,
              and businesses to transform ideas into premium
              brand experiences that feel authentic,
              emotional, and visually memorable.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >

            <p
              className="
                text-[1.05rem]
                leading-[2]
                text-[#bdbdbd]
              "
            >
              From cinematic websites and creative campaigns
              to editorial visuals, marketing strategy,
              and production — every project is crafted with
              a strong focus on identity, culture,
              and storytelling.
            </p>

            <p
              className="
                text-[1.05rem]
                leading-[2]
                text-[#bdbdbd]
                mt-[30px]
              "
            >
              We are not built around trends, numbers,
              or corporate formulas. We believe modern
              brands should feel human, creative,
              immersive, and emotionally connected
              to people.
            </p>

          </motion.div>

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            mt-[120px]
            border-t
            border-white/[0.08]
            pt-[50px]
          "
        >

          <h3
            className="
              text-[2rem]
              sm:text-[3rem]
              md:text-[4rem]
              font-[700]
              tracking-[-2px]
              leading-[1.1]
              text-white
              max-w-[950px]
            "
          >
            CC Media™ exists to help the next generation
            of creators and businesses build brands
            people genuinely remember.
          </h3>

          <p
            className="
              mt-[24px]
              text-[1rem]
              tracking-[4px]
              uppercase
              text-white/40
            "
          >
            Where Creators Become Brands.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default About;