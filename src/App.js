import './App.css';
import './globals.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
