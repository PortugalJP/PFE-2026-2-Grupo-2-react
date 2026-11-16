import { Link } from 'react-router-dom'

// Banner que liga as marcas entre si
// links: lista de botões { caminho, texto }
// fundo: 'suave' para usar o fundo azul-claro
export default function Banner(props) {
  const links = props.links || [{ caminho: props.caminho, texto: props.botao }]

  return (
    <section className={props.fundo === 'suave' ? 'secao banner fundo-suave' : 'secao banner'}>
      <header className="banner-texto">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </header>
      <p className="botoes banner-botoes">
        {links.map((link) => (
          <Link key={link.caminho} to={link.caminho} className="botao-contorno">
            {link.texto} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        ))}
      </p>
    </section>
  )
}