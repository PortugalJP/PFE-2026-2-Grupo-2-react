import { Link } from 'react-router-dom'
import treinadores from '../dados/treinadores.js'
import CardTreinador from './CardTreinador.jsx'

// Seção "Quem cuida do seu treino" (página Início)
export default function EquipeResumo() {
  return (
    <section className="secao equipe-resumo">
      <header className="secao-cabecalho">
        <p className="eyebrow">Metodologia e equipe</p>
        <h2 className="titulo-secao">
          <Link to="/equipe" className="titulo-link">
            Quem cuida do seu treino <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </h2>
      </header>

      <ul className="lista-equipe">
        {treinadores.filter((t) => t.destaque).map((t) => (
          <li key={t.id}>
            <CardTreinador treinador={t} />
          </li>
        ))}
      </ul>
    </section>
  )
}
