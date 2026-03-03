import { motion } from "motion/react";
import { Code } from "lucide-react";
import { memo } from "react";
import svgPaths from '../imports/svg-7fbj89ur2v';
import imgPerfilCard from 'figma:asset/5ca8857176de616060a5b89b6f99d84982bc65a3.png';
import DesktopAssets from '../imports/DesktopAssets-212-21';
import { ServicesSectionMobile } from './ServicesSectionMobile';

// Background Gradient Components
function Container2() {
  return (
    <div 
     className="bg-gradient-to-b blur-[120px] from-[#8620e0] h-[681.247px] rounded-[33554400px] shrink-0 to-[#f900f1] w-full" 
      data-name="Container" 
    />
  );
}

function Container1() {
  return (
    <div 
     className="absolute content-stretch flex flex-col items-start left-[-340.62px] opacity-6 rounded-[33554400px] size-[681.247px] top-[-340.62px]" 
      data-name="Container"
   >
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div 
     className="bg-gradient-to-b blur-[140px] from-[#f900f1] h-[705.536px] rounded-[33554400px] shrink-0 to-[#8620e0] w-full" 
      data-name="Container" 
    />
  );
}

function Container3() {
  return (
    <div 
     className="absolute content-stretch flex flex-col items-start left-[1173.23px] opacity-3 rounded-[33554400px] size-[705.536px] top-[208.76px]" 
      data-name="Container"
   >
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div 
     className="bg-gradient-to-b blur-[130px] from-[#8620e0] h-[652.511px] rounded-[33554400px] shrink-0 to-[#8620e0] via-1/2 via-[#f900f1] w-full" 
      data-name="Container" 
    />
  );
}

function Container5() {
  return (
    <div 
     className="absolute content-stretch flex flex-col items-start left-[468.17px] opacity-4 rounded-[33554400px] size-[652.509px] top-[194.87px]" 
      data-name="Container"
   >
      <Container6 />
    </div>
  );
}

function BackgroundContainer() {
  return (
    <div className="absolute h-[846.125px] left-0 overflow-clip top-0 w-full max-w-[1526px]" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

// Icon Components
function TargetIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function GitBranchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3V15" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33719c00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4141780} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pea47f00} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

// Service Card Component
interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  gridPosition: string;
}

function ServiceCard({ icon: Icon, title, description, gridPosition }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     className={`bg-[#121214] ${gridPosition} h-[110px] md:h-[245.563px] justify-self-stretch relative rounded-[10px] shrink-0 hover:border-[#8620e0] transition-all duration-300 group`}
      data-name="Container"
   >
      <div aria-hidden="true" className="absolute border border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#8620e0] transition-colors duration-300" />
      
      <div className="flex md:flex-col items-start gap-4 md:gap-0 p-4 md:pb-px md:pt-[25px] md:px-[25px] relative h-full">
        <div className="bg-gradient-to-b flex-shrink-0 from-[#8620e0] to-[#f900f1] rounded-[10px] size-[40px] md:size-[48px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-name="Container">
          <div className="scale-[0.85] md:scale-100">
            <Icon />
          </div>
        </div>
        
        <div className="flex-1 md:flex-none flex flex-col justify-start md:mt-4 min-w-0 gap-2 md:gap-3">
          <h3 
           className="font-light text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white" 
            style={{ fontVariationSettings: "'wdth' 100" }}
         >
            {title}
          </h3>
          
          <p 
           className="font-extralight text-[13px] md:text-[14px] leading-[20px] md:leading-[22.4px] text-[#a0a0a0] line-clamp-2 md:line-clamp-none" 
            style={{ fontVariationSettings: "'wdth' 100" }}
         >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Profile Section
function ProfileSection() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
     className="relative shrink-0 w-full" 
      data-name="Container"
   >
      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative rounded-full size-[80px] md:size-[90px] flex-shrink-0">
          <div className="overflow-clip relative rounded-full size-full">
            <div className="relative w-full h-full" data-name="perfil sem fundo 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full flex items-center justify-center">
                <img 
                  alt="Eduardo Pires Martins" 
                  className="w-[90%] h-[110%] object-cover" 
                  src={imgPerfilCard}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-4 border-[#42009b] border-solid inset-[-4px] pointer-events-none rounded-full" />
        </div>
        
        <div className="flex flex-col gap-1">
          <p 
           className="font-light text-[16px] md:text-[15px] text-white leading-normal" 
            style={{ fontVariationSettings: "'wdth' 100" }}
         >
            Eduardo Pires Martins
          </p>
          <p 
           className="font-light text-[13px] md:text-[12px] text-white/80 leading-normal" 
            style={{ fontVariationSettings: "'wdth' 100" }}
         >
            @epmartins.io
          </p>
          
          <p 
           className="font-extralight italic text-[#a0a0a0] text-[11px] md:text-[14px] leading-normal md:leading-[27px] whitespace-nowrap mt-1 md:mt-2"
            style={{ fontVariationSettings: "'wdth' 100" }}
         >
            Uso tecnologia para entregar soluções em produtos escaláveis e de impacto.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export const ServicesSection = memo(function ServicesSection() {
  const services = [
    {
      icon: TargetIcon,
      title: 'Definição de Produto',
      description: 'Transformo problemas ambíguos em visão clara. Ajudo a entender o que construir, para quem e por quê.',
      gridPosition: 'col-1 row-1',
    },
    {
      icon: Code,
      title: 'Engenharia de Software',
      description: 'Construo sistemas robustos e escaláveis. Arquitetura sólida, código limpo e soluções que resolvem problemas reais.',
      gridPosition: 'col-2 row-1',
    },
    {
      icon: GitBranchIcon,
      title: 'Integração Produto-Tech',
      description: 'Conecto visão de negócio com realidade técnica. Background em engenharia para decisões mais eficientes.',
      gridPosition: 'col-3 row-1',
    },
    {
      icon: ZapIcon,
      title: 'Execução e Impacto',
      description: 'Foco em entregar valor, não features. Métricas certas, validação rápida e ajustes contínuos.',
      gridPosition: 'col-4 row-1',
    },
  ];

  return (
    <section
      id="servicos"
     className="relative bg-[#0A0A0F] w-full"
   >
      {/* O que faço Section - Mobile */}
      <div className="md:hidden w-full">
        <ServicesSectionMobile />
      </div>

      {/* O que faço Section - Desktop */}
      <div className="hidden md:block relative w-full pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-20 lg:pb-32">
        <BackgroundContainer />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-stretch flex flex-col items-start w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
             className="relative shrink-0 w-full mb-0" 
              data-name="Container"
           >
              <h2 className="leading-[normal] text-[32px] md:text-[42px] lg:text-[52px] text-white mb-1">
                O que eu faço
              </h2>
              
              <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mb-3" />
            </motion.div>

            {/* Desktop Asset - Posicionado no lado direito, acima dos cards */}
            <div className="relative w-full mb-8 md:mb-10">
              <div className="flex justify-between items-center gap-12" style={{ perspective: '1200px' }}>
                {/* Texto de posicionamento */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1,
                  }}
                 className="flex-1 max-w-[600px]"
               >
                  <p 
                   className="font-extralight text-[18px] leading-[32px] text-[#e0e0e0]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                 >
                    Construo <span className="text-white">produtos digitais escaláveis</span> — sites, sistemas e aplicações que combinam <span className="text-white">excelência técnica</span> com <span className="text-white">visão estratégica de produto</span>.
                  </p>
                  <p 
                   className="font-extralight text-[18px] leading-[32px] text-[#e0e0e0] mt-4" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                 >
                    Da <span className="text-white">estratégia ao deploy</span>: entrego soluções que geram <span className="bg-gradient-to-r from-[#8620e0] to-[#f900f1] bg-clip-text text-transparent">resultados mensuráveis</span> e <span className="text-white">crescimento real</span> para o negócio.
                  </p>
                </motion.div>

                {/* Asset isométrico */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                  }}
                 className="relative"
               >
                  {/* Asset principal com isometria "deitado no chão" */}
                  <div 
                   className="w-[483px] h-[337.993px]"
                    style={{ 
                      transform: 'rotateX(60deg) rotateZ(45deg)',
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                    }}
                 >
                    <DesktopAssets />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="gap-3 md:gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full mb-8 md:mb-10" data-name="Container">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gridPosition={service.gridPosition}
                />
              ))}
            </div>

            <ProfileSection />
          </div>
        </div>
      </div>
    </section>
  );
});
