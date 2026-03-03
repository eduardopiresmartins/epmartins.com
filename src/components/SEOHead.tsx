import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { generateBreadcrumbSchema, generateOrganizationSchema, injectStructuredData } from '../utils/structuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * SEO Component - Otimizado para Web Vitals e Social Sharing
 * Implementa: Open Graph, Twitter Cards, Schema.org JSON-LD
 * 
 * Features:
 * - Meta tags dinâmicos por página
 * - Open Graph completo
 * - Twitter Cards
 * - Structured Data (JSON-LD)
 * - Canonical URLs
 */
export function SEOHead({
  title = 'Eduardo Pires | Produto & Estratégia',
  description = 'Transformo problemas de negócio em decisões de produto. Especialista em conectar estratégia, viabilidade técnica e impacto real.',
  image = '/og-image.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Eduardo Pires',
  tags = [],
  breadcrumbs,
}: SEOHeadProps) {
  const location = useLocation();
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://epmartins.com.br').replace(/\/$/, '');
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (attr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const replaceMultiMetaTags = (property: string, values: string[]) => {
      document.querySelectorAll(`meta[property="${property}"]`).forEach((element) => element.remove());
      values.forEach((value) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = value;
        document.head.appendChild(meta);
      });
    };

    // Basic Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'author', author);
    if (tags.length > 0) {
      updateMetaTag('name', 'keywords', tags.join(', '));
    }

    // Open Graph Meta Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:image:alt', title);
    updateMetaTag('property', 'og:site_name', 'Eduardo Pires');
    updateMetaTag('property', 'og:locale', 'pt_BR');

    if (publishedTime) {
      updateMetaTag('property', 'article:published_time', publishedTime);
    }
    if (modifiedTime) {
      updateMetaTag('property', 'article:modified_time', modifiedTime);
    }
    if (author) {
      updateMetaTag('property', 'article:author', author);
    }
    if (tags.length > 0) {
      replaceMultiMetaTags('article:tag', tags);
    }

    // Twitter Card Meta Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
    updateMetaTag('name', 'twitter:creator', '@eduardopires'); // Ajuste com seu @ real

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Structured Data (JSON-LD) for better SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebSite',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: title,
      description: description,
      image: image,
      author: {
        '@type': 'Person',
        name: author,
        url: siteUrl,
        jobTitle: 'Produto & Estratégia',
        sameAs: [
          'https://linkedin.com/in/eduardopiresmartins',
          'https://github.com/eduardopiresmartins',
          'https://twitter.com/eduardopires',
        ],
      },
      organization: generateOrganizationSchema(),
      publisher: {
        '@type': 'Person',
        name: 'Eduardo Pires',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
      },
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
      ...(tags.length > 0 && { keywords: tags.join(', ') }),
    };

    // Add or update JSON-LD script
    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Add Breadcrumb schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectStructuredData(generateBreadcrumbSchema(breadcrumbs));
    }

    // Cleanup function (optional)
    return () => {
      // Keep meta tags as they'll be updated on next route
    };
  }, [title, description, image, type, canonicalUrl, publishedTime, modifiedTime, author, tags, breadcrumbs]);

  return null; // This component doesn't render anything
}
