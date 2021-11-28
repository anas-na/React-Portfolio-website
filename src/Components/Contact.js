import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import "../Stylings/contact.css";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xjvjbvzo");
  if (state.succeeded) {
      return <p className="successMassage">Thanks for reaching out.</p>;
  }
  return (
      <form onSubmit={handleSubmit} id="contact">
        <label htmlFor="name">
        Full Name:
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Full name"
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="subject">
        Subject:
      </label>
      <input
        id="subject"
        type="subject" 
        name="subject"
        placeholder="Subject"
      />
      <ValidationError 
        prefix="subject" 
        field="subject"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message:
      </label>
      <textarea
        rows="5"
        name="message"
        id="message"
        placeholder="Enter message here"
        required=""
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactMe;
