import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        className="max-w-md p-8 rounded-md shadow-md"
        style={{
          width: "80%",
          backgroundColor: "rgba(67, 116, 910, 0.1)",
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="full-name"
            className="block text-sm font-semibold text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
            style={{ fontSize: "0.7rem" }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-sm font-semibold text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
            style={{ fontSize: "0.7rem" }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-600"
          >
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
            style={{ fontSize: "0.7rem" }}
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
          className="bg-indigo-600 text-white py-2 px-4 rounded-full font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
