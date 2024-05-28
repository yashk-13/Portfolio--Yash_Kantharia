import "../Styles.css";
// import Header from "./Header";
import { Element } from "react-scroll";

const About = () => {
  const projects = [
    {
      title: "Abstract Generator",
      year: 2023,
      description:
        "(University) A Web App that uses NLP for text Abstraction using Python Flask & Spacy Library along with Tailwindcss .",
    },
    {
      title: "Elite Dental Care",
      year: 2022,
      description:
        "(University) The website created to encourage the awareness of oral health and disease for adults and children. Made by html5, Css3, Bootstrap and JavaScript.",
    },
    {
      title: "Food Delivery App",
      year: 2023,
      description:
        "(Personal) This React Native Application is been created by using Expo CLI , Sanity.io, Tailwindcss, Redux Toolkit.",
    },
    {
      title: "Hackathon Project",
      year: 2024,
      description:
        "(Personal) Fullstack Responsive MERN Website social hub with Auth, Likes, Dark Mode and awareness to stray animals and their help platform along with pet shop and donations. ",
    },
    {
      title: "Horizon Pathology",
      year: 2023,
      description:
        "(University) A Pathology website with data management of customers. And number of tests. Made by html5, Css3,Bootstrap,php MySql,JavaScript ",
    },
  ];

  return (
    <Element name="about">
      {/* <Header/> */}
      <div className="about text-white bg-auto bg-no-repeat bg-center">
        <h2 className=" p-4 cursive">About me</h2>
        <p className="p-4 text-xl ">
          Hello! I’m Yash Kantharia, a passionate developer with a love for
          turning ideas into digital realities.
        </p>
        <p className="p-4 text-xl ">
          With a solid foundation in Web Development, I specialize in Front-end
          & Back-end Development. My goal is to create visually appealing
          designs that are responsive across all platforms.
        </p>
        <h2 className="p-4 text-xl">My Recent Projects </h2>
        {projects.map((project, index) => (
          <div className="projects p-4" key={index}>
            <h2>{project.title}</h2>
            <h3 className="projects_para">{project.year}</h3>
            <p className="projects_para ">{project.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default About;
