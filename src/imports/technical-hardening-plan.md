Atue como Principal Frontend Engineer com experiência em arquitetura de aplicações React em produção, performance crítica, otimização de bundle, Web Vitals e readiness para escala.

Seu objetivo NÃO é reorganizar visualmente o projeto.

Seu objetivo é preparar este projeto para nível “Founder Technical Grade”.

🎯 OBJETIVO

Transformar o projeto atual em:

Performance A+ real (não estimada)

Bundle enxuto e auditado

Web Vitals otimizadas

Estrutura pronta para escalar

Zero dívida técnica silenciosa

⚠️ REGRAS CRÍTICAS

NÃO alterar layout

NÃO alterar UI

NÃO alterar animações

NÃO remover efeitos

NÃO quebrar responsividade

NÃO modificar identidade visual

Todas as melhorias devem ser internas e invisíveis ao usuário.

ETAPA 1 — BUNDLE REAL (NÃO ESTIMATIVA)

Gerar build de produção.

Executar bundle analyzer.

Fornecer:

Tamanho total do JS (minificado e gzip)

Tamanho por chunk

Top 10 dependências mais pesadas

Lista real de componentes incluídos no bundle

Confirmar se os 40+ componentes UI estão realmente no bundle final

Se houver:

Barrel exports mal configurados

Imports globais desnecessários

Dependências pesadas desnecessárias

Refatorar para permitir tree-shaking real.

ETAPA 2 — TREE SHAKING E DEAD CODE REAL

Identificar arquivos nunca importados.

Identificar SVGs órfãos.

Identificar hooks e utils não usados.

Identificar bibliotecas parcialmente usadas.

Aplicar:

Importações diretas em vez de barrel export se necessário.

Code splitting granular.

Remoção segura de código órfão.

Validar novamente o bundle após alterações.

ETAPA 3 — WEB VITALS

Medir antes e depois:

LCP

CLS

TBT

FCP

INP

Meta:

LCP < 2.5s

CLS < 0.1

TBT < 200ms

Se necessário:

Otimizar imagens

Ajustar preload estratégico

Melhorar lazy loading

Evitar layout shift

ETAPA 4 — RENDER PERFORMANCE

Usar React Profiler.

Identificar:

Componentes que re-renderizam sem necessidade

Dependências incorretas em useEffect

useMemo mal aplicado

Memoização desnecessária

Aplicar apenas memoização que traga ganho real.

Não usar memo por estética.

ETAPA 5 — ACESSIBILIDADE (WCAG 2.1)

Validar:

Contraste de cores

Foco via teclado

aria-labels

Semântica correta

Ordem de tabulação

Garantir score ≥ 95 em Accessibility no Lighthouse.

ETAPA 6 — SEO TÉCNICO

Validar:

Meta tags corretas

Open Graph

Twitter Cards

Canonical URLs

Sitemap

Robots.txt

Structured data (JSON-LD)

ETAPA 7 — SEGURANÇA BÁSICA

Validar:

Headers seguros (CSP, X-Frame-Options, etc.)

Sanitização de inputs

Nenhum dangerouslySetInnerHTML inseguro

Proteção contra vazamento de env

ETAPA 8 — RELATÓRIO FINAL

Gerar relatório contendo:

Métricas reais antes/depois

Bundle real antes/depois

Lista de dependências removidas

Lista de arquivos órfãos removidos

Score Lighthouse antes/depois

Justificativa técnica de cada otimização

Garantia de zero regressão

Se não houver dados mensuráveis, não considerar como hardening completo.

PADRÃO FINAL

O projeto deve:

Ter arquitetura clara

Ser escalável

Ter bundle otimizado

Ter Web Vitals dentro do padrão

Ter código limpo

Estar pronto para produção de alto tráfego

Objetivo final:

Este site deve refletir o nível técnico de um fundador que entende profundamente produto e engenharia.