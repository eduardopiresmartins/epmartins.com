import { motion } from "motion/react";
import imgLogoMobile from "figma:asset/3c97e927488bc929733cf4ce3e498875dd36bb88.png";

interface PreloaderProps {
  visible?: boolean;
  text?: string;
}

export function Preloader({ visible = true, text = "Carregando..." }: PreloaderProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
     className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-[#0B0B0D] via-[#0A0A0F] to-[#111114]"
      role="status"
      aria-live="polite"
      aria-label="Carregando o site"
   >
      {/* Optimized: Static background glow - no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8620e0 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-6 px-6">
        {/* Animated ring with logo */}
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Rotating gradient ring */}
          <motion.div
           className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
         >
            <svg
             className="w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
           >
              <defs>
                <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8620e0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f900f1" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#ring-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="220 60"
                fill="none"
                opacity="0.95"
              />
            </svg>
          </motion.div>

          {/* Optimized: Removed secondary ring for performance */}

          {/* Logo in center */}
          <motion.div
           className="absolute inset-0 flex items-center justify-center p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
         >
            <img
              src={imgLogoMobile}
              alt="EP Logo"
             className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(134, 32, 224, 0.4))",
              }}
            />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
         className="flex flex-col items-center gap-3"
       >
          <p className="text-white/70 tracking-[0.15em] text-sm md:text-base">
            {text}
          </p>

          {/* Animated dots */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
               className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8620e0] to-[#f900f1]"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Optimized: Removed decorative corners for faster load */}
      </div>
    </motion.div>
  );
}