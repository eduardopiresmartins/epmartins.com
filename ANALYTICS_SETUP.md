# Google Analytics, Google Tag Manager & Google Ads Setup Guide

Este arquivo documenta como obter os IDs necessários para ativar tracking completo em seu site.

## 1️⃣ Google Analytics 4 (GA4)

### Por que: Rastreia visitas, comportamento de usuário, conversões e ROI.

**Passos:**
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma nova propriedade (ou use existente)
3. Vá em **Administrador** → **Propriedades e Apps** → **Fluxo de dados**
4. Selecione seu **Web stream**
5. Copie o **ID de Medição** (format: `G-XXXXXXXXXX`)

**Exemplo:**
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 2️⃣ Google Tag Manager (GTM)

### Por que: Gerencia tags (GA4, Facebook Pixel, etc) sem precisar redeployer a cada mudança.

**Passos:**
1. Acesse [Google Tag Manager](https://tagmanager.google.com/)
2. Crie uma nova conta (ou use existente)
3. Selecione seu contêiner web
4. Acesse **Administrador** → **Contas e Contêineres**
5. Copie o **ID do Contêiner** (format: `GTM-XXXXXX`)

**Exemplo:**
```
VITE_GTM_ID=GTM-XXXXXX
```

**Nota:** Se usar GTM, configure dentro dele:
- Google Analytics 4 tag
- Trigger: All Pages (pageview)

---

## 3️⃣ Google Ads Conversion Tracking

### Por que: Rastreia conversões de campanhas pagas (CPC, CPM) para medir ROI.

**Passos:**
1. Acesse [Google Ads](https://ads.google.com/)
2. Vá em **Ferramentas e Configurações** → **Conversões** (na coluna esquerda)
3. Clique em **Nova conversão** → Selecione **Website**
4. Configure: Nome = "Contato", Valor = "1" (ou seu valor de conversão)
5. Clique em **Criar e Continuar**
6. Copie o **ID de Conversão** (format: `AW-XXXXXXXXXX`)
7. Copie o **Rótulo de Conversão** (format: `AbCdEfGhIjKl`)

**Exemplo:**
```
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXXX
VITE_GOOGLE_ADS_CONVERSION_LABEL=AbCdEfGhIjKl
```

---

## 4️⃣ Configurar .env.production

Após obter os IDs, atualize seu arquivo `.env.production`:

```bash
VITE_SITE_URL=https://epmartins.com.br
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXX
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXXX
VITE_GOOGLE_ADS_CONVERSION_LABEL=AbCdEfGhIjKl
```

---

## 5️⃣ Validar Tracking no Navegador

### Google Analytics Debugger (Extensão Chrome)
1. Instale [GA Debugger](https://chrome.google.com/webstore)
2. Abra seu site
3. Clique no ícone da extensão
4. Vá em **Events** → Procure por `page_view`
5. Confirme: `page_path`, `page_title`, `measurement_id` estão corretos

### GTM Preview Mode
1. Em Google Tag Manager, clique **Preview**
2. Abra seu site
3. Procure por **Tags Fired** → Veja `GA4 Config` tag
4. Confirme eventos estão sendo enviados

### Network Tab (DevTools)
1. Abra DevTools (F12)
2. Vá em **Network**
3. Procure por requisições para:
   - `google-analytics.com` (GA4)
   - `googletagmanager.com` (GTM)
   - `googleads.g.doubleclick.net` (Ads conversion)

---

## 6️⃣ Próximas Etapas (Opcional)

### Wire Conversion Tracking a Ações Específicas

No `src/pages/ContactPage.tsx`, adicione após formulário bem-sucedido:

```typescript
import { trackConversion } from '../utils/tracking';

const handleContactSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // ... seu código de submit
  
  // Registrar conversão no Google Ads
  trackConversion(
    import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL,
    1, // valor em reais (opcional)
    'BRL' // moeda (opcional)
  );
};
```

### Monitorar em Tempo Real

1. **Google Analytics** → **Relatórios** → **Tempo real**
   - Veja pageviews em tempo real
   
2. **Google Ads** → **Conversões** → **Resumo**
   - Monitore conversões e ROI de campanhas

---

## 🎯 Checklist Final

- [ ] GA4 ID obtido e adicionado ao `.env.production`
- [ ] GTM ID obtido e configurado (se usando)
- [ ] Google Ads ID e Label obtidos
- [ ] Site implantado no Amplify com `.env.production`
- [ ] Validado tracking via GA Debugger ou Network tab
- [ ] Dashboard GA4 configurado com eventos customizados
- [ ] Conversões aparecendo no Google Ads

---

## 📞 Suporte

Se tiver dúvidas:
- [GA4 Docs](https://support.google.com/analytics/answer/10089681)
- [GTM Docs](https://support.google.com/tagmanager/answer/6103696)
- [Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/1722054)
