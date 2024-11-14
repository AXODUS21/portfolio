import React from "react";
import emailjs from "emailjs-com";
import Socials from "../components/Socials";
import "../css/contacts.css";

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Use emailjs.sendForm to send form data
    emailjs
      .sendForm(
        "service_ku1izci",
        "template_ckg3wjc",
        e.target,
        "uxaAI4S7MQmMP0o5O"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Error sending email: " + error.text);
        }
      );
    // Optionally reset the form
    e.target.reset();
  };

  return (
    <div className="gap-5 relative h-[40svh]">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[13svw] z-[-99]">
        CONTACTS
      </h1>
      <div className="flex justify-center gap-10 px-10 py-14 form-bg">
        <div className="flex items-center socials">
          <Socials />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="grid gap-10 pr-6">
            <input
              className="rounded-md py-2 px-3 sm:w-auto w-40"
              type="email"
              name="email" // Add 'name' attribute for emailjs to recognize
              placeholder="Email..."
              required
            />
            <textarea
              className="rounded-md py-2 px-3 sm:w-auto w-40"
              name="message" // Add 'name' attribute for emailjs to recognize
              placeholder="Your Message..."
              minLength={30}
              required
            />
            <button type="submit" className="btn-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
