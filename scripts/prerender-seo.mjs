import fs from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://www.epmartins.com.br';
const SITE_NAME = 'Eduardo Pires';
const DIST_DIR = path.resolve('dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');
const ROUTES_PATH = path.resolve('src/data/routeSeo.json');

function toAbsoluteUrl(url = '/') {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
}

function escapeHtml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildStructuredData(route) {
  const canonicalUrl = route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`;
  const image = toAbsoluteUrl(route.image || '/og-image.png');

  return {
    '@context': 'https://schema.org',
    '@type': route.type === 'article' ? 'Article' : 'WebSite',
    '@id': canonicalUrl,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    image,
    author: {
      '@type': 'Person',
      name: route.author || SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.png`,
      },
    },
    ...(route.publishedTime ? { datePublished: route.publishedTime, dateModified: route.publishedTime } : {}),
    ...(route.tags?.length ? { keywords: route.tags.join(', ') } : {}),
  };
}

function buildHeadMarkup(route) {
  const canonicalUrl = route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`;
  const image = toAbsoluteUrl(route.image || '/og-image.png');
  const tags = route.tags || [];
  const structuredData = JSON.stringify(buildStructuredData(route));

  const metaTags = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="author" content="${escapeHtml(route.author || SITE_NAME)}" />`,
    tags.length ? `<meta name="keywords" content="${escapeHtml(tags.join(', '))}" />` : '',
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:type" content="${route.type || 'website'}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:creator" content="@eduardopires" />`,
    route.publishedTime ? `<meta property="article:published_time" content="${route.publishedTime}" />` : '',
    route.publishedTime ? `<meta property="article:modified_time" content="${route.publishedTime}" />` : '',
    route.author ? `<meta property="article:author" content="${escapeHtml(route.author)}" />` : '',
    ...tags.map((tag) => `<meta property="article:tag" content="${escapeHtml(tag)}" />`),
    `<script type="application/ld+json">${structuredData}</script>`,
  ].filter(Boolean);

  return metaTags.join('\n    ');
}

async function writeRouteHtml(route, template) {
  const headMarkup = buildHeadMarkup(route);
  const html = template.replace(/<title>.*?<\/title>/s, headMarkup);
  const outputPath = route.path === '/'
    ? path.join(DIST_DIR, 'index.html')
    : path.join(DIST_DIR, route.path.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, 'utf8');
}

async function main() {
  const [template, routesRaw] = await Promise.all([
    fs.readFile(TEMPLATE_PATH, 'utf8'),
    fs.readFile(ROUTES_PATH, 'utf8'),
  ]);

  const routes = JSON.parse(routesRaw);

  await Promise.all(routes.map((route) => writeRouteHtml(route, template)));
}

await main();
