import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
const SubmitPortfolio = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    bio: "",
    portfolioUrl: "",
    socialLinks: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // AUTO SCROLL TO ERROR
  const scrollToError = (fieldName) => {
    const element = document.querySelector(`[name="${fieldName}"]`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      element.focus();
    }
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    // FULL NAME
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName =
        "Name should only contain alphabets";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must be exactly 10 digits";
    }

    // TITLE
    if (!formData.title.trim()) {
      newErrors.title = "Portfolio title is required";
    }

    // BIO
    if (!formData.bio.trim()) {
      newErrors.bio = "Short bio is required";
    }

    // PORTFOLIO URL
    if (!formData.portfolioUrl.trim()) {
      newErrors.portfolioUrl = "Portfolio URL is required";
    }

    // SOCIAL LINKS
    if (!formData.socialLinks.trim()) {
      newErrors.socialLinks = "Social link is required";
    }

    // TERMS
    if (!formData.agree) {
      newErrors.agree =
        "You must accept terms & conditions";
    }

    setErrors(newErrors);

    // AUTO SCROLL
    if (Object.keys(newErrors).length > 0) {
      scrollToError(Object.keys(newErrors)[0]);
    }

    return Object.keys(newErrors).length === 0;
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // NAME FIELD
    if (name === "fullName") {
      const filteredValue = value.replace(
        /[^A-Za-z\s]/g,
        ""
      );

      setFormData((prev) => ({
        ...prev,
        fullName: filteredValue,
      }));

      return;
    }

    // PHONE FIELD
    if (name === "phone") {
      const filteredValue = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: filteredValue,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : value,
    }));
  };

  // HANDLE SUBMIT
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  if (isSubmitting) return;

  try {
    setIsSubmitting(true);

    // SEND DATA TO GOOGLE SHEET
    await fetch("https://script.google.com/macros/s/AKfycbyg9O_FHAsUY0qgL2v0CViLQWc9g9Jxq_fMICEYqaNOH6VxqmtVG0GWKAeZIIRZUgm1Rw/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // RESET FORM
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      title: "",
      bio: "",
      portfolioUrl: "",
      socialLinks: "",
      agree: false,
    });

    setErrors({});

    // NAVIGATE TO MESSAGE PAGE
    navigate("/message");

  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="min-h-screen bg-black text-white pt-[160px] pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* HEADING */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-semibold mb-4">
            Submit Your Portfolio
          </h1>

          <p className="text-white/60">
            Share your best creative work with us.
          </p>
        </div>

    
        <form
          onSubmit={handleSubmit}
          className="
            space-y-6
            bg-white/[0.03]
            border border-white/10
            rounded-3xl
            p-8
            backdrop-blur-xl
          "
        >
          {/* FORM HEADER */}
<div
  className="
    pb-8
    mb-2
    border-b border-white/[0.08]
  "
>

  <div className="flex items-center justify-between gap-6 flex-wrap">

    {/* LEFT */}
    <div>

      <p
        className="
          text-[11px]
          uppercase
          tracking-[5px]
          text-white/35
          mb-3
        "
      >
        Submission Fee
      </p>

      <div className="flex items-end gap-2">

        <h3
          className="
            text-[2.6rem]
            sm:text-[3rem]
            leading-none
            tracking-[-2px]
            font-[700]
            text-white
          "
        >
          ₹999
        </h3>

        <span
          className="
            text-white/40
            text-[0.95rem]
            mb-[4px]
          "
        >
          + GST
        </span>

      </div>

    </div>

    {/* RIGHT */}
    <div
      className="
        px-5
        py-3

        rounded-full

        border border-white/[0.08]

        bg-white/[0.03]

        text-white/50
        text-[0.85rem]

        whitespace-nowrap
      "
    >
      Reviewed by CC Media™ Team
    </div>

  </div>

</div>

          {/* FULL NAME */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
              "
            />

            {errors.fullName && (
              <p className="text-red-400 text-sm mt-2">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
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
                h-14
                px-5
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
              "
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
              "
            />

            {errors.phone && (
              <p className="text-red-400 text-sm mt-2">
                {errors.phone}
              </p>
            )}
          </div>

          {/* PORTFOLIO TITLE */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Portfolio Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter portfolio title"
              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
              "
            />

            {errors.title && (
              <p className="text-red-400 text-sm mt-2">
                {errors.title}
              </p>
            )}
          </div>

          {/* BIO */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Short Bio / Description
            </label>

            <textarea
              rows="5"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write something about your work..."
              className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
                resize-none
              "
            />

            {errors.bio && (
              <p className="text-red-400 text-sm mt-2">
                {errors.bio}
              </p>
            )}
          </div>

          {/* PORTFOLIO URL */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Portfolio URL
            </label>

            <input
              type="url"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
              "
            />

            {errors.portfolioUrl && (
              <p className="text-red-400 text-sm mt-2">
                {errors.portfolioUrl}
              </p>
            )}
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Social Links
            </label>

            <input
              type="text"
              name="socialLinks"
              value={formData.socialLinks}
              onChange={handleChange}
              placeholder="Instagram / Behance / Website"
              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-black
                border border-white/10
                outline-none
                focus:border-white/30
              "
            />

            {errors.socialLinks && (
              <p className="text-red-400 text-sm mt-2">
                {errors.socialLinks}
              </p>
            )}
          </div>

          {/* TERMS */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />

             <span className="text-sm text-white/70 leading-[1.8]">
  I agree to the{" "}

  <Link
    to="/terms"
    className="
      text-white
      underline
      hover:text-white/70
      transition-all
    "
  >
    Terms & Conditions
  </Link>

  {" "}and{" "}

  <Link
    to="/privacy-policy"
    className="
      text-white
      underline
      hover:text-white/70
      transition-all
    "
  >
    Privacy Policy
  </Link>.
</span>
            </label>

            {errors.agree && (
              <p className="text-red-400 text-sm mt-2">
                {errors.agree}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              h-14
              rounded-full
              bg-white
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.01]
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Portfolio"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitPortfolio;