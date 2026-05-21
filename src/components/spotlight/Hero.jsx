// Hero.jsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {

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
      id="home"
      className="
        min-h-screen

        pt-[170px]
        pb-[100px]
        px-[7%]

        overflow-hidden

        bg-[#050505]
      "
    >

      <div className="max-w-[1550px] mx-auto">

        {/* HERO GRID */}
        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]

            gap-[25px]

            items-stretch
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              pr-0
              lg:pr-[30px]

              flex
              flex-col
              justify-center
            "
          >

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

                opacity-50

                text-[0.8rem]
                text-white
              "
            >
              CC Media™ Editorial Platform
            </motion.small>

            {/* HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 140,
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
                font-['Montserrat']

                text-[3.5rem]
                sm:text-[5rem]
                lg:text-[8rem]

                leading-[0.84]

                font-[800]

                my-[25px]

                text-white
              "
            >
              Where

              <span
                className="
                  block

                  bg-gradient-to-r
                  from-white/20
                  via-white
                  to-white/20

                  bg-clip-text
                  text-transparent
                "
              >
                Creators Become Culture.
              </span>

            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
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
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              className="
                leading-[2.1]

                text-[1.05rem]

                text-[#d0d0d0]

                max-w-[560px]
              "
            >
              Spotlight Magazine is a premium editorial
              platform built for the next generation of
              creators, artists, musicians, filmmakers,
              designers, and visionaries who deserve
              recognition beyond popularity and algorithms.
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

                gap-[18px]

                mt-[45px]
              "
            >

              <motion.a
                href="#features"

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

                className="
                  px-[35px]
                  py-[18px]

                  bg-white
                  text-black

                  rounded-full

                  font-[600]

                  transition-all
                  duration-500
                "
              >
                Explore Features
              </motion.a>

              <motion.a
                href="#submit"

                whileHover={{
                  y: -4,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}

                whileTap={{
                  scale: 0.97,
                }}

                transition={{
                  duration: 0.4,
                }}

                className="
                  px-[35px]
                  py-[18px]

                  rounded-full

                  border border-white/10

                  text-white
                "
              >
                Submit Portfolio
              </motion.a>

            </motion.div>

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
              relative

              h-[600px]
              lg:h-[850px]

              rounded-[45px]

              overflow-hidden

              shadow-[0_30px_80px_rgba(0,0,0,0.45)]

              border border-white/[0.05]
            "
          >

            {/* IMAGE */}
            <motion.img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop"
              alt="Hero"

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
                duration-[1800ms]

                hover:scale-[1.05]
              "
            />

            {/* LIGHT SWEEP */}
            <motion.div
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 5,
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
                via-white/[0.06]
                to-transparent

                skew-x-[-25deg]

                pointer-events-none
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/95
                to-transparent

                flex
                flex-col
                justify-end

                p-[35px]
                lg:p-[55px]
              "
            >

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
                  duration: 2,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                }}
                className="
                  text-[2.2rem]
                  lg:text-[3rem]

                  leading-[1]

                  font-['Montserrat']

                  mb-[20px]

                  text-white
                "
              >
                The Future Of Editorial Storytelling.
              </motion.h2>

              <motion.p
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
                className="
                  leading-[1.9]

                  max-w-[500px]

                  text-[#f2f2f2]
                "
              >
                Inspired by premium international
                editorial culture with cinematic visuals,
                fashion aesthetics, and modern digital
                experiences.
              </motion.p>

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

        </div>
      </div>
    </section>
  );
};

export default Hero;