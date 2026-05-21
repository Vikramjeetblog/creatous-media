// StartProject.jsx

import React, { useState } from "react";
import{Link} from "react-router-dom"
import {
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { toast } from "react-hot-toast";

const StartProject = () => {

  const [loading, setLoading] = useState(false);

  const [agreed, setAgreed] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    date: "",
    time: "",
    message: "",
    terms: "",
  });

  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  // HANDLE INPUT
  const handleChange = (e) => {

    const { name, value } = e.target;

    // REMOVE ERROR
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // NAME VALIDATION
    if (name === "name") {

      const cleaned = value.replace(/[0-9]/g, "");

      setFormData({
        ...formData,
        [name]: cleaned,
      });

      return;
    }

    // PHONE VALIDATION
    if (name === "phone") {

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
      project: "",
      date: "",
      time: "",
      message: "",
      terms: "",
    };

    let hasError = false;

    // NAME
    if (!formData.name.trim()) {

      newErrors.name = "Full name is required.";
      hasError = true;

    } else if (/\d/.test(formData.name)) {

      newErrors.name =
        "Name cannot contain numbers.";

      hasError = true;
    }

    // EMAIL
    if (!formData.email.trim()) {

      newErrors.email =
        "Email address is required.";

      hasError = true;

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {

      newErrors.email =
        "Enter a valid email address.";

      hasError = true;
    }

    // PHONE
    if (!formData.phone.trim()) {

      newErrors.phone =
        "Phone number is required.";

      hasError = true;

    } else if (!/^\d{10}$/.test(formData.phone)) {

      newErrors.phone =
        "Phone number must be exactly 10 digits.";

      hasError = true;
    }

    // PROJECT
    if (!formData.project) {

      newErrors.project =
        "Please select a project type.";

      hasError = true;
    }

    // DATE
    if (!selectedDate) {

      newErrors.date =
        "Please select a meeting date.";

      hasError = true;
    }

    // TIME
    if (!selectedTime) {

      newErrors.time =
        "Please select a time slot.";

      hasError = true;
    }

    // MESSAGE
    if (!formData.message.trim()) {

      newErrors.message =
        "Project details are required.";

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

      // GOOGLE SHEET API
      await fetch(
        "https://script.google.com/macros/s/AKfycbx8l6MfXFH1Op4osfWmX2UVQ9SiWunqtizUNGEZF1FtwGpZtq1eo5yqXofBPqRivAmS/exec",
        {
          method: "POST",
          mode: "no-cors",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,
            selectedDate,
            selectedTime,
          }),
        }
      );

      toast.success(
        "Appointment scheduled successfully!"
      );

      // RESET
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
      });

      setSelectedDate("");
      setSelectedTime("");
      setAgreed(false);

    } catch (error) {

      toast.error(
        "Something went wrong."
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <section
      id="start-project"
      className="
        py-[140px]
        px-[7%]

        bg-[#050505]

        overflow-hidden
      "
    >

      <div className="max-w-[1550px] mx-auto">

        {/* TITLE */}
        <div className="text-center mb-[80px]">

          <small
            className="
              uppercase
              tracking-[4px]
              text-white/40
              text-[0.75rem]
            "
          >
            Creative Consultation
          </small>

          <h2
            className="
              mt-[18px]

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
              Start
            </span>{" "}

            <span className="text-[#ffff]">
              Project
            </span>
          </h2>

        </div>

        {/* MAIN BOX */}
        <div
          className="
            relative

            rounded-[45px]

            border border-white/[0.06]

            bg-white/[0.03]

            backdrop-blur-[20px]

            overflow-hidden

            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]

              w-[340px]
              h-[340px]

              rounded-full

              bg-[#5b3df5]/20

              blur-[140px]

              pointer-events-none
            "
          />

          <div
            className="
              relative
              z-10

              grid
              lg:grid-cols-[0.95fr_1.05fr]

              gap-[50px]

              p-[35px]
              md:p-[55px]
            "
          >

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between">

              <div>

                <h3
                  className="
                    text-[2.5rem]
                    md:text-[3.4rem]

                    leading-[1]

                    font-['Montserrat']
                    font-[700]

                    text-white

                    max-w-[520px]

                    mb-[30px]
                  "
                >
                  Let’s Build Something People Remember.
                </h3>

                <p
                  className="
                    text-[#d0d0d0]

                    leading-[2]

                    text-[1rem]

                    max-w-[520px]
                  "
                >
                  Schedule a creative consultation
                  to discuss your website,
                  branding, social media strategy,
                  cinematic production, or digital
                  experience.
                </p>

              </div>

              {/* FEATURES */}
              <div className="flex flex-col gap-[22px] mt-[50px]">

                <div className="flex items-center gap-[14px]">

                  <div
                    className="
                      w-[42px]
                      h-[42px]

                      rounded-full

                      bg-white/[0.04]

                      border border-white/[0.06]

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <CalendarDays
                      size={18}
                      className="text-[#fffff]"
                    />
                  </div>

                  <span className="text-[#d8d8d8]">
                    Choose your preferred meeting date.
                  </span>

                </div>

                <div className="flex items-center gap-[14px]">

                  <div
                    className="
                      w-[42px]
                      h-[42px]

                      rounded-full

                      bg-white/[0.04]

                      border border-white/[0.06]

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Clock3
                      size={18}
                      className="text-[#ffff]"
                    />
                  </div>

                  <span className="text-[#d8d8d8]">
                    Select an available consultation slot.
                  </span>

                </div>

                <div className="flex items-center gap-[14px]">

                  <div
                    className="
                      w-[42px]
                      h-[42px]

                      rounded-full

                      bg-white/[0.04]

                      border border-white/[0.06]

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ArrowRight
                      size={18}
                      className="text-[#ffff]"
                    />
                  </div>

                  <span className="text-[#d8d8d8]">
                    Receive confirmation instantly.
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              <form
                onSubmit={handleSubmit}
                className="grid gap-[20px]"
              >

                {/* NAME */}
                <div>

                  <label className="block text-white font-[500] mb-[12px]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="
                      w-full
                      h-[64px]

                      bg-black/50

                      border border-white/[0.06]

                      px-[22px]

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

                  <label className="block text-white font-[500] mb-[12px]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="
                      w-full
                      h-[64px]

                      bg-black/50

                      border border-white/[0.06]

                      px-[22px]

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
                <div>

                  <label className="block text-white font-[500] mb-[12px]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="Enter your phone number"
                    className="
                      w-full
                      h-[64px]

                      bg-black/50

                      border border-white/[0.06]

                      px-[22px]

                      text-white

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#ffff]

                      placeholder:text-[#8a8a8a]
                    "
                  />

                  {errors.phone && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.phone}
                    </p>
                  )}

                </div>

                {/* PROJECT TYPE */}
                <div>

                  <label className="block text-white font-[500] mb-[12px]">
                    Project Type
                  </label>

                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="
                      w-full
                      h-[64px]

                      bg-black/50

                      border border-white/[0.06]

                      px-[22px]

                      text-white

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#ffff]
                    "
                  >
                    <option value="">
                      Select project type
                    </option>

                    <option>
                      Website Design
                    </option>

                    <option>
                      Branding
                    </option>

                    <option>
                      Social Media
                    </option>

                    <option>
                      Video Production
                    </option>

                    <option>
                      Creative Consultation
                    </option>

                  </select>

                  {errors.project && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.project}
                    </p>
                  )}

                </div>

                {/* DATE */}
                <div>

                  <label className="block text-white font-[500] mb-[12px]">
                    Select Date
                  </label>

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);

                      setErrors((prev) => ({
                        ...prev,
                        date: "",
                      }));
                    }}
                    className="
                      w-full
                      h-[64px]

                      bg-black/50

                      border border-white/[0.06]

                      px-[22px]

                      text-white

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#ffff]
                    "
                  />

                  {errors.date && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.date}
                    </p>
                  )}

                </div>

                {/* TIME SLOTS */}
                <div>

                  <label className="block text-white font-[500] mb-[12px]">
                    Select Time Slot
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-[14px]">

                    {slots.map((slot, index) => (

                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSelectedTime(slot);

                          setErrors((prev) => ({
                            ...prev,
                            time: "",
                          }));
                        }}
                        className={`
                          h-[58px]

                          border

                          text-[0.95rem]

                          transition-all
                          duration-300

                          ${
                            selectedTime === slot
                              ? "bg-[#ffff] text-black border-[#ffff]"
                              : "bg-black/50 text-white border-white/[0.06] hover:border-[#ffff]"
                          }
                        `}
                      >
                        {slot}
                      </button>

                    ))}

                  </div>

                  {errors.time && (
                    <p className="text-red-400 text-[0.85rem] mt-[8px]">
                      {errors.time}
                    </p>
                  )}

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-white font-[500] mb-[12px]">
                    Project Details
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals..."
                    className="
                      w-full

                      bg-black/50

                      border border-white/[0.06]

                      px-[22px]
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

                  <label className="flex items-start gap-[12px]">

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
                        href="/terms"
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
                          text-[#ffff]
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
                    mt-[10px]

                    h-[64px]

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
                    ? "Scheduling..."
                    : "Schedule Appointment"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StartProject;