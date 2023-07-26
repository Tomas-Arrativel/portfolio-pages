import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className='main__contact section__padding' id='contact'>
      <h2>Contact Us</h2>

      <div className='main__contact-form'>
        <img src='img/contactimg.png' alt='Image of contact section' />
        <form>
          <input type='text' placeholder='First Name' required />
          <input type='text' placeholder='Last Name' required />
          <textarea placeholder='Your message here' required></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
