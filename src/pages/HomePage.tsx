import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { BlogSection } from '../components/BlogSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { SECTION_ANIMATION } from '../constants/animations';
import { useMemo } from 'react';
import { useNewsletter } from '../hooks/useNewsletter';
import { SEOHead } from '../components/SEOHead';

export default function HomePage() {
  const { email, setEmail, handleSubmit, isLoading } = useNewsletter();

  // Memoize Footer props to prevent unnecessary re-renders
  const footerProps = useMemo(() => ({
    onNewsletterSubmit: handleSubmit,
    email,
    setEmail,
    isLoading,
  }), [email, handleSubmit, setEmail, isLoading]);

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <SEOHead 
        title="Eduardo Pires | Produto & Estratégia"
        description="Transformo problemas de negócio em decisões de produto. Especialista em conectar estratégia, viabilidade técnica e impacto real."
        type="website"
        tags={['produto', 'estratégia', 'product management', 'tech', 'fintech']}
      />
      <motion.div {...SECTION_ANIMATION}>
        <HeroSection />
      </motion.div>
      
      <motion.div {...SECTION_ANIMATION}>
        <AboutSection />
      </motion.div>
      
      <motion.div {...SECTION_ANIMATION}>
        <ServicesSection />
      </motion.div>
      
      <motion.div {...SECTION_ANIMATION}>
        <PortfolioSection />
      </motion.div>
      
      <motion.div {...SECTION_ANIMATION}>
        <BlogSection />
      </motion.div>
      
      <motion.div {...SECTION_ANIMATION}>
        <ContactSection />
      </motion.div>
      
      <Footer {...footerProps} />
    </div>
  );
}