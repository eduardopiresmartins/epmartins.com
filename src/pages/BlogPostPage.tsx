import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPostsContent } from "../data/blogPostsContent";
import { useNewsletter } from "../hooks/useNewsletter";
import { SEOHead } from "../components/SEOHead";
import imgImageEduardoPires from "figma:asset/06024e64242bc12b2a45a9b240e16d6c54f04b14.png";

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const { email, setEmail, handleSubmit, isLoading } = useNewsletter();
  const [post, setPost] = useState<
    | (typeof blogPostsContent)[keyof typeof blogPostsContent]
    | null
 >(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (
      id &&
      blogPostsContent[id as keyof typeof blogPostsContent]
    ) {
      setPost(
        blogPostsContent[id as keyof typeof blogPostsContent],
      );
    }
  }, [id]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    window.open(
      shareUrls[platform as keyof typeof shareUrls],
      "_blank",
      "width=600,height=400",
    );
  };

  if (!post) {
    const breadcrumbs = [
      { name: 'Home', url: '/', position: 1 },
      { name: 'Blog', url: '/blog', position: 2 },
      { name: 'Post não encontrado', url: '/blog/post-nao-encontrado', position: 3 },
    ];

    return (
      <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center">
        <SEOHead
          title="Post não encontrado | Eduardo Pires"
          description="O conteúdo solicitado não foi encontrado."
          type="website"
          breadcrumbs={breadcrumbs}
        />
        <div className="text-center">
          <h1 className="text-4xl mb-4 font-light">
            Post não encontrado
          </h1>
          <Link
            to="/blog"
           className="text-[#8620e0] hover:underline font-light"
         >
            Voltar ao blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white w-full">
      <SEOHead
        title={`${post.title} | Eduardo Pires`}
        description={post.excerpt}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.date}
        author={post.author}
        tags={post.tags}
        breadcrumbs={[
          { name: 'Home', url: '/', position: 1 },
          { name: 'Blog', url: '/blog', position: 2 },
          { name: post.title, url: `/blog/${id}`, position: 3 },
        ]}
      />
      {/* Header Navigation */}
      <header className="pt-24 pb-8 px-6 md:px-8">
        <div className="max-w-[780px] mx-auto">
          <Link
            to="/blog"
           className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors font-light text-[15px]"
         >
            <ArrowLeft size={18} />
            Voltar ao blog
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <article className="px-6 md:px-8 pb-20">
        <div className="max-w-[780px] mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-[#8620e0]/10 text-[#8620e0] text-[13px] rounded font-light">
              {post.category}
            </span>
          </div>

          {/* Title - Saira Medium */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
           className="text-[32px] md:text-[48px] leading-[1.2] mb-8 font-medium text-white tracking-tight"
         >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-[#707070] text-[14px] mb-12 font-light">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
           className="relative w-full mb-16 rounded-lg overflow-hidden"
         >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
             className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Reading Content - Editorial Layout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
           className="prose-custom"
         >
            {post.content.map((section, index) => {
              // Paragraph
              if (section.type === "paragraph") {
                return (
                  <p
                    key={index}
                   className="text-[#c0c0c0] text-[18px] md:text-[19px] leading-[1.75] mb-6 font-extralight"
                 >
                    {section.text}
                  </p>
                );
              }

              // Heading - Saira Light
              if (section.type === "heading") {
                return (
                  <h2
                    key={index}
                   className="text-white text-[24px] md:text-[28px] leading-[1.3] mt-12 mb-5 font-light tracking-tight"
                 >
                    {section.text}
                  </h2>
                );
              }

              // List
              if (section.type === "list") {
                return (
                  <ul
                    key={index}
                   className="mb-8 space-y-3 pl-6"
                 >
                    {section.items?.map((item, i) => (
                      <li
                        key={i}
                       className="text-[#c0c0c0] text-[18px] md:text-[19px] leading-[1.75] font-extralight relative before:content-['•'] before:absolute before:left-[-20px] before:text-[#8620e0]"
                     >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Quote
              if (section.type === "quote") {
                return (
                  <blockquote
                    key={index}
                   className="border-l-[3px] border-[#8620e0]/40 pl-6 py-1 my-10 text-[#d0d0d0] text-[20px] md:text-[22px] leading-[1.6] italic font-light"
                 >
                    {section.text}
                  </blockquote>
                );
              }

              return null;
            })}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8620e0]/20 to-transparent my-16" />

          {/* Tags Section */}
          <div className="mb-16">
            <h3 className="text-[#a0a0a0] text-[14px] mb-4 font-light uppercase tracking-wide">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                 className="px-3 py-1.5 bg-[#121214] border border-[#8620e0]/20 rounded text-[13px] text-[#a0a0a0] hover:border-[#8620e0]/50 transition-colors font-light"
               >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mb-16">
            <h3 className="text-[#a0a0a0] text-[14px] mb-4 font-light uppercase tracking-wide">
              Compartilhar
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare("facebook")}
               className="p-3 rounded-lg bg-[#121214] border border-[#8620e0]/20 hover:border-[#8620e0]/50 hover:bg-[#8620e0]/5 transition-all"
                aria-label="Compartilhar no Facebook"
             >
                <Facebook
                  size={18}
                 className="text-[#a0a0a0]"
                />
              </button>
              <button
                onClick={() => handleShare("twitter")}
               className="p-3 rounded-lg bg-[#121214] border border-[#8620e0]/20 hover:border-[#8620e0]/50 hover:bg-[#8620e0]/5 transition-all"
                aria-label="Compartilhar no Twitter"
             >
                <Twitter size={18} className="text-[#a0a0a0]" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
               className="p-3 rounded-lg bg-[#121214] border border-[#8620e0]/20 hover:border-[#8620e0]/50 hover:bg-[#8620e0]/5 transition-all"
                aria-label="Compartilhar no LinkedIn"
             >
                <Linkedin
                  size={18}
                 className="text-[#a0a0a0]"
                />
              </button>
            </div>
          </div>

          {/* Author Box - Figma Design */}
          <div className="bg-[#0d0d11] rounded-2xl p-6 md:p-10 border border-[#8620e0]/10">
            <h3 className="text-white text-[17px] md:text-[18px] mb-7 md:mb-6 font-light">
              Sobre o autor
            </h3>

            {/* Author Container - Mobile Vertical / Desktop Horizontal */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6">
              {/* Avatar Container */}
              <div className="relative rounded-[33554400px] shrink-0 size-[80px] md:size-[96px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
                  {/* Image Container */}
                  <div className="h-[76px] md:h-[92px] relative shrink-0 w-full">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt={post.author}
                       className="absolute h-[136.52%] left-[0.48%] max-w-none top-[0.37%] w-[99.59%]"
                        src={imgImageEduardoPires}
                      />
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                 className="absolute border-2 border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]"
                />
              </div>

              {/* Text Container */}
              <div className="flex-1 text-center md:text-left">
                {/* Name */}
                <div className="mb-3 md:mb-3">
                  <p
                   className="font-light leading-[25.5px] text-[17px] text-white"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                    }}
                 >
                    {post.author}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="font-extralight leading-[28px] md:leading-[27.2px] not-italic text-[#a0a0a0] text-[15px] md:text-[16px] max-w-[380px] md:max-w-none mx-auto md:mx-0">
                    Profissional de Tecnologia especializado em
                    Produto, com foco em descoberta, design
                    estratégico e entrega de soluções que
                    resolvem problemas reais e geram impacto
                    mensurável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer
        onNewsletterSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        isLoading={isLoading}
      />
    </div>
  );
}