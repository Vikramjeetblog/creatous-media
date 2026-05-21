// Submission.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Submission = () => {

  // CINEMATIC ANIMATIONS
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 120,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="submit"
      className="
        py-[180px]
        px-[7%]

        bg-[#050505]

        overflow-hidden
      "
    >

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={fadeUp}
        className="
          max-w-[1200px]
          mx-auto

          text-center

          bg-white/[0.05]
          border border-white/[0.08]

          backdrop-blur-[20px]

          rounded-[45px]

          px-[30px]
          sm:px-[50px]
          lg:px-[80px]

          py-[60px]
          lg:py-[80px]

          relative
          overflow-hidden

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >

        {/* FLOATING GLOW */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}

          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute
            top-[-120px]
            left-1/2

            -translate-x-1/2

            w-[500px]
            h-[500px]

            bg-white/[0.04]

            blur-[120px]

            rounded-full

            pointer-events-none
          "
        />

        {/* LIGHT SWEEP */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}

          className="
            absolute
            top-0
            left-0

            w-[30%]
            h-full

            bg-gradient-to-r
            from-transparent
            via-white/[0.05]
            to-transparent

            skew-x-[-25deg]

            pointer-events-none
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* SMALL TEXT */}
          <motion.small
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}

            viewport={{
              once: true,
            }}

            className="
              tracking-[4px]
              uppercase

              text-[0.8rem]

              opacity-50
              text-white
            "
          >
            Submission Portal
          </motion.small>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 120,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 2.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}

            viewport={{
              once: true,
            }}

            className="
              mt-[25px]
              mb-[25px]

              text-[2.8rem]
              sm:text-[4rem]
              lg:text-[5.5rem]

              leading-[0.92]

              font-['Montserrat']
              font-[800]

              text-white
            "
          >
            Your Story
            <br />
            Deserves
            <br />
            Recognition.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 70,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}

            viewport={{
              once: true,
            }}

            className="
              max-w-[760px]
              mx-auto

              leading-[2]

              text-[#d0d0d0]

              text-[1rem]
              lg:text-[1.05rem]
            "
          >
            Creators can submit their portfolio,
            visuals, projects, music, films,
            fashion editorials, or creative work
            for review and publication opportunities
            inside Spotlight Magazine.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}

            viewport={{
              once: true,
            }}

            className="
              flex
              flex-wrap
              justify-center

              gap-[18px]

              mt-[45px]
            "
          >

            {/* SUBMIT BUTTON */}
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.4,
              }}
            >

              <Link
                to="/submit-portfolio"
                className="
                  px-[35px]
                  py-[18px]

                  bg-white
                  text-black

                  rounded-full

                  font-[600]

                  inline-flex
                  items-center
                  justify-center

                  transition-all
                  duration-500
                "
              >
                Submit Portfolio
              </Link>

            </motion.div>

            {/* GUIDELINES BUTTON */}
            <motion.div
              whileHover={{
                y: -4,
                backgroundColor: "rgba(255,255,255,0.03)",
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.4,
              }}
            >

              <Link
                to="/submission-guidelines"
                className="
                  px-[35px]
                  py-[18px]

                  rounded-full

                  border border-white/[0.1]

                  text-white

                  inline-flex
                  items-center
                  justify-center

                  transition-all
                  duration-500

                  hover:bg-white/[0.05]
                "
              >
                Submission Guidelines
              </Link>

            </motion.div>

          </motion.div>

        </div>

        {/* PREMIUM GLOW */}
        <motion.div
          animate={{
            opacity: [0.02, 0.08, 0.02],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-white/[0.04]
            to-transparent

            pointer-events-none
          "
        />

      </motion.div>

    </section>
  );
};

export default Submission;