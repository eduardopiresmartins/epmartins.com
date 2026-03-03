/**
 * Structured Data (Schema.org) utilities for advanced SEO
 * Generates JSON-LD for Google Rich Snippets
 */

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://eduardopires.com.br').replace(/\/$/, '');

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

/**
 * Generate BreadcrumbList schema for navigation hierarchy
 * Improves click-through rate in search results with breadcrumb display
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Person schema for author/personal brand
 * Displays author info in Google Knowledge Panel
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Eduardo Pires',
    url: SITE_URL,
    jobTitle: 'Product Manager & Strategy Consultant',
    description: 'Especialista em transformar problemas de negócio em decisões de produto.',
    image: `${SITE_URL}/profile.png`,
    sameAs: [
      'https://linkedin.com/in/eduardopiresmartins',
      'https://github.com/eduardopiresmartins',
      'https://twitter.com/eduardopires',
    ],
    knowsAbout: ['Product Management', 'Strategy', 'Business Analysis', 'Digital Products'],
  };
}

/**
 * Generate Organization schema for business entity
 * Improves trust signals and local SEO
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eduardo Pires',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Transformo problemas de negócio em decisões de produto.',
    sameAs: [
      'https://linkedin.com/in/eduardopiresmartins',
      'https://github.com/eduardopiresmartins',
      'https://twitter.com/eduardopires',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contato@eduardopires.com.br',
    },
  };
}

/**
 * Generate LocalBusiness schema (optional, if applicable)
 * Use if you offer services in a specific location
 */
export function generateLocalBusinessSchema(city = 'São Paulo', country = 'Brazil') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eduardo Pires',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: country,
    },
    sameAs: [
      'https://linkedin.com/in/eduardopiresmartins',
      'https://github.com/eduardopiresmartins',
    ],
  };
}

/**
 * Helper to inject JSON-LD into document head
 */
export function injectStructuredData(data: Record<string, any>) {
  let scriptTag = document.querySelector('script[type="application/ld+json"][data-schema]');
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.setAttribute('data-schema', 'true');
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(data);
}
