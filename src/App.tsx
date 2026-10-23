import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import UpcomingTrip from './components/UpcomingTrip';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-brand-light text-text-main">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <UpcomingTrip />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
