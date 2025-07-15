import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Commenting out other sections to focus on the hero like the template */}
      {/* <About />
      <Services />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Index;
