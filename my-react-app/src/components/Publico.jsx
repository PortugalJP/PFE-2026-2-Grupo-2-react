// Seção "Para quem é" (PKZ e One to One)
export default function Publico(props) {
  return (
    <section className="secao publico">
      <header className="secao-cabecalho">
        <p className="eyebrow">Público-alvo</p>
        <h2 className="titulo-secao">{props.titulo}</h2>
        <p className="selo selo-escuro">{props.idade}</p>
      </header>

      <ul className="lista-publico">
        {props.lista.map((item, i) => (
          <li key={item.numero} className={i === 0 ? 'card-publico destaque-card' : 'card-publico'}>
            <span className="numero">{item.numero}</span>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}