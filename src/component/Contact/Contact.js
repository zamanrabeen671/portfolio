import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import emailjs from 'emailjs-com';
import './Contact.css'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_s7xav9n', e.target, 'user_ZXw6UD8wDQcLkIJYv2nQ3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto pt-5">
                <h3 className="brand-color d-flex justify-content-center mb-5">Get In Touch</h3>
                <form onSubmit={handleSubmit}>
                    <div className=" contact-container mx-auto" >
                        <div class="mb-3 mx-auto">
                            <input type="text" class="form-control" name="name" placeholder="name" />
                        </div>
                        <div class="mb-3 mx-auto">
                            <input type="email" class="form-control" name="email" placeholder="email" />
                        </div>
                        <div class="mb-3 mx-auto">
                            <input type="text" class="form-control" name="subject" placeholder="subject" />
                        </div>
                        <div class="mb-3 mx-auto">
                            <textarea name="message" placeholder="your message" style={{width: '100%'}} rows="5"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary mx-auto">send message</button>
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;