// SubmissionPolicy.jsx

import React from "react";

const SubmissionPolicy = () => {
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
            Editorial Guidelines
          </small>

          <h1 className="text-[52px] sm:text-[80px] leading-[0.95] font-semibold mt-6">
            Submission <br />
            Policy
          </h1>

          <p className="max-w-[760px] text-white/55 text-[17px] leading-[1.9] mt-8">
            Spotlight Magazine™ is a creator-first editorial platform focused on
            discovering, supporting, and featuring emerging creative talent
            worldwide.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] p-8 sm:p-12 lg:p-16 space-y-16">

          {/* ELIGIBILITY */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Eligibility
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              Creators from any creative field may submit work including:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Photography
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Fashion Editorials
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Music Projects
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Films
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Artwork
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Design Portfolios
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Creative Campaigns
              </div>

            </div>

          </div>

          {/* SUBMISSION FEE */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Submission Fee
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              Some submission categories may require a non-refundable review fee.
              Submission fees help support:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Editorial Review
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Curation Process
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Administrative Handling
              </div>

            </div>

            <p className="text-white/45 text-[15px] leading-[1.9] mt-8">
              Payment does not guarantee publication.
            </p>

          </div>

          {/* REVIEW PROCESS */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Review Process
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              Every submission is reviewed internally based on:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Creativity
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Originality
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Storytelling
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Artistic Direction
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Editorial Quality
              </div>

            </div>

          </div>

          {/* RIGHTS */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Rights & Ownership
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              Creators retain ownership of their original work. By submitting
              content, you grant Spotlight Magazine™ permission to review,
              display, publish, and promote approved submissions across our
              digital platforms.
            </p>

          </div>

          {/* REJECTION */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Rejection & Removal
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              We reserve the right to reject any submission without explanation.
              Creators may request removal of published content by contacting us
              directly.
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

export default SubmissionPolicy;