// Editorial.jsx

import React from "react";
import { motion } from "framer-motion";

const Editorial = () => {

  const editorials = [
    {
      category: "Fashion Editorial",

      title: "The New Creative Generation.",

      description:
        "Exploring the visual culture and identity of emerging creators shaping the future.",

      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    },

    {
      category: "Artist Feature",

      title: "Beyond The Algorithm.",

      description:
        "Highlighting creators whose talent deserves visibility beyond numbers and trends.",

      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    },

    {
      category: "Music / Culture",

      title: "Voices Of Modern Culture.",

      description:
        "A cinematic exploration of sound, creativity, visuals, and modern storytelling.",

      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
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
      id="editorial"
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

            items-end
            justify-between

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
              Featured Editorial
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
                sm:text-[3.5rem]
                lg:text-[5rem]

                leading-[0.9]

                font-['Montserrat']
                font-[800]

                text-white
              "
            >
              Selected
              <br />
              Stories & Visuals.
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
              A curated collection of fashion
              editorials, creator stories,
              music visuals, cinematic photography,
              and modern digital culture.
            </p>

          </motion.div>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[25px]">

          {editorials.map((item, index) => (
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
                relative

                h-[620px]
                lg:h-[720px]

                overflow-hidden
                rounded-[40px]

                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              "
            >

              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden">

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
                    h-full

                    object-cover

                    transition-transform
                    duration-[1800ms]

                    group-hover:scale-[1.06]
                  "
                />

              </div>

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
                  delay: index * 0.4,
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
                  from-black/[0.96]
                  via-black/[0.35]
                  to-transparent

                  flex
                  flex-col
                  justify-end

                  p-[30px]
                  lg:p-[40px]
                "
              >

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
                    tracking-[3px]
                    uppercase

                    text-[0.75rem]

                    opacity-60
                    text-white
                  "
                >
                  {item.category}
                </motion.small>

                {/* TITLE */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 70,
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
                    mt-[18px]
                    mb-[18px]

                    text-[2rem]
                    lg:text-[2.6rem]

                    leading-[1]

                    font-['Montserrat']
                    font-[700]

                    text-white
                  "
                >
                  {item.title}
                </motion.h3>

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
                    delay: 0.4,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    leading-[1.9]

                    text-[#f2f2f2]

                    text-[1rem]
                  "
                >
                  {item.description}
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
                  delay: index * 0.3,
                }}

                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/[0.05]
                  to-transparent

                  pointer-events-none
                "
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Editorial;