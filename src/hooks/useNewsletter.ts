import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

/**
 * Custom hook for newsletter subscription logic
 * Centralizes newsletter state and submission handler across multiple pages
 * Used in: BlogPage, BlogPostPage, ContactPage
 * 
 * Features:
 * - Email validation
 * - Toast notification on success
 * - LocalStorage para evitar spam de cadastros
 * - Loading state
 */
export function useNewsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!email || !email.includes('@')) {
      toast.error('Por favor, insira um email válido', {
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
      return;
    }

    // Check se já está cadastrado (localStorage)
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    if (subscribers.includes(email)) {
      toast.info('Este email já está cadastrado! 📬', {
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(134, 32, 224, 0.3)',
        },
      });
      setEmail('');
      return;
    }

    // Simula loading (UX realista)
    setIsLoading(true);
    
    // Delay de 800ms para parecer real
    await new Promise(resolve => setTimeout(resolve, 800));

    // Salva no localStorage
    subscribers.push(email);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));

    // Toast de sucesso VERDE
    toast.success('Email cadastrado com sucesso! 🚀', {
      description: 'Você receberá novidades sobre tecnologia e produto.',
      duration: 4000,
      style: {
        background: '#1a1a1a',
        color: '#fff',
        border: '1px solid rgba(34, 197, 94, 0.5)',
      },
    });

    // Limpa o campo
    setEmail('');
    setIsLoading(false);
  };

  return {
    email,
    setEmail,
    handleSubmit,
    isLoading,
  };
}