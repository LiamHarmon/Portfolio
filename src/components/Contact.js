import React from 'react';

function Contact() {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" style={{ margin: '10px', padding: '5px' }} />
        <input type="email" placeholder="Your Email" style={{ margin: '10px', padding: '5px' }} />
        <textarea placeholder="Your Message" style={{ margin: '10px', padding: '5px' }} />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
