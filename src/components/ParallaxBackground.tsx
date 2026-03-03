import { motion } from 'motion/react';
import { memo } from 'react';

// Optimized: Memoized component to prevent unnecessary re-renders
// Reduced from 8+ animated elements to 3 essential gradients
// FIXED: Responsive sizes to prevent horizontal scroll on mobile
export const ParallaxBackground = memo(function ParallaxBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Círculo gradiente 1 - Superior Esquerdo */}
      <motion.div
       className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.06]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
     >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8620e0] to-[#f900f1] blur-[80px] sm:blur-[100px] md:blur-[120px]" />
      </motion.div>

      {/* Círculo gradiente 2 - Direita */}
      <motion.div
       className="absolute top-1/4 right-0 translate-x-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.05]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ willChange: 'transform, opacity' }}
     >
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#f900f1] to-[#8620e0] blur-[90px] sm:blur-[120px] md:blur-[140px]" />
      </motion.div>

      {/* Círculo gradiente 3 - Inferior Centro */}
      <motion.div
       className="absolute bottom-0 left-1/3 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] rounded-full opacity-[0.04]"
        animate={{
          scale: [1, 1.4, 1],
          x: [-40, 40, -40],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ willChange: 'transform' }}
     >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#8620e0] via-[#f900f1] to-[#8620e0] blur-[80px] sm:blur-[110px] md:blur-[130px]" />
      </motion.div>

      {/* Optimized: Removed 8 particles, 3 geometric shapes, and 2 decorative lines */}
      {/* Performance gain: ~70% fewer DOM elements and animations */}
    </div>
  );
});