import treinador1 from '../assets/treinador1.webp'
import treinador2 from '../assets/treinador2.webp'
import treinador3 from '../assets/treinador3.webp'
import treinador4 from '../assets/treinador4.webp'
import treinador5 from '../assets/treinador5.webp'
import treinador6 from '../assets/treinador6.webp'

// Treinadores (conteúdo fictício — trocar pelos dados reais)
// destaque: true = aparece na página Início
const treinadores = [
  {
    id: 1, destaque: true, programa: 'pkz', nome: 'Rafael Monteiro', foto: treinador1,
    especialidade: 'Preparação física para jovens atletas',
    apresentacao: 'Formado em Educação Física, especialista em treinamento esportivo. Trabalha há 10 anos com atletas de base do futebol e do vôlei.',
    tags: 'Alto rendimento | Prevenção de lesões', cref: 'CREF 048213-G/RJ',
  },
  {
    id: 2, programa: 'pkz', nome: 'Camila Duarte', foto: treinador2,
    especialidade: 'Velocidade, agilidade e coordenação',
    apresentacao: 'Ex-atleta de atletismo, monta os circuitos de agilidade da PKZ e acompanha a evolução de cada criança nos testes físicos.',
    tags: 'Velocidade | Coordenação', cref: 'CREF 052907-G/RJ',
  },
  {
    id: 3, programa: 'pkz', nome: 'Bruno Tavares', foto: treinador3,
    especialidade: 'Força e avaliação física',
    apresentacao: 'Pós-graduado em fisiologia do exercício, conduz a bateria de 16 testes da PKZ e explica os resultados aos pais e responsáveis.',
    tags: 'Avaliação física | Força', cref: 'CREF 061354-G/RJ',
  },
  {
    id: 4, destaque: true, programa: 'onetoone', nome: 'Juliana Costa', foto: treinador4,
    especialidade: 'Musculação e condicionamento',
    apresentacao: 'Especialista em musculação para iniciantes e para quem volta a treinar depois de muito tempo parado, sempre com ajuste de carga.',
    tags: 'Musculação | Condicionamento', cref: 'CREF 039876-G/RJ',
  },
  {
    id: 5, destaque: true, programa: 'onetoone', nome: 'André Nascimento', foto: treinador5,
    especialidade: 'Mobilidade e reabilitação',
    apresentacao: 'Fisioterapeuta e educador físico, cuida de alunos com dores ou em retorno após lesões, com treinos de mobilidade e fortalecimento.',
    tags: 'Mobilidade | Reabilitação', cref: 'CREF 044521-G/RJ',
  },
  {
    id: 6, programa: 'onetoone', nome: 'Márcia Pires', foto: treinador6,
    especialidade: 'Treino para a terceira idade',
    apresentacao: 'Atende alunos de 60 a 90 anos com foco em força, equilíbrio e autonomia para as atividades do dia a dia.',
    tags: 'Terceira idade | Equilíbrio', cref: 'CREF 057438-G/RJ',
  },
]

export default treinadores
