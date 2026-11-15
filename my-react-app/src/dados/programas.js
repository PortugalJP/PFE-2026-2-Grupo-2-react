import fotoPkz from '../assets/programa-pkz.webp'
import fotoOneToOne from '../assets/programa-onetoone.webp'

// Cards "Qual é o seu caminho?" (página Início)
const programas = [
  {
    id: 'pkz', nome: 'PKZ', idade: '7 a 15 anos', caminho: '/pkz', foto: fotoPkz,
    titulo: 'Treinamento complexo para jovens atletas',
    texto: 'Preparação física de alto rendimento para crianças e adolescentes, com foco em performance esportiva, coordenação e prevenção de lesões — e acompanhamento próximo dos pais e responsáveis.',
    itens: ['Avaliações físicas periódicas com 16 testes', 'Painel de evolução para pais e responsáveis', 'Treino adaptado à modalidade de cada atleta'],
    botao: 'PKZ',
  },
  {
    id: 'onetoone', nome: 'One to One', idade: '17 a 90 anos', caminho: '/onetoone', foto: fotoOneToOne,
    titulo: 'Musculação e condicionamento para adultos',
    texto: 'Treino personalizado de musculação e condicionamento físico para quem busca saúde, força e qualidade de vida — em qualquer fase da vida.',
    itens: ['Treinos individualizados e acompanhados', 'Acompanhamento da sua evolução física', 'Ajuste de carga a cada sessão'],
    botao: 'One to One',
  },
]

export default programas
