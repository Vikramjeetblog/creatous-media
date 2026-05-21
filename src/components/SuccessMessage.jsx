// SuccessMessage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SuccessMessage = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden px-6 pt-[140px] pb-[100px] flex items-center justify-center text-white">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-250px] left-[-180px] w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-250px] right-[-180px] w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full" />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-[760px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] px-8 sm:px-14 py-16 sm:py-20 text-center shadow-[0_0_80px_rgba(255,255,255,0.04)]"
      >

        {/* TOP LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1 }}
          className="h-[1px] bg-white/20 mx-auto mb-12"
        />

        {/* ICON */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="relative w-28 h-28 mx-auto rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center mb-10"
        >

          {/* PULSE */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-ping" />

          <CheckCircle2
            size={52}
            className="text-white"
            strokeWidth={2.2}
          />
        </motion.div>

        {/* LABEL */}
        <motion.small
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-[6px] text-white/40 text-[11px]"
        >
          Portfolio Submitted
        </motion.small>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-[52px] sm:text-[74px] leading-[0.95] font-semibold mt-6"
        >
          Thank You <br />
          For Applying.
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/55 text-[17px] sm:text-[19px] leading-[1.9] max-w-[580px] mx-auto mt-8"
        >
          Your creator portfolio has been submitted successfully.
          Our team will carefully review your application and
          contact you shortly with the next steps.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14"
        >
          <Link
            to="/spotlight"
            className="group inline-flex items-center justify-center gap-3 h-[62px] px-10 rounded-full bg-white text-black font-medium text-[15px] transition-all duration-300 hover:scale-[1.04]"
          >
            Home

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default SuccessMessage;