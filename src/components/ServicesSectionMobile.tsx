import { motion } from 'motion/react';
import { memo } from 'react';
import svgPaths from '../imports/svg-hdbb7exie1';
import imgImage from 'figma:asset/ea8d02fe02c3a4db1709aef520bbbdc01f22d44e.png';
import imgPerfilSemFundo1 from 'figma:asset/5ca8857176de616060a5b89b6f99d84982bc65a3.png';
import { Code } from 'lucide-react';

// Background Gradient Components
function Container2() {
  return <div className="bg-gradient-to-b blur-[120px] from-[#8620e0] h-[681.247px] rounded-[33554400px] shrink-0 to-[#f900f1] w-full" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-340.62px] opacity-6 rounded-[33554400px] size-[681.247px] top-[-340.62px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return <div className="bg-gradient-to-b blur-[140px] from-[#f900f1] h-[705.536px] rounded-[33554400px] shrink-0 to-[#8620e0] w-full" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1173.23px] opacity-3 rounded-[33554400px] size-[705.536px] top-[208.76px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return <div className="bg-gradient-to-b blur-[130px] from-[#8620e0] h-[652.511px] rounded-[33554400px] shrink-0 to-[#8620e0] via-1/2 via-[#f900f1] w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[468.17px] opacity-4 rounded-[33554400px] size-[652.509px] top-[194.87px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function BackgroundContainer() {
  return (
    <div className="absolute h-[846.125px] left-0 overflow-clip top-0 w-full max-w-[411.195px]" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

// Card 1: Execução e Impacto
function ExecutionIcon() {
  return (
    <div className="h-5 w-5 overflow-clip relative flex-shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 20.392 20.392">
        <g>
          <path d={svgPaths.pe2d7130} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" />
        </g>
      </svg>
    </div>
  );
}

// Card 2: Integração Produto-Tech
function IntegrationIcon() {
  return (
    <div className="h-5 w-5 overflow-clip relative flex-shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 20.392 20.392">
        <g>
          <path d="M0.849646 0.849646V11.0454" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(5.098, 2.549)" />
          <path d={svgPaths.p2028f100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(2.549, 2.549)" />
          <path d={svgPaths.pa591b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(12.745, 12.745)" />
          <path d={svgPaths.p3988f780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(7.647, 7.647)" />
        </g>
      </svg>
    </div>
  );
}

// Card 3: Priorização e Trade-offs
function PrioritizationIcon() {
  return (
    <div className="h-5 w-5 overflow-clip relative flex-shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 20.392 20.392">
        <g>
          <path d={svgPaths.p1a7f3070} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(1.699, 6.797)" />
          <path d={svgPaths.p1a7f3070} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(13.595, 6.797)" />
          <path d="M0.849645 0.849645H9.3461" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(5.948, 17.843)" />
          <path d="M0.849645 0.849645V16.1433" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(10.196, 2.549)" />
          <path d={svgPaths.p4765000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(2.549, 4.248)" />
        </g>
      </svg>
    </div>
  );
}

// Card 4: Definição de Produto
function DefinitionIcon() {
  return (
    <div className="h-5 w-5 overflow-clip relative flex-shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 20.392 20.392">
        <g>
          <path d={svgPaths.p1ce0b100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(1.699, 1.699)" />
          <path d={svgPaths.p319b3900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(5.098, 5.098)" />
          <path d={svgPaths.p2ea9e800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69929" transform="translate(8.497, 8.497)" />
        </g>
      </svg>
    </div>
  );
}

export const ServicesSectionMobile = memo(function ServicesSectionMobile() {
  return (
    <section className="bg-[#0a0a0f] relative w-full py-12 overflow-hidden" data-name="O que Faço">
      <BackgroundContainer />
      
      <div className="relative z-10 px-4">
        {/* Título da seção */}
        <div className="mb-6">
          <h2 
           className="font-light text-[32px] leading-normal text-white mb-4"
            style={{ fontVariationSettings: "'wdth' 100" }}
         >
            O que eu faço
          </h2>
          <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mb-8" />
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-3 mb-5">
          {/* Card 1: Execução e Impacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="bg-[#121214] rounded-[10px] h-[130px] relative group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1e]"
         >
            <div className="absolute border border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#8620e0] transition-colors duration-300" />
            <div className="flex gap-4 items-start p-5 h-full">
              <div className="bg-gradient-to-b from-[#8620e0] to-[#f900f1] rounded-[10px] size-[40px] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ExecutionIcon />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 
                 className="font-light text-[16px] leading-[24px] text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
               >
                  Execução e Impacto
                </h3>
                <p className="font-extralight text-[13px] leading-[20px] text-[#a0a0a0]">
                  Foco em entregar valor, não features. Métricas certas, validação rápida e ajustes contínuos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Integração Produto-Tech */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-[#121214] rounded-[10px] h-[130px] relative group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1e]"
         >
            <div className="absolute border border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#8620e0] transition-colors duration-300" />
            <div className="flex gap-4 items-start p-5 h-full">
              <div className="bg-gradient-to-b from-[#8620e0] to-[#f900f1] rounded-[10px] size-[40px] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IntegrationIcon />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 
                 className="font-light text-[16px] leading-[24px] text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
               >
                  Integração Produto-Tech
                </h3>
                <p className="font-extralight text-[13px] leading-[20px] text-[#a0a0a0]">
                  Conecto visão de negócio com realidade técnica. Background em engenharia para decisões mais eficientes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Priorização e Trade-offs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
           className="bg-[#121214] rounded-[10px] h-[130px] relative group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1e]"
         >
            <div className="absolute border border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#8620e0] transition-colors duration-300" />
            <div className="flex gap-4 items-start p-5 h-full">
              <div className="bg-gradient-to-b from-[#8620e0] to-[#f900f1] rounded-[10px] size-[40px] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 
                 className="font-light text-[16px] leading-[24px] text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
               >
                  Engenharia de Software
                </h3>
                <p className="font-extralight text-[13px] leading-[20px] text-[#a0a0a0]">
                  Construo sistemas robustos e escaláveis. Arquitetura sólida, código limpo e soluções que resolvem problemas reais.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Definição de Produto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
           className="bg-[#121214] rounded-[10px] h-[130px] relative group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1e]"
         >
            <div className="absolute border border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#8620e0] transition-colors duration-300" />
            <div className="flex gap-4 items-start p-5 h-full">
              <div className="bg-gradient-to-b from-[#8620e0] to-[#f900f1] rounded-[10px] size-[40px] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DefinitionIcon />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 
                 className="font-light text-[16px] leading-[24px] text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
               >
                  Definição de Produto
                </h3>
                <p className="font-extralight text-[13px] leading-[20px] text-[#a0a0a0]">
                  Transformo problemas ambíguos em visão clara. Ajudo a entender o que construir, para quem e por quê.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Perfil */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
         className="flex items-start gap-4"
       >
          <div className="relative rounded-full size-[80px] flex-shrink-0">
            <div className="overflow-clip relative rounded-full size-full">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full flex items-center justify-center">
                  <img 
                    alt="Eduardo Pires Martins" 
                    className="w-[90%] h-[110%] object-cover" 
                    src={imgPerfilSemFundo1}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-4 border-[#42009b] border-solid inset-[-4px] pointer-events-none rounded-full" />
          </div>
          
          <div className="flex flex-col gap-0.5 flex-1">
            <p 
             className="font-light text-[15px] leading-tight text-white"
              style={{ fontVariationSettings: "'wdth' 100" }}
           >
              Eduardo Pires Martins
            </p>
            <p 
             className="font-light text-[12px] leading-tight text-[#a0a0a0]"
              style={{ fontVariationSettings: "'wdth' 100" }}
           >
              @epmartins.io
            </p>
            <p 
             className="font-thin italic text-[10px] leading-normal text-[#a0a0a0] mt-1"
              style={{ fontVariationSettings: "'wdth' 100" }}
           >
              Uso tecnologia para entregar soluções em produtos escaláveis e de impacto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});