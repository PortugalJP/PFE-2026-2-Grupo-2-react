import ApresentacaoEquipe from '../components/ApresentacaoEquipe.jsx'
import ListaTreinadores from '../components/ListaTreinadores.jsx'
import Metodologia from '../components/Metodologia.jsx'
import Chamada from '../components/Chamada.jsx'
import passosEquipe from '../dados/equipe.js'

// Página Equipe
export default function Equipe() {
  return (
    <>
      <ApresentacaoEquipe />

      <section className="secao treinadores">
        <header className="secao-cabecalho">
          <h2 className="titulo-secao">Nossos treinadores</h2>
        </header>
        <ListaTreinadores />
      </section>

      <Metodologia
        rotulo="Como trabalhamos"
        titulo="Uma metodologia em três passos"
        lista={passosEquipe}
        destacarUltimo={true}
      />

      <Chamada
        titulo="Conheça a equipe pessoalmente"
        texto="Agende uma aula experimental e treine com a gente."
      />
    </>
  )
}
