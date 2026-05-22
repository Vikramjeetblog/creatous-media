// Services.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {

  const services = [
    {
      category: "Marketing / Strategy",

      title: "Brands People Remember.",

      description:
        "We help brands grow through content, strategy, storytelling, and digital presence.",

      images: [
        "assets/marketing4.jpg",
        "assets/marketing2.jpg",
        "assets/marketing3.jpg",
        
      ],
    },

    {
      category: "Web / Experience",

      title: "Websites That Tell Your Story.",

      description:
        "Modern websites crafted with cinematic visuals, smooth experience, and strong brand identity.",

      images: [
        "assets/website1.jpg",
        "assets/website2.jpg",
        "assets/website3.jpg",
      ],
    },

    {
      category: "Production / Editorial",

      title: "Visuals That Speak.",

      description:
        "Music videos, reels, campaigns, and cinematic visuals built for modern storytelling.",

      images: [
        "assets/production4.jpg",
        "assets/production11.jpg",
        "assets/production8.jpg",
      ],
    },
  ];

  // IMAGE SLIDER STATE
  const [currentImages, setCurrentImages] = useState(
    services.map(() => 0)
  );

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {

      setCurrentImages((prev) =>
        prev.map((item, index) => {

          const totalImages = services[index].images.length;

          return (item + 1) % totalImages;
        })
      );

    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
      id="services"
      className="
        py-[150px]
        px-[4%]
        bg-[#050505]
        overflow-hidden
      "
    >

      <div className="max-w-[1850px] mx-auto">

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
              Services
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
              What We
              <br />
              Actually Build.
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
              Modern creative services crafted for
              brands, artists, creators, startups,
              restaurants, fashion labels, and
              businesses looking for premium
              digital presence.
            </p>

          </motion.div>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[18px]">

          {services.map((service, index) => (
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
                  aspect-[4/5]
                overflow-hidden
                rounded-[40px]
                cursor-pointer
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                border border-white/[0.04]
              "
            >

              {/* IMAGE SLIDER */}
              <div className="absolute inset-0 overflow-hidden">

                <AnimatePresence mode="wait">

                  <motion.img
                    key={currentImages[index]}
                    src={service.images[currentImages[index]]}
                    alt={service.title}

                    initial={{
                      opacity: 0,
                      scale: 1.1,
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}

                    exit={{
                      opacity: 0,
                      scale: 1.05,
                    }}

                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                       object-center
                      transition-transform
                      duration-[1800ms]
                      group-hover:scale-[1.06]
                    "
                  />

                </AnimatePresence>

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
                  from-black/[0.94]
                  via-black/[0.35]
                  to-transparent
                  flex
                  flex-col
                  justify-end
                  p-[40px]
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
                  {service.category}
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
                    text-[2.2rem]
                    xl:text-[2.6rem]
                    leading-[1]
                    font-['Montserrat']
                    font-[700]
                    text-white
                  "
                >
                  {service.title}
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
                  {service.description}
                </motion.p>

                {/* DOTS */}
               {/* CONTROLS */}
<div className="flex items-center justify-between mt-6">

  {/* DOTS */}
  <div className="flex gap-2">

    {service.images.map((_, imgIndex) => (

      <div
        key={imgIndex}
        className={`
          h-[6px]
          rounded-full
          transition-all
          duration-500

          ${
            currentImages[index] === imgIndex
              ? "w-[28px] bg-white"
              : "w-[6px] bg-white/40"
          }
        `}
      />

    ))}

  </div>

  {/* ARROWS */}
  <div className="flex items-center gap-3">

    {/* LEFT */}
    <button
      onClick={(e) => {
        e.stopPropagation();

        setCurrentImages((prev) => {
          const updated = [...prev];

          updated[index] =
            updated[index] === 0
              ? service.images.length - 1
              : updated[index] - 1;

          return updated;
        });
      }}
      className="
        w-[42px]
        h-[42px]
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-md
        text-white
        text-[1.2rem]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
      "
    >
      &#8249;
    </button>

    {/* RIGHT */}
    <button
      onClick={(e) => {
        e.stopPropagation();

        setCurrentImages((prev) => {
          const updated = [...prev];

          updated[index] =
            (updated[index] + 1) %
            service.images.length;

          return updated;
        });
      }}
      className="
        w-[42px]
        h-[42px]
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-md
        text-white
        text-[1.2rem]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
      "
    >
      &#8250;
    </button>

  </div>

</div>

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
                  from-white/[0.05]
                  via-transparent
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

export default Services;