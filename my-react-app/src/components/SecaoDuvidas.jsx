import Duvidas from './Duvidas.jsx'
import dadosAgendamento from '../dados/agendamento.js'

// Seção "Antes de começar" (página Início)
export default function SecaoDuvidas() {
  return (
    <section id="duvidas" className="secao duvidas">
      <header className="duvidas-texto">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="titulo-secao">Antes de começar</h2>
        <p>Não encontrou o que procurava? Fale com a gente — respondemos rapidinho.</p>
        <a className="botao" href={'https://wa.me/' + dadosAgendamento.numeroWhatsapp} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      </header>
      <Duvidas />
    </section>
  )
}
