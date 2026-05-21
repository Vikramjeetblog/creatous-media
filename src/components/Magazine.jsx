// Magazine.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Magazine = () => {

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

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -120,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 120,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
        duration: 2.2,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="magazine"
      className="
        py-[150px]
        px-[7%]

        bg-[#050505]
        overflow-hidden
      "
    >

      <div className="max-w-[1550px] mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            flex
            flex-wrap
            justify-between
            items-end

            gap-[50px]

            mb-[80px]
          "
        >

          {/* LEFT */}
          <div>

            <motion.small
              initial={{
                opacity: 0,
                y: 30,
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
              Spotlight Magazine
            </motion.small>

            <motion.h2
              initial={{
                opacity: 0,
                y: 100,
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
                mt-[18px]

                text-[2.5rem]
                md:text-[3.8rem]
                xl:text-[5rem]

                leading-[0.9]

                font-['Montserrat']
                font-[800]

                text-white
              "
            >
              Feature
              <br />
              The Future.
            </motion.h2>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="max-w-[520px]"
          >

            <p
              className="
                leading-[2]

                text-[#d0d0d0]

                text-[1rem]
              "
            >
              A creator-first editorial platform where
              upcoming creators, musicians, designers,
              filmmakers, artists, and visionaries can
              showcase their work globally.
            </p>

          </motion.div>

        </motion.div>

        {/* MAGAZINE LAYOUT */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[0.9fr_1.1fr]

            gap-[25px]

            items-stretch
          "
        >

          {/* LEFT CARD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeLeft}
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative

              bg-white/[0.05]
              border border-white/[0.08]

              backdrop-blur-[20px]

              rounded-[40px]

              p-[35px]
              md:p-[55px]

              flex
              flex-col
              justify-center

              overflow-hidden
            "
          >

            {/* FLOATING GLOW */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-[-120px]
                right-[-120px]

                w-[350px]
                h-[350px]

                rounded-full

                bg-white/[0.04]

                blur-[120px]

                pointer-events-none
              "
            />

            <div className="relative z-10">

              <motion.small
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
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
                Editorial Platform
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
                  duration: 2,
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
                  md:text-[4rem]
                  xl:text-[5rem]

                  leading-[0.9]

                  font-['Montserrat']
                  font-[800]

                  text-white
                "
              >
                Your Story
                <br />
                Deserves
                <br />
                The Spotlight.
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  leading-[2]

                  text-[#d0d0d0]

                  text-[1rem]
                "
              >
                Creators can submit their portfolio,
                visuals, projects, music, films, or
                creative work for review and feature
                opportunities inside Spotlight Magazine.
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
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-wrap gap-[18px] mt-[40px]"
              >

                <Link
                  to="/spotlight"
                  className="
                    px-[35px]
                    py-[18px]

                    bg-white
                    text-black

                    rounded-full

                    font-[600]

                    transition-all
                    duration-500

                    hover:-translate-y-[4px]
                    hover:scale-[1.03]

                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  Explore Magazine
                </Link>

                <Link
                  to="/submit-portfolio"
                  className="
                    px-[35px]
                    py-[18px]

                    border border-white/[0.1]

                    rounded-full

                    text-white

                    transition-all
                    duration-500

                    hover:bg-white/[0.05]
                    hover:-translate-y-[4px]
                  "
                >
                  Submit Portfolio
                </Link>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeRight}
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              group
              relative

              min-h-[650px]
              xl:min-h-[850px]

              overflow-hidden
              rounded-[40px]

              border border-white/[0.04]

              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            "
          >

            {/* IMAGE */}
            <motion.img
              src="/assets/magazine.jpg"
              alt="Magazine"
              initial={{
                scale: 1.08,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              className="
                w-full
                h-full

                object-cover

                transition-transform
                duration-[1500ms]

                group-hover:scale-[1.06]
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/[0.92]
                via-black/[0.35]
                to-transparent

                flex
                flex-col
                justify-end

                p-[35px]
                md:p-[55px]
              "
            >

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                }}
                className="
                  text-[2.2rem]
                  md:text-[3rem]

                  leading-[1]

                  font-['Montserrat']
                  font-[700]

                  text-white

                  mb-[20px]

                  max-w-[700px]
                "
              >
                Built For The Next Generation
                Of Creators.
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  max-w-[550px]

                  leading-[1.9]

                  text-[#f2f2f2]
                "
              >
                Inspired by premium international
                editorial culture with modern digital
                storytelling and cinematic visual
                direction.
              </motion.p>

            </div>

            {/* HOVER LIGHT */}
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

        </div>

      </div>
    </section>
  );
};

export default Magazine;