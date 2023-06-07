import { useRef } from 'react';
import HeroSection from '../components/autosistant/HeroSection';
import ToolSection from '../components/autosistant/ToolSection';
import ProductSection from '../components/autosistant/ProductSection';
import AboutSection from '../components/autosistant/AboutSection';
import FooterSection from '../components/autosistant/FooterSection';

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const productSectionRef = useRef<HTMLDivElement>(null);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProductSection = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection
        scrollToAboutSection={scrollToAboutSection}
        scrollToProductSection={scrollToProductSection}
      />
      <ToolSection />
      <ProductSection productRef={productSectionRef} />
      <AboutSection aboutRef={aboutSectionRef} />
      <FooterSection
        scrollToAboutSection={scrollToAboutSection}
        scrollToProductSection={scrollToProductSection}
      />
    </>
  );
};

export default Home;
