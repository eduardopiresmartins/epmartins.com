# Google Analytics 4 (GA4) — Guia Passo-a-Passo Detalhado

## 📋 O que você vai conseguir ao final:
- **ID de Medição** (formato: `G-XXXXXXXXXX`)
- Este ID será adicionado ao `.env.production` como `VITE_GA_MEASUREMENT_ID`
- Seu site rastreará automaticamente: pageviews, sessões, usuários, eventos customizados

---

## 🔧 **Passo 1: Acessar Google Analytics**

1. Abra https://analytics.google.com/ em uma aba nova
2. Faça login com sua **conta Google** (a mesma que você usa para Gmail/Google Drive)
3. Você verá a tela inicial do Google Analytics

**Print esperado:** Você verá botão azul **"Criar conta"** ou suas contas existentes

---

## ➕ **Passo 2: Criar Conta (se não tiver)**

Se é sua **primeira vez no GA4**:

1. Clique em **"Criar conta"** (canto inferior esquerdo)
2. Preencha:
   - **Nome da conta:** `epmartins.com` (ou seu nome pessoal/empresa)
   - Clique em **"Avançar"**
3. Marque as opções que quiser (ativar compartilhamento de dados com Google, etc.)
4. Clique em **"Criar"**

**Print esperado:** Página perguntando detalhes da conta

---

## 🏠 **Passo 3: Criar Propriedade**

Agora você está na tela de criar a propriedade (é aqui que GA rastreia seu site):

1. Preencha:
   - **Nome da propriedade:** `epmartins.com.br` (mesmo nome do seu domínio)
   - **Fuso horário:** `America/Sao_Paulo` (São Paulo)
   - **Moeda:** `BRL` (Reais Brasileiros)
   
2. Clique em **"Avançar"**

**Print esperado:** Formulário com 3 campos (nome, fuso, moeda)

---

## 📱 **Passo 4: Configurar Tipo de Stream**

Agora GA quer saber onde rastrear:

1. Em **"Diga-nos mais sobre seu negócio"**, selecione:
   - **Setor:** `Tecnologia` ou `Outro`
   - **Tamanho da empresa:** `Pessoa física` ou `Pequena empresa`
   - **Objetivo principal:** `Gerar leads` ou `Aumentar vendas`

2. Clique em **"Criar"**

**Print esperado:** Dropdown menu com opções de indústria

---

## 🌐 **Passo 5: Criar Stream Web**

Este é o passo crítico — você vai registrar seu site no GA4:

1. Clique em **"Web"** (ícone de globo)
2. Preencha:
   - **URL do site:** `https://epmartins.com.br` (com `https://` e sem `/` no final)
   - **Nome da stream:** `epmartins.com.br` (ou só `Web`)

3. Clique em **"Criar stream"**

**Print esperado:** Tela pedindo URL do site e nome da stream

---

## 🔑 **Passo 6: Copiar o ID de Medição** ⭐

**ESTE É O PASSO MAIS IMPORTANTE:**

Após clicar em "Criar stream", você verá uma tela com:

```
Web Stream Details
Stream URL: https://epmartins.com.br
Stream Name: epmartins.com.br
Measurement ID: G-XXXXXXXXXX  ← ⭐ ESTE AQUI
```

1. **Copie o ID de Medição** (clique no ícone de cópia, ou selecione com o mouse)
2. Salve em um lugar seguro (Notes, arquivo de texto, etc.)

**Formato esperado:** Começa com `G-` seguido de 10 caracteres
- ✅ Exemplo correto: `G-12345ABCDE`
- ❌ Errado: `UA-12345678-1` (esse é GA Universal antigo)

---

## 📊 **Passo 7: Verificar Instalação**

Volte ao painel do GA4 e procure por:

1. **Engenharia → Fluxos de dados** (na coluna esquerda)
2. Clique no nome da sua web stream (`epmartins.com.br`)
3. Você deve ver:
   - **ID de Medição:** `G-XXXXXXXXXX` (copie novamente se precisar)
   - **Status:** Verde com ✓ (significa configurado corretamente)

**Print esperado:** Painel verde mostrando "Dados sendo recebidos" (quando seu site estiver ao vivo)

---

## 💾 **Passo 8: Adicionar ao `.env.production`**

Agora que você tem o ID, adicione-o ao seu projeto:

### No VS Code:

1. Abra o arquivo `.env.production` (raiz do projeto)
2. Procure pela linha:
   ```
   VITE_GA_MEASUREMENT_ID=
   ```
3. Substitua pelo seu ID copiado:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Salve o arquivo** (Ctrl+S ou Cmd+S)

**Exemplo:**
```dotenv
VITE_SITE_URL=https://epmartins.com.br
VITE_GA_MEASUREMENT_ID=G-ABC123DEFGH   ← Seu ID aqui
VITE_GTM_ID=
VITE_GOOGLE_ADS_ID=
VITE_GOOGLE_ADS_CONVERSION_LABEL=
```

---

## 🚀 **Passo 9: Fazer Commit e Push**

Agora suba essa mudança pro GitHub:

```bash
cd /Users/eduardopiresmartins/Documents/epmartins.com
git add .env.production
git commit -m "chore: add GA4 measurement ID to production environment"
git push origin main
```

**Resultado esperado:** 
```
To https://github.com/eduardopiresmartins/epmartins.com.git
   [...] → [...]  main -> main
```

---

## ⏱️ **Passo 10: Amplify Auto-Redeploy**

Quando você faz `git push`:
1. GitHub notifica AWS Amplify automaticamente
2. Amplify faz rebuild e redeploy em ~2-3 minutos
3. Seu site agora está rodando com GA4 ativo

**Para verificar:**
- Vá em https://console.aws.amazon.com/amplify/
- Procure por `epmartins.com`
- Clique em **"Deployments"** → veja se o novo deploy (que você acabou de fazer) ficou com ✅ verde

---

## ✅ **Passo 11: Validar que GA4 Está Funcionando**

### Método 1: Google Analytics Debugger (MAIS FÁCIL)

1. Instale a extensão Chrome: https://chrome.google.com/webstore/search/ga%20debugger
2. Procure por **"GA Debugger"** por Google
3. Instale
4. Acesse seu site: `https://epmartins.com.br` (ou a URL do Amplify temporária)
5. Clique no ícone da extensão (canto superior direito)
6. Procure por **"Events"**
7. Você deve ver:
   ```
   page_view
   - measurement_id: G-XXXXXXXXXX
   - page_path: /
   - page_title: Eduardo Pires | Produto & Estratégia
   ```

**Print esperado:** Painel verde mostrando `page_view` confirmado

### Método 2: Google Analytics Tempo Real (SEM extensão)

1. Acesse seu painel GA4: https://analytics.google.com/
2. No menu esquerdo, vá em **"Relatórios"** → **"Tempo real"**
3. Abra seu site em outra aba
4. Você deve ver **"1 usuários ativos agora"** no GA4
5. Clique em **"Mostrar mais"** e procure por sua URL

**Print esperado:** Contador mostrando usuários ativos agora

---

## 🎯 **Checklist Final**

- [ ] Criei conta no Google Analytics
- [ ] Criei propriedade com nome `epmartins.com.br`
- [ ] Criei web stream para `https://epmartins.com.br`
- [ ] Copiei ID de Medição (`G-XXXXXXXXXX`)
- [ ] Adicionei ao `.env.production`
- [ ] Fiz commit e push no GitHub
- [ ] Amplify redeploy completou (✅ verde)
- [ ] Validei com GA Debugger ou Tempo Real

---

## 🔗 **Próximos Passos (após DNS propagar)**

1. Mesma processo para **Google Tag Manager** (GTM)
2. Mesma processo para **Google Ads** (após domínio estar ativo)
3. Configurar conversões customizadas no GA4 (opcional, mas recomendado)

---

## 💡 **Dicas**

- **GA4 demora ~24-48h** para começar a coletar dados significativos (é normal ficar em 0 pageviews por um tempo)
- **ID errado?** Se GA Debugger não mostrar `page_view`, verifique se `.env.production` tem o ID correto e se Amplify redeployou
- **Não vê dados no GA4?** Limpe cache do navegador (Ctrl+Shift+Delete) e abra site novamente

---

## 📞 **Suporte**

Se algo der errado:
1. Verifique se copiou o ID **exatamente como está** (sem espaços)
2. Confirme se Amplify terminou o redeploy
3. Aguarde 5-10 minutos (GA leva um tempo pra processar)
4. Limpe cache e cookies do navegador

Qualquer dúvida, me avisa! 🚀
