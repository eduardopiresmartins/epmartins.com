import { motion } from "motion/react";
import svgPaths from "../imports/svg-he27q9epa2";

export function ContactSectionMobileAsset() {
  return (
    <>
      {/* Background Blurs Container - ULTRA DARK */}
      <div className="absolute h-[744.989px] left-0 overflow-clip top-0 w-[381.538px] pointer-events-none">
        {/* Blur 1 - Top Left */}
        <div className="absolute content-stretch flex flex-col items-start left-[-179.99px] opacity-40 rounded-[36164600px] size-[359.989px] top-[-179.99px]">
          <div className="bg-gradient-to-b blur-[100px] from-[#5c1894] h-[359.989px] rounded-[36164600px] shrink-0 to-[#1a0528] w-full" />
        </div>

        {/* Blur 2 - Middle Right */}
        <div className="absolute content-stretch flex flex-col items-start left-[154.04px] opacity-35 rounded-[36164600px] size-[454.987px] top-[133.74px]">
          <div className="bg-gradient-to-b blur-[100px] from-[#4a0d7a] h-[454.987px] rounded-[36164600px] shrink-0 to-[#5c1894] w-full" />
        </div>

        {/* Blur 3 - Bottom Center */}
        <div className="absolute content-stretch flex flex-col items-start left-[90.98px] opacity-25 rounded-[36164600px] size-[350.538px] top-[409.74px]">
          <div className="bg-gradient-to-b blur-[100px] from-[#4a0d7a] h-[350.522px] rounded-[36164600px] shrink-0 to-[#1a0528] via-1/2 via-[#3d0a60] w-full" />
        </div>
      </div>

      {/* Smoke - Ilustração completa (foguete + nuvens) */}
      <div className="absolute contents left-[-73px] top-[93.64px] pointer-events-none">
        {/* Foguete com animação de flutuação */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
       >
          <div className="absolute h-[451.991px] left-[-73px] top-[93.64px] w-[495px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 495 451.991">
              <g clipPath="url(#clip0_mobile_smoke)" id="Smoke">
                {/* Group 920 - Foguete + Anéis */}
                <g id="Group 920">
                  {/* Vector 1128 - Corpo do foguete (gradiente principal) */}
                  <path d={svgPaths.p284be9c0} fill="url(#paint0_linear_mobile)" />
                  
                  {/* Vector 1129 - Gradiente secundário */}
                  <path d={svgPaths.p24b9c800} fill="url(#paint1_linear_mobile)" />
                  
                  {/* Linhas decorativas */}
                  <path d={svgPaths.p3311e100} stroke="url(#paint2_linear_mobile)" />
                  <path d={svgPaths.p3bdb2d80} stroke="url(#paint3_linear_mobile)" />
                  <path d={svgPaths.pc0ba700} stroke="url(#paint4_linear_mobile)" />
                  <path d={svgPaths.p28755900} stroke="url(#paint5_linear_mobile)" />
                  
                  {/* Anéis concêntricos */}
                  <path d={svgPaths.p3655e8c0} stroke="url(#paint6_linear_mobile)" />
                  <path d={svgPaths.p2c348580} stroke="url(#paint7_linear_mobile)" />
                  <path d={svgPaths.p3349f300} stroke="url(#paint8_linear_mobile)" />
                  <path d={svgPaths.pe5cd780} stroke="url(#paint9_linear_mobile)" />
                  <path d={svgPaths.p19858d80} stroke="url(#paint10_linear_mobile)" />
                  <path d={svgPaths.p2a1dc800} stroke="url(#paint11_linear_mobile)" />
                  <path d={svgPaths.p34c43a80} stroke="url(#paint12_linear_mobile)" />
                  <path d={svgPaths.p17fea200} stroke="url(#paint13_linear_mobile)" />
                  <path d={svgPaths.p32bd3a80} stroke="url(#paint14_linear_mobile)" />
                  
                  {/* Group 919 - Corpo principal do foguete */}
                  <g id="Group 919">
                    <path d={svgPaths.p100c4d40} fill="#EDEFF0" />
                    <path d={svgPaths.p219a96c0} fill="url(#paint15_linear_mobile)" />
                    <path d={svgPaths.p3b6abf00} fill="url(#paint16_linear_mobile)" />
                    <path d={svgPaths.pa879600} fill="url(#paint17_linear_mobile)" />
                    <path d={svgPaths.p2f09bd00} stroke="url(#paint18_linear_mobile)" strokeLinecap="round" strokeWidth="2" />
                    <path d={svgPaths.p15d75730} fill="url(#paint19_linear_mobile)" />
                  </g>
                </g>
                
                {/* Nuvens com animações independentes não aplicadas aqui (será feito via motion.div separado se necessário) */}
                <path d={svgPaths.p3eed300} fill="url(#paint20_radial_mobile)" id="Vector 1132" />
                <path d={svgPaths.p22d59300} fill="url(#paint21_radial_mobile)" id="Vector 1133" />
                <path d={svgPaths.p35759500} fill="url(#paint22_radial_mobile)" id="Vector 1134" />
              </g>
              <defs>
                {/* Gradientes lineares do foguete */}
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_mobile" x1="382.43" x2="359.781" y1="50.4794" y2="383.673">
                  <stop stopColor="#8620E0" />
                  <stop offset="0.758606" stopColor="#1D0730" stopOpacity="0.411353" />
                  <stop offset="0.919753" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_mobile" x1="383.161" x2="382.548" y1="50.479" y2="304.581">
                  <stop stopColor="#8620E0" />
                  <stop offset="0.822925" stopColor="#9933FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_mobile" x1="363.221" x2="363.008" y1="45.4094" y2="133.739">
                  <stop stopColor="#FAFAFA" stopOpacity="0" />
                  <stop offset="0.494792" stopColor="#FAFAFA" />
                  <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_mobile" x1="372.805" x2="372.687" y1="38.0129" y2="86.8428">
                  <stop stopColor="#FAFAFA" stopOpacity="0" />
                  <stop offset="0.494792" stopColor="#FAFAFA" />
                  <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_mobile" x1="398.578" x2="398.495" y1="39.9426" y2="74.4657">
                  <stop stopColor="#FAFAFA" stopOpacity="0" />
                  <stop offset="0.494792" stopColor="#FAFAFA" />
                  <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_mobile" x1="404.684" x2="404.684" y1="48.5215" y2="107.615">
                  <stop stopColor="#FAFAFA" stopOpacity="0" />
                  <stop offset="0.494792" stopColor="#FAFAFA" />
                  <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_mobile" x1="383.318" x2="383.33" y1="64.1632" y2="59.187">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_mobile" x1="383.211" x2="383.229" y1="72.873" y2="65.4085">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_mobile" x1="382.503" x2="382.53" y1="86.8651" y2="75.6685">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_mobile" x1="381.482" x2="381.524" y1="115.478" y2="98.0605">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_mobile" x1="381.856" x2="381.939" y1="170.529" y2="136.006">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_mobile" x1="383.063" x2="383.069" y1="53.8995" y2="51.7224">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_mobile" x1="383.057" x2="383.063" y1="54.8334" y2="52.3452">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_mobile" x1="383.038" x2="383.045" y1="56.0766" y2="53.2775">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_mobile" x1="383.01" x2="383.017" y1="58.5639" y2="55.4537">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_mobile" x1="375.595" x2="359.565" y1="34.9902" y2="45.7014">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_mobile" x1="390.844" x2="406.874" y1="34.9902" y2="45.7014">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_mobile" x1="383.221" x2="383.221" y1="0" y2="48.208">
                  <stop stopColor="#EDEFF0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_mobile" x1="388.12" x2="387.954" y1="10.4375" y2="12.2502">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#8620E0" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_mobile" x1="385.398" x2="376.761" y1="34.832" y2="36.7864">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#842B94" />
                </linearGradient>
                
                {/* Gradientes radiais das nuvens */}
                <radialGradient cx="0" cy="0" gradientTransform="translate(247.5 349.625) rotate(90) scale(63.6236 248.193)" gradientUnits="userSpaceOnUse" id="paint20_radial_mobile" r="1">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#6F1DB8" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(222.904 336.016) rotate(90) scale(57.9484 161.745)" gradientUnits="userSpaceOnUse" id="paint21_radial_mobile" r="1">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#9933FF" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(3.15528 34.0905 -61.9403 6.69219 327.977 350.666)" gradientUnits="userSpaceOnUse" id="paint22_radial_mobile" r="1">
                  <stop stopColor="#8620E0" />
                  <stop offset="1" stopColor="#411766" stopOpacity="0" />
                </radialGradient>
                
                <clipPath id="clip0_mobile_smoke">
                  <rect fill="white" height="451.991" width="495" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </>
  );
}