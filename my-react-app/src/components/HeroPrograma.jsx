import { Link } from 'react-router-dom'

// Hero das páginas PKZ, One to One e Fisioterapia
// whatsapp: se vier, o botão principal abre o WhatsApp
// botao: se não vier, a página fica sem o botão principal
export default function HeroPrograma(props) {
  return (
    <section className="secao hero hero-programa">
      <header className="hero-texto">
        <p className="eyebrow">{props.rotulo}</p>
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
        <ul className="tags">
          {props.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <p className="botoes">
          {props.whatsapp ? (
            <a href={props.whatsapp} className="botao" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i> {props.botao}
            </a>
          ) : props.botao && (
            <Link to="/agendamento" className="botao">{props.botao}</Link>
          )}
          <a href={props.ancora || '#metodologia'} className="botao-contorno-claro">{props.textoAncora || 'Metodologia'}</a>
        </p>
      </header>
      <img className="hero-imagem" src={props.foto} alt={props.alt} />
    </section>
  )
}