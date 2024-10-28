
import "./contact.css";

import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h1 className="page-name">Contact Us</h1>

          <div className="contact">

            <div className="contact-box">
              <div className="heading">
                <h1>Contact Information</h1>
                <p>Say something to start a live chart</p>
              </div>

               <div className="contact-info">
                  <div>
                    <FaPhoneVolume />
                    <p>035555555</p>
                  </div>
                  
                  <div>
                    <MdOutlineMail />
                    <p>info@alnoorstarlethotel.com</p>
                  </div>
                  
                  <div>
                    <IoLocationOutline/>
                    <p>Near Global filling Station (411 Airport Road Skardu)</p>
                  </div>

                  <div className="circle">
                    <div className="circle-1"></div>
                    <div className="circle-2"> </div>
                  </div>

                <div className="media-div">
                    <FaWhatsapp/>
                    <FaInstagram/>
                    <FaFacebookF/>
                </div>
               </div>

            </div>

            <div className="contact-form">
              <form>
                <div className="user-info">
                  <div>
                    <label>First name</label>
                    <input required></input>
                  </div>

                  <div>
                    <label>Last name</label>
                    <input required></input>
                  </div>

                  <div>
                    <label required>Email</label>
                    <input></input>
                  </div>

                  <div>
                    <label required>Phone number</label>
                    <input></input>
                  </div>
                </div>
                
                <div className="message-types">
                  <label>Select Subject?</label>
                  <div required>
                    <input type="radio"></input><label >General Inquiry</label>
                    <input type="radio"></input><label>Booking</label>
                    <input type="radio"></input><label >Complain</label>
                    <input type="radio"></input><label>Other</label>
                  </div>
                </div>

                <div className="message">
                  <label>Message</label>
                  <div contentEditable='true' className="textarea" placeholder="Write Your messages"></div>
                </div>
                  <button>Send Message</button>
              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact
