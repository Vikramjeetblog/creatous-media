import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-[140px] px-[7%] bg-[#050505] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          absolute
          top-[120px]
          right-[-120px]

          w-[420px]
          h-[420px]

          rounded-full

          bg-white/10

          blur-[160px]

          pointer-events-none
        "
      />

      <div className="max-w-[1550px] mx-auto relative z-10">

        {/* HEADING */}
        <FadeUp>
          <div className="mb-[90px]">

            <motion.span
              initial={{ opacity: 0, letterSpacing: "12px" }}
              whileInView={{
                opacity: 1,
                letterSpacing: "4px",
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                inline-block
                text-white

                tracking-[4px]
                uppercase

                text-[0.8rem]
                font-[600]

                mb-[22px]
              "
            >
              About Spotlight
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                text-[3rem]
                md:text-[5rem]
                xl:text-[6rem]

                leading-[0.92]

                font-['Montserrat']
                font-[800]

                uppercase

                text-white
              "
            >
              Creator First
              <br />
              Editorial Platform
            </motion.h2>

          </div>
        </FadeUp>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.9fr] gap-[80px] items-start">

          {/* LEFT */}
          <FadeUp delay={0.1}>
            <div>

              <p
                className="
                  text-[#cfcfcf]

                  text-[1.05rem]
                  leading-[2]

                  mb-[35px]

                  max-w-[850px]
                "
              >
                Spotlight by Creatous Collective Media is a modern
                creator-focused editorial platform built to
                discover, feature, and amplify emerging talent
                across music, visual arts, fashion, media,
                creative direction, and digital culture.
              </p>

              <p
                className="
                  text-[#b5b5b5]

                  text-[1rem]
                  leading-[2]

                  mb-[35px]

                  max-w-[850px]
                "
              >
                We believe creators deserve visibility,
                storytelling, and meaningful exposure through
                curated editorial experiences. Spotlight was
                designed to bridge creativity with audience,
                opportunity, collaboration, and industry
                recognition.
              </p>

              <p
                className="
                  text-[#b5b5b5]

                  text-[1rem]
                  leading-[2]

                  max-w-[850px]
                "
              >
                Every submission is reviewed carefully to
                maintain originality, quality, artistic value,
                and platform standards. Our goal is to create a
                premium digital space that celebrates authentic
                creative voices while supporting long-term
                creator growth.
              </p>

            </div>
          </FadeUp>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-[24px]">

            {/* CARD */}
            <FadeUp delay={0.2}>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-white/[0.03]

                  border border-white/[0.06]

                  rounded-[28px]

                  p-[32px]

                  backdrop-blur-[12px]

                  transition-all
                  duration-300

                  hover:border-white/15
                "
              >
                <h3
                  className="
                    text-white

                    text-[1.4rem]
                    font-[700]

                    mb-[18px]
                  "
                >
                  What We Feature
                </h3>

                <ul className="space-y-[14px] text-[#bdbdbd] leading-[1.8]">

                  <li>• Music & Artist Spotlights</li>
                  <li>• Creative Portfolios</li>
                  <li>• Fashion & Visual Projects</li>
                  <li>• Editorial Interviews</li>
                  <li>• Brand & Creative Campaigns</li>
                  <li>• Digital Creator Features</li>

                </ul>
              </motion.div>
            </FadeUp>

            {/* CARD */}
            <FadeUp delay={0.3}>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-white/[0.03]

                  border border-white/[0.06]

                  rounded-[28px]

                  p-[32px]

                  backdrop-blur-[12px]

                  transition-all
                  duration-300

                  hover:border-white/15
                "
              >
                <h3
                  className="
                    text-white

                    text-[1.4rem]
                    font-[700]

                    mb-[18px]
                  "
                >
                  Our Vision
                </h3>

                <p
                  className="
                    text-[#bdbdbd]

                    leading-[1.9]
                  "
                >
                  To build a global creator ecosystem where
                  emerging talent receives premium visibility,
                  authentic storytelling, and opportunities for
                  long-term creative growth through media,
                  culture, and collaboration.
                </p>
              </motion.div>
            </FadeUp>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;