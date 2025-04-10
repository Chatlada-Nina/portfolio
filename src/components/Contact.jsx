import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
    setLoading(true);

    emailjs
      .send(
        "service_1rjoeow",     // Replace with your actual service ID
        "template_235oujs",    // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "zZcUAgg3FDZoSwFMH"       // Replace with your public key
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
              type="text"
              name="name"
              required
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
              type="email"
              name="email"
              required
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
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#6b8677a0] rounded-lg focus:outline-none focus:border-[#4c6e5b]"
              placeholder="Write your message here..."
            ></textarea>
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
