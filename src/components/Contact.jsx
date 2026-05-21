// Contact.jsx

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { toast } from "react-hot-toast";
import {Link } from "react-router-dom"
const Contact = () => {

  const [loading, setLoading] = useState(false);

  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ERRORS
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    // REMOVE ERROR WHEN TYPING
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // NAME VALIDATION
    if (name === "name") {

      // REMOVE NUMBERS
      const cleaned = value.replace(/[0-9]/g, "");

      setFormData({
        ...formData,
        [name]: cleaned,
      });

      return;
    }

    // PHONE VALIDATION
    if (name === "phone") {

      // ONLY NUMBERS
      const cleaned = value.replace(/\D/g, "");

      setFormData({
        ...formData,
        [name]: cleaned,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    let newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: "",
    };

    let hasError = false;

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      hasError = true;
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name cannot contain numbers.";
      hasError = true;
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
      hasError = true;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
      hasError = true;
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      hasError = true;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
      hasError = true;
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      hasError = true;
    }

    // TERMS
    if (!agreed) {
      newErrors.terms =
        "You must accept Terms & Conditions.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {

      setLoading(true);

      // GOOGLE SHEET WEBHOOK
      await fetch(
        "https://script.google.com/macros/s/AKfycbyNk-icl8UvIynboMYJFhhIeRpWEH5lSAkCTvb26gbKKbDKkm6DMuq6EybjpfuNkNoC/exec",
        {
          method: "POST",
          mode: "no-cors",

           

          body: JSON.stringify(formData),
        }
      );

      toast.success("Message sent successfully!");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setAgreed(false);

      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: "",
      });

    } catch (error) {

      toast.error("Something went wrong.");

    } finally {

      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-[150px] px-[7%] bg-[#050505] overflow-hidden"
    >

      <div className="max-w-[1550px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-[90px]">

          <h2
            className="
              text-[3rem]
              md:text-[5rem]
              xl:text-[6rem]

              leading-[0.9]

              font-['Montserrat']
              font-[800]

              uppercase
            "
          >
            <span className="text-white">
              Contact
            </span>{" "}

            <span className="text-[#ffff]">
              Us
            </span>
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-[40px] items-start">

          {/* LEFT */}
          <div className="relative pt-[10px]">

            {/* GLOW */}
            <div
              className="
                absolute
                top-[80px]
                left-[120px]

                w-[320px]
                h-[320px]

                rounded-full

                bg-[#5b3df5]/20

                blur-[140px]

                pointer-events-none
              "
            />

            <div className="relative z-10">

              {/* TITLE */}
              <h3
                className="
                  text-[2.7rem]
                  md:text-[3.4rem]

                  leading-[1]

                  font-['Montserrat']
                  font-[700]

                  text-white

                  mb-[35px]
                "
              >
                Get In Touch
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  max-w-[560px]

                  leading-[2.1]

                  text-[#cfcfcf]

                  text-[1.02rem]

                  mb-[65px]
                "
              >
                Have questions about branding,
                premium websites, creative
                production, social media growth,
                or cinematic content systems?
              </p>

              {/* INFO */}
              <div className="flex flex-col gap-[45px]">

                {/* ADDRESS */}
                <div className="flex items-start gap-[18px]">

                  <div
                    className="
                      w-[52px]
                      h-[52px]

                      rounded-full

                      border border-white/[0.06]

                      bg-white/[0.03]

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >
                    <MapPin
                      size={19}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h4
                      className="
                        text-white
                        font-[600]

                        text-[1.1rem]

                        mb-[10px]
                      "
                    >
                      Office
                    </h4>

                    <p className="leading-[1.9] text-[#bdbdbd]">
                      Creatous Collective Media
                      <br />
                      Shaktigarh Road No. 8
                      <br />
                      Woard 31 Siliguri, Dist- Darjeeling, West Bengal,
                    </p>

                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-[18px]">

                  <div
                    className="
                      w-[52px]
                      h-[52px]

                      rounded-full

                      border border-white/[0.06]

                      bg-white/[0.03]

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >
                    <Phone
                      size={19}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h4
                      className="
                        text-white
                        font-[600]

                        text-[1.1rem]

                        mb-[10px]
                      "
                    >
                      Phone
                    </h4>

                    <p className="text-[#bdbdbd]">
                      +91 9242352671
                    </p>

                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-[18px]">

                  <div
                    className="
                      w-[52px]
                      h-[52px]

                      rounded-full

                      border border-white/[0.06]

                      bg-white/[0.03]

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >
                    <Mail
                      size={19}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h4
                      className="
                        text-white
                        font-[600]

                        text-[1.1rem]

                        mb-[10px]
                      "
                    >
                      Email
                    </h4>

                    <p className="text-[#bdbdbd]">
                      support@creatouscollective.media
                    </p>

                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="
              relative

              bg-white/[0.04]
              border border-white/[0.08]

              backdrop-blur-[20px]

              rounded-[40px]

              p-[35px]
              md:p-[50px]

              overflow-hidden

              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                bottom-[-120px]
                right-[-120px]

                w-[320px]
                h-[320px]

                rounded-full

                bg-[#5b3df5]/20

                blur-[140px]

                pointer-events-none
              "
            />

            <div className="relative z-10">

              {/* TITLE */}
              <h3
                className="
                  text-[2.4rem]

                  font-['Montserrat']
                  font-[700]

                  text-white

                  mb-[35px]
                "
              >
                Ask Us a Question
              </h3>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[16px]"
              >

                {/* NAME */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="
                      h-[60px]
                      w-full

                      bg-black/50

                      border border-white/[0.06]

                      px-[20px]

                      text-white

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#ffff]

                      placeholder:text-[#8a8a8a]
                    "
                  />

                  {errors.name && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="
                      h-[60px]
                      w-full

                      bg-black/50

                      border border-white/[0.06]

                      px-[20px]

                      text-white

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#ffff]

                      placeholder:text-[#8a8a8a]
                    "
                  />

                  {errors.email && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PHONE */}
                <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  maxLength={10}
  className="
    h-[60px]
    w-full

    bg-black/50

    border border-white/[0.06]

    px-[20px]

    text-white

    outline-none

    transition-all
    duration-300

    focus:border-[#fffff]

    placeholder:text-[#8a8a8a]
  "
/>

                {/* MESSAGE */}
                <div>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, project, or goals..."
                    className="
                      w-full

                      bg-black/50

                      border border-white/[0.06]

                      px-[20px]
                      py-[18px]

                      text-white

                      outline-none

                      resize-none

                      transition-all
                      duration-300

                      focus:border-[#ffff]

                      placeholder:text-[#8a8a8a]
                    "
                  />

                  {errors.message && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* TERMS */}
                <div>

                  <label className="flex items-start gap-[12px] mt-[5px]">

                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);

                        setErrors((prev) => ({
                          ...prev,
                          terms: "",
                        }));
                      }}
                      className="
                        mt-[4px]

                        accent-[#ffff]
                      "
                    />

                    <span
                      className="
                        text-[0.92rem]

                        leading-[1.8]

                        text-[#bdbdbd]
                      "
                    >
                      By continuing, you agree to our{" "}

                      <Link
                        to="/terms"
                        className="
                          text-[#ffff]

                          hover:underline
                        "
                      >
                        Terms & Conditions
                      </Link>{" "}

                      and{" "}

                      <Link
                        to="/privacy-policy"
                        className="
                          text-[#fffff]

                          hover:underline
                        "
                      >
                        Privacy Policy
                      </Link>.
                    </span>

                  </label>

                  {errors.terms && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.terms}
                    </p>
                  )}

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    h-[62px]

                    text-black

                    font-[700]

                    rounded-[6px]

                    transition-all
                    duration-300

                    ${
                      loading
                        ? "bg-[#999] cursor-not-allowed"
                        : "bg-[#ffff] hover:scale-[1.01] hover:-translate-y-[2px]"
                    }
                  `}
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;