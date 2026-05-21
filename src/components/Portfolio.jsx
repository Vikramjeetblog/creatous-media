// Portfolio.jsx

import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {

  const portfolio = [
    {
      category: "Music Production House & Independent Record Label",

      title: "The Chordifiers Studio",

      description:
        "Custom website designed and developed for an independent record label, production studio, and creative institute based in Siliguri, Darjeeling.",

      image: "/assets/protfoilo1.png",

      link: "https://thechordifiers.studio/",
    },

    {
      category: "Restaurant Brand",

      title: "Haandi Shaandi",

      description:
        "Premium restaurant website crafted for a modern Indian dining brand focused on regional biryanis and authentic culinary experiences.",

      image: "/assets/protfoilo2.png",

      link: "https://haandishaandi.com/",
    },
  ];

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

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 140,
      scale: 0.96,
    },

    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 2,
        delay: index * 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="portfolio"
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
              Portfolio
            </motion.small>

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
              Selected
              <br />
              Digital
              <br />
              Experiences.
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
              A curated collection of real-world digital
              experiences crafted for modern brands,
              creative businesses, and emerging platforms.
            </p>

          </motion.div>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">

          {portfolio.map((item, index) => (
            <motion.div
              key={index}

              custom={index}

              variants={cardAnimation}

              initial="hidden"

              whileInView="visible"

              viewport={{
                once: true,
                amount: 0.2,
              }}

              whileHover={{
                y: -10,
              }}

              className="
                group

                bg-white/[0.03]
                border border-white/[0.06]

                rounded-[38px]

                overflow-hidden

                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden bg-black relative">

                {/* IMAGE REVEAL */}
                <motion.img
                  src={item.image}
                  alt={item.title}

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

                    h-auto

                    object-contain
                    object-top

                    transition-transform
                    duration-[1800ms]

                    group-hover:scale-[1.02]
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

              </div>

              {/* CONTENT */}
              <div className="p-[32px]">

                {/* CATEGORY */}
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
                    duration: 1.5,
                    delay: 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    uppercase
                    tracking-[3px]

                    text-white/40

                    text-[0.72rem]
                  "
                >
                  {item.category}
                </motion.small>

                {/* TITLE */}
                <motion.h3
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
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    mt-[16px]

                    text-[2rem]
                    xl:text-[2.3rem]

                    leading-[1.05]

                    font-['Montserrat']
                    font-[700]

                    text-white
                  "
                >
                  {item.title}
                </motion.h3>

                {/* DESCRIPTION */}
              

                {/* BUTTON */}
                <motion.div
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
                    delay: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="mt-[32px] flex justify-end"
                >

                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"

                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}

                    whileTap={{
                      scale: 0.97,
                    }}

                    transition={{
                      duration: 0.4,
                    }}

                    className="
                      px-[22px]
                      py-[13px]

                      rounded-full

                      bg-white
                      text-black

                      text-[0.92rem]
                      font-[600]

                      transition-all
                      duration-500
                    "
                  >
                    Visit Website
                  </motion.a>

                </motion.div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;