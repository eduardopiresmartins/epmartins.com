import { motion } from "motion/react";
import svgPaths from "./svg-gnor5v29y1";

export default function DeviceAssets() {
  return (
    <div className="relative size-full" data-name="device-assets">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 931 925">
        <g clipPath="url(#clip0_213_446)" id="device-assets">
          {/* Borda retangular magenta com animação */}
          <motion.rect 
            height="810" 
            id="Rectangle 1471" 
            rx="29" 
            fill="none" 
            stroke="url(#magentaGradient)" 
            strokeWidth="2" 
            width="455" 
            x="393" 
            y="42"
            animate={{
              strokeWidth: [2, 3, 2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop"
            }}
          />
          
          {/* Borda retangular branca com animação + glow */}
          <rect height="810" id="Rectangle 1472" rx="29" fill="none" stroke="url(#whiteGradient)" strokeWidth="2" width="929" x="1" y="114" filter="url(#whiteBorderGlow)" />
          
          <path d={svgPaths.p34c41a80} fill="var(--fill-0, #0A0A0A)" id="bg" />
          <rect fill="var(--fill-0, white)" height="6" id="Line" rx="3" width="135" x="499" y="793" />
          
          {/* Círculo com borda branca */}
          <circle cx="475.844" cy="154.844" id="Ellipse 2905" r="61" stroke="url(#paint2_linear_213_446)" strokeWidth="2" transform="rotate(-53.8461 475.844 154.844)" />
          
          <line id="Line 32" stroke="var(--stroke-0, white)" strokeOpacity="0.75" strokeWidth="4" x1="567" x2="721" y1="161" y2="161" />
          <line id="Line 34" stroke="var(--stroke-0, white)" strokeOpacity="0.75" strokeWidth="4" x1="270" x2="582" y1="291" y2="291" />
          <line id="Line 33" stroke="var(--stroke-0, white)" strokeOpacity="0.75" strokeWidth="4" x1="489" x2="582" y1="264" y2="264" />
          
          {/* Círculo grande com gradiente roxo - COM ANIMAÇÃO DE RESPIRAÇÃO */}
          <motion.circle 
            cx="474" 
            cy="153" 
            fill="url(#paint3_linear_213_446)" 
            r="60"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{ transformOrigin: "474px 153px" }}
          />
          
          {/* Círculo cinza com sombra melhorada */}
          <circle cx="392" cy="593" fill="var(--fill-0, #292929)" r="60" style={{ filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.4)) drop-shadow(0px 2px 6px rgba(249, 0, 241, 0.15))" }} />
          
          {/* Retângulo pequeno com sombra melhorada */}
          <rect fill="var(--fill-0, #292929)" height="100" rx="8" width="100" x="684" y="216" style={{ filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.4)) drop-shadow(0px 2px 6px rgba(249, 0, 241, 0.15))" }} />
          
          {/* Retângulo vertical com sombra melhorada */}
          <rect fill="var(--fill-0, #292929)" height="140.243" rx="8" transform="rotate(90.0049 824.275 389.012)" width="373.629" x="824.275" y="389.012" style={{ filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.4)) drop-shadow(0px 2px 6px rgba(249, 0, 241, 0.15))" }} />
          
          <rect height="60" id="Rectangle 1470" rx="9" stroke="url(#paint4_linear_213_446)" strokeWidth="2" transform="rotate(-180 583 466)" width="314" x="583" y="466" />
          
          {/* Retângulo horizontal com sombra melhorada */}
          <rect fill="var(--fill-0, #292929)" height="58" rx="8" transform="rotate(-180 572 447)" width="312" x="572" y="447" style={{ filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.4)) drop-shadow(0px 2px 6px rgba(249, 0, 241, 0.15))" }} />
        </g>
        <defs>
          {/* Gradiente magenta animado */}
          <linearGradient id="magentaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <motion.stop 
              offset="0%" 
              stopColor="rgba(153, 51, 255, 0)"
              animate={{
                stopColor: [
                  "rgba(153, 51, 255, 0)",
                  "rgba(153, 51, 255, 0)",
                  "rgba(153, 51, 255, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.stop 
              offset="50%" 
              animate={{
                offset: ["50%", "70%", "50%"],
                stopColor: [
                  "rgba(153, 51, 255, 0)",
                  "rgba(153, 51, 255, 0)",
                  "rgba(153, 51, 255, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.stop 
              offset="100%" 
              stopColor="#9933FF"
            />
          </linearGradient>

          {/* Gradiente branco animado */}
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <motion.stop 
              offset="0%" 
              stopColor="rgba(255, 255, 255, 0)"
              animate={{
                stopColor: [
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.stop 
              offset="50%" 
              animate={{
                offset: ["50%", "70%", "50%"],
                stopColor: [
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.stop 
              offset="100%" 
              stopColor="#FFFFFF"
            />
          </linearGradient>

          {/* Glow na borda branca */}
          <filter id="whiteBorderGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1
                                                            0 0 0 0 1
                                                            0 0 0 0 1
                                                            0 0 0 0.4 0" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_213_446" x1="475.844" x2="475.844" y1="94.8439" y2="214.844">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_213_446" x1="474.706" x2="474.706" y1="93" y2="297">
            <stop stopColor="#9933FF" />
            <stop offset="0.194804" stopColor="#A52DFD" />
            <stop offset="1" stopColor="#F900F1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_213_446" x1="559.5" x2="729" y1="494" y2="494">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_213_446">
            <rect fill="white" height="925" width="931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}