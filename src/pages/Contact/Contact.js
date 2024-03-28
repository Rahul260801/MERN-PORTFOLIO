import React from "react";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css"; // Import CSS file for styling
import { FaPhone,FaEnvelope } from "react-icons/fa"; // Import phone icon
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  // Define URLs for LinkedIn, Facebook, and GitHub profiles
  const linkedinURL = "https://www.linkedin.com/in/rahul-jha-0663b91bb/";
  const LeetCodeURL = "https://leetcode.com/rahul__26/";
  const githubURL = "https://github.com/Rahul260801";
  const phoneNumber = "76929225691";
  const email = "jayjha380@gmail.com";

   // Function to format phone number for use in the tel: link
   const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0 pink-background">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row justify-content-center mb-4"  >
                    <h6>
                      <a href={linkedinURL} target="_blank" rel="noopener noreferrer"no>
                        <BsLinkedin color="blue" size={30} className="ms-2" title="LinkedIn" /> 
                      </a>
                      <a href={githubURL} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a href={LeetCodeURL} target="_blank" rel="noopener noreferrer" title="LeetCode">
                        < SiLeetcode color="Black" size={30} className="ms-2" />
                      </a>
                      <a href={`tel:${formattedPhoneNumber}`} className="ms-2" title="Phone">
                        <FaPhone color="green" size={30} /> 
                      </a>
                      <a href={`mailto:${email}`} className="ms-2" title="Gmail">
                        <FaEnvelope color="red" size={30} />
                      </a>
                    </h6>
                  </div>
                </div>
              </Rotate>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line justify-content-center">
                  <LightSpeed>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyL9XhdN1UqoSpPFTAL_tqUShFHoV7OJDWI0mQqLenQ&s"
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;