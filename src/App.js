import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import "../../public/css/vendor/aos.css";
// import Footer from "./includes/footer";
// import Header from "./includes/header";
import About from "./pages/about";
import Skills from "./pages/skills";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Blogs from "./pages/blogs";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* <Header></Header>
      <Introduction></Introduction>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer> */}
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Portfolio></Portfolio>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
