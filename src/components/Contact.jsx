import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

/** Limits abuse-sized payloads; aligns with HTML maxLength on fields. */
const FIELD_LIMITS = {
  name: 80,
  email: 254,
  message: 2000,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Use Contact Notification (to you), NOT Auto-Reply (template_235oujs).
    // In EmailJS: open template_suzc9mx → Auto-Reply tab → link template_235oujs.
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      name,
      title: `Portfolio message from ${name.slice(0, 60)}`,
    };

    emailjs
      .send(
        "service_1rjoeow",
        "template_suzc9mx",
        templateParams,
        "zZcUAgg3FDZoSwFMH"
      )
      .then(() => {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-[#EDF4F2] py-16 px-6">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#31473A] mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-[#4c6e5b] mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              maxLength={FIELD_LIMITS.name}
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#6b8677a0] rounded-lg focus:outline-none focus:border-[#4c6e5b]"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-[#4c6e5b] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              maxLength={FIELD_LIMITS.email}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#6b8677a0] rounded-lg focus:outline-none focus:border-[#4c6e5b]"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-semibold text-[#4c6e5b] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              maxLength={FIELD_LIMITS.message}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#6b8677a0] rounded-lg focus:outline-none focus:border-[#4c6e5b]"
              placeholder="Write your message here..."
            />
            <p className="text-xs text-[#6b8677] mt-1 text-right" aria-live="polite">
              {formData.message.length}/{FIELD_LIMITS.message}
            </p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`text-white bg-[#31473A] hover:bg-[#4c6e5b] px-6 py-2 border-b-4 border-[#7C8363] hover:border-[#8f9c5f] rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact
