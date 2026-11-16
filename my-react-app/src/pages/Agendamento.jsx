import { useState, useEffect } from 'react'
import dados from '../dados/agendamento.js'

// Funções de data
function hoje() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function doisDigitos(n) {
  return String(n).padStart(2, '0')
}

// Date -> "dd/mm/aaaa"
function formatar(d) {
  return doisDigitos(d.getDate()) + '/' + doisDigitos(d.getMonth() + 1) + '/' + d.getFullYear()
}

// "dd/mm/aaaa" -> Date
function paraData(texto) {
  const [d, m, a] = texto.split('/')
  return new Date(a, m - 1, d)
}

// Ex.: "quarta-feira, 28 de outubro"
function textoDoDia(texto) {
  const d = paraData(texto)
  return dados.nomesDias[d.getDay()] + ', ' + d.getDate() + ' de ' + dados.nomesMeses[d.getMonth()]
}

// Funções das reservas
function lerReservas() {
  return JSON.parse(localStorage.getItem('reservas')) || []
}

function horasDoDia(texto) {
  return paraData(texto).getDay() === 6 ? dados.horasSabado : dados.horasSemana
}

function reservado(reservas, id) {
  return reservas.some((r) => r.id === id)
}

function passou(texto, h) {
  const inicio = paraData(texto)
  inicio.setHours(parseInt(h))
  return inicio < new Date()
}

function temLivre(texto, reservas) {
  return horasDoDia(texto).some((h) => !reservado(reservas, texto + ' ' + h) && !passou(texto, h))
}

// Primeiro dia (a partir de hoje) com horário livre
function primeiroDiaLivre() {
  const reservas = lerReservas()
  const d = hoje()
  for (let i = 0; i < 60; i++) {
    const texto = formatar(d)
    if (d.getDay() !== 0 && temLivre(texto, reservas)) {
      return texto
    }
    d.setDate(d.getDate() + 1)
  }
  return formatar(hoje())
}

// Telefone: só números (máx. 11) e máscara (21) 90000-0000 enquanto digita
function formatarTelefone(valor) {
  const d = [...valor].filter((c) => c >= '0' && c <= '9').join('').slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return '(' + d
  if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2)
  if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6)
  return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7)
}

// Validação do e-mail
// Erros de digitação comuns -> domínio certo
const errosDeDominio = {
  'gamail.com': 'gmail.com', 'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmal.com': 'gmail.com',
  'gnail.com': 'gmail.com', 'gmaill.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gmail.con': 'gmail.com',
  'gmail.cm': 'gmail.com', 'gmail.com.br': 'gmail.com',
  'hotmial.com': 'hotmail.com', 'hotmai.com': 'hotmail.com', 'hotmal.com': 'hotmail.com', 'homail.com': 'hotmail.com',
  'hotmail.co': 'hotmail.com', 'hotmail.con': 'hotmail.com', 'hotmaill.com': 'hotmail.com',
  'outlok.com': 'outlook.com', 'outllok.com': 'outlook.com', 'outloo.com': 'outlook.com', 'outlook.con': 'outlook.com',
  'yaho.com': 'yahoo.com', 'yahooo.com': 'yahoo.com', 'yahoo.con': 'yahoo.com',
  'yaho.com.br': 'yahoo.com.br', 'yahooo.com.br': 'yahoo.com.br',
  'icoud.com': 'icloud.com', 'iclod.com': 'icloud.com', 'icloud.con': 'icloud.com',
}

// Nome: só letras (com acento) e espaços, mínimo de 3 letras
function nomeValido(texto) {
  const caracteres = [...texto.trim()]
  const letras = caracteres.filter((c) => c.toLowerCase() !== c.toUpperCase())
  const soLetrasEEspacos = caracteres.every((c) => c === ' ' || c.toLowerCase() !== c.toUpperCase())
  return soLetrasEEspacos && letras.length >= 3
}

// Confere se o e-mail tem o formato nome@dominio.com
function emailValido(texto) {
  const partes = texto.split('@')
  if (texto.includes(' ') || partes.length !== 2) return false
  const [nome, dominio] = partes
  const pedacos = dominio.split('.')
  const extensao = pedacos[pedacos.length - 1]
  return nome.length > 0 && pedacos.length >= 2 && !pedacos.includes('') && extensao.length >= 2
}

// Sugere o e-mail certo quando o domínio tem erro
function sugestaoEmail(texto) {
  const partes = texto.trim().toLowerCase().split('@')
  if (partes.length !== 2) return ''
  const certo = errosDeDominio[partes[1]]
  return certo ? partes[0] + '@' + certo : ''
}

