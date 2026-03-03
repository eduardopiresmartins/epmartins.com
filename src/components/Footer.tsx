import { motion } from "motion/react";
import { Link } from "react-router";
import imgMarcaEpMartinsGradiente1 from "figma:asset/6b40d2b3432f3d01426320616e019eaa3809a7b6.png";
import { memo } from "react";

interface FooterProps {
  onNewsletterSubmit: (e: React.FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
  isLoading?: boolean;
}

// Optimized: Memoized for performance (renders on all pages)
export const Footer = memo(function Footer({
  onNewsletterSubmit,
  email,
  setEmail,
  isLoading = false,
}: FooterProps) {
  return (
    <footer className="relative bg-[#0A0A0F] border-t border-[#8620e0]/20">
      {/* Gradient Line */}
      <div className="h-[1px] w-full">
        <svg
         className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1192 1"
       >
          <defs>
            <linearGradient
              id="footer-gradient"
              x1="0"
              x2="1192"
              y1="1"
              y2="1"
              gradientUnits="userSpaceOnUse"
           >
              <stop stopColor="#9532F7" />
              <stop offset="1" stopColor="#150D1D" />
            </linearGradient>
          </defs>
          <line
            stroke="url(#footer-gradient)"
            strokeWidth="2"
            x2="100%"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12 md:items-center">
          {/* Left Side - Brand */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           className="flex items-center justify-center md:justify-start"
         >
            <img
              src={
                imgMarcaEpMartinsGradiente1
              }
              alt="EP Martins"
             className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </motion.div>

          {/* Right Side - Newsletter */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="flex flex-col justify-center"
         >
            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] mb-4 leading-[1.3]">
              Quer ser avisado dos novos posts do blog?
            </h3>
            <p className="text-[#a0a0a0] text-[14px] md:text-[16px] mb-6">
              Conteúdo e notícias sobre tecnologia
            </p>

            <form
              onSubmit={onNewsletterSubmit}
             className="flex flex-col sm:flex-row gap-3"
           >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail"
               className="flex-1 bg-[#1b1b1b] border border-[#8620e0]/20 rounded-lg px-4 py-3 text-white text-[13px] md:text-[14px] focus:border-[#8620e0] focus:outline-none transition-colors"
               
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#8620e0] to-[#f900f1] px-6 py-3 rounded-lg text-[16px] md:text-[18px] whitespace-nowrap hover:shadow-lg hover:shadow-[#8620e0]/50 transition-all"
               
             >
                {isLoading ? (
                  <svg
                   className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                 >
                    <circle
                     className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                     className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.928l3-2.647z"
                    />
                  </svg>
                ) : (
                  <>
                    Cadastrar
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                   >
                      <rect
                        fill="#B903B3"
                        height="20"
                        rx="3"
                        width="20"
                      />
                      <path
                        d="M5.5 10.5H14.5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 5.5L14.5 10.5L9.5 15.5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8620e0]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#a0a0a0] text-[15px] text-center md:text-left">
              Todos os direitos reservados © 2025 - 2026
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/privacidade"
               className="text-[#a0a0a0] hover:text-white text-[14px] transition-colors"
             >
                Privacidade
              </Link>
              <Link
                to="/termos"
               className="text-[#a0a0a0] hover:text-white text-[14px] transition-colors"
             >
                Termos
              </Link>
              <Link
                to="/contato"
               className="text-[#a0a0a0] hover:text-white text-[14px] transition-colors"
             >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Background */}
      <div className="bg-[#121214] h-12 flex items-center justify-center">
        
      </div>
    </footer>
  );
});