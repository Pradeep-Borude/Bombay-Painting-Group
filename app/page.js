import AboutUs from './components/AboutUs';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/services';
import Process from './components/process';
import Clients from './components/clients';
import Faqs from './components/faqs';
import Reachout from './components/reachout';
import Footer from './components/Footer';


export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <AboutUs />
    <Services />
    <FeaturedProjects />
    <Process />
    <Clients />
    <Faqs />
    <Reachout/>
    <Footer/>

  </>
  );
}
