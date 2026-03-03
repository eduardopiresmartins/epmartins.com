import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DrTakedaMockup } from './DrTakedaMockup';
import drTakedaCover from 'figma:asset/5757bc52aa36be3e0bdcdf8cf135aa254639ba30.png';
import paroquiaCover from 'figma:asset/fcf94d95788e59d4104920a238dce94eef876bff.png';
import collaboreCover from 'figma:asset/a66c742ef5c3d803bc48c175612b68b7f86c3da6.png';
import { ParallaxBackground } from './ParallaxBackground';
import { memo } from 'react';

// Optimized: Memoized for performance
export const PortfolioSection = memo(function PortfolioSection() {
  const projects = [
    {
      title: 'Collabore App',
      type: 'Plataforma',
      category: 'App',
      year: '2026',
      description: 'Plataforma que conecta ONGs a voluntários, facilitando o encontro entre quem precisa de ajuda e quem quer contribuir. Interface intuitiva focada em impacto social e engajamento comunitário.',
      image: collaboreCover,
      link: 'https://collabore.figma.site/',
      tags: ['UX/UI', 'Colaboração', 'Produtividade'],
    },
    {
      title: 'Paróquia São Pio X',
      type: 'Institucional',
      category: 'Site',
      year: '2021',
      description: 'Site institucional da Paróquia São Pio X da Diocese de Campo Limpo. Foco em comunicação com a comunidade, eventos e acessibilidade às informações paroquiais.',
      image: paroquiaCover,
      link: 'https://paroquiasaopiox.figma.site/',
      tags: ['Design', 'Comunicação', 'Institucional'],
    },
    {
      title: 'Dr Flavio Takeda',
      type: 'Institucional',
      category: 'Site',
      year: '2021',
      description: 'Site institucional focado em apresentação profissional e agendamento de consultas. Design moderno com foco em conversão e experiência do paciente.',
      image: drTakedaCover,
      useFigmaMockup: false,
      link: 'https://drflaviotakeda.figma.site',
      tags: ['Design', 'UX/UI', 'Conversão'],
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-[#0A0A0F] overflow-hidden">
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
            Portfólio
          </h2>
          <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mb-16" />
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
             className="group"
           >
              {/* Divider Line */}
              <div className="h-[1px] w-full mb-8">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1189 1">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0" x2="1189.01" y1="1" y2="1" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9532F7" />
                      <stop offset="1" stopColor="#150D1D" />
                    </linearGradient>
                  </defs>
                  <line stroke={`url(#gradient-${index})`} x2="100%" y1="0.5" y2="0.5" />
                </svg>
              </div>

              <div className="grid md:grid-cols-4 gap-[16px] items-start">
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                 className="md:col-span-1 relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 max-w-[200px] mx-auto md:mx-0"
               >
                  {project.useFigmaMockup ? (
                    <div className="w-full aspect-square relative overflow-hidden rounded-lg">
                      <DrTakedaMockup className="absolute inset-0 w-full h-full" />
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                     className="w-full aspect-square object-cover rounded-lg"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                       className="flex items-center gap-2 bg-gradient-to-r from-[#8620e0] to-[#f900f1] px-4 py-2 rounded-lg text-[14px]"
                       
                     >
                        Ver Projeto
                        <ExternalLink size={16} />
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                       className="flex items-center gap-2 bg-gradient-to-r from-[#8620e0] to-[#f900f1] px-4 py-2 rounded-lg text-[14px]"
                       
                     >
                        Ver Projeto
                        <ExternalLink size={16} />
                      </motion.button>
                    )}
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-[32px] md:text-[40px] leading-[1.2] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#a0a0a0] text-[16px] mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <p className="text-[14px] text-[#8620e0] mb-1">
                        {project.category}
                      </p>
                      <p className="text-[24px] leading-tight">
                        {project.type}
                      </p>
                      <p className="text-[16px] text-white mt-1">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                       className="px-3 py-1 bg-[#8620e0]/20 border border-[#8620e0]/40 rounded-md text-[12px] text-[#8620e0]"
                       
                     >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});