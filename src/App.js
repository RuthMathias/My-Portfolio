import About from "./About";
import "./App.css";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";


function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
