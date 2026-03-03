import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router";
import { useState, useEffect, memo, useCallback } from "react";
import { ParallaxBackground } from "./ParallaxBackground";
import { blogPosts } from '../data/blogPosts';

// Optimized: Memoized for performance
export const BlogSection = memo(function BlogSection() {
  // Use only the first 5 real blog posts
  const displayPosts = blogPosts.slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useNavigate();

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % displayPosts.length);
  }, [displayPosts.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + displayPosts.length) % displayPosts.length);
  }, [displayPosts.length]);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Auto-play: troca de post a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const currentPost = displayPosts[currentIndex];

  // Format date from ISO to Brazilian format
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  return (
    <section
      id="blog"
     className="relative py-20 md:py-32 bg-[#0A0A0F] overflow-hidden"
   >
      {/* Parallax Background */}
      <ParallaxBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
       >
          <h2 className="text-[42px] md:text-[52px] leading-[normal] mb-4">
            Blog
          </h2>
          <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mb-16" />
        </motion.div>

        {/* Blog Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
             className="flex flex-col md:flex-row gap-6 items-start min-h-[420px] md:min-h-[320px]"
           >
              {/* Blog Image - Proporções mais quadradas */}
              <motion.div
                whileHover={{ scale: 1.02 }}
               className="relative overflow-hidden rounded-[16px] cursor-pointer w-full md:w-[320px] h-[280px] md:h-[320px] shrink-0"
                onClick={() => navigate("/blog")}
             >
                <ImageWithFallback
                  src={currentPost.image}
                  alt={currentPost.title}
                 className="w-full h-full object-cover brightness-75 contrast-110 saturate-110"
                />
              </motion.div>

              {/* Blog Content */}
              <div className="flex flex-col justify-between w-full md:max-w-2xl h-full md:min-h-[320px]">
                <div className="flex-1">
                  {/* Data com gradient text effect inspirado no Figma */}
                  <div 
                   className="inline-block bg-gradient-to-r from-[#9933FF] to-[#F900F1] bg-clip-text text-transparent mb-3"
                 >
                    <p className="text-[16px]">
                      {formatDate(currentPost.date)}
                    </p>
                  </div>

                  <h3 className="text-[28px] md:text-[30px] leading-[1.3] mb-4 line-clamp-2">
                    {currentPost.title}
                  </h3>

                  <div className="relative mb-6">
                    <p className="text-white/80 text-[18px] leading-[1.5] line-clamp-3">
                      {currentPost.excerpt}
                    </p>
                  </div>
                </div>

                {/* Botão "Ler mais" inspirado no design do Figma */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[18px] self-start transition-all"
                   
                    onClick={() => navigate(`/blog/${currentPost.id}`)}
                 >
                  Ler mais
                  {/* Ícone seta com gradient background */}
                  <div className="relative size-[20px] shrink-0">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <rect fill="url(#paint0_linear_blog)" height="20" width="20" rx="3" />
                      <path d="M5.5 10.5H14.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 5.5L14.5 10.5L9.5 15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_blog" x1="0.5" x2="20.5" y1="0.5" y2="0.5">
                          <stop stopColor="#9933FF" />
                          <stop offset="1" stopColor="#F900F1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators with Navigation */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {/* Mobile Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
             className="md:hidden w-8 h-8 rounded-full bg-[#8620e0]/20 border border-[#8620e0]/40 backdrop-blur-sm flex items-center justify-center active:bg-[#8620e0]/30 transition-colors"
              aria-label="Post anterior"
           >
              <ChevronLeft size={16} className="text-[#8620e0]" />
            </motion.button>

            {/* Desktop Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(134, 32, 224, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
             className="hidden md:flex w-7 h-7 rounded-[4px] bg-[#8620e0]/15 border border-[#8620e0]/30 items-center justify-center hover:border-[#8620e0]/50 transition-all"
              aria-label="Post anterior"
           >
              <ChevronLeft size={16} className="text-[#8620e0]" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {displayPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#8620e0] to-[#f900f1] w-8"
                      : "bg-[#8620e0]/30 active:bg-[#8620e0]/50"
                  }`}
                  aria-label={`Ir para post ${index + 1}`}
                />
              ))}
            </div>

            {/* Desktop Next Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(134, 32, 224, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
             className="hidden md:flex w-7 h-7 rounded-[4px] bg-[#8620e0]/15 border border-[#8620e0]/30 items-center justify-center hover:border-[#8620e0]/50 transition-all"
              aria-label="Próximo post"
           >
              <ChevronRight size={16} className="text-[#8620e0]" />
            </motion.button>

            {/* Mobile Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
             className="md:hidden w-8 h-8 rounded-full bg-[#8620e0]/20 border border-[#8620e0]/40 backdrop-blur-sm flex items-center justify-center active:bg-[#8620e0]/30 transition-colors"
              aria-label="Próximo post"
           >
              <ChevronRight size={16} className="text-[#8620e0]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
});