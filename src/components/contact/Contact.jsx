import React, { useRef } from 'react';
import './contact.css';
import { MdAttachEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';
import Footer from '../footer/Footer';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dewg8dl', 'template_483bj2w', form.current, 'VBlTHCwqx49MBIist')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact_options">
                    <article className="contact__option">
                        <MdAttachEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>kumarbhetwal25@gmail.com</h5>
                        <a href="mailto:kumarbhetwal25@gmail.com" rel="noopener noreferrer" target='_blank'>Click Here to Mail</a>
                    </article>

                    <article className="contact__option">
                        <BsMessenger />
                        <h4>Messenger</h4>
                        <h5>Coo Mar</h5>
                        <a href="https://m.me/kumarbhetwal25/" rel="noopener noreferrer" target='_blank'>Message Me</a>
                    </article>

                    <article className="contact__option">
                        <BsLinkedin />
                        <h4>LinkedIn</h4>
                        <h5>Kumar Chaudhary</h5>
                        <a href="https://www.linkedin.com/in/kumar-chaudhary-504126244/" rel="noopener noreferrer" target='_blank'>Visit</a>
                    </article>

                    <article className="contact__option">
                        <ImWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>Kumar Chaudhary</h5>
                        <a href="https://api.whatsapp.com/send?phone=+9779867872978" rel="noopener noreferrer" target='_blank'>Get in touch</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Enter your Email Address' required />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>

            <Footer />
        </section>
    );
}

export default Contact;
