import { Link } from 'react-router-dom'

// Perguntas da seção Dúvidas (página Início)
const duvidas = [
  {
    pergunta: 'Qual é a diferença entre PKZ e One to One?',
    resposta: <>A <strong>PKZ</strong> é voltada à preparação física e ao alto rendimento de jovens atletas. A <strong>One to One</strong> trabalha musculação, condicionamento físico e saúde. As duas marcas funcionam no mesmo espaço, com públicos e objetivos diferentes.</>,
  },
  {
    pergunta: 'Qual é a faixa etária de cada programa?',
    resposta: <>A <strong>PKZ atende atletas de 7 a 15 anos</strong>. A <strong>One to One atende pessoas de 17 a 90 anos</strong>. Se tiver dúvidas sobre qual programa escolher, consulte a equipe pela <Link to="/agendamento">página de agendamento</Link>.</>,
  },
  {
    pergunta: 'É necessário já ter experiência com esportes ou musculação?',
    resposta: <>A One to One também atende quem está começando na musculação. A PKZ tem foco na preparação física de jovens atletas. Para entender os requisitos de participação e qual programa corresponde ao seu momento, converse com a equipe pelo <Link to="/agendamento">agendamento</Link>.</>,
  },
  {
    pergunta: 'Como funciona a avaliação inicial?',
    resposta: <>A avaliação inicial ajuda a identificar o ponto de partida do aluno e orientar seu acompanhamento. A equipe explica quais etapas se aplicam ao programa escolhido e como se preparar. Consulte os detalhes pelo <Link to="/agendamento">agendamento</Link>.</>,
  },
  {
    pergunta: 'Como é realizado o acompanhamento da evolução?',
    resposta: <>O projeto prevê acompanhamento do desempenho por meio de avaliações e registros de evolução. Para conhecer os indicadores considerados e a frequência das avaliações no seu programa, consulte a equipe.</>,
  },
  {
    pergunta: 'Como os pais ou responsáveis acompanham o desempenho dos atletas?',
    resposta: <>O projeto prevê que pais e responsáveis possam visualizar a evolução dos atletas da PKZ. Para saber como esse acompanhamento será disponibilizado e como acessar as informações, procure a equipe pelo <Link to="/agendamento">agendamento</Link>.</>,
  },
  {
    pergunta: 'O que são os testes utilizados no acompanhamento dos alunos?',
    resposta: <>São avaliações utilizadas para acompanhar o desempenho físico e observar a evolução ao longo do treinamento. A equipe pode explicar quais testes são utilizados em cada programa e como os resultados orientam o acompanhamento.</>,
  },
  {
    pergunta: 'Como agendar uma aula experimental?',
    resposta: <>Acesse a <Link to="/agendamento">página de agendamento</Link> para solicitar orientações sobre uma aula experimental no programa de interesse. Confirme com a equipe a disponibilidade e os próximos passos.</>,
  },
  {
    pergunta: 'Como consultar horários e valores?',
    resposta: <>Consulte a equipe pelo <Link to="/agendamento">agendamento</Link> para verificar os horários disponíveis e solicitar um <strong>orçamento personalizado</strong>. Os valores e as condições devem ser confirmados diretamente com a equipe.</>,
  },
]

export default duvidas
