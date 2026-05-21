
import React from "react";

const SubmissionGuidelines = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white pt-[160px] pb-[120px] px-[7%]">

      <div className="max-w-[1000px] mx-auto">

        {/* TOP SECTION */}
        <div className="text-center mb-[80px]">

          <small
            className="
              uppercase
              tracking-[4px]
              text-white/50
              text-[0.8rem]
            "
          >
            Spotlight Platform
          </small>

          {/* HEADING */}
          <h1
            className="
              mt-[25px]

              text-[3rem]
              sm:text-[4.5rem]
              lg:text-[6rem]

              leading-[0.9]

              font-[800]
              font-['Montserrat']
            "
          >
            Submission
            <br />
            Guidelines
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-[760px]
              mx-auto

              mt-[30px]

              text-white/60
              leading-[2]

              text-[1rem]
              lg:text-[1.05rem]
            "
          >
            Spotlight is a platform built to discover,
            showcase, and amplify emerging creatives,
            artists, storytellers, and visionaries
            from around the world.

            <br />
            <br />

            Submit your work, share your story,
            and become part of a global creative
            movement.
          </p>
        </div>

        {/* CARD */}
        <div
          className="
            relative
            overflow-hidden

            bg-white/[0.04]
            border border-white/[0.08]

            backdrop-blur-[20px]

            rounded-[40px]

            p-[30px]
            sm:p-[50px]
            lg:p-[70px]
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              top-[-100px]
              right-[-100px]

              w-[300px]
              h-[300px]

              bg-white/[0.03]

              rounded-full
              blur-[100px]

              pointer-events-none
            "
          />

          <div className="relative z-10 space-y-[60px]">

            {/* WHO CAN SUBMIT */}
            <div>
              <h2 className="text-[1.6rem] font-[700] mb-[20px]">
                Who Can Submit
              </h2>

              <ul
                className="
                  list-disc
                  pl-6

                  space-y-[14px]

                  text-white/70
                  leading-[1.9]
                "
              >
                <li>
                  Independent Artists & Creators
                </li>

                <li>
                  Musicians, Filmmakers & Directors
                </li>

                <li>
                  Anyone with a unique creative voice
                </li>
              </ul>
            </div>

            {/* BEFORE YOU SUBMIT */}
            <div>
              <h2 className="text-[1.6rem] font-[700] mb-[20px]">
                Before You Submit
              </h2>

              <ul
                className="
                  list-disc
                  pl-6

                  space-y-[14px]

                  text-white/70
                  leading-[1.9]
                "
              >
                <li>
                  Share your best and most original work
                </li>

                <li>
                  Include links that are public and accessible
                </li>

                <li>
                  Tell us about yourself and your
                  creative vision
                </li>

                <li>
                  Ensure submitted work belongs to you
                </li>

                <li>
                  Authenticity and originality matter most
                </li>
              </ul>
            </div>

            {/* WHAT HAPPENS NEXT */}
            <div>
              <h2 className="text-[1.6rem] font-[700] mb-[20px]">
                What Happens Next
              </h2>

              <ol
                className="
                  list-decimal
                  pl-6

                  space-y-[14px]

                  text-white/70
                  leading-[1.9]
                "
              >
                <li>
                  Our team carefully reviews every
                  submission
                </li>

                <li>
                  Selected creators may be featured
                  across Spotlight platforms and campaigns
                </li>

                <li>
                  Some creators may be contacted
                  for future collaborations and opportunities
                </li>

                <li>
                  Due to high submission volume,
                  not every submission receives a response
                </li>
              </ol>
            </div>

            {/* IMPORTANT NOTES */}
            <div>
              <h2 className="text-[1.6rem] font-[700] mb-[20px]">
                Important Notes
              </h2>

              <ul
                className="
                  list-disc
                  pl-6

                  space-y-[14px]

                  text-white/70
                  leading-[1.9]
                "
              >
                <li>
                  Spotlight exists to support and amplify
                  creative voices globally
                </li>

                <li>
                  Submission does not guarantee a feature
                  or collaboration
                </li>

                <li>
                  We value originality, storytelling,
                  identity, and artistic expression
                </li>

                <li>
                  Respectful and authentic submissions
                  are always appreciated
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;