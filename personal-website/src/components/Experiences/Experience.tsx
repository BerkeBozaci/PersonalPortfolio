import React from "react";
import "./Experience.css";

type Props = {
  title: string;
  date: string;
  description: string;
};

function Experience({ title, date, description }: Props) {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <div className="exp-date">
        <p>{date}</p>
      </div>
      <div className="exp-descrip">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Experience;
