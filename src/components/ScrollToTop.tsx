import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect executa SINCRONAMENTE antes do browser pintar
  // Mais confiável que useEffect para scroll
  useLayoutEffect(() => {
    // Método 1: Scroll imediato e forçado
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    // Método 2: Garantia adicional após o render
    // Usa requestAnimationFrame para executar no próximo frame do browser
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Executa imediatamente
    scrollToTop();

    // Executa novamente no próximo frame (garantia)
    requestAnimationFrame(() => {
      scrollToTop();
      
      // Executa uma terceira vez após um micro-delay (fallback final)
      setTimeout(scrollToTop, 0);
    });
  }, [pathname]);

  return null;
}