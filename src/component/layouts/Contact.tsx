import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <div className="resume bg-primary text-seccondary py-16 px-4 sm:px-8 md:px-20 flex justify-center items-center" id="contact">
      <div className="text-center max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to start a great project together?</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-5 sm:px-12 md:px-20">Let's collaborate and bring this extraordinary project to life, combining creative ideas and positive energy to achieve remarkable goals together!</p>
        <a
          href="mailto:enggardyah57@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-seccondary text-white px-6 py-3 rounded-full hover:opacity-70 font-bold mx-2">Contact Me</button>
        </a>

       
      </div>
    </div>
  );
};

export default Contact;
