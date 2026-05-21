
import React from "react";

const Privacy = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full" />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-14 pt-[180px] pb-[120px]">

        {/* TOP */}
        <div className="mb-20">

          <small className="uppercase tracking-[6px] text-white/40 text-[11px]">
            Legal Information
          </small>

          <h1 className="text-[52px] sm:text-[80px] leading-[0.95] font-semibold mt-6">
            Privacy <br />
            Policy
          </h1>

          <p className="max-w-[720px] text-white/55 text-[17px] leading-[1.9] mt-8">
            At CC Media™ and Spotlight Magazine™, your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our website, services, or submission platform.
            By accessing our website, you agree to the terms outlined below.
          </p>

        </div>

        {/* POLICY CARD */}
        <div className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] p-8 sm:p-12 lg:p-16 space-y-16">

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Information We Collect
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Name
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Email Address
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Phone Number
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Business or Brand Information
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Appointment Booking Details
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Portfolio or Submission Files
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Social Media Links
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Website Usage Data
              </div>

            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              How We Use Your Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Provide Services
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Respond To Inquiries
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Schedule Appointments
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Process Magazine Submissions
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Improve Website Experience
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Send Important Updates
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Maintain Platform Security
              </div>

            </div>

            <p className="text-white/50 text-[16px] leading-[1.9] mt-8">
              We do not sell your personal information.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Creative Submissions
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              Creators retain ownership of their submitted work. By submitting
              content to Spotlight Magazine™, you allow us to review, display,
              publish, or promote approved submissions across our digital
              platforms.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Third-Party Services
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9] mb-8">
              We may use trusted third-party platforms including:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white/60 text-[17px]">

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Google Calendar
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Payment Gateways
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Analytics Tools
              </div>

              <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
                Social Media Integrations
              </div>

            </div>

            <p className="text-white/50 text-[16px] leading-[1.9] mt-8">
              These services may collect data according to their own privacy
              policies.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Cookies
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              Our website may use cookies to improve user experience and website
              performance.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Security
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              We implement reasonable measures to protect your information.
              However, no online platform can guarantee complete security.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Policy Updates
            </h2>

            <p className="text-white/60 text-[17px] leading-[1.9]">
              We may update this Privacy Policy periodically. Continued use of
              our website means you accept the updated policy.
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

export default Privacy;