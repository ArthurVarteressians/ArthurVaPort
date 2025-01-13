import React from "react";
import { useForm, ValidationError } from "@formspree/react";

// Import social media images
import GitHubImage from "../assets/MainGithub.webp"; // Change the path as needed
import LinkedInImage from "../assets/MainLinkedin.webp";
import LogoImage from "../assets/logo.webp"; // Your logo image

import "./Form.css"; // Import custom styling

function ContactForm() {
  const [state, handleSubmit] = useForm("mgegejqo");
  if (state.succeeded) {
    return (
      <p className="success-message">
        Thank you for your message! I'll get back to you soon.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>

      {/* Full Name Field */}
      <label htmlFor="full-name">Full Name</label>
      <input
        id="full-name"
        type="text"
        name="full-name"
        placeholder="Enter your full name"
        required
      />
      <ValidationError
        prefix="Full Name"
        field="full-name"
        errors={state.errors}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}

function SocialMediaSection() {
  return (
    <div className="social-media-section">
      <h1>Connect With Me</h1>
      <div className="floating-icons">
        <a
          href="https://github.com/ArthurVarteressians"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src={GitHubImage} alt="GitHub" className="floating-effect" />
        </a>
        <a
          href="https://www.linkedin.com/in/arthurvarteressians/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src={LinkedInImage} alt="LinkedIn" className="floating-effect" />
        </a>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <SocialMediaSection />
        <div id="contact-form-section">
          <ContactForm />
        </div>
        <img src={LogoImage} alt="Logo" className="w-[120px] mt-5 h-[60px]" />
      </div>
      <div></div>
    </div>
  );
}

export default Form;
