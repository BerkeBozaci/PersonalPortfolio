import React from "react";
import Experience from "./Experience";

function Experiences() {
  const experiences = [
    {
      title: "Intern, Microsoft Cloud Solution Architect And Junior Developer",
      description:
        "I designed and coded web app using Microsoft Azure web app and virtual machine services and relational database with PostgreSQL.",
      date: "Summer-2022",
    },
    {
      title: "Intern, IBM Technology Center Specialist",
      description:
        "I did installation and configuration of Intercom Systems during my internship.",
      date: "Summer-2017",
    },
  ];

  return (
    <div className="experience-div">
      <h1>My Experiences</h1>
      <div className="experiences">
        {experiences.map((experience) => (
          <Experience
            key={experience.title}
            title={experience.title}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
