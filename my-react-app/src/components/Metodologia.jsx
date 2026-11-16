// Seção de metodologia (PKZ, One to One e Equipe)
export default function Metodologia(props) {
  return (
    <section id="metodologia" className={props.fundo === 'branco' ? 'secao metodologia fundo-branco' : 'secao metodologia'}>
      <header className="secao-cabecalho">
        <p className="eyebrow">{props.rotulo}</p>
        <h2 className="titulo-secao">{props.titulo}</h2>
        {props.nota && <p className="nota">{props.nota}</p>}
      </header>

      <ol className="lista-metodologia">
        {props.lista.map((passo, i) => (
          <li key={passo.numero} className={props.destacarUltimo && i === props.lista.length - 1 ? 'passo destaque-card' : 'passo'}>
            <span className="numero">{passo.numero}</span>
            <h3>{passo.titulo}</h3>
            <p>{passo.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}