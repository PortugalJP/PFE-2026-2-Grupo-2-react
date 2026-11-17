// Conteúdo da página Fisioterapia (fictício — trocar pelos dados reais)
const publico = [
  { numero: '01', titulo: 'Atletas lesionados', texto: 'Jovens da PKZ e alunos da One to One que precisam se recuperar de entorses, distensões e tendinites.' },
  { numero: '02', titulo: 'Pós-operatório', texto: 'Reabilitação depois de cirurgias de joelho, ombro, tornozelo e coluna, com protocolo passo a passo.' },
  { numero: '03', titulo: 'Dores no dia a dia', texto: 'Quem convive com dor nas costas, no pescoço ou nas articulações e quer voltar a se mover sem medo.' },
]

const servicos = [
  { titulo: 'Fisioterapia ortopédica', texto: 'Tratamento de lesões em músculos, tendões, ligamentos e articulações.' },
  { titulo: 'Fisioterapia esportiva', texto: 'Recuperação focada no retorno ao esporte, com testes de liberação.' },
  { titulo: 'Pós-operatório', texto: 'Protocolos para joelho (LCA), ombro e coluna, do primeiro dia à alta.' },
  { titulo: 'RPG e postura', texto: 'Reeducação postural global para dores crônicas e desequilíbrios.' },
  { titulo: 'Liberação miofascial', texto: 'Técnicas manuais e instrumentais para aliviar tensão e dor muscular.' },
  { titulo: 'Pilates clínico', texto: 'Exercícios de controle e estabilidade para prevenir novas lesões.' },
]

const linhaDoTempo = [
  { ano: '2020', texto: 'Primeiro fisioterapeuta na equipe, atendendo os atletas da PKZ.' },
  { ano: '2022', texto: 'Sala própria de fisioterapia, com macas e equipamentos de eletroterapia.' },
  { ano: '2024', texto: 'Abertura do atendimento para alunos da One to One e para o público em geral.' },
  { ano: '2026', texto: 'Pilates clínico e protocolo de retorno ao esporte integrado aos treinos.' },
]

const passos = [
  { numero: '1', titulo: 'Avaliação', texto: 'Conversa, testes de movimento e força para entender a origem da dor.' },
  { numero: '2', titulo: 'Plano de tratamento', texto: 'Objetivos, número de sessões e exercícios definidos para o seu caso.' },
  { numero: '3', titulo: 'Sessões', texto: 'Atendimento individual de 50 minutos, com evolução registrada a cada encontro.' },
  { numero: '4', titulo: 'Alta e retorno', texto: 'Liberação para voltar a treinar na PKZ ou na One to One, com acompanhamento.' },
]

// WhatsApp da fisioterapia (número provisório) com mensagem pronta
const whatsapp = 'https://wa.me/55XXXXXXXXXXX?text=Olá! Quero agendar uma avaliação de fisioterapia.'

const dadosFisioterapia = { publico, servicos, linhaDoTempo, passos, whatsapp }

export default dadosFisioterapia
