// Seção "O que tratamos" (Fisioterapia)
export default function Servicos(props) {
  return (
    <section id="servicos" className="secao servicos">
      <header className="secao-cabecalho">
        <p className="eyebrow">Serviços</p>
        <h2 className="titulo-secao">O que tratamos</h2>
        <p className="nota">Atendimento individual com fisioterapeutas especializados, em sala própria dentro da academia.</p>
      </header>

      <ul className="lista-servicos">
        {props.lista.map((servico) => (
          <li key={servico.titulo} className="card-servico">
            <span className="icone-servico"><i className="fa-solid fa-plus"></i></span>
            <h3>{servico.titulo}</h3>
            <p>{servico.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
