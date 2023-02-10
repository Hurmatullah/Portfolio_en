import "./App.css";
import Footer from "./includes/footer";
import Header from "./includes/header";
import Experience from "./pages/experience";
import Introduction from "./pages/introduction";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

function App() {
  return (
    <div>
      <Header></Header>
      <Introduction></Introduction>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
