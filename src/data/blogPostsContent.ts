import produtoBacklogImage from 'figma:asset/51e631de5d5f2f51855a0e54eb122537cb5e4d1f.png';

interface ContentSection {
  type: 'paragraph' | 'heading' | 'list' | 'quote';
  text?: string;
  items?: string[];
}

interface BlogPostContent {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content: ContentSection[];
  tags: string[];
}

export const blogPostsContent: Record<string, BlogPostContent> = {
  '1': {
    id: 1,
    slug: 'produto-nao-comeca-no-backlog',
    title: 'Produto não começa no backlog, começa nas perguntas certas',
    excerpt: 'Antes de pensar em solução, tecnologia ou prazo, existe um ponto que costuma ser ignorado: entender de verdade o problema.',
    date: '2026-02-12',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: produtoBacklogImage,
    readTime: '5 min',
    tags: ['produto', 'estratégia', 'discovery', 'validação'],
    content: [
      {
        type: 'paragraph',
        text: 'Produto não começa no backlog, começa nas perguntas certas.'
      },
      {
        type: 'paragraph',
        text: 'Antes de pensar em solução, tecnologia ou prazo, existe um ponto que costuma ser ignorado: entender de verdade o problema.'
      },
      {
        type: 'heading',
        text: 'Qual dor estamos resolvendo?'
      },
      {
        type: 'paragraph',
        text: 'A primeira pergunta que define tudo. Se você não sabe exatamente qual problema está resolvendo, está construindo no escuro. Não é sobre a feature que você quer implementar, é sobre a dor real que o usuário sente.'
      },
      {
        type: 'heading',
        text: 'Para quem?'
      },
      {
        type: 'paragraph',
        text: 'Produto para todo mundo é produto para ninguém. Quem exatamente está sentindo essa dor? Quanto mais específico você for sobre quem é seu usuário, mais relevante sua solução será.'
      },
      {
        type: 'heading',
        text: 'Qual impacto isso gera no dia a dia do usuário e no negócio?'
      },
      {
        type: 'paragraph',
        text: 'Uma funcionalidade pode ser tecnicamente perfeita, mas se não gera impacto real, é desperdício de tempo e recursos. O valor está no impacto: no tempo economizado, na fricção removida, no resultado entregue.'
      },
      {
        type: 'heading',
        text: 'Quando essas perguntas não existem'
      },
      {
        type: 'paragraph',
        text: 'Quando essas perguntas não existem, sobra muito esforço, código funciona, telas ficam prontas… mas o valor não aparece. Times trabalham semanas em features que ninguém usa. Sprints se acumulam sem mover a métrica que importa.'
      },
      {
        type: 'heading',
        text: 'Produto é responsabilidade'
      },
      {
        type: 'paragraph',
        text: 'Produto é responsabilidade com o usuário, com o time e com o negócio.'
      },
      {
        type: 'list',
        items: [
          'Com o usuário: Resolver o problema certo, da forma certa',
          'Com o time: Não desperdiçar esforço em coisas que não importam',
          'Com o negócio: Gerar impacto mensurável e sustentável'
        ]
      },
      {
        type: 'heading',
        text: 'Nem todo problema é de código'
      },
      {
        type: 'paragraph',
        text: 'Resolver sintomas sem entender a causa real gera esforço com baixo impacto. A tecnologia é o meio, não o fim. Antes de decidir o "como", valide o "porquê" e o "para quem".'
      },
      {
        type: 'heading',
        text: 'As perguntas certas te guiam'
      },
      {
        type: 'paragraph',
        text: 'Que perguntas podem te ajudar a sair da tarefa e ir para o problema?'
      },
      {
        type: 'list',
        items: [
          'O problema foi traduzido para hipótese?',
          'Medimos o impacto da solução?',
          'Estamos resolvendo a dor real do usuário?'
        ]
      },
      {
        type: 'paragraph',
        text: 'Quando você tem clareza sobre o problema, a solução se torna mais óbvia. E mais importante: você sabe quando parar, quando pivotar, e quando dobrar a aposta.'
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Produto não começa no backlog. Começa nas perguntas certas. E quando essas perguntas são respondidas com honestidade e dados, o backlog se torna uma consequência natural — não um ponto de partida.'
      }
    ]
  },
  '8': {
    id: 8,
    slug: 'priorizacao-tradeoffs',
    title: 'Priorização não é ciência exata, é clareza de trade-offs',
    excerpt: 'Todo "sim" é um "não" disfarçado. Decisões de produto exigem entender o que não fazer e por quê.',
    date: '2026-02-05',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '6 min',
    tags: ['priorização', 'decisões', 'trade-offs', 'produto'],
    content: [
      {
        type: 'paragraph',
        text: 'Priorização não é ciência exata. É clareza de trade-offs.'
      },
      {
        type: 'paragraph',
        text: 'Todo "sim" carrega um "não" disfarçado. Dizer sim para uma feature significa não fazer outra. Dizer sim para um prazo significa comprometer qualidade, ou escopo, ou ambos.'
      },
      {
        type: 'heading',
        text: 'O problema não é falta de framework'
      },
      {
        type: 'paragraph',
        text: 'Não falta framework de priorização. RICE, MoSCoW, Kano, Value vs Effort... todos funcionam. O problema é que nenhum deles responde a pergunta real: o que não fazer?'
      },
      {
        type: 'paragraph',
        text: 'Priorizar não é ordenar uma lista. É escolher abrir mão do que parece importante hoje, para ganhar algo mais relevante amanhã.'
      },
      {
        type: 'heading',
        text: 'Decisões de produto são decisões de trade-off'
      },
      {
        type: 'paragraph',
        text: 'Quando você prioriza baseado apenas em valor ou impacto, ignora viabilidade, risco e custo de oportunidade.'
      },
      {
        type: 'list',
        items: [
          'Viabilidade técnica: Dá para fazer no prazo esperado sem comprometer a base de código?',
          'Risco de execução: O que pode dar errado? Temos clareza suficiente?',
          'Custo de oportunidade: O que deixamos de fazer ao escolher isso?'
        ]
      },
      {
        type: 'heading',
        text: 'O backlog não é um cemitério de boas ideias'
      },
      {
        type: 'paragraph',
        text: 'Se algo está no backlog há meses e nunca foi priorizado, provavelmente não é tão importante quanto parecia. O backlog virou um lugar onde guardamos "talvez um dia", mas produto é sobre fazer escolhas agora.'
      },
      {
        type: 'paragraph',
        text: 'Cortar o backlog é tão importante quanto preenchê-lo. Menos ruído, mais clareza.'
      },
      {
        type: 'heading',
        text: 'Trade-offs explícitos geram confiança'
      },
      {
        type: 'paragraph',
        text: 'Quando você comunica o trade-off de forma clara, o time entende o porquê da decisão. Não é sobre convencer, é sobre tornar o raciocínio transparente.'
      },
      {
        type: 'quote',
        text: 'Estamos priorizando X ao invés de Y porque o impacto em [métrica] é 3x maior, e a complexidade técnica é similar.'
      },
      {
        type: 'heading',
        text: 'Priorização é contínua, não pontual'
      },
      {
        type: 'paragraph',
        text: 'O contexto muda. Dados novos surgem. Uma prioridade de hoje pode não fazer sentido semana que vem. Revisar constantemente não é falta de foco, é adaptação estratégica.'
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Priorizar não é sobre ter um sistema perfeito. É sobre ter clareza dos trade-offs, coragem para dizer não, e disciplina para revisar constantemente. O melhor framework é aquele que te ajuda a pensar, não a automatizar decisões.'
      }
    ]
  },
  '9': {
    id: 9,
    slug: 'tech-como-meio',
    title: 'Tech como meio: quando engenharia serve ao produto',
    excerpt: 'Background técnico ajuda a tomar decisões melhores, não a construir tudo. O que não fazer importa mais que o stack.',
    date: '2026-01-22',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '7 min',
    tags: ['tecnologia', 'produto', 'engenharia', 'decisões'],
    content: [
      {
        type: 'paragraph',
        text: 'Tecnologia é meio, não fim. Parece óbvio, mas é fácil esquecer quando você tem background técnico.'
      },
      {
        type: 'paragraph',
        text: 'Saber como o sistema funciona por baixo dos panos traz vantagens. Você entende trade-offs técnicos, sabe quando uma solução é viável e quando é gambiarra disfarçada. Mas isso também traz um risco: confundir capacidade técnica com necessidade de produto.'
      },
      {
        type: 'heading',
        text: 'O perigo de saber demais'
      },
      {
        type: 'paragraph',
        text: 'Quando você entende de tecnologia, é tentador resolver problemas com código. Mas nem todo problema precisa de solução técnica.'
      },
      {
        type: 'paragraph',
        text: 'Às vezes, o problema é de processo. Às vezes, é de comunicação. E às vezes, simplesmente não vale a pena resolver.'
      },
      {
        type: 'heading',
        text: 'Background técnico como vantagem estratégica'
      },
      {
        type: 'paragraph',
        text: 'Ter base técnica ajuda em três pontos críticos:'
      },
      {
        type: 'list',
        items: [
          'Decisões de viabilidade: Você consegue estimar complexidade sem depender 100% da engenharia',
          'Trade-offs arquiteturais: Sabe quando vale a pena refatorar vs. criar workaround',
          'Conversa com o time técnico: Você fala a língua deles, sem precisar ser o mais técnico da sala'
        ]
      },
      {
        type: 'heading',
        text: 'O que não fazer importa mais que o stack'
      },
      {
        type: 'paragraph',
        text: 'Conhecer todas as tecnologias do mercado não garante boas decisões de produto. O que garante é saber quando não usar nada.'
      },
      {
        type: 'paragraph',
        text: 'Quantas features foram construídas porque "tecnicamente dá para fazer", mas nunca geraram valor real? Quantas refatorações foram priorizadas porque "o código está feio", mas não moveram nenhuma métrica de negócio?'
      },
      {
        type: 'heading',
        text: 'Engenharia serve ao produto, não o contrário'
      },
      {
        type: 'paragraph',
        text: 'Quando engenharia vira o centro das decisões, produto vira refém. Roadmap vira lista de melhorias técnicas. Sprints viram ciclos de refatoração sem impacto visível.'
      },
      {
        type: 'paragraph',
        text: 'Isso não significa ignorar dívida técnica ou qualidade de código. Significa equilibrar: quando vale a pena investir em infraestrutura vs. quando é melhor focar em validação rápida.'
      },
      {
        type: 'heading',
        text: 'Produto-tech fit'
      },
      {
        type: 'paragraph',
        text: 'A melhor relação entre produto e engenharia acontece quando:'
      },
      {
        type: 'list',
        items: [
          'Produto entende limitações técnicas e trabalha dentro delas (ou questiona quando necessário)',
          'Engenharia entende o impacto de negócio e prioriza baseado nisso',
          'Ambos falam a mesma língua: resultado, não tecnologia'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Background técnico é uma vantagem competitiva em produto. Mas só quando usado para decidir melhor, não para construir mais. Tecnologia bem aplicada é aquela que resolve o problema certo, no momento certo, da forma mais simples possível.'
      }
    ]
  },
  '10': {
    id: 10,
    slug: 'metricas-que-mentem',
    title: 'Métricas que mentem: vanity vs impacto real',
    excerpt: 'Quantas features entregamos não diz nada. A pergunta certa: qual problema isso resolveu?',
    date: '2026-01-10',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '5 min',
    tags: ['métricas', 'dados', 'impacto', 'produto'],
    content: [
      {
        type: 'paragraph',
        text: 'Métricas que mentem são mais perigosas do que ausência de métricas.'
      },
      {
        type: 'paragraph',
        text: 'Quantas features entregamos esse mês? Quantos story points fechamos? Quantos usuários temos? Essas perguntas parecem importantes, mas não dizem nada sobre impacto real.'
      },
      {
        type: 'heading',
        text: 'Vanity metrics: números que impressionam, mas não informam'
      },
      {
        type: 'paragraph',
        text: 'Vanity metrics são métricas que sobem, fazem você se sentir bem, mas não te ajudam a tomar decisões melhores.'
      },
      {
        type: 'list',
        items: [
          'Total de usuários: Importa mais quantos são ativos e engajados',
          'Features entregues: Importa mais qual problema cada uma resolveu',
          'Story points fechados: Importa mais o valor gerado para o negócio'
        ]
      },
      {
        type: 'heading',
        text: 'A métrica certa responde: o que isso muda?'
      },
      {
        type: 'paragraph',
        text: 'Uma boa métrica de produto te ajuda a entender se você está indo na direção certa. Ela é:'
      },
      {
        type: 'list',
        items: [
          'Acionável: Você consegue influenciar diretamente',
          'Comparável: Dá para ver evolução ao longo do tempo',
          'Conectada ao negócio: Impacta resultado real, não apenas comportamento'
        ]
      },
      {
        type: 'heading',
        text: 'Exemplos práticos'
      },
      {
        type: 'paragraph',
        text: 'Ruim: "Aumentamos o número de cadastros em 30%"'
      },
      {
        type: 'paragraph',
        text: 'Bom: "Aumentamos a taxa de conversão de cadastro para primeira compra de 12% para 18%"'
      },
      {
        type: 'paragraph',
        text: 'Ruim: "Lançamos 15 features neste trimestre"'
      },
      {
        type: 'paragraph',
        text: 'Bom: "3 features geraram 80% do aumento em retenção. As outras 12 tiveram impacto irrelevante"'
      },
      {
        type: 'heading',
        text: 'Cuidado com o que você otimiza'
      },
      {
        type: 'paragraph',
        text: 'Você otimiza o que mede. Se você mede velocidade de entrega, vai entregar rápido — mas não necessariamente certo. Se você mede apenas crescimento de usuários, vai crescer — mas não necessariamente de forma sustentável.'
      },
      {
        type: 'heading',
        text: 'O framework que uso'
      },
      {
        type: 'paragraph',
        text: 'Sempre que defino uma métrica, me pergunto:'
      },
      {
        type: 'list',
        items: [
          'Essa métrica me ajuda a tomar decisões melhores?',
          'Se ela subir, o negócio melhora de verdade?',
          'Eu consigo influenciar essa métrica com minhas decisões?'
        ]
      },
      {
        type: 'paragraph',
        text: 'Se alguma resposta for "não", descarto a métrica ou reformulo.'
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Métricas que mentem dão a ilusão de progresso. Métricas certas mostram impacto real. A diferença entre as duas define se você está construindo produto ou apenas acumulando features.'
      }
    ]
  },
  '11': {
    id: 11,
    slug: 'fintechs-negocio-tech',
    title: 'O que aprendi em fintechs sobre conectar negócio e tech',
    excerpt: 'Pagamentos, crédito e integrações bancárias ensinam uma coisa: não existe produto sem entender viabilidade técnica.',
    date: '2025-12-15',
    author: 'Eduardo Pires',
    category: 'Produto',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    readTime: '8 min',
    tags: ['fintech', 'pagamentos', 'produto', 'tecnologia'],
    content: [
      {
        type: 'paragraph',
        text: 'Fintechs ensinam uma lição importante: não existe produto sem entender viabilidade técnica.'
      },
      {
        type: 'paragraph',
        text: 'Em pagamentos, crédito e integrações bancárias, a distância entre "boa ideia" e "produto viável" é enorme. E o que separa as duas é conhecimento técnico aplicado a contexto de negócio.'
      },
      {
        type: 'heading',
        text: 'Produto em ambientes regulados'
      },
      {
        type: 'paragraph',
        text: 'Fintech não é só código. É compliance, regulação, segurança, SLA de infraestrutura crítica. Uma decisão errada pode custar milhões — ou derrubar o sistema na Black Friday.'
      },
      {
        type: 'paragraph',
        text: 'Nesse contexto, produto precisa entender:'
      },
      {
        type: 'list',
        items: [
          'Limitações de API: Nem tudo que o negócio quer é tecnicamente possível (ou vale a pena)',
          'Tempo de integração: Conectar com um banco pode levar meses, não semanas',
          'Risco de infraestrutura: Downtime não é apenas "ruim", pode ser catastrófico'
        ]
      },
      {
        type: 'heading',
        text: 'Trade-offs entre experiência e viabilidade'
      },
      {
        type: 'paragraph',
        text: 'O ideal do produto: checkout em um clique, aprovação instantânea, tudo fluido.'
      },
      {
        type: 'paragraph',
        text: 'A realidade técnica: APIs de terceiros com latência de 3-5s, regras de antifraude que bloqueiam, limitações de SLA.'
      },
      {
        type: 'paragraph',
        text: 'A habilidade crítica é navegar entre essas duas pontas sem comprometer nenhuma:'
      },
      {
        type: 'list',
        items: [
          'Como melhorar a experiência sem comprometer segurança?',
          'Como acelerar o fluxo sem ignorar compliance?',
          'Como escalar sem explodir custos de infraestrutura?'
        ]
      },
      {
        type: 'heading',
        text: 'Pagamentos: onde segundos importam'
      },
      {
        type: 'paragraph',
        text: 'Em pagamentos, latência é inimiga da conversão. Cada segundo a mais no checkout reduz a taxa de conclusão. Mas reduzir latência significa otimizar integrações, cachear dados sensíveis com segurança, e garantir resiliência quando parceiros caem.'
      },
      {
        type: 'paragraph',
        text: 'Decisões de produto aqui não são sobre "adicionar feature". São sobre "qual risco aceitamos para melhorar 200ms de resposta?"'
      },
      {
        type: 'heading',
        text: 'Crédito: decisões baseadas em dados e risco'
      },
      {
        type: 'paragraph',
        text: 'Produto de crédito é sobre equilíbrio entre conversão e inadimplência. Aprovar todo mundo gera volume, mas quebra o negócio. Negar todo mundo reduz risco, mas mata crescimento.'
      },
      {
        type: 'paragraph',
        text: 'O papel de produto aqui é entender:'
      },
      {
        type: 'list',
        items: [
          'Qual taxa de inadimplência é aceitável?',
          'Como ajustar modelos sem comprometer conformidade regulatória?',
          'Qual experiência oferecemos para quem foi negado? (UX de rejeição importa)'
        ]
      },
      {
        type: 'heading',
        text: 'Integrações bancárias: complexidade invisível'
      },
      {
        type: 'paragraph',
        text: 'Open Banking trouxe promessas de fluidez. A realidade: cada banco tem suas particularidades, SLAs diferentes, documentação incompleta, e comportamentos não documentados.'
      },
      {
        type: 'paragraph',
        text: 'Produto precisa entender que "integrar com banco X" não é tarefa de 1 sprint. É ciclo de testes, homologação, ajustes, e monitoramento contínuo.'
      },
      {
        type: 'heading',
        text: 'O que fintechs ensinam sobre produto'
      },
      {
        type: 'list',
        items: [
          'Viabilidade técnica não é "problema da engenharia": É parte essencial da decisão de produto',
          'Contexto importa: Produto genérico não funciona em ambientes regulados',
          'Dados > opinião: Toda decisão precisa ser validada com métricas reais',
          'Resiliência > perfeição: Melhor um sistema que funciona 99.9% do tempo do que um perfeito que cai quando mais precisa'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Fintechs são um laboratório de produto sob pressão. Complexidade técnica alta, regulação rigorosa, expectativa de experiência fluida. Conectar essas três pontas exige mais do que frameworks de priorização — exige entender tecnologia, negócio e risco ao mesmo tempo.'
      }
    ]
  },
  '2': {
    id: 2,
    slug: 'como-criar-site-moderno-2024',
    title: 'Como Desenvolver Soft Skills na Carreira em TI Mesmo Sendo Iniciante',
    excerpt: 'É muito comum ver pessoas em início ou transição de carreira, com dúvidas sobre o que estudar e em que se aprofundar para se tornar um profissional mais completo.',
    date: '2024-01-15',
    author: 'Eduardo Pires',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTQ0NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '8 min',
    tags: ['soft-skills', 'carreira', 'comunicação', 'desenvolvimento'],
    content: [
      {
        type: 'paragraph',
        text: 'É muito comum ver pessoas em início ou transição de carreira, com dúvidas sobre o que estudar e em que se aprofundar para se tornar um profissional completo e requisitado no mercado.'
      },
      {
        type: 'paragraph',
        text: 'No mundo da tecnologia, as mudanças acontecem rapidamente. Novas ferramentas, frameworks e linguagens de programação surgem constantemente. Mas existe algo que permanece constante: a importância das soft skills.'
      },
      {
        type: 'heading',
        text: 'O que são Soft Skills?'
      },
      {
        type: 'paragraph',
        text: 'Soft skills são habilidades comportamentais e interpessoais que determinam como você trabalha e interage com os outros. Diferente das hard skills (habilidades técnicas), as soft skills são mais difíceis de mensurar, mas igualmente importantes para o sucesso profissional.'
      },
      {
        type: 'heading',
        text: 'Por que são importantes para profissionais de T.I?'
      },
      {
        type: 'paragraph',
        text: 'Muitos profissionais de tecnologia focam exclusivamente em desenvolver suas habilidades técnicas, negligenciando o desenvolvimento pessoal. No entanto, as empresas modernas buscam profissionais completos, que além de dominar a tecnologia, saibam trabalhar em equipe, comunicar-se efetivamente e resolver problemas de forma criativa.'
      },
      {
        type: 'paragraph',
        text: 'Um desenvolvedor pode ser extremamente talentoso tecnicamente, mas se não souber comunicar suas ideias ou trabalhar em equipe, terá dificuldades para crescer na carreira.'
      },
      {
        type: 'heading',
        text: 'As 5 Soft Skills Essenciais'
      },
      {
        type: 'paragraph',
        text: '1. Comunicação'
      },
      {
        type: 'paragraph',
        text: 'A capacidade de expressar ideias de forma clara, tanto verbalmente quanto por escrito, é fundamental. Você precisa explicar conceitos técnicos complexos para pessoas não técnicas, documentar seu código e participar de reuniões produtivas.'
      },
      {
        type: 'paragraph',
        text: '2. Trabalho em Equipe'
      },
      {
        type: 'paragraph',
        text: 'Raramente você trabalhará sozinho. Saber colaborar, respeitar opiniões diferentes e contribuir para um ambiente positivo é essencial para o sucesso de qualquer projeto.'
      },
      {
        type: 'paragraph',
        text: '3. Resolução de Problemas'
      },
      {
        type: 'paragraph',
        text: 'Além de resolver bugs no código, você precisa pensar criticamente sobre problemas de negócio e propor soluções inovadoras que agreguem valor real.'
      },
      {
        type: 'paragraph',
        text: '4. Adaptabilidade'
      },
      {
        type: 'paragraph',
        text: 'O mercado de tecnologia muda constantemente. Profissionais que conseguem se adaptar rapidamente a novas tecnologias, processos e ambientes de trabalho têm vantagem competitiva significativa.'
      },
      {
        type: 'paragraph',
        text: '5. Gestão de Tempo'
      },
      {
        type: 'paragraph',
        text: 'Saber priorizar tarefas, cumprir prazos e equilibrar múltiplos projetos é crucial. A produtividade não é sobre trabalhar mais horas, mas sobre trabalhar de forma mais inteligente.'
      },
      {
        type: 'heading',
        text: 'Como desenvolver essas habilidades?'
      },
      {
        type: 'list',
        items: [
          'Participe de projetos em equipe, mesmo que sejam open source',
          'Pratique apresentações técnicas para públicos não técnicos',
          'Busque feedback regularmente de colegas e gestores',
          'Invista em cursos de comunicação e liderança',
          'Mantenha-se atualizado com tendências do mercado'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'As soft skills são tão importantes quanto as hard skills para construir uma carreira de sucesso em tecnologia. Invista tempo no desenvolvimento dessas habilidades e você verá portas se abrindo na sua trajetória profissional.'
      }
    ]
  },
  '3': {
    id: 3,
    slug: 'ui-ux-principios-fundamentais',
    title: 'UI/UX: Princípios fundamentais para criar experiências memoráveis',
    excerpt: 'Design não é apenas sobre aparência, é sobre como funciona. Entenda os princípios que separam interfaces bonitas de experiências realmente eficazes.',
    date: '2024-01-10',
    author: 'Eduardo Pires',
    category: 'UX/UI',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2NDA5Njc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '6 min',
    tags: ['ux', 'ui', 'design', 'usabilidade'],
    content: [
      {
        type: 'paragraph',
        text: 'Design não é apenas sobre aparência, é sobre como funciona. Uma interface bonita que confunde o usuário é um fracasso de UX. Uma interface simples que resolve o problema com eficiência é um sucesso.'
      },
      {
        type: 'heading',
        text: 'A diferença entre UI e UX'
      },
      {
        type: 'paragraph',
        text: 'UI (User Interface) é a camada visual: cores, tipografia, botões, espaçamentos. UX (User Experience) é como tudo isso funciona junto para resolver o problema do usuário.'
      },
      {
        type: 'paragraph',
        text: 'Bom UI sem UX é como um carro bonito que não liga. Bom UX sem UI é como um carro funcional, mas feio demais para alguém querer dirigir.'
      },
      {
        type: 'heading',
        text: 'Os 5 princípios fundamentais de UX'
      },
      {
        type: 'paragraph',
        text: '1. Clareza acima de tudo'
      },
      {
        type: 'paragraph',
        text: 'Usuários não leem, scanneiam. Se a ação principal não é óbvia em 3 segundos, você perdeu. Use hierarquia visual, contraste e espaçamento para guiar o olhar.'
      },
      {
        type: 'paragraph',
        text: '2. Consistência gera confiança'
      },
      {
        type: 'paragraph',
        text: 'Botões do mesmo tipo devem ter a mesma aparência. Ações similares devem funcionar de forma similar. Inconsistência gera confusão e desconfiança.'
      },
      {
        type: 'paragraph',
        text: '3. Feedback imediato'
      },
      {
        type: 'paragraph',
        text: 'Toda ação do usuário precisa de resposta visual. Clicou? Mostre que registrou. Carregando? Indique progresso. Erro? Explique o que aconteceu.'
      },
      {
        type: 'paragraph',
        text: '4. Previna erros, não apenas os corrija'
      },
      {
        type: 'paragraph',
        text: 'Desabilite botões que não podem ser clicados. Valide formulários em tempo real. Peça confirmação em ações destrutivas. Prevenir é melhor que remediar.'
      },
      {
        type: 'paragraph',
        text: '5. Menos é mais'
      },
      {
        type: 'paragraph',
        text: 'Cada elemento na tela compete pela atenção do usuário. Remova tudo que não é essencial. Simplicidade não é falta de features, é foco no que importa.'
      },
      {
        type: 'heading',
        text: 'Princípios de UI que fazem diferença'
      },
      {
        type: 'list',
        items: [
          'Hierarquia visual: Títulos maiores, textos secundários menores, CTAs destacados',
          'Espaçamento: Respiração entre elementos facilita escaneamento',
          'Contraste: Texto precisa ser legível, botões precisam se destacar',
          'Tipografia: No máximo 2-3 fontes, tamanhos consistentes',
          'Cor com propósito: Cada cor deve ter significado (sucesso, erro, ação)'
        ]
      },
      {
        type: 'heading',
        text: 'Testes de usabilidade: validação contínua'
      },
      {
        type: 'paragraph',
        text: 'Você não é o usuário. O que parece óbvio para você pode ser confuso para quem nunca viu a interface. Teste com usuários reais, observe onde travam, onde clicam errado, onde desistem.'
      },
      {
        type: 'quote',
        text: 'Se o usuário erra, não é culpa dele. É falha de design.'
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Bom design é invisível. O usuário não percebe a interface, apenas completa a tarefa sem fricção. Quando você precisa explicar como usar, já perdeu. Os melhores produtos são aqueles que parecem óbvios — mas chegaram lá por decisões intencionais de UX e UI.'
      }
    ]
  },
  '4': {
    id: 4,
    slug: 'otimizacao-performance-web',
    title: 'Otimização de performance web: além do carregamento rápido',
    excerpt: 'Performance não é só sobre velocidade. É sobre percepção, experiência e impacto no negócio. Aprenda o que realmente importa.',
    date: '2024-01-05',
    author: 'Eduardo Pires',
    category: 'Desenvolvimento',
    image: 'https://images.unsplash.com/photo-1763568258179-fa561d623323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBwZXJmb3JtYW5jZSUyMGNvZGluZ3xlbnwxfHx8fDE3NjQxODAyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '10 min',
    tags: ['performance', 'web', 'otimização', 'core-web-vitals'],
    content: [
      {
        type: 'paragraph',
        text: 'Performance não é só sobre velocidade. É sobre percepção, experiência e impacto no negócio.'
      },
      {
        type: 'paragraph',
        text: 'Um site que carrega em 2s mas trava durante a interação é pior que um que carrega em 3s mas responde instantaneamente. Performance percebida importa mais que performance medida.'
      },
      {
        type: 'heading',
        text: 'Core Web Vitals: o que o Google mede'
      },
      {
        type: 'paragraph',
        text: 'Google criou métricas que capturam a experiência real do usuário:'
      },
      {
        type: 'list',
        items: [
          'LCP (Largest Contentful Paint): Quanto tempo até o conteúdo principal aparecer? Meta: < 2.5s',
          'FID (First Input Delay): Quanto tempo até o site responder a uma interação? Meta: < 100ms',
          'CLS (Cumulative Layout Shift): Quanto o layout se move inesperadamente? Meta: < 0.1'
        ]
      },
      {
        type: 'heading',
        text: 'Por que performance importa para o negócio'
      },
      {
        type: 'paragraph',
        text: 'Não é só sobre UX. Performance impacta diretamente conversão e receita:'
      },
      {
        type: 'list',
        items: [
          'Amazon: 100ms de latência = 1% de queda em vendas',
          'Google: 500ms a mais = 20% de queda em buscas',
          'Walmart: 1s de melhoria = 2% de aumento em conversão'
        ]
      },
      {
        type: 'paragraph',
        text: 'Usuário mobile com 3G não vai esperar 10s. Ele volta pro Google e clica no concorrente.'
      },
      {
        type: 'heading',
        text: 'Técnicas práticas de otimização'
      },
      {
        type: 'paragraph',
        text: '1. Lazy Loading Inteligente'
      },
      {
        type: 'paragraph',
        text: 'Carregue apenas o que está visível. Imagens abaixo da dobra? Lazy load. Componentes pesados? Code splitting. API que não é crítica? Carregue depois.'
      },
      {
        type: 'paragraph',
        text: '2. Otimização de Imagens'
      },
      {
        type: 'paragraph',
        text: 'Imagens são 50-70% do peso de uma página. Use formatos modernos (WebP, AVIF), comprima sem perder qualidade, sirva tamanhos responsivos com srcset.'
      },
      {
        type: 'paragraph',
        text: '3. Cache Estratégico'
      },
      {
        type: 'paragraph',
        text: 'Assets estáticos: cache longo (1 ano). HTML: sem cache ou curto. APIs: depende da volatilidade dos dados. Service Workers permitem cache offline.'
      },
      {
        type: 'paragraph',
        text: '4. Minimize JavaScript'
      },
      {
        type: 'paragraph',
        text: 'JS é o recurso mais caro: precisa ser baixado, parseado e executado. Bundle splitting, tree shaking, remova dependências não usadas. Cada KB importa.'
      },
      {
        type: 'heading',
        text: 'Performance percebida vs real'
      },
      {
        type: 'paragraph',
        text: 'Usuários são impacientes, mas percepção pode ser manipulada (de forma ética):'
      },
      {
        type: 'list',
        items: [
          'Skeleton screens: Mostre estrutura enquanto carrega',
          'Feedback imediato: Responda cliques instantaneamente, mesmo que a ação demore',
          'Progressive rendering: Mostre conteúdo gradualmente, não tudo de uma vez',
          'Animações estratégicas: Distraem enquanto algo carrega (mas não abuse)'
        ]
      },
      {
        type: 'heading',
        text: 'Ferramentas de medição'
      },
      {
        type: 'list',
        items: [
          'Lighthouse: Auditoria automatizada do Chrome',
          'WebPageTest: Testes em diferentes conexões e localizações',
          'Chrome DevTools: Network, Performance, Coverage tabs',
          'Real User Monitoring (RUM): Dados de usuários reais, não simulados'
        ]
      },
      {
        type: 'heading',
        text: 'Cuidados e trade-offs'
      },
      {
        type: 'paragraph',
        text: 'Otimização prematura pode complicar código sem ganho real. Meça antes de otimizar. Foque no que tem maior impacto (geralmente imagens e JS). Não sacrifique funcionalidade por 50ms de ganho.'
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Performance é feature, não detalhe técnico. Impacta conversão, SEO e experiência do usuário. Medir é essencial, mas lembre: o que importa é como o usuário percebe, não apenas o que o Lighthouse mostra.'
      }
    ]
  },
  '5': {
    id: 5,
    slug: 'design-responsivo-mobile-first',
    title: 'Design responsivo: Por que Mobile First mudou tudo',
    excerpt: 'Mais da metade do tráfego web vem de mobile. Ainda assim, muitos sites tratam mobile como adaptação. Entenda por que começar pelo mobile transforma o processo.',
    date: '2023-12-28',
    author: 'Eduardo Pires',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1691073112675-9685bc6779bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwZGVzaWdufGVufDF8fHx8MTc2NDE4MDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '7 min',
    tags: ['mobile', 'responsive', 'design', 'ux'],
    content: [
      {
        type: 'paragraph',
        text: 'Mais da metade do tráfego web vem de mobile. Ainda assim, muitos sites tratam mobile como adaptação, não como prioridade.'
      },
      {
        type: 'paragraph',
        text: 'Mobile First não é sobre fazer versão mobile primeiro. É sobre pensar com restrições que forçam foco no essencial.'
      },
      {
        type: 'heading',
        text: 'O que é Mobile First?'
      },
      {
        type: 'paragraph',
        text: 'Mobile First é uma abordagem de design onde você começa projetando para a menor tela (mobile), e depois expande para telas maiores (tablet, desktop).'
      },
      {
        type: 'paragraph',
        text: 'Isso é o oposto do "Desktop First", onde você projeta para desktop e depois tenta espremer tudo em mobile.'
      },
      {
        type: 'heading',
        text: 'Por que Mobile First funciona melhor?'
      },
      {
        type: 'paragraph',
        text: '1. Força priorização'
      },
      {
        type: 'paragraph',
        text: 'Com espaço limitado, você precisa decidir o que é essencial. Não dá para colocar 5 CTAs, 3 menus e 10 features na mesma tela de 375px. Você escolhe o que importa.'
      },
      {
        type: 'paragraph',
        text: '2. Melhora performance'
      },
      {
        type: 'paragraph',
        text: 'Começar com mobile força você a pensar em peso de imagens, JS essencial, carregamento progressivo. Desktop pode carregar mais, mobile não pode.'
      },
      {
        type: 'paragraph',
        text: '3. Garante acessibilidade'
      },
      {
        type: 'paragraph',
        text: 'Touch targets precisam ser maiores em mobile (mínimo 44x44px). Texto precisa ser legível sem zoom. Navegação precisa ser intuitiva com uma mão. Resolver isso em mobile garante que desktop também funciona.'
      },
      {
        type: 'heading',
        text: 'Breakpoints: quando expandir'
      },
      {
        type: 'paragraph',
        text: 'Não use breakpoints baseados em dispositivos específicos. Use baseados em quando o design quebra.'
      },
      {
        type: 'list',
        items: [
          'Mobile: 320px - 768px (base, sem media query)',
          'Tablet: 768px - 1024px (quando conteúdo mobile fica muito esticado)',
          'Desktop: 1024px+ (quando há espaço para sidebar, grids complexos)',
          'Wide: 1440px+ (quando conteúdo fica muito espalhado)'
        ]
      },
      {
        type: 'heading',
        text: 'Padrões de adaptação'
      },
      {
        type: 'paragraph',
        text: 'Mobile → Desktop'
      },
      {
        type: 'list',
        items: [
          'Menu hambúrguer → Menu horizontal',
          'Cards empilhados → Grid 2-3 colunas',
          'Formulário vertical → Formulário em duas colunas',
          'Imagem full-width → Imagem com texto ao lado'
        ]
      },
      {
        type: 'heading',
        text: 'Cuidados com Mobile First'
      },
      {
        type: 'paragraph',
        text: 'Não signific limitar desktop. Significa começar com foco e expandir com propósito. Desktop pode ter features extras, layouts mais ricos, mas o core precisa funcionar em mobile.'
      },
      {
        type: 'paragraph',
        text: 'Teste em dispositivos reais, não apenas no DevTools. Touch, scroll, orientação (portrait/landscape) se comportam diferente.'
      },
      {
        type: 'heading',
        text: 'Ferramentas úteis'
      },
      {
        type: 'list',
        items: [
          'Chrome DevTools: Modo responsivo com throttling de rede',
          'BrowserStack: Teste em devices reais (sem precisar comprar 20 celulares)',
          'Tailwind CSS: Framework mobile-first por padrão',
          'Figma: Design responsivo com constraints e auto-layout'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Mobile First não é tendência, é realidade. A maioria dos seus usuários está em mobile. Ignorar isso é perder conversão, acessibilidade e SEO. Comece pequeno, expanda com propósito.'
      }
    ]
  },
  '6': {
    id: 6,
    slug: 'acessibilidade-na-web',
    title: 'Acessibilidade não é opcional: Como tornar seu site usável para todos',
    excerpt: '15% da população mundial tem alguma deficiência. Ignorar acessibilidade não é apenas exclusão, é perder usuários e estar vulnerável legalmente.',
    date: '2023-12-20',
    author: 'Eduardo Pires',
    category: 'Acessibilidade',
    image: 'https://images.unsplash.com/photo-1634944902853-3e977c2de8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQxNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '9 min',
    tags: ['acessibilidade', 'a11y', 'wcag', 'inclusão'],
    content: [
      {
        type: 'paragraph',
        text: '15% da população mundial tem alguma deficiência. Isso é mais de 1 bilhão de pessoas. Ignorar acessibilidade não é apenas exclusão, é perder usuários, receita e estar vulnerável legalmente.'
      },
      {
        type: 'paragraph',
        text: 'Acessibilidade não �� sobre caridade. É sobre fazer produtos que funcionam para todo mundo.'
      },
      {
        type: 'heading',
        text: 'O que é acessibilidade web?'
      },
      {
        type: 'paragraph',
        text: 'É garantir que pessoas com deficiências (visual, auditiva, motora, cognitiva) consigam usar seu site. Isso inclui:'
      },
      {
        type: 'list',
        items: [
          'Cegos usando leitores de tela (NVDA, JAWS, VoiceOver)',
          'Pessoas com baixa visão usando zoom ou contraste alto',
          'Surdos precisando de legendas em vídeos',
          'Pessoas com mobilidade limitada navegando só com teclado',
          'Pessoas com dislexia ou TDAH precisando de conteúdo claro'
        ]
      },
      {
        type: 'heading',
        text: 'WCAG: O padrão de acessibilidade'
      },
      {
        type: 'paragraph',
        text: 'WCAG (Web Content Accessibility Guidelines) define 3 níveis de conformidade:'
      },
      {
        type: 'list',
        items: [
          'Nível A: Mínimo básico (ex: imagens têm alt text)',
          'Nível AA: Padrão recomendado (ex: contraste mínimo 4.5:1)',
          'Nível AAA: Altíssimo nível (ex: contraste 7:1, raríssimo alcançar)'
        ]
      },
      {
        type: 'paragraph',
        text: 'A maioria das empresas busca AA, que é suficiente para evitar processos e garantir usabilidade.'
      },
      {
        type: 'heading',
        text: 'Práticas essenciais de acessibilidade'
      },
      {
        type: 'paragraph',
        text: '1. Semântica HTML correta'
      },
      {
        type: 'paragraph',
        text: 'Use tags corretas: <button> para botões (não <div onclick>), <nav> para navegação, <main> para conteúdo principal. Leitores de tela dependem disso.'
      },
      {
        type: 'paragraph',
        text: '2. Alt text em imagens'
      },
      {
        type: 'paragraph',
        text: 'Toda imagem precisa de alt. Se é decorativa, use alt vazio (alt=""). Se é conteúdo, descreva o que importa, não "imagem de...".'
      },
      {
        type: 'paragraph',
        text: '3. Contraste de cores'
      },
      {
        type: 'paragraph',
        text: 'Texto precisa ter contraste mínimo de 4.5:1 com o fundo (AA). Títulos grandes podem ser 3:1. Use ferramentas como Contrast Checker para validar.'
      },
      {
        type: 'paragraph',
        text: '4. Navegação por teclado'
      },
      {
        type: 'paragraph',
        text: 'Todo elemento interativo deve ser acessível com Tab, Enter e Esc. Ordem de foco deve fazer sentido. Indicador de foco (:focus) deve ser visível.'
      },
      {
        type: 'paragraph',
        text: '5. Labels em formulários'
      },
      {
        type: 'paragraph',
        text: 'Todo input precisa de <label> associado. Placeholders NÃO substituem labels. Mensagens de erro devem ser claras e acessíveis.'
      },
      {
        type: 'heading',
        text: 'ARIA: quando HTML não basta'
      },
      {
        type: 'paragraph',
        text: 'ARIA (Accessible Rich Internet Applications) adiciona informações para leitores de tela quando HTML puro não resolve.'
      },
      {
        type: 'list',
        items: [
          'aria-label: Descreve elemento sem texto visível (ex: botão de ícone)',
          'aria-hidden="true": Esconde elemento decorativo de leitores de tela',
          'role: Define papel do elemento (ex: role="dialog" para modal)',
          'aria-live: Anuncia mudanças dinâmicas (ex: notificações)'
        ]
      },
      {
        type: 'quote',
        text: 'Regra de ouro do ARIA: Não use ARIA se HTML semântico resolver.'
      },
      {
        type: 'heading',
        text: 'Ferramentas para testar acessibilidade'
      },
      {
        type: 'list',
        items: [
          'Lighthouse (Chrome DevTools): Auditoria automatizada',
          'axe DevTools: Extensão que detecta problemas de a11y',
          'WAVE: Extensão que mostra visualmente erros de acessibilidade',
          'Leitores de tela: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)',
          'Keyboard-only testing: Navegue seu site só com Tab e Enter'
        ]
      },
      {
        type: 'heading',
        text: 'Impacto além da inclusão'
      },
      {
        type: 'paragraph',
        text: 'Acessibilidade melhora UX para todo mundo:'
      },
      {
        type: 'list',
        items: [
          'Legendas ajudam quem está em ambiente barulhento',
          'Navegação por teclado ajuda power users',
          'Alt text melhora SEO (Google não "vê" imagens)',
          'Estrutura semântica melhora performance de crawlers'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'Acessibilidade não é checklist. É mindset. Não é sobre fazer site perfeito, é sobre não criar barreiras desnecessárias. Comece com o básico (semântica, contraste, teclado), teste com ferramentas, e evolua. Cada melhoria conta.'
      }
    ]
  },
  '7': {
    id: 7,
    slug: 'seo-para-desenvolvedores',
    title: 'SEO para Desenvolvedores: O que tech pode fazer (e o que não pode)',
    excerpt: 'SEO técnico é responsabilidade de dev, não só de marketing. Crawling, indexação, performance e estrutura de dados definem se seu site aparece no Google.',
    date: '2023-12-15',
    author: 'Eduardo Pires',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzY0MTgwMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '12 min',
    tags: ['seo', 'técnico', 'google', 'indexação'],
    content: [
      {
        type: 'paragraph',
        text: 'SEO técnico é responsabilidade de dev, não só de marketing. Você pode ter o melhor conteúdo do mundo, mas se o Google não consegue crawlear, indexar e entender seu site, ele não vai ranquear.'
      },
      {
        type: 'paragraph',
        text: 'SEO tem duas partes: conteúdo (marketing) e técnica (dev). Este artigo foca na parte técnica.'
      },
      {
        type: 'heading',
        text: 'Como o Google funciona (simplificado)'
      },
      {
        type: 'list',
        items: [
          'Crawling: Googlebot visita seu site seguindo links',
          'Indexação: Google processa e armazena o conteúdo',
          'Ranking: Google decide qual página mostrar para cada busca'
        ]
      },
      {
        type: 'paragraph',
        text: 'Se falhar no crawling, não indexa. Se não indexar, não rankeia. Dev controla crawling e indexação.'
      },
      {
        type: 'heading',
        text: '1. Sitemap e robots.txt'
      },
      {
        type: 'paragraph',
        text: 'Sitemap (sitemap.xml) diz ao Google quais páginas existem. Robots.txt diz quais podem ser crawleadas.'
      },
      {
        type: 'list',
        items: [
          'Sitemap: Liste todas as URLs públicas, atualize dinamicamente',
          'Robots.txt: Bloqueie admin, páginas de teste, conteúdo duplicado',
          'Google Search Console: Envie sitemap e monitore erros de crawl'
        ]
      },
      {
        type: 'heading',
        text: '2. Meta tags essenciais'
      },
      {
        type: 'paragraph',
        text: 'Title e description aparecem no Google. Precisam ser únicos por página.'
      },
      {
        type: 'list',
        items: [
          '<title>: 50-60 caracteres, palavra-chave no início',
          '<meta name="description">: 150-160 caracteres, resumo atraente',
          '<meta name="robots">: Controla indexação (noindex, nofollow)',
          'Canonical tags: Evita conteúdo duplicado'
        ]
      },
      {
        type: 'heading',
        text: '3. Estrutura de URLs'
      },
      {
        type: 'paragraph',
        text: 'URLs descritivas ranqueiam melhor que IDs aleatórios.'
      },
      {
        type: 'paragraph',
        text: 'Bom: /blog/seo-para-desenvolvedores'
      },
      {
        type: 'paragraph',
        text: 'Ruim: /post?id=12345'
      },
      {
        type: 'list',
        items: [
          'Use hífens, não underscores (Google trata como espaços)',
          'Mantenha URLs curtas e descritivas',
          'Evite parâmetros desnecessários (?utm_source...)',
          'Use HTTPS sempre (Google prioriza sites seguros)'
        ]
      },
      {
        type: 'heading',
        text: '4. Structured Data (Schema.org)'
      },
      {
        type: 'paragraph',
        text: 'Structured data usa JSON-LD para dizer ao Google o que é cada coisa: artigo, produto, pessoa, evento.'
      },
      {
        type: 'paragraph',
        text: 'Isso gera rich snippets (estrelas de avaliação, preço, data de evento) que aumentam CTR.'
      },
      {
        type: 'list',
        items: [
          'Article: Para blog posts (título, autor, data, imagem)',
          'Product: Para e-commerce (preço, avaliação, disponibilidade)',
          'FAQ: Para perguntas frequentes (aparece como dropdown no Google)',
          'Breadcrumb: Para navegação hierárquica'
        ]
      },
      {
        type: 'heading',
        text: '5. Performance e Core Web Vitals'
      },
      {
        type: 'paragraph',
        text: 'Desde 2021, Google usa Core Web Vitals como fator de ranking. Sites lentos rankam pior.'
      },
      {
        type: 'list',
        items: [
          'LCP < 2.5s: Conteúdo principal carrega rápido',
          'FID < 100ms: Site responde a interações rapidamente',
          'CLS < 0.1: Layout não pula durante carregamento'
        ]
      },
      {
        type: 'paragraph',
        text: 'Use Lighthouse e PageSpeed Insights para medir e otimizar.'
      },
      {
        type: 'heading',
        text: '6. Mobile-First Indexing'
      },
      {
        type: 'paragraph',
        text: 'Google indexa versão mobile do seu site primeiro. Se mobile está quebrado, você não rankeia.'
      },
      {
        type: 'list',
        items: [
          'Design responsivo (não site mobile separado)',
          'Conteúdo igual em mobile e desktop',
          'Velocidade mobile otimizada (imagens, JS)',
          'Touch targets mínimos de 48x48px'
        ]
      },
      {
        type: 'heading',
        text: '7. Evite erros comuns'
      },
      {
        type: 'list',
        items: [
          'JavaScript bloqueando crawl: Use SSR (Next.js, Nuxt) ou pre-rendering',
          'Conteúdo duplicado: Use canonical tags',
          '404s e links quebrados: Monitore no Search Console',
          'Redirects em cadeia: Vá direto de A para C, não A→B→C',
          'Páginas lentas: Otimize imagens, remova JS desnecessário'
        ]
      },
      {
        type: 'heading',
        text: 'Ferramentas essenciais'
      },
      {
        type: 'list',
        items: [
          'Google Search Console: Erros de crawl, indexação, performance',
          'Lighthouse: Auditoria técnica de SEO',
          'Screaming Frog: Crawl local para encontrar problemas',
          'Schema Markup Validator: Valida structured data',
          'Ahrefs/SEMrush: Análise competitiva (pago)'
        ]
      },
      {
        type: 'heading',
        text: 'O que dev NÃO controla'
      },
      {
        type: 'paragraph',
        text: 'SEO técnico só leva até certo ponto. Você não controla:'
      },
      {
        type: 'list',
        items: [
          'Qualidade do conteúdo (marketing)',
          'Backlinks (autoridade de domínio)',
          'Comportamento do usuário (CTR, tempo na página)',
          'Algoritmo do Google (muda constantemente)'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusão'
      },
      {
        type: 'paragraph',
        text: 'SEO técnico não garante posição #1, mas garante que você está na corrida. Ignore isso e nem participa. Foque em: crawlability, indexação, performance, mobile e structured data. O resto é com marketing.'
      }
    ]
  }
};
