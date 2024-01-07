

// import { Outlet, Link } from "react-router-dom";

// function Header() {
//   return (
//     <div className="flex justify-between p-2 flex-row bg-inherit">
//       <li className="list-none p-1">
//         <Link to="/">Home</Link>
//       </li>
//       <li className="list-none p-1">
//         <Link to="#about">About</Link>
//       </li>
//       <li className="list-none p-1">
//         <Link to="#contact">Contact</Link>
//       </li>

//       <Outlet />
//     </div>
//   );
// }

// export default Header;

import "../Styles.css";
import { Link ,Outlet} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <div className="headers flex justify-between p-2 flex-row bg-inherit ">
      <li className="list-none p-1 hover:underline decoration-4">
        <Link to="/">Home</Link>
      </li>
      <li className="list-none p-1 hover:underline decoration-4">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          About
        </ScrollLink>
      </li>
      <li className="list-none p-1 hover:underline decoration-4">
        <ScrollLink
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Portfolio
        </ScrollLink>
      </li>
      <li className="list-none p-1 hover:underline decoration-4">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Contact
        </ScrollLink>
      </li>

      <Outlet />
    </div>
  );
}

export default Header;
