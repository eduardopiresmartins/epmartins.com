Adicione um novo item (card/bloco) na seção existente chamada "O que faço" SEM alterar a estrutura atual da seção, sem remover componentes, sem mudar textos já existentes e sem quebrar responsividade ou funcionalidades.     Se você me mandar um print de como está hoje a seção “O que faço”, eu adapto esse prompt para bater 100% com o seu layout atual (grid/slider, espaçamentos, breakpointssquerda (título + descrição) e uma ilustração à direita (um “stack” de cards/placas com linhas e colunas roxas).

Animar com motion apenas os elementos roxos (linhas/colunas) de forma elegante, minimalista e premium.

REGRAS IMPORTANTES (NÃO QUEBRAR O QUE JÁ EXISTE)

Não refatore a seção inteira; não altere os cards atuais.

Não altere a navegação/âncoras existentes.

Não mude tipografia global nem tokens existentes.

Apenas adicione um novo componente reutilizável e plugue ele na lista/grid atual de “O que faço”.

DESIGN / ESTILO

Tema dark, fundo #0a0a0a (ou o fundo já usado na seção).

Roxo principal #8620e0 (ou o roxo já usado no site), com variações de opacidade.

Visual clean, premium, com profundidade sutil (blur/sombra leve).

Respeitar espaçamentos do layout atual e manter consistência com os outros cards.

CONTEÚDO (TEXTO)

Título: "Desenvolvimento Mobile"

Descrição (pode ajustar levemente para caber, sem perder sentido):
"Desenvolvimento dedicado para dispositivos mobile, com interfaces que se adaptam aos diferentes tamanhos e resoluções, proporcionando uma experiência agradável e completa ao usuário, independente do dispositivo acessado."

ILUSTRAÇÃO À DIREITA (SEM DEPENDER DE IMAGEM EXTERNA)

Recrie a ilustração com HTML/CSS (divs) para garantir consistência e performance:

Um stack de 2–3 “placas/cards” em perspectiva leve (rotate/translate).

Dentro da placa principal, inserir 2–3 linhas/colunas roxas (retângulos finos) e alguns elementos neutros (cinza escuro) simulando UI.

A ilustração não deve “roubar” o foco do texto, mas precisa ficar bem presente e proporcional.

ANIMAÇÃO (MOTION)

Use Framer Motion (ou a lib de motion já usada no projeto).

Animar SOMENTE as linhas/colunas roxas:

Efeito “scan”/preenchimento: largura ou altura cresce de 0% → 100% com easing suave.

Loop sutil: após completar, reduzir opacidade e reiniciar com delay (não pode ser chamativo).

Stagger: cada linha roxa começa alguns ms depois da anterior.

Iniciar a animação quando o card entrar no viewport (Intersection Observer / whileInView), e pausar fora de tela.

Respeitar prefers-reduced-motion: se ativo, deixar estático.

RESPONSIVO

Desktop: texto à esquerda e ilustração à direita.

Mobile: empilhar (texto em cima, ilustração abaixo), manter padding e evitar sobreposição.

Garantir que as linhas roxas nunca fiquem por cima do texto.

ACESSIBILIDADE / PERFORMANCE

Elementos decorativos com aria-hidden.

Evitar sombras pesadas e animações com blur forte.

Nenhum layout shift: reservar altura da ilustração.

ENTREGA

Criar um componente ex: WhatIDoCardMobile (ou nome compatível com o projeto) e inserir como mais um item na lista da seção "O que faço".

Não alterar os itens existentes, apenas adicionar este novo.

Se você me mandar um print de como está hoje a seção “O que faço”, eu adapto esse prompt para bater 100% com o seu layout atual (grid/slider, espaçamentos, breakpoints e nomes de componentes) sem risco de mexer onde não deve.