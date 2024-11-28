import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";

const MyResume: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="resume bg-primary text-seccondary min-h-screen">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center px-6 sm:px-12 py-8 sm:py-16 mb-4">My Resume</h2>

      {/* Introduction Section */}
      <div className="bg-seccondary text-primary px-6 sm:px-12 py-8 sm:py-16">
        <div className="intro grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="image mx-auto md:mx-0">
            <img src="/img.png" alt="Profile" className="w-48 sm:w-64 rounded-full" />
          </div>
          <div className="link flex flex-col justify-between text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Enggar Dyah <br /> Bintang Ayuna
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/17sM4xS1xohAzWrwANbnwk9d8tnJoYh9P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-seccondary px-4 py-2 rounded-full hover:bg-opacity-90 font-bold"
              >
                See Resume
              </a>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:opacity-70 font-bold" onClick={handleBackToHome}>
                Back to Home
              </button>
            </div>
          </div>
          <div className="sosial-media flex flex-col space-y-3 text-center md:text-left">
            <p className="text-lg sm:text-xl">
              <FontAwesomeIcon icon={faHouse} /> Bekasi, Jawa Barat
            </p>
            <p className="text-lg sm:text-xl">
              <a href="mailto:enggardyah57@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> enggardyah57@gmail.com
              </a>
            </p>
            <p className="text-lg sm:text-xl">
              <FontAwesomeIcon icon={faLinkedin} />{" "}
              <a href="https://linkedin.com/in/enggar-dyah-bintang/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/enggar-dyah-bintang/
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about px-6 sm:px-12 py-8 sm:py-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Me</h3>
        <p className="text-justify">
          Hello, my name is Enggar Dyah Bintang Ayuna. I am a student of Information Systems at the Faculty of Engineering and Informatics at Bina Sarana Informatika University. I have a strong interest in UI/UX Design, and I am always
          looking for opportunities to enhance my skills in this field. I am excited to learn and grow in this industry.
        </p>
      </div>

      {/* Experiences Section */}
      <div className="experiences px-6  sm:my-4 sm:px-12 md:-mt-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Experiences</h3>
        <div className="experience-item mb-6">
          <h4 className="text-xl font-semibold">Content Creator | Edmuku</h4>
          <p>Sep 2021 - Dec 2021</p>
          <ul className="list-disc pl-6">
            <li>Planned and scheduled content with a structured agenda</li>
            <li>Designed engaging microblogs for Instagram feeds with creative layouts</li>
            <li>Prepared a comprehensive business proposal for the final project</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4 className="text-xl font-semibold">Front-End Website Developer | Productzilla Academy</h4>
          <p>Sep 2024 - Dec 2024</p>
          <ul className="list-disc pl-6">
            <li>Designed website flows, wireframes, and high-fidelity designs</li>
            <li>Developed admin and user pages with interactive and user-friendly designs</li>
            <li>Optimized responsive designs for both desktop and mobile devices</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="education px-6 sm:px-12 py-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Education</h3>
        <p>
          <strong>Bina Sarana Informatika University</strong> | Information Systems
        </p>
        <p>Sep 2022 - Current</p>
      </div>

      {/* Skills Section */}
      <div className="skills px-6 sm:px-12 py-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold">Hard Skills</h4>
            <ul className="list-disc pl-6">
              <li>Mobile and Web Design</li>
              <li>UI Design</li>
              <li>UX Research Basic</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Soft Skills</h4>
            <ul className="list-disc pl-6">
              <li>Design Thinking</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 px-6 sm:px-12">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-center">Let's Connect</h3>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <a href="#" className="text-3xl sm:text-4xl text-seccondary hover:text-opacity-70">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-3xl sm:text-4xl text-seccondary hover:text-opacity-70">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-3xl sm:text-4xl text-seccondary hover:text-opacity-70">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
        <p className="p-6 sm:p-12 text-center text-sm sm:text-md">&copy; 2024 Enggar Dyah Bintang Ayuna. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MyResume;
