import { Element } from "react-scroll";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Element
      name="contact"
      className="bg-slate-950 text-white text-3xl font-extrabold "
    >
      <div className="m-4 p-4">
        <h3 className="projects_para text-md">
          Like what you see? Trust me, there’s so much more! Click that button
          and let’s make something amazing together! Or perhaps you’re here to
          explore? Feel free to explore my array of services.
        </h3>
      </div>
      <div className="m-4 p-4">
        <h2>Connect</h2>
        <div className="connect flex lg:flex-row md:flex-row py-4 gap-4 items-center min-[320px]:flex-col ">
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href="https://www.linkedin.com/in/yash-kantharia-533103263/"
            className="hover:underline decoration-4  decoration-white"
          >
            LinkedIn
          </a>
          <FontAwesomeIcon icon={faGithubSquare} />
          <a
            href="https://github.com/yashk-13"
            className="hover:underline decoration-4  decoration-white"
          >
            Github
          </a>
        </div>
        <p className="projects_para text-md">
          Get a piece of the action and join the conversation. Don’t be
          shy—remember, the neurons that fire together, wire together.
        </p>
        <ContactForm />
      </div>
    </Element>
  );
};

export default Contact;
