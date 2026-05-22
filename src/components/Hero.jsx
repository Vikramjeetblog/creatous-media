// Hero.jsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // SLOW CINEMATIC ANIMATION
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
      x: 100,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 2,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        

        pt-[170px]
        pb-[100px]
        px-[7%]
      "
    >
      {/* MAIN BACKGROUND VIDEO */}
      <video
        src="/video/brand.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          z-0
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-black/65

          z-[1]
        "
      />

      {/* OPTIONAL GRADIENT OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-[2]
        "
      />

      {/* AMBIENT GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          top-0
          left-[28%]

          w-[600px]
          h-[600px]

          bg-white/10

          blur-[150px]
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1550px] mx-auto">
        {/* HERO TOP */}
        <div
          className="
            relative
            z-10

            grid
            lg:grid-cols-[0.9fr_0.55fr]

            gap-10
sm:gap-16
lg:gap-[120px]

            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="max-w-[620px]"
          >
            <motion.small
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                uppercase
                tracking-[6px]

                text-[0.62rem]

                text-white/40
                font-semibold
              "
            >
              WHERE CREATORS BECOME BRANDS
            </motion.small>

            <motion.h1
              initial={{
                opacity: 0,
                y: 140,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 2.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6

                font-black
                uppercase

                leading-[0.82]

                tracking-[-3px]
                sm:tracking-[-6px]
                md:tracking-[-8px]

                text-[3.2rem]
                xs:text-[4rem]
                sm:text-[5.5rem]
                md:text-[7rem]
                lg:text-[8rem]
                xl:text-[9rem]
              "
            >
              We
              <br />

              Don’t
              <br />

              Just
              <br />

              Build
              <br />

              <span
                className="
                  bg-gradient-to-b
                  from-white
                  via-white/80
                  to-white/20

                  bg-clip-text
                  text-transparent
                "
              >
                Brands.
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-b
                  from-white/40
                  via-white/25
                  to-white/10

                  bg-clip-text
                  text-transparent

                  break-words
                "
              >
                We Make
                <br />

                <span className="inline-block">them</span>

                <br />

                <span
                  className="
                    inline-block

                    tracking-[-2px]
                    sm:tracking-[-4px]
                    md:tracking-[-6px]

                    text-[2.2rem]
                    xs:text-[2.8rem]
                    sm:text-[4.5rem]
                    md:text-[5.8rem]
                    lg:text-[7rem]

                    leading-[0.9]
                  "
                >
                  UNFORGETTABLE.
                </span>
              </span>
            </motion.h1>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
  max-w-[430px]

  pt-10
  sm:pt-16
  md:pt-24
  lg:pt-[180px]
"
          >
            <motion.p
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 2,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-white/70

                text-[0.9rem]
                sm:text-[0.95rem]

                leading-[1.9]
                sm:leading-[2.4]
              "
            >
              CC Media™ helps creators, artists, startups, and modern
              businesses turn ideas into unforgettable brands through
              storytelling, cinematic production, digital experiences, and
              creative strategy.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.8,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#services"
                className="
                  px-8
                  py-4

                  bg-white
                  text-black

                  rounded-full

                  text-sm
                  font-semibold

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:scale-[1.03]
                "
              >
                Explore Services
              </a>

              <a
                href="#magazine"
                className="
                  px-8
                  py-4

                  border border-white/10

                  rounded-full

                  text-white
                  text-sm

                  transition-all
                  duration-500

                  hover:bg-white/5
                  hover:-translate-y-1
                "
              >
                Spotlight Magazine
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* SHOWCASE SECTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 140,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
         className="
  

   grid
  lg:grid-cols-[1.3fr_0.7fr]

  gap-6

  mt-24

  min-h-[520px]
  sm:min-h-[700px]
  md:min-h-[850px]
  lg:min-h-[980px]


  
">
          {/* MAIN IMAGE */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.8,
            }}
           className="
  relative
  overflow-hidden

  rounded-[40px]

  border border-white/5

  shadow-[0_30px_80px_rgba(0,0,0,0.45)]

  min-h-[520px]
  sm:min-h-[700px]
  md:min-h-[850px]
  lg:min-h-[980px]

  group
">
            <video
              src="/video/hero3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="
                w-full
                h-full

                object-cover
                object-center

                transition-transform
                duration-[1500ms]

                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0

                

                flex
                flex-col
                justify-end

                p-5
                sm:p-8
                md:p-[50px]
              "
            >
              <h2
                className="
                  text-[1.5rem]
                  sm:text-[2.2rem]
                  md:text-[3.2rem]
                  lg:text-[4.5rem]

                  leading-[1]
                  sm:leading-[0.95]

                  font-bold
                  font-[Montserrat]

                  max-w-[700px]

                  mb-3
                  sm:mb-6
                "
              >
                Premium Creative Experiences For Modern Brands.
              </h2>

              <p
                className="
                  max-w-[580px]

                  text-[0.78rem]
                  sm:text-[0.95rem]
                  md:text-[1rem]

                  leading-[1.6]
                  sm:leading-[1.9]

                  text-white/85
                "
              >
                Minimal aesthetics, luxury visuals, creative storytelling, and
                stylish digital experiences designed with international
                standards.
              </p>
            </div>
          </motion.div>

          {/* SIDE CARDS */}
          <div className="grid grid-rows-2 gap-6">
            {/* CARD 1 */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white/[0.04]
                border border-white/10

                backdrop-blur-xl

                rounded-[35px]

                p-10

                flex
                flex-col
                justify-end

                hover:bg-white/[0.06]

                transition
                duration-500
              "
            >
              <small
                className="
                  uppercase
                  tracking-[3px]

                  text-white/40

                  text-[0.75rem]
                "
              >
                Creative Direction
              </small>

              <h3
                className="
                  text-[2rem]

                  leading-[1.1]

                  font-bold
                  font-[Montserrat]

                  my-5
                "
              >
                Branding That Feels Alive.
              </h3>

              <p className="text-white/70 leading-[1.9]">
                We transform businesses, creators, startups, and artists into
                premium digital brands with strong identity and storytelling.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.8,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white/[0.04]
                border border-white/10

                backdrop-blur-xl

                rounded-[35px]

                p-10

                flex
                flex-col
                justify-end

                hover:bg-white/[0.06]

                transition
                duration-500
              "
            >
              <small
                className="
                  uppercase
                  tracking-[3px]

                  text-white/40

                  text-[0.75rem]
                "
              >
                Spotlight Magazine
              </small>

              <h3
                className="
                  text-[2rem]

                  leading-[1.1]

                  font-bold
                  font-[Montserrat]

                  my-5
                "
              >
                A Platform For Real Talent.
              </h3>

              <p className="text-white/70 leading-[1.9]">
                A premium creator-first editorial experience inspired by global
                magazine culture and modern digital storytelling.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;