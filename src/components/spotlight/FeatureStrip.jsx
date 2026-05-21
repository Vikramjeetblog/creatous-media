// FeatureStrip.jsx

import React from "react";
import { motion } from "framer-motion";

const FeatureStrip = () => {

  const features = [
    {
      number: "01",
      text: "Feature emerging creators globally.",
    },

    {
      number: "02",
      text: "Premium editorial visual direction.",
    },

    {
      number: "03",
      text: "Digital-first magazine experience.",
    },

    {
      number: "04",
      text: "Creator-first culture and storytelling.",
    },
  ];

  // CINEMATIC ANIMATIONS
  const containerAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 2,
        staggerChildren: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 120,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="features"
      className="
        relative
        z-20
       scroll-mt-[140px]
        px-[7%]
        
      

        bg-[#050505]

        overflow-hidden
      "
    >

      <div className="max-w-[1550px] mx-auto">

        {/* STRIP BOX */}
        <motion.div
          variants={containerAnimation}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          className="
            relative

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-[25px]

            p-[28px]
            sm:p-[35px]

            rounded-[35px]

            bg-white/[0.05]
            border border-white/[0.08]

            backdrop-blur-[20px]

            shadow-[0_10px_40px_rgba(0,0,0,0.25)]

            overflow-hidden
          "
        >

          {/* FLOATING GLOW */}
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              top-[-120px]
              right-[-120px]

              w-[320px]
              h-[320px]

              rounded-full

              bg-white/[0.04]

              blur-[120px]

              pointer-events-none
            "
          />

          {features.map((item, index) => (
            <motion.div
              key={index}

              variants={cardAnimation}

              whileHover={{
                y: -10,
              }}

              transition={{
                duration: 0.6,
              }}

              className="
                group
                relative

                p-[24px]

                rounded-[24px]

                overflow-hidden
              "
            >

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

                  w-[35%]
                  h-full

                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.05]
                  to-transparent

                  skew-x-[-25deg]

                  pointer-events-none
                "
              />

              {/* NUMBER */}
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
                  duration: 1.5,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}

                viewport={{
                  once: true,
                }}

                className="
                  text-[2.3rem]
                  md:text-[2.5rem]

                  font-['Montserrat']
                  font-[700]

                  text-white

                  mb-[12px]

                  transition-all
                  duration-500

                  group-hover:tracking-[3px]
                "
              >
                {item.number}
              </motion.h3>

              {/* TEXT */}
              <motion.p
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
                  delay: 0.2 + index * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  text-[#d0d0d0]

                  text-[0.98rem]

                  leading-[1.9]

                  max-w-[220px]
                "
              >
                {item.text}
              </motion.p>

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

                  rounded-[24px]

                  bg-gradient-to-br
                  from-white/[0.04]
                  to-transparent

                  pointer-events-none
                "
              />

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default FeatureStrip;