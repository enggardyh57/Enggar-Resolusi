import React from "react";
import ProjectList from "../fragments/Project/ProjectList";
import Heading from "../fragments/Project/Heading";

const Project: React.FC = () => {
  const handleSeeDesign = (projectId: string) => {
    const projectLinks: { [key: string]: string } = {
      "creople-edu": "https://drive.google.com/file/d/1md2pVLJ1zGb_9pUdV9-cA8hJ-loxasJY/view",
      cumu: "https://medium.com/@enggardyah57/case-study-curhat-untukmu-app-18558bdb719a",
      "gala-nexus": "https://medium.com/@enggardyah57/ui-ux-case-study-design-of-gala-nexus-app-0c40fd2c5efa",
      stayhub: "https://drive.google.com/file/d/10DxPhg9GSJv7feJZl6HJ0W4e_4vsPH25/view?usp=sharing", 
    };

    window.open(projectLinks[projectId], "_blank");
  };

  const projects = [
    {
      id: "creople-edu",
      imageSrc: "/1.png",
      imageAlt: "Project 1",
      title: "Creople Edu  (Creative People Education)",
      description: "Creople Edu is an online learning platform that offers a variety of hard and soft skills courses, complete with video materials, and awards certificates upon successful course completion.",
    },
    {
      id: "cumu",
      imageSrc: "/2.png",
      imageAlt: "Project 2",
      title: "Cumu (Curhat Untukmu)",
      description: "Cumu is a counseling service application that offers various services such as video calls, hanging out together, and conversations with experts in their fields who have excellent communication skills.",
    },
    {
      id: "gala-nexus",
      imageSrc: "/3.png",
      imageAlt: "Project 3",
      title: "Gala Nexus (Concert Ticket App)",
      description: "Gala Nexus is an online concert ticket booking application that simplifies the ticket purchasing process, featuring a search function and easy payment options for users.",
    },
    {
      id: "stayhub",
      imageSrc: "/4.png",
      imageAlt: "Project 4",
      title: "Stayhub (Boarding House Management Website)",
      description: "StayHub is a boarding house rental website that simplifies room booking, featuring room selection, billing information, complaint submissions, and easy payment options for tenants.",
    },
  ];

  return (
    <div className="projectsection bg-seccondary py-20" id="projects">
      <div className="project max-w-4xl mx-auto">
        <Heading level={2} className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
          Projects
        </Heading>
        <Heading level={3} className="text-xl text-center sm:text-xl md:text-2xl mb-4 opacity-70 text-primary">
          Case Study
        </Heading>
        <ProjectList projects={projects} onSeeDetails={handleSeeDesign} />
      </div>
    </div>
  );
};

export default Project;
