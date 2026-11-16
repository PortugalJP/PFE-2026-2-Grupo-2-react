// Seção "A história e o foco" com a linha do tempo (PKZ e One to One)
export default function Historia(props) {
  return (
    <section className={props.fundo === 'suave' ? 'secao historia fundo-suave' : 'secao historia'}>
      <header className="historia-texto">
        <p className="eyebrow">Onde começamos</p>
        <h2 className="titulo-secao">{props.titulo}</h2>
        <p>{props.texto}</p>
        <aside className="manifesto">
          <p className="manifesto-rotulo">{props.destaqueRotulo}</p>
          <p className="manifesto-texto">{props.destaqueTexto}</p>
        </aside>
      </header>

      <aside className="linha-do-tempo">
        <h3>Linha do tempo</h3>
        <ol>
          {props.linhaDoTempo.map((item) => (
            <li key={item.ano}>
              <strong>{item.ano}</strong>
              <p>{item.texto}</p>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  )
}