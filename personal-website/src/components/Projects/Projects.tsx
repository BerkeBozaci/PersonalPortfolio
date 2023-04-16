import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel as ReactCarousel } from "react-responsive-carousel";

import "./Projects.css";

import project1 from "./projectImg/Project1.png";
import project2 from "./projectImg/Project2.png";
import project3 from "./projectImg/Project3.png";

const slides = [
  {
    title: "IOS App Project",
    subtitle: "Qatar 2022 World Cup Guessing Game",
    description:
      "In the game based on guessing, which has a database exactly the same as the real world cup data, the one who reaches the prediction with a realistic result wins the highest score. Are you interested in too?",
    control: <button>Code</button>,
    image: project1,
  },
  {
    title: "Microsoft Summer Internship Project",
    subtitle: "Employee Tracking Interface",
    description:
      "This web app, which is connected to the company's employee database, was established to obtain information about the employees of their superiors. With this web app, it can see the competencies of the employees and can define courses for them to acquire new competencies. They can also observe the progress of the courses by visiting the roadmap defined through the same system.",
    control: <button>Code</button>,
    image: project2,
  },
  {
    title: "Undergraduate Java GUI Project",
    subtitle: "My very first project",
    description: "Designing and coding restaurant menu using Java GUI.",
    control: <button>Code</button>,
    image: project3,
  },
];

const Carousel = () => (
  <div className="p-div">
    <div className="p-title">
      <h1>My Projects</h1>
    </div>
    <div className="card">
      <ReactCarousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
      >
        {slides.map((slide) => (
          <div className="p-info" key={slide.title}>
            <div className="image-wrapper">
              <img src={slide.image} />
            </div>
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <p>{slide.description}</p>
            <div className="p-info-button">{slide.control}</div>
          </div>
        ))}
      </ReactCarousel>
    </div>
  </div>
);

export default Carousel;
