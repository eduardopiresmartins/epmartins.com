import image_cc0fb63742a47cbac1e22edeff6861153c3b7216 from 'figma:asset/cc0fb63742a47cbac1e22edeff6861153c3b7216.png'
import { motion } from 'motion/react';
import { memo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Target, Users, Rocket } from 'lucide-react';
import aboutProfileImage from 'figma:asset/about-profile.png';

export const AboutSection = memo(function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Resultados Comprovados',
      description: 'Projetos em grandes instituições financeiras com impacto direto em milhões de usuários.',
    },
    {
      icon: Users,
      title: 'Comprometimento Total',
      description: 'Profissional focado, sempre atualizado com as melhores práticas e tendências do mercado.',
    },
    {
      icon: Rocket,
      title: 'Velocidade e Qualidade',
      description: 'Entregas ágeis sem comprometer segurança, compliance e experiência do usuário.',
    },
  ];

  return (
    <section
      id="sobre"
     className="relative bg-[#0A0A0F] py-12 md:py-20 lg:py-24 overflow-hidden"
   >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 translate-x-1/3 w-[500px] h-[500px] bg-[#8620e0]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 -translate-x-1/3 w-[500px] h-[500px] bg-[#f900f1]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
         className="mb-8 md:mb-12"
       >
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] text-white mb-2">
            Quem sou eu
          </h2>
          <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content - Image with decoration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
           className="relative flex items-center justify-center"
         >
            {/* Decorative gradient border */}
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
               className="absolute inset-0 -m-4"
             >
                <div className="w-full h-full rounded-2xl bg-gradient-to-r from-[#8620e0] via-[#f900f1] to-[#8620e0] opacity-30 blur-xl" />
              </motion.div>

              {/* Secondary decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#8620e0] to-[#f900f1] rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#f900f1] to-[#8620e0] rounded-full opacity-20 blur-2xl" />

              {/* Image container with gradient border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#8620e0]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-1">
                <ImageWithFallback
                  src={image_cc0fb63742a47cbac1e22edeff6861153c3b7216}
                  alt="Eduardo Pires Martins"
                 className="w-full h-auto rounded-xl object-cover aspect-square"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
               className="absolute -top-4 -left-4 bg-gradient-to-r from-[#8620e0] to-[#f900f1] px-4 py-2 rounded-lg shadow-xl flex items-center gap-2"
             >
                <Sparkles size={16} className="text-white" />
                <span className="text-white text-sm">
                  Software Engineer & Product Manager
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
           className="space-y-6 md:flex md:flex-col md:justify-center"
         >
            <p
             className="font-extralight text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-[#e0e0e0]"
              style={{ fontVariationSettings: "'wdth' 100" }}
           >
              Sou <span className="text-white">Eduardo Pires Martins</span>, 
              especialista em <span className="text-white">produto e tecnologia</span> com 
              histórico em <span className="text-white">grandes projetos bancários e fintechs</span> que atendem milhões de usuários diariamente.
            </p>

            <p
             className="font-extralight text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-[#e0e0e0]"
              style={{ fontVariationSettings: "'wdth' 100" }}
           >
              Atuei em <span className="bg-gradient-to-r from-[#8620e0] to-[#f900f1] bg-clip-text text-transparent">plataformas de pagamento, crédito digital e Open Banking</span>, 
              entregando soluções complexas em ambientes altamente regulados. Minha abordagem combina <span className="text-white">visão estratégica de negócio com profundidade técnica</span> para acelerar resultados.
            </p>

            <p
             className="font-extralight text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-[#e0e0e0]"
              style={{ fontVariationSettings: "'wdth' 100" }}
           >
              Se você busca um parceiro que <span className="text-white">entende tanto de produto quanto de tecnologia</span>, 
              capaz de transformar desafios complexos em <span className="text-white">entregas que geram impacto real</span>, 
              vamos conversar.
            </p>

            {/* Highlights cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                 className="bg-[#121214] border border-[rgba(134,32,224,0.2)] rounded-lg p-4 hover:border-[#8620e0] transition-all duration-300 group"
               >
                  <div className="bg-gradient-to-br from-[#8620e0] to-[#f900f1] rounded-lg w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon size={20} className="text-white" />
                  </div>
                  <h3
                   className="text-[14px] md:text-[15px] text-white mb-1"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                 >
                    {highlight.title}
                  </h3>
                  <p
                   className="text-[12px] md:text-[13px] text-[#a0a0a0] leading-[18px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                 >
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});