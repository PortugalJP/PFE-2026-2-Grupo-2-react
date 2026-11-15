// Horários e nomes usados no agendamento (domingo fechado)
const horasSemana = ['08:00', '10:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
const horasSabado = ['10:00', '14:00', '15:00', '16:00', '17:00']
const totalMeses = 3

const nomesMeses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
const nomesDias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
  'quinta-feira', 'sexta-feira', 'sábado']

const opcoesPrograma = [
  { id: 'pkz', nome: 'PKZ', detalhe: 'PKZ · 7 a 15 anos', publico: 'Jovens atletas · 7 a 15 anos', rotulo: 'Nome do atleta' },
  { id: 'onetoone', nome: 'One to One', detalhe: 'One to One · 17 a 90 anos', publico: 'Adultos · 17 a 90 anos', rotulo: 'Seu nome' },
]

// Número do WhatsApp (provisório — trocar pelo número real)
const numeroWhatsapp = '55XXXXXXXXXXX'

const dadosAgendamento = { horasSemana, horasSabado, totalMeses, nomesMeses, nomesDias, opcoesPrograma, numeroWhatsapp }

export default dadosAgendamento
