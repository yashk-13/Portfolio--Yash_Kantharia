// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import About from "./Components/About.jsx"
// import Contact from "./Components/Contact.jsx"
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" component={<App />} />  
//     <Route path="/about" component={<About />} />  
//     <Route path="/contact" component={<Contact/>} />  
//     </Routes>
//     {/* <App /> */}
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
