import { useState, useCallback, memo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import imgMarcaEpMartinsBranco1 from 'figma:asset/af828ae026f6107770b865bdd9a21988af3912b8.png';
import imgLogoMobile from 'figma:asset/3c97e927488bc929733cf4ce3e498875dd36bb88.png';

// Optimized: Memoized to prevent unnecessary re-renders
export const Navigation = memo(function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  // Detecção de scroll para destacar seção ativa
  useEffect(() => {
    // Só funciona na homepage
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'servicos', 'portfolio', 'blog', 'contato'];
      const scrollPosition = window.scrollY + 100; // Offset de 100px

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Chama uma vez ao montar
    handleScroll();

    // Adiciona listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const scrollToSection = useCallback((sectionId: string) => {
    // Se não estiver na homepage, navega primeiro para lá
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda um momento para a página carregar, então rola para a seção
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estiver na homepage, apenas rola para a seção
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  }, [location.pathname, navigate]);

  const handlePageNavigation = useCallback((path: string) => {
    // CRITICAL: Múltiplas camadas de scroll para garantia total
    
    // Camada 1: Scroll imediato síncrono
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Camada 2: Scroll no próximo frame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    // Camada 3: Garantia após micro-delay
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#8620e0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center shrink-0">
            <Link to="/">
              {/* Logo Mobile */}
              <img src={imgLogoMobile} alt="EPMARTINS" className="w-[50px] h-auto md:hidden" />
              {/* Logo Desktop */}
              <img src={imgMarcaEpMartinsBranco1} alt="EPMARTINS" className="hidden md:block w-full max-w-[285px] h-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={() => scrollToSection('inicio')}
             className={`transition-colors ${
                activeSection === 'inicio' ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              INÍCIO
            </Link>
            <button 
              onClick={() => scrollToSection('sobre')} 
             className={`transition-colors ${
                activeSection === 'sobre' ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              QUEM SOU EU
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
             className={`transition-colors ${
                activeSection === 'servicos' ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              PORTFÓLIO
            </button>
            <Link 
              to="/blog"
             className={`transition-colors ${
                activeSection === 'blog' || isActive('/blog') ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              BLOG
            </Link>
            <Link 
              to="/contato"
              onClick={() => handlePageNavigation('/contato')}
             className={`transition-colors ${
                activeSection === 'contato' || isActive('/contato') ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              CONTATO
            </Link>
          </div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           className="md:hidden p-2 rounded-md text-white hover:bg-[#8620e0]/20"
            whileTap={{ scale: 0.9, rotate: 90 }}
            transition={{ duration: 0.2 }}
         >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
         className="md:hidden bg-[#121214] border-t border-[#8620e0]/20"
       >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
             className={`block w-full text-left py-2 transition-colors ${
                activeSection === 'inicio' ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              INÍCIO
            </Link>
            <button 
              onClick={() => scrollToSection('sobre')} 
             className={`block w-full text-left py-2 transition-colors ${
                activeSection === 'sobre' ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              QUEM SOU EU
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
             className={`block w-full text-left py-2 transition-colors ${
                activeSection === 'servicos' ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              PORTFÓLIO
            </button>
            <Link 
              to="/blog"
             className={`block w-full text-left py-2 transition-colors ${
                activeSection === 'blog' || isActive('/blog') ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              BLOG
            </Link>
            <Link 
              to="/contato"
              onClick={() => handlePageNavigation('/contato')}
             className={`block w-full text-left py-2 transition-colors ${
                activeSection === 'contato' || isActive('/contato') ? 'text-[#8620e0]' : 'text-white hover:text-[#8620e0]'
              }`}
             
           >
              CONTATO
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
});