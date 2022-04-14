import React from 'react';
import './Contact.css';
import contactImg from "./img/contact.png"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
            <div className="col__2">
              <img src={contactImg} alt="" className="contact__img" />
            </div>
                  <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available to work on your projects and bring your ideas to life. I am just a click away. </p>
                           <p className="hire__text white">Connect with me via phone:<strong> +234 803 496 8044</strong> </p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact number" placeholder="Phone Number" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                  
                          <button className="btn contact pointer" type="submit">Submit</button>
                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
