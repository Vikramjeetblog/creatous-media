// RefundPolicy.jsx

import React from "react";

const RefundPolicy = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full" />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-14 pt-[180px] pb-[120px]">

        {/* HERO */}
        <div className="mb-20">

          <small className="uppercase tracking-[6px] text-white/40 text-[11px]">
            Payment Information
          </small>

          <h1 className="text-[52px] sm:text-[80px] leading-[0.95] font-semibold mt-6">
            Refund <br />
            Policy
          </h1>

          <p className="max-w-[760px] text-white/55 text-[17px] leading-[1.9] mt-8">
            Due to the nature of creative and digital services, payments made
            for branding, design, development, marketing, production,
            consultations, or editorial reviews are generally non-refundable.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] p-8 sm:p-12 lg:p-16 space-y-16">

          {/* ADVANCE PAYMENTS */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Advance Payments
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              Advance payments secure project scheduling and creative resource
              allocation. These payments are non-refundable.
            </p>

          </div>

          {/* SUBMISSION FEES */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Submission Fees
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              All Spotlight Magazine™ submission fees are non-refundable.
              Payment only covers the editorial review process and does not
              guarantee publication.
            </p>

          </div>

          {/* CANCELLATION */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Cancellation
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              If a project is cancelled before work begins, partial refunds may
              be considered at the discretion of CC Media™.
            </p>

          </div>

          {/* CONTACT */}
          <div className="border-t border-white/10 pt-12">

            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Contact
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              Email: support@creatouscollective.media
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;