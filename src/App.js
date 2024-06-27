import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from './components/About/about';
import Skills from "./components/Skills/skills";
import Certificate from './components/Certificate/certificate';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