// Quantos meses depois do mês atual fica o dia (0 = mês atual)
function mesDoDia(texto) {
  const d = paraData(texto)
  return (d.getFullYear() - hoje().getFullYear()) * 12 + d.getMonth() - hoje().getMonth()
}

export default function Agendamento() {
  const [reservas, setReservas] = useState(lerReservas)
  const [dia, setDia] = useState(primeiroDiaLivre)
  const [mes, setMes] = useState(() => mesDoDia(primeiroDiaLivre()))
  const [hora, setHora] = useState('')
  const [programa, setPrograma] = useState('pkz')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' })
  const [linkWhatsapp, setLinkWhatsapp] = useState('')

  // Salva as reservas no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas))
  }, [reservas])

  // Programa escolhido (PKZ ou One to One)
  const opcao = dados.opcoesPrograma.filter((o) => o.id === programa)[0]

  // Monta o calendário do mês
  const primeiro = new Date(hoje().getFullYear(), hoje().getMonth() + mes, 1)
  const ano = primeiro.getFullYear()
  const m = primeiro.getMonth()
  const totalDias = new Date(ano, m + 1, 0).getDate()
  const celulas = []

  // dias vazios antes do dia 1
  for (let i = 0; i < primeiro.getDay(); i++) {
    celulas.push({ tipo: 'vazio', chave: 'antes' + i })
  }

  for (let n = 1; n <= totalDias; n++) {
    const data = new Date(ano, m, n)
    const chave = formatar(data)
    let tipo = 'livre'
    if (data.getDay() === 0) {
      tipo = 'domingo'
    } else if (data < hoje()) {
      tipo = 'passado'
    }
    celulas.push({ tipo: tipo, n: n, chave: chave, temVaga: tipo === 'livre' && temLivre(chave, reservas) })
  }

  // completa a última semana
  let extra = 0
  while (celulas.length % 7 !== 0) {
    celulas.push({ tipo: 'vazio', chave: 'depois' + extra })
    extra++
  }

  // separa em semanas (linhas da tabela)
  const semanas = []
  for (let i = 0; i < celulas.length; i += 7) {
    semanas.push(celulas.slice(i, i + 7))
  }

  // Ações
  function escolherDia(chave) {
    setDia(chave)
    setHora('')
    setMensagem({ texto: '', tipo: '' })
  }

  function escolherHora(h) {
    setHora(h)
    setMensagem({ texto: '', tipo: '' })
  }

  function enviar(e) {
    e.preventDefault()
    const digitos = [...telefone].filter((c) => c >= '0' && c <= '9').length

    if (!dia || !hora) {
      return setMensagem({ texto: 'Escolha um dia e um horário.', tipo: 'erro' })
    }
    if (!nomeValido(nome)) {
      return setMensagem({ texto: 'Digite o nome só com letras (mínimo de 3).', tipo: 'erro' })
    }
    if (!emailValido(email.trim())) {
      return setMensagem({ texto: 'Digite um e-mail válido, como seuemail@exemplo.com.', tipo: 'erro' })
    }
    if (sugestaoEmail(email)) {
      return setMensagem({ texto: 'Confira o e-mail: você quis dizer ' + sugestaoEmail(email) + '?', tipo: 'erro' })
    }
    if (digitos < 10 || digitos > 11) {
      return setMensagem({ texto: 'Digite o telefone com DDD, como (21) 90000-0000.', tipo: 'erro' })
    }

    // relê as reservas salvas
    const atuais = lerReservas()
    if (reservado(atuais, dia + ' ' + hora) || passou(dia, hora)) {
      setReservas(atuais)
      setHora('')
      return setMensagem({ texto: 'Esse horário não está mais disponível. Escolha outro.', tipo: 'erro' })
    }

    setReservas([...atuais, { id: dia + ' ' + hora, programa: opcao.nome, nome: nome.trim(), email: email.trim(), telefone: telefone.trim() }])

    const resumo = opcao.nome + ', ' + textoDoDia(dia) + ', às ' + hora
    setLinkWhatsapp('https://wa.me/' + dados.numeroWhatsapp + '?text=Olá! Acabei de agendar uma aula experimental: ' + resumo + '. Meu nome é ' + nome.trim() + '.')
    setMensagem({ texto: 'Agendamento confirmado: ' + resumo + '.', tipo: 'sucesso' })
    setHora('')
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <section className="agendamento">
      {/* Título */}
      <header className="agendamento-titulo">
        <p className="eyebrow">Aula experimental</p>
        <h1>Escolha o melhor dia para você</h1>
      </header>

      {/* Programa */}
      <fieldset className="escolha-programa">
        <legend className="eyebrow">Escolha o programa</legend>
        {dados.opcoesPrograma.map((o) => (
          <label key={o.id} className={programa === o.id ? 'opcao-programa escolhido' : 'opcao-programa'}>
            <input
              type="radio"
              name="programa"
              value={o.id}
              checked={programa === o.id}
              onChange={() => setPrograma(o.id)}
            />
            <b>{o.nome}</b> <span>{o.publico}</span>
          </label>
        ))}
      </fieldset>

      {/* Calendário */}
      <section className="calendario cartao-agenda">
        <header className="calendario-topo">
          <h2>{dados.nomesMeses[m]} {ano}</h2>
          <p className="calendario-nav">
            <button type="button" aria-label="Mês anterior" disabled={mes === 0} onClick={() => setMes(mes - 1)}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button type="button" aria-label="Próximo mês" disabled={mes === dados.totalMeses - 1} onClick={() => setMes(mes + 1)}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </p>
        </header>

        <table className="tabela-calendario">
          <thead>
            <tr>
              {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((d) => <th key={d}>{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {semanas.map((semana, i) => (
              <tr key={i}>
                {semana.map((c) => (
                  <td key={c.chave} className={c.tipo === 'domingo' ? 'domingo' : ''}>
                    {c.tipo === 'domingo' && c.n}
                    {c.tipo === 'passado' && <button type="button" className="dia" disabled>{c.n}</button>}
                    {c.tipo === 'livre' && (
                      <button type="button" className={c.chave === dia ? 'dia selecionado' : 'dia'} onClick={() => escolherDia(c.chave)}>
                        {c.n}
                        {c.temVaga && <span className="ponto"></span>}
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="legenda">
          <span><span className="ponto"></span> Horários disponíveis</span>
          <span><span className="quadrado"></span> Selecionado</span>
          <span>Domingo: fechado</span>
        </p>
      </section>

      {/* Horários do dia escolhido */}
      <section className="horarios cartao-agenda">
        <h2>Horários</h2>
        <p className="data-texto">{dia ? textoDoDia(dia) : 'Escolha um dia no calendário.'}</p>
        <ul className="lista-horarios">
          {dia && horasDoDia(dia).map((h) => {
            const ocupado = reservado(reservas, dia + ' ' + h)
            const encerrado = passou(dia, h)
            return (
              <li key={h}>
                <button
                  type="button"
                  className={h === hora ? 'horario selecionado' : 'horario'}
                  disabled={ocupado || encerrado}
                  onClick={() => escolherHora(h)}
                >
                  <span>{h}</span>
                  {ocupado && <span>Lotado</span>}
                  {!ocupado && encerrado && <span>Encerrado</span>}
                  {h === hora && <span>Selecionado</span>}
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Resumo e formulário */}
      <section className="resumo cartao-agenda">
        <h2>Seu agendamento</h2>
        <form onSubmit={enviar}>
          <dl>
            <dt>Programa</dt><dd>{opcao.detalhe}</dd>
            <dt>Data</dt><dd>{dia ? textoDoDia(dia) : '—'}</dd>
            <dt>Horário</dt><dd>{hora || '—'}</dd>
          </dl>

          <label htmlFor="nome">{opcao.rotulo}</label>
          <input id="nome" type="text" placeholder="Digite o nome" autoComplete="off" maxLength={60} value={nome} onChange={(e) => setNome(e.target.value)} />

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="off" maxLength={100} value={email} onChange={(e) => setEmail(e.target.value)} />

          {/* Sugestão quando o e-mail tem erro (ex.: gamail.com) */}
          {sugestaoEmail(email) && (
            <p className="sugestao-email">
              Você quis dizer <strong>{sugestaoEmail(email)}</strong>?{' '}
              <button type="button" onClick={() => setEmail(sugestaoEmail(email))}>Corrigir</button>
            </p>
          )}

          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" type="tel" placeholder="(21) 90000-0000" autoComplete="off" value={telefone} onChange={(e) => setTelefone(formatarTelefone(e.target.value))} />

          <button type="submit" className="botao-enviar">Enviar</button>
          <p className={'mensagem ' + mensagem.tipo} role="status" aria-live="polite">{mensagem.texto}</p>

          {/* Aparece depois de confirmar */}
          {linkWhatsapp && (
            <a className="botao-whatsapp" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          )}
        </form>
      </section>
    </section>
  )
}