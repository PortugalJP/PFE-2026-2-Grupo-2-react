import { Link } from 'react-router-dom'
import programas from '../dados/programas.js'

// Seção "Qual é o seu caminho?" (página Início)
export default function Programas() {
  return (
    <section className="secao programas">
      <header className="secao-cabecalho">
        <p className="eyebrow">Nossos programas</p>
        <h2 className="titulo-secao">Qual é o seu caminho?</h2>
      </header>

      <ul className="lista-programas">
        {programas.map((p) => (
          <li key={p.id}>
            <article className="programa">
              <img src={p.foto} alt={'Treino da ' + p.nome} />
              <p className="programa-nome">{p.nome} <span className="programa-idade">{p.idade}</span></p>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
              <ul className="programa-lista">
                {p.itens.map((item) => (
                  <li key={item}><i className="fa-solid fa-check"></i> {item}</li>
                ))}
              </ul>
              <Link to={p.caminho} className="programa-botao">
                {p.botao} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
