const baseConhecimento = [
  {
    pergunta: "o que é pontuação",
    keywords: ["pontuação", "sinais"],
    resposta: "Pontuação é o uso de sinais gráficos para organizar frases e textos."
  },
  {
    pergunta: "o que é ideia central",
    keywords: ["ideia central", "principal"],
    resposta: "A ideia central é a principal mensagem que o texto transmite."
  },
  {
    pergunta: "tipos de sílabas",
    keywords: ["sílabas", "divisão sonora"],
    resposta: "Os tipos de sílabas variam conforme a divisão sonora das palavras, podendo ser tônicas ou átonas."
  },
  {
    pergunta: "o que é narrativa",
    keywords: ["narrativa", "história"],
    resposta: "Narrativa é um tipo de texto que conta uma história com personagens, tempo e espaço."
  },
  {
    pergunta: "o que é substantivo",
    keywords: ["substantivo", "nome"],
    resposta: "É a classe de palavras que nomeia seres, objetos, lugares e sentimentos."
  },
  {
    pergunta: "o que é adjetivo",
    keywords: ["adjetivo", "característica"],
    resposta: "É a palavra que caracteriza ou atribui qualidades ao substantivo."
  },
  {
    pergunta: "o que é verbo",
    keywords: ["verbo", "ação"],
    resposta: "É a palavra que indica ação, estado, ocorrência ou fenômeno da natureza."
  },
  {
    pergunta: "o que é artigo",
    keywords: ["artigo", "definido"],
    resposta: "É a palavra que antecede o substantivo para determiná-lo ou indeterminá-lo."
  },
  {
    pergunta: "o que é pronome",
    keywords: ["pronome", "substitui"],
    resposta: "É a palavra que substitui ou acompanha o substantivo, indicando a pessoa do discurso."
  },
  {
    pergunta: "o que é advérbio",
    keywords: ["advérbio", "circunstância"],
    resposta: "É a palavra que modifica o verbo, o adjetivo ou outro advérbio."
  },
  {
    pergunta: "o que é preposição",
    keywords: ["preposição", "ligação"],
    resposta: "É a palavra invariável que liga dois termos da oração."
  },
  {
    pergunta: "o que é conjunção",
    keywords: ["conjunção", "conectivo"],
    resposta: "É a palavra que liga duas orações ou dois termos semelhantes."
  },
  {
    pergunta: "o que é interjeição",
    keywords: ["interjeição", "emoção"],
    resposta: "É a palavra que exprime emoções, sentimentos e estados de espírito."
  },
  {
    pergunta: "o que é numeral",
    keywords: ["numeral", "quantidade"],
    resposta: "É a palavra que indica quantidade, ordem, múltiplo ou fração."
  },
  {
    pergunta: "o que é sujeito",
    keywords: ["sujeito", "quem"],
    resposta: "É o termo da oração sobre o qual se faz uma declaração."
  },
  {
    pergunta: "o que é predicado",
    keywords: ["predicado", "declaração"],
    resposta: "É tudo o que se declara a respeito do sujeito."
  },
  {
    pergunta: "o que é ditongo",
    keywords: ["ditongo", "encontro"],
    resposta: "É o encontro de uma vogal e uma semivogal na mesma sílaba."
  },
  {
    pergunta: "o que é tritongo",
    keywords: ["tritongo", "encontro"],
    resposta: "É o encontro de semivogal + vogal + semivogal na mesma sílaba."
  },
  {
    pergunta: "o que é hiato",
    keywords: ["hiato", "separação"],
    resposta: "É o encontro de duas vogais que ficam em sílabas diferentes."
  },
  {
    pergunta: "o que são oxítonas",
    keywords: ["oxítonas", "tônica"],
    resposta: "São palavras cuja última sílaba é a tônica."
  },
  {
    pergunta: "o que são paroxítonas",
    keywords: ["paroxítonas", "tônica"],
    resposta: "São palavras cuja penúltima sílaba é a tônica."
  },
  {
    pergunta: "o que são proparoxítonas",
    keywords: ["proparoxítonas", "tônica"],
    resposta: "São palavras cuja antepenúltima sílaba é a tônica."
  },
  {
    pergunta: "o que é sinônimo",
    keywords: ["sinônimo", "igual"],
    resposta: "São palavras com significados semelhantes."
  },
  {
    pergunta: "o que é antônimo",
    keywords: ["antônimo", "oposto"],
    resposta: "São palavras com significados opostos."
  },
  {
    pergunta: "o que é homônimo",
    keywords: ["homônimo", "igual"],
    resposta: "Palavras com a mesma pronúncia ou escrita, mas significados diferentes."
  },
  {
    pergunta: "o que é parônimo",
    keywords: ["parônimo", "parecido"],
    resposta: "Palavras parecidas na escrita e pronúncia, mas com significados diferentes."
  },
  {
    pergunta: "o que é conotação",
    keywords: ["conotação", "figurado"],
    resposta: "É o sentido figurado ou subjetivo de uma palavra."
  },
  {
    pergunta: "o que é denotação",
    keywords: ["denotação", "literal"],
    resposta: "É o sentido literal e objetivo de uma palavra (dicionário)."
  },
  {
    pergunta: "o que é metáfora",
    keywords: ["metáfora", "comparação"],
    resposta: "É uma comparação implícita sem o uso de conectivo."
  },
  {
    pergunta: "o que é comparação",
    keywords: ["comparação", "conectivo"],
    resposta: "É uma relação de semelhança explícita usando conectivos como 'como'."
  },
  {
    pergunta: "o que é personificação",
    keywords: ["personificação", "humano"],
    resposta: "Atribuição de características humanas a seres inanimados."
  },
  {
    pergunta: "o que é hipérbole",
    keywords: ["hipérbole", "exagero"],
    resposta: "É uma figura de linguagem baseada no exagero intencional."
  },
  {
    pergunta: "o que é eufemismo",
    keywords: ["eufemismo", "suavizar"],
    resposta: "Suavização de uma expressão desagradável ou chocante."
  },
  {
    pergunta: "o que é ironia",
    keywords: ["ironia", "sátira"],
    resposta: "Dizer o contrário do que se pensa para satirizar."
  },
  {
    pergunta: "o que é onomatopeia",
    keywords: ["onomatopeia", "som"],
    resposta: "Tentativa de reproduzir sons e ruídos por meio de palavras."
  },
  {
    pergunta: "o que é antítese",
    keywords: ["antítese", "contrário"],
    resposta: "Uso de termos com sentidos opostos no mesmo enunciado."
  },
  {
    pergunta: "o que é paradoxo",
    keywords: ["paradoxo", "contradição"],
    resposta: "Reunião de ideias contraditórias que se excluem logicamente."
  },
  {
    pergunta: "o que é pleonasmo",
    keywords: ["pleonasmo", "repetição"],
    resposta: "Repetição de uma ideia para reforçar o sentido."
  },
  {
    pergunta: "o que é elipse",
    keywords: ["elipse", "omissão"],
    resposta: "Omissão de um termo facilmente identificável pelo contexto."
  },
  {
    pergunta: "o que é zeugma",
    keywords: ["zeugma", "omissão"],
    resposta: "Omissão de um termo que já foi mencionado anteriormente."
  },
  {
    pergunta: "o que é gênero lírico",
    keywords: ["lírico", "sentimento"],
    resposta: "Gênero focado na expressão de sentimentos e subjetividade."
  },
  {
    pergunta: "o que é gênero épico",
    keywords: ["épico", "herói"],
    resposta: "Gênero que narra feitos heroicos e grandes aventuras."
  },
  {
    pergunta: "o que é gênero dramático",
    keywords: ["dramático", "teatro"],
    resposta: "Textos feitos para serem encenados em teatro."
  },
  {
    pergunta: "o que é soneto",
    keywords: ["soneto", "poema"],
    resposta: "Poema com 14 versos, divididos em dois quartetos e dois tercetos."
  },
  {
    pergunta: "o que é verso",
    keywords: ["verso", "linha"],
    resposta: "Cada linha de um poema."
  },
  {
    pergunta: "o que é estrofe",
    keywords: ["estrofe", "conjunto"],
    resposta: "Conjunto de versos em um poema."
  },
  {
    pergunta: "o que é rima",
    keywords: ["rima", "som"],
    resposta: "Semelhança de sons finais entre as palavras dos versos."
  },
  {
    pergunta: "o que é crônica",
    keywords: ["crônica", "cotidiano"],
    resposta: "Texto curto que reflete sobre fatos do cotidiano."
  },
  {
    pergunta: "o que é conto",
    keywords: ["conto", "curta"],
    resposta: "Narrativa curta com poucas personagens e um único conflito."
  },
  {
    pergunta: "o que é romance",
    keywords: ["romance", "longa"],
    resposta: "Narrativa longa com trama complexa e várias personagens."
  },
  {
    pergunta: "o que é fábula",
    keywords: ["fábula", "moral"],
    resposta: "Narrativa curta com animais que transmitem uma lição de moral."
  },
  {
    pergunta: "o que é notícia",
    keywords: ["notícia", "fato"],
    resposta: "Relato de fatos recentes e de interesse público."
  },
  {
    pergunta: "o que é reportagem",
    keywords: ["reportagem", "jornalismo"],
    resposta: "Texto jornalístico mais aprofundado que a notícia."
  },
  {
    pergunta: "o que é carta",
    keywords: ["carta", "destinatário"],
    resposta: "Texto em que o autor defende um ponto de vista para um destinatário."
  },
  {
    pergunta: "o que é resenha",
    keywords: ["resenha", "análise"],
    resposta: "Texto que resume e analisa uma obra (livro, filme, etc)."
  },
  {
    pergunta: "o que é biografia",
    keywords: ["biografia", "vida"],
    resposta: "Texto que narra a história da vida de uma pessoa."
  },
  {
    pergunta: "o que é oração",
    keywords: ["oração", "verbo"],
    resposta: "Enunciado que se organiza em torno de um verbo."
  },
  {
    pergunta: "o que é frase",
    keywords: ["frase", "sentido"],
    resposta: "Enunciado com sentido completo, com ou sem verbo."
  },
  {
    pergunta: "o que é período",
    keywords: ["período", "orações"],
    resposta: "Frase constituída por uma ou mais orações."
  },
  {
    pergunta: "o que é concordância",
    keywords: ["concordância", "harmonia"],
    resposta: "Harmonia entre os termos da oração em gênero, número ou pessoa."
  },
  {
    pergunta: "o que é regência",
    keywords: ["regência", "dependência"],
    resposta: "Relação de dependência entre um termo regente e um termo regido."
  },
  {
    pergunta: "o que é crase",
    keywords: ["crase", "acentuação"],
    resposta: "Fusão da preposição 'a' com o artigo definido 'a'."
  },
  {
    pergunta: "o que é vocativo",
    keywords: ["vocativo", "chamar"],
    resposta: "Termo usado para chamar ou interpelar o interlocutor."
  },
  {
    pergunta: "o que é aposto",
    keywords: ["aposto", "explicação"],
    resposta: "Termo que explica ou resume um substantivo anterior."
  },
  {
    pergunta: "o que é objeto direto",
    keywords: ["direto", "complemento"],
    resposta: "Complemento de verbo transitivo sem preposição obrigatória."
  },
  {
    pergunta: "o que é objeto indireto",
    keywords: ["indireto", "complemento"],
    resposta: "Complemento de verbo transitivo com preposição obrigatória."
  },
  {
    pergunta: "o que é voz ativa",
    keywords: ["ativa", "pratica"],
    resposta: "Quando o sujeito pratica a ação expressa pelo verbo."
  },
  {
    pergunta: "o que é voz passiva",
    keywords: ["passiva", "sofre"],
    resposta: "Quando o sujeito sofre a ação expressa pelo verbo."
  },
  {
    pergunta: "o que é dígrafo",
    keywords: ["dígrafo", "letras"],
    resposta: "Grupo de duas letras que representam um único fonema."
  },
  {
    pergunta: "o que é fonema",
    keywords: ["fonema", "som"],
    resposta: "A menor unidade sonora da língua."
  },
  {
    pergunta: "o que é radical",
    keywords: ["radical", "significado"],
    resposta: "Parte da palavra que contém seu significado básico."
  },
  {
    pergunta: "o que é sufixo",
    keywords: ["sufixo", "depois"],
    resposta: "Elemento colocado após o radical para formar uma nova palavra."
  },
  {
    pergunta: "o que é prefixo",
    keywords: ["prefixo", "antes"],
    resposta: "Elemento colocado antes do radical para formar uma nova palavra."
  },
  {
    pergunta: "o que é neologismo",
    keywords: ["neologismo", "novo"],
    resposta: "Criação de uma nova palavra ou novo sentido."
  },
  {
    pergunta: "o que é coesão",
    keywords: ["coesão", "ligação"],
    resposta: "Ligação lógica entre os elementos de um texto através de conectivos."
  },
  {
    pergunta: "o que é coerência",
    keywords: ["coerência", "sentido"],
    resposta: "Relação lógica entre as ideias de um texto."
  },
  {
    pergunta: "o que é polissemia",
    keywords: ["polissemia", "vários"],
    resposta: "Multiplicidade de significados de uma mesma palavra."
  },
  {
    pergunta: "o que é ambiguidade",
    keywords: ["ambiguidade", "duplo"],
    resposta: "Quando um enunciado permite mais de uma interpretação."
  },
  {
    pergunta: "o que é dissertação",
    keywords: ["dissertação", "argumento"],
    resposta: "Texto que expõe ideias e defende um ponto de vista."
  },
  {
    pergunta: "o que é injunção",
    keywords: ["injunção", "instrução"],
    resposta: "Texto que dá instruções ou ordens (ex: receitas)."
  },
  {
    pergunta: "o que é descrição",
    keywords: ["descrição", "detalhe"],
    resposta: "Texto que detalha características de seres ou objetos."
  },
  {
    pergunta: "o que é clímax",
    keywords: ["clímax", "tensão"],
    resposta: "O ponto de maior tensão em uma narrativa."
  },
  {
    pergunta: "o que é metonímia",
    keywords: ["metonímia", "substituição"],
    resposta: "Substituição de um termo por outro próximo (autor pela obra)."
  },
  {
    pergunta: "o que é pleonasmo vicioso",
    keywords: ["vicioso", "erro"],
    resposta: "Repetição desnecessária e incorreta (ex: subir para cima)."
  },
  {
    pergunta: "o que é aliteração",
    keywords: ["aliteração", "repetição"],
    resposta: "Repetição de sons consonantais para criar efeito sonoro."
  },
  {
    pergunta: "o que é assonância",
    keywords: ["assonância", "vogal"],
    resposta: "Repetição de sons vocálicos em um verso ou frase."
  },
  {
    pergunta: "o que é catacrese",
    keywords: ["catacrese", "emprestado"],
    resposta: "Metáfora já cristalizada por falta de termo próprio (pé da mesa)."
  },
  {
    pergunta: "o que é sinestesia",
    keywords: ["sinestesia", "sentidos"],
    resposta: "Mistura de sensações de diferentes órgãos dos sentidos."
  },
  {
    pergunta: "o que é hipérbato",
    keywords: ["hipérbato", "inversão"],
    resposta: "Inversão da ordem direta dos termos na oração."
  },
  {
    pergunta: "o que é polissíndeto",
    keywords: ["polissíndeto", "conjunção"],
    resposta: "Repetição intencional de conjunções entre termos ou orações."
  },
  {
    pergunta: "o que é assíndeto",
    keywords: ["assíndeto", "vírgula"],
    resposta: "Omissão de conjunções, usando apenas vírgulas."
  },
  {
    pergunta: "o que é anáfora",
    keywords: ["anáfora", "repetição"],
    resposta: "Repetição de uma palavra no início de versos ou frases."
  },
  {
    pergunta: "o que é parnasianismo",
    keywords: ["parnasianismo", "arte"],
    resposta: "Movimento literário focado na perfeição formal e 'arte pela arte'."
  },
  {
    pergunta: "o que é romantismo",
    keywords: ["romantismo", "emoção"],
    resposta: "Movimento focado na subjetividade, emoção e nacionalismo."
  },
  {
    pergunta: "o que é realismo",
    keywords: ["realismo", "objetivo"],
    resposta: "Movimento que busca retratar a realidade de forma objetiva e fiel."
  },
  {
    pergunta: "o que é modernismo",
    keywords: ["modernismo", "ruptura"],
    resposta: "Movimento de ruptura com o passado e busca por nova linguagem."
  },
  {
    pergunta: "o que é arcadismo",
    keywords: ["arcadismo", "natureza"],
    resposta: "Movimento que valoriza a vida bucólica e a natureza."
  },
  {
    pergunta: "o que é barroco",
    keywords: ["barroco", "dualidade"],
    resposta: "Estilo marcado pelo contraste, excesso e dualidade."
  },
  {
    pergunta: "o que é denotativo",
    keywords: ["denotativo", "real"],
    resposta: "Uso da palavra em seu sentido real, próprio e comum."
  },
  {
    pergunta: "o que é conotativo",
    keywords: ["conotativo", "figurado"],
    resposta: "Uso da palavra em sentido figurado, dependente do contexto."
  }
];
