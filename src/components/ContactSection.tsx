import { motion } from "motion/react";
import { Link } from "react-router";
import { ParallaxBackground } from "./ParallaxBackground";
import { ContactSectionMobileAsset } from "./ContactSectionMobileAsset";
import { ContactSectionDesktopAsset } from "./ContactSectionDesktopAsset";

export function ContactSection() {
  return (
    <section
      id="contato"
     className="relative py-32 md:py-48 lg:py-56 bg-[#050508] overflow-hidden min-h-[800px] lg:min-h-[750px]"
   >
      {/* Parallax Background */}
      <ParallaxBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Baseado no Figma Section-188-183 */}
        <div className="block lg:hidden relative bg-[#0a0a0f]">
          {/* Background Blurs + Ilustração (Smoke) */}
          <ContactSectionMobileAsset />

          {/* Conteúdo - Container7 do Figma */}
          <div className="relative left-[16px] top-[79.99px] w-[349.541px] pb-[300px]">
            {/* Título Mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
           >
              <h2 className="text-[32px] font-light leading-[38.4px] text-white mb-3">
                Contato
              </h2>
              <div className="h-[3px] w-[80px] bg-gradient-to-r from-[#8620e0] to-[#150d1d] mb-10" />
            </motion.div>

            {/* Texto Principal Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
             className="mb-[40px]"
           >
              <h3 className="text-white text-[22px] font-normal leading-[28.6px] w-[239px]">
                Agenda aberta para novos projetos.
              </h3>
            </motion.div>

            {/* Botão CTA Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
           >
              <Link to="/contato#contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 className="bg-gradient-to-b from-[#8620e0] to-[#f900f1] h-[46.48px] w-[183.948px] rounded-[10px] flex items-center justify-center text-[15px] font-light text-white hover:shadow-lg hover:shadow-[#8620e0]/50 transition-all"
                 
               >
                  Entre em contato
                  <svg
                   className="ml-2"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                 >
                    <rect
                      fill="#B903B3"
                      height="18"
                      rx="2.7"
                      width="18"
                    />
                    <path
                      d="M4.95 9H13.04"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.9"
                    />
                    <path
                      d="M8.54 4.95L13.04 9.45L8.54 13.94"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.9"
                    />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Baseado no Figma Contato-188-906 */}
        <div className="hidden lg:block relative">
          {/* Assets Desktop - Foguete + Nuvens */}
          <ContactSectionDesktopAsset />

          {/* Título + Traço */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           className="relative z-20"
         >
            <h2 className="text-[52px] font-normal leading-[normal] text-white mb-0">
              Contato
            </h2>
            <div className="h-[4px] w-[102.343px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mt-[28px]" />
          </motion.div>

          {/* Texto + Botão */}
          <div className="mt-[50px] relative z-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
             className="text-[#a0a0a0] text-[20px] font-light leading-[1.5] mb-[30px]"
             
           >
              Agenda aberta para novos projetos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
           >
              <Link to="/contato#contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 className="bg-gradient-to-r from-[#8620e0] to-[#f900f1] h-[40px] w-[201px] rounded-[5px] flex items-center justify-center gap-[8px] text-[18px] font-light text-white hover:shadow-lg hover:shadow-[#8620e0]/50 transition-all"
                 
               >
                  Entrar em contato
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
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}