# 🖼️ Configuração de Imagem Open Graph (OG)

## O que é Open Graph?

Open Graph é um padrão que permite compartilhar seu site em redes sociais (WhatsApp, Facebook, LinkedIn, Telegram, etc.) com uma **preview visual bonita**.

Quando você compartilha um link, a rede social lê as meta tags Open Graph e exibe:
- 📸 **Imagem de capa** (og:image)
- 📝 **Título** (og:title)
- 📄 **Descrição** (og:description)

## Status Atual

✅ **Configuração**: Já implementado em `src/components/SEOHead.tsx`
✅ **Imagem**: Adicionada em `public/og-image.png`

## Meta Tags Implementadas

```html
<!-- Open Graph -->
<meta property="og:title" content="Eduardo Pires | Produto & Estratégia">
<meta property="og:description" content="Transformo problemas de negócio em decisões de produto...">
<meta property="og:image" content="https://epmartins.com.br/og-image.png">
<meta property="og:url" content="https://epmartins.com.br/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Eduardo Pires">
<meta property="og:locale" content="pt_BR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Eduardo Pires | Produto & Estratégia">
<meta name="twitter:image" content="https://epmartins.com.br/og-image.png">
<meta name="twitter:creator" content="@eduardopires">
```

## Como Testar

### Teste 1: Open Graph Debugger (Facebook)
1. Vá para: https://developers.facebook.com/tools/debug/og/object/
2. Digite: `https://www.epmartins.com.br/`
3. Verifique se a imagem aparecer corretamente

### Teste 2: Twitter Card Validator
1. Vá para: https://cards-dev.twitter.com/validator
2. Digite: `https://www.epmartins.com.br/`
3. Confira se og:image foi detectado

### Teste 3: WhatsApp
1. Copie o link: `https://www.epmartins.com.br/`
2. Cole em um chat do WhatsApp
3. Após carregar, você verá a preview com:
   - 📸 Sua imagem og-image.png
   - 📝 Título do site
   - 📄 Descrição

### Teste 4: LinkedIn
1. Cole `https://www.epmartins.com.br/` em um post
2. Clique em "Pré-visualizar"
3. Veja a imagem e dados sendo exibidos

## Customização por Página

Cada página pode ter sua própria imagem OG. Por exemplo:

```tsx
// Em HomePage
<SEOHead
  title="Eduardo Pires - Portfólio"
  description="Transformo ideias em produtos digitais"
  image="/og-home.png"  // Imagem específica da home
/>

// Em BlogPostPage
<SEOHead
  title="Como Buildar Produtos de Impacto"
  image={post.imageUrl}  // Imagem do artigo
  type="article"
/>
```

## Próximos Passos

1. ✅ Adicionada `og-image.png` em `public/`
2. ✅ Fazer `git push` para GitHub
3. ✅ Amplify redeploy automaticamente
4. ✅ Testar em cada rede social após deploy

---

**Dica**: Se a imagem não aparecer imediatamente no WhatsApp ou Facebook, tente:
- Abrir em incógnito
- Usar o Facebook/Twitter debugger para "limpar cache" da URL
- Aguardar alguns minutos para propagação
