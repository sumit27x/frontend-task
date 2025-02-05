import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Foundation from './Components/Foundation/Foundation';
import About from './Components/About/About';
import ESG from './Components/ESG/ESG';

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <About/>
      <Foundation/>
      <ESG/>
      <Footer/>
    </div>
  );
}

export default App;
