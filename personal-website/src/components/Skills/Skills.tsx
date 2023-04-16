import React from "react";
import Skill from "./Skill/Skill";
import Azure from "./Skill/icons/azure.png";
import Bootstrap from "./Skill/icons/bootstrap.png";
import C from "./Skill/icons/c.png";
import Css from "./Skill/icons/css.png";
import Db from "./Skill/icons/database-storage.png";
import Django from "./Skill/icons/django.png";
import Docker from "./Skill/icons/docker.png";
import Express from "./Skill/icons/express-js.png";
import Figma from "./Skill/icons/figma.png";
import GoogleCloud from "./Skill/icons/google-cloud.png";
import Html from "./Skill/icons/html.png";
import Java from "./Skill/icons/java.png";
import JavaScript from "./Skill/icons/javascript.png";
import Postgres from "./Skill/icons/postgres.png";
import ReactIcon from "./Skill/icons/react.png";
import Swift from "./Skill/icons/swift.png";
import TypeScript from "./Skill/icons/typescript.png";
import Python from "./Skill/icons/python.png";

function Skills() {
  const skills = [
    {
      title: "Python",
      icon: Python,
      progress: 70,
    },
    { title: "Django", icon: Django, progress: 70 },
    { title: "JavaScript", icon: JavaScript, progress: 80 },

    { title: "TypeScript", icon: TypeScript, progress: 80 },
    { title: "Express JS", icon: Express, progress: 80 },
    { title: "Figma", icon: Figma, progress: 70 },

    { title: "HTML", icon: Html, progress: 80 },
    { title: "CSS", icon: Css, progress: 60 },
    { title: "Bootstrap", icon: Bootstrap, progress: 90 },

    { title: "React", icon: ReactIcon, progress: 70 },
    { title: "Swift", icon: Swift, progress: 80 },
    { title: "Java", icon: Java, progress: 70 },

    { title: "C", icon: C, progress: 60 },
    { title: "Azure", icon: Azure, progress: 80 },
    { title: "Google Cloud", icon: GoogleCloud, progress: 60 },

    { title: "Docker", icon: Docker, progress: 70 },
    { title: "PostgreSQL", icon: Postgres, progress: 60 },
    { title: "MongoDB", icon: Db, progress: 70 },
  ];

  return (
    <div className="s-div">
      <h1>Skills</h1>
      <div className="skills">
        {skills.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            progress={skill.progress}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
