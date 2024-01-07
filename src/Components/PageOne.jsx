
import "../Styles.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

import { Suspense } from 'react'



const PageOne = () => {
  return (
    <Suspense fallback={null} >

    
    <div className="purple" style={{ backgroundColor: "#C77DFF" }}>
      <div className="h-screen text-center sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold flex justify-center items-center">
        <h2 className="cursive">Yash </h2>
        <h2 className="cursive">Kantharia</h2>
       </div>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
 
    </Suspense>
  );
};

export default PageOne;
