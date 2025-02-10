import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Foundation from "./Components/Foundation/Foundation";
import About from "./Components/About/About";
import ESG from "./Components/ESG/ESG";
import Business from "./Components/Business/Business";
import Technology from "./Components/Technology/Technology";
import Launches from "./Components/Launches/Launches";
import Financial from "./Components/Financial/Financial";
import Experiences from "./Components/Experiences/Experiences";
import Marketing from "./Components/Marketing/Marketing";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Foundation />
      <Experiences/>
      <Marketing/>
      <ESG />
      <Launches />
      <Technology />
      <Financial/>
      <Business />
      <Footer />
    </div>
  );
}

export default App;
