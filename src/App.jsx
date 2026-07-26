import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PassionBanner from "./components/PassionBanner";
import ProjectsGallery from "./components/ProjectsGallery";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <PassionBanner />
      <ProjectsGallery />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
