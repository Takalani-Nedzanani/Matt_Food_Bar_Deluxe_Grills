//import React from 'react';
//import './Contact.css';

/*
const Contact = () => (
<section id="contact" className="contact">
    <h2>Contact Us</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;*/


// src/pages/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_3nzsrle',     // Replace with your EmailJS service ID
        'template_l22fbsl',     // Replace with your EmailJS template ID
        formData,               // Form data to be sent
        'L7u-8iYUT3bX8IK5N'          // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Thank you! Your message has been sent.');
        },
        (error) => {
          console.log('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        }
      );

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <br/>
      <h2>Contact Us</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

