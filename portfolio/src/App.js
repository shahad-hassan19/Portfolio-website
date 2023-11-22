import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Education from './Components/Education'
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
