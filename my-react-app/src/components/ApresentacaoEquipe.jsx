import treinadores from '../dados/treinadores.js'

// Topo da página Equipe, com os contadores de treinadores
export default function ApresentacaoEquipe() {
  const totalPkz = treinadores.filter((t) => t.programa === 'pkz').length
  const totalOneToOne = treinadores.filter((t) => t.programa === 'onetoone').length

  return (
    <section className="secao hero apresentacao-equipe">
      <header className="hero-texto">
        <p className="eyebrow">Metodologia e equipe</p>
        <h1>Quem cuida do <span className="destaque">seu treino</span></h1>
        <p>Treinadores e preparadores físicos especializados em cada programa — jovens atletas na PKZ e adultos na One to One — trabalhando com a mesma metodologia.</p>
      </header>

      <ul className="contadores">
        <li><strong>{totalPkz}</strong> Treinadores PKZ</li>
        <li><strong>{totalOneToOne}</strong> Treinadores One to One</li>
      </ul>
    </section>
  )
}
