import { Element } from "react-scroll";
import "../Styles.css";
import Three from "./Three";

const Portfolio = () => {
  return (
    <Element name="portfolio">
       
      <div className="portfolio bg-auto bg-no-repeat bg-center rounded-xl m-6 ">
        <h1 className="h-screen text-center sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold flex flex-col digital  justify-center items-center ">
          CREATING A  DIGITAL WORLD.
        </h1>
      </div>

        <h1 className="m-4 text-white text-4xl font-extrabold">Skills :</h1>
        <Three />  
    </Element>
  );
};

export default Portfolio;
