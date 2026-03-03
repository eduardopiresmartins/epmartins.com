import produtoBacklogImage from 'figma:asset/b4b4a94a497fc50d956f66b6fb56c8946044d403.png';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'produto-nao-comeca-no-backlog',
    title: 'Produto não começa no backlog, começa nas perguntas certas',
    excerpt: 'Antes de pensar em solução, tecnologia ou prazo, existe um ponto que costuma ser ignorado: entender de verdade o problema.',
    date: '2026-02-12',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: produtoBacklogImage,
    readTime: '5 min',
  },
  {
    id: 8,
    slug: 'priorizacao-tradeoffs',
    title: 'Priorização não é ciência exata, é clareza de trade-offs',
    excerpt: 'Todo "sim" é um "não" disfarçado. Decisões de produto exigem entender o que não fazer e por quê.',
    date: '2026-02-05',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '6 min',
  },
  {
    id: 9,
    slug: 'tech-como-meio',
    title: 'Tech como meio: quando engenharia serve ao produto',
    excerpt: 'Background técnico ajuda a tomar decisões melhores, não a construir tudo. O que não fazer importa mais que o stack.',
    date: '2026-01-22',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '7 min',
  },
  {
    id: 10,
    slug: 'metricas-que-mentem',
    title: 'Métricas que mentem: vanity vs impacto real',
    excerpt: 'Quantas features entregamos não diz nada. A pergunta certa: qual problema isso resolveu?',
    date: '2026-01-10',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '5 min',
  },
  {
    id: 11,
    slug: 'fintechs-negocio-tech',
    title: 'O que aprendi em fintechs sobre conectar negócio e tech',
    excerpt: 'Pagamentos, crédito e integrações bancárias ensinam uma coisa: não existe produto sem entender viabilidade técnica.',
    date: '2025-12-15',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '8 min',
  },
  {
    id: 2,
    slug: 'como-criar-site-moderno-2024',
    title: 'Como criar um site moderno em 2024',
    excerpt: 'Descubra as melhores práticas e tendências de design para criar websites modernos e responsivos.',
    date: '2024-01-15',
    author: 'Eduardo Pires',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1765648763932-43a3e2f8f35c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudCUyMGNhcmVlciUyMGdyb3d0aCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTAwOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '8 min',
  },
  {
    id: 3,
    slug: 'ui-ux-principios-fundamentais',
    title: 'UI/UX: Princípios fundamentais',
    excerpt: 'Aprenda os princípios essenciais de design de interface e experiência do usuário.',
    date: '2024-01-10',
    author: 'Eduardo Pires',
    category: 'UX/UI',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2NDA5Njc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '6 min',
  },
  {
    id: 4,
    slug: 'otimizacao-performance-web',
    title: 'Otimização de performance web',
    excerpt: 'Técnicas avançadas para melhorar o desempenho e velocidade do seu website.',
    date: '2024-01-05',
    author: 'Eduardo Pires',
    category: 'Desenvolvimento',
    image: 'https://images.unsplash.com/photo-1763568258179-fa561d623323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBwZXJmb3JtYW5jZSUyMGNvZGluZ3xlbnwxfHx8fDE3NjQxODAyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '10 min',
  },
  {
    id: 5,
    slug: 'design-responsivo-mobile-first',
    title: 'Design responsivo: Mobile First',
    excerpt: 'Por que começar pelo mobile pode transformar seu processo de design.',
    date: '2023-12-28',
    author: 'Eduardo Pires',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1691073112675-9685bc6779bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwZGVzaWdufGVufDF8fHx8MTc2NDE4MDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '7 min',
  },
  {
    id: 6,
    slug: 'acessibilidade-na-web',
    title: 'Acessibilidade na Web',
    excerpt: 'Como tornar seu site acessível para todos os usuários, incluindo pessoas com deficiência.',
    date: '2023-12-20',
    author: 'Eduardo Pires',
    category: 'Acessibilidade',
    image: 'https://images.unsplash.com/photo-1634944902853-3e977c2de8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQxNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '9 min',
  },
  {
    id: 7,
    slug: 'seo-para-desenvolvedores',
    title: 'SEO para Desenvolvedores',
    excerpt: 'Guia prático de otimização para mecanismos de busca focado em aspectos técnicos.',
    date: '2023-12-15',
    author: 'Eduardo Pires',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzY0MTgwMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '12 min',
  },
];

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}