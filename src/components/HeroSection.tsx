import image_a112d6729e6e96dfbf58ac5e9a15ece689cb466f from "figma:asset/a112d6729e6e96dfbf58ac5e9a15ece689cb466f.png";
import { motion } from "motion/react";
import {
  Linkedin,
  Instagram,
  Github,
  FileText,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { memo } from "react";

// Optimized: Memoized for performance
export const HeroSection = memo(function HeroSection() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/eduardopiresmartins/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/epmartins.io/", label: "Instagram" },
    { icon: Github, href: "https://github.com/eduardopiresmartins", label: "Github" },
    {
      icon: FileText,
      href: "#",
      label: "Currículo",
      isDownload: true,
    },
  ];

  return (
    <section
      id="inicio"
     className="relative flex flex-col items-center justify-start pt-20 lg:pt-16 pb-12 md:pb-16 overflow-hidden bg-[#0A0A0F]"
   >
      {/* Background decorative elements - Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-[#8620e0]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-[#f900f1]/20 rounded-full blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
         >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
             className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.2] mb-6"
             
           >
              Desenvolvo produtos{" "}
              <span className="bg-gradient-to-r from-[#8620e0] to-[#f900f1] bg-clip-text text-transparent">
                digitais
              </span>{" "}
              que geram valor ao seu projeto.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
             className="text-[18px] md:text-[20px] text-gray-300 mb-8 max-w-2xl"
             
           >
              Transformo ideias em soluções escaláveis através de estratégia de
              produto e excelência técnica.
            </motion.p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                 className="w-10 h-10 rounded-md bg-gradient-to-r from-[#8620e0] to-[#f900f1] flex items-center justify-center hover:shadow-lg hover:shadow-[#8620e0]/50 transition-all"
                  aria-label={social.label}
               >
                  <social.icon
                    size={20}
                   className="text-white"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
           className="relative flex items-center justify-center"
         >
            {/* Animated Circle Background - Responsive sizes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
             className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
           >
              <svg
                viewBox="0 0 400 400"
               className="w-full h-full"
             >
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                 >
                    <stop offset="0%" stopColor="#8620e0" />
                    <stop offset="100%" stopColor="#f900f1" />
                  </linearGradient>
                </defs>
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  opacity="0.5"
                />
              </svg>
            </motion.div>

            {/* Profile Image */}
            <div className="relative z-10">
              <ImageWithFallback
                src={
                  image_a112d6729e6e96dfbf58ac5e9a15ece689cb466f
                }
                alt="Eduardo Pires"
               className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-[#8620e0]/30"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
             className="absolute top-0 right-0 bg-gradient-to-r from-[#8620e0] to-[#f900f1] px-4 py-2 rounded-lg shadow-lg"
           >
              <span className="text-white text-[14px]">
                Disponível
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});