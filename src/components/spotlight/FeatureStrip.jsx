// FeatureStrip.jsx

import React from "react";
import { motion } from "framer-motion";

const FeatureStrip = () => {

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
    <section
      id="features"

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

          {/* COMING SOON CARD */}
          <motion.div

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

              min-h-[220px]

              flex
              items-center
              justify-center

              rounded-[28px]

              overflow-hidden

              border border-white/[0.06]

              bg-white/[0.02]
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

            {/* COMING SOON TEXT */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
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
                text-white

                text-[2rem]
                md:text-[3rem]

                font-['Montserrat']
                font-[900]

                tracking-[10px]

                uppercase

                text-center

                opacity-90
              "
            >
            Launching Soon
            </motion.h2>

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

                rounded-[28px]

                bg-gradient-to-br
                from-white/[0.04]
                to-transparent

                pointer-events-none
              "
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default FeatureStrip;