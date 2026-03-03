import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { blogPosts } from '../data/blogPosts';
import { useNewsletter } from '../hooks/useNewsletter';
import { GradientBlurBackground } from '../components/GradientBlurBackground';
import { SEOHead } from '../components/SEOHead';

export function BlogPage() {
  const { email, setEmail, handleSubmit, isLoading } = useNewsletter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white w-full">
      <SEOHead 
        title="Blog | Eduardo Pires - Artigos sobre Produto e Estratégia"
        description="Artigos, insights e análises sobre gestão de produto, estratégia, decisões técnicas e impacto em negócio."
        type="website"
        tags={['blog', 'produto', 'estratégia', 'product management', 'tech', 'insights']}
        breadcrumbs={[
          { name: 'Home', url: '/', position: 1 },
          { name: 'Blog', url: '/blog', position: 2 },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <GradientBlurBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
           className="text-center"
         >
            <h1 className="text-5xl md:text-7xl mb-4">
              Blog
            </h1>
            <div className="h-[4px] w-[102px] bg-gradient-to-r from-[#9532f7] to-[#150d1d] mx-auto mb-8" />
            <p className="font-extralight text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
              Artigos, tutoriais e insights sobre tecnologia e produtos
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full px-6 py-4 pl-14 bg-[#121214] border border-[#8620e0]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8620e0] transition-colors"
               
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group bg-[#121214] rounded-2xl overflow-hidden border border-[#8620e0]/20 hover:border-[#8620e0] transition-all duration-300 hover:transform hover:scale-105"
             >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#8620e0]/20 to-[#f900f1]/20">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#8620e0] text-white text-sm rounded-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl mb-3 group-hover:text-[#8620e0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-[15px] leading-[1.6] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[#8620e0] hover:gap-3 transition-all">
                    Ler mais
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-50 text-[#8620e0]" />
              <p className="text-xl text-gray-400">
                Nenhum artigo encontrado para "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-[#121214]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
            <h2 className="text-4xl mb-4">
              Categorias
            </h2>
            <p className="text-gray-400">Explore por tópico</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Design', 'UX/UI', 'Desenvolvimento', 'SEO', 'Acessibilidade', 'Marketing'].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               className="px-6 py-3 border-2 border-[#8620e0] bg-transparent rounded-lg hover:shadow-lg hover:shadow-[#8620e0]/50 hover:border-[#f900f1] transition-all"
             >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Footer 
        onNewsletterSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        isLoading={isLoading}
      />
    </div>
  );
}