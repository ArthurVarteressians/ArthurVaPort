import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mgegejqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Formspree response:", data);
        toast.success("Thanks for submitting!");
      } else {
        console.error("Formspree error:", data);
        toast.error("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        onSubmit={handleSubmit}
        className="max-w-md p-8 rounded-2xl shadow-md bg-gray-900"
        style={{
          width: "90%",
          margin: "auto",
          border: "1px solid #444",
        }}
      >
        <h2 className="text-center text-gray-100 text-2xl font-bold mb-6">Contact Us</h2>
        <div className="mb-4">
          <label
            htmlFor="full-name"
            className="block text-gray-300 font-medium text-lg"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none bg-gray-800 placeholder-gray-400 text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-gray-300 font-medium text-lg"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none bg-gray-800 placeholder-gray-400 text-gray-200"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-300 font-medium text-lg"
          >
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Enter your message here"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none bg-gray-800 placeholder-gray-400 text-gray-200"
          ></textarea>
        </div>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-md font-bold text-lg transition-transform transform shadow-lg ${
            isFormValid
              ? "bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-white hover:scale-105"
              : "bg-gray-800 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
