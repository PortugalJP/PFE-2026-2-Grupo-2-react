import { Link } from 'react-router-dom'

// Chamada final (azul), usada em várias páginas
// whatsapp: se vier, o botão abre o WhatsApp em vez do agendamento
export default function Chamada(props) {
  return (
    <section className="secao chamada">
      <header className="chamada-texto">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </header>
      {props.whatsapp ? (
        <a href={props.whatsapp} className="botao-escuro" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      ) : (
        <Link to="/agendamento" className="botao-escuro">Agendamento</Link>
      )}
    </section>
  )
}
