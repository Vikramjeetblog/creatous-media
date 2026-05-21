// TermsPage.jsx

import React from "react";

const Terms = () => {
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
            Legal Information
          </small>

          <h1 className="text-[52px] sm:text-[80px] leading-[0.95] font-semibold mt-6">
            Terms & <br />
            Conditions
          </h1>

          <p className="max-w-[720px] text-white/55 text-[17px] leading-[1.9] mt-8">
            By accessing or using CC Media™ and Spotlight Magazine™,
            you agree to comply with the following terms and conditions.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] p-8 sm:p-12 lg:p-16 space-y-16">

          {/* SERVICES */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Services
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              CC Media™ provides creative and digital services including:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Branding
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Website Design & Development
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Marketing
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Video Production
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Social Media Management
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Artist Management
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Editorial Publishing
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Creative Consulting
              </div>

            </div>

          </div>

          {/* PRICING */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Pricing
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              All prices displayed on the website are starting prices and may
              vary depending on project requirements. Final pricing will be
              confirmed before project approval.
            </p>

          </div>

          {/* PAYMENTS */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Payments
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              Advance payments may be required before starting any project.
              Payments made for creative work, consultations, or submission
              reviews are generally non-refundable.
            </p>

          </div>

          {/* IP */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Intellectual Property
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              All original content, visuals, branding, and creative work created
              by CC Media™ remain protected under intellectual property laws.
              Ownership transfer may occur only after full payment and written
              agreement.
            </p>

          </div>

          {/* USER CONDUCT */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              User Conduct
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              Users may not:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Use The Website Unlawfully
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Upload Harmful or Copyrighted Material
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Attempt Unauthorized Access
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Misrepresent Identity or Ownership
              </div>

            </div>

          </div>

          {/* LIABILITY */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Limitation of Liability
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              CC Media™ is not responsible for:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Business Losses
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Platform Downtime
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Third-Party Service Issues
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Delays Caused By External Platforms
              </div>

            </div>

          </div>

          {/* POLICY CHANGES */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Policy Changes
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              We reserve the right to modify these Terms & Conditions at any
              time.
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

export default Terms;