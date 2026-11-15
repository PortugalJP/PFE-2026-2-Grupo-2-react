import Hero from '../components/Hero.jsx'
import Estrutura from '../components/Estrutura.jsx'
import EquipeResumo from '../components/EquipeResumo.jsx'
import Localizacao from '../components/Localizacao.jsx'
import SecaoDuvidas from '../components/SecaoDuvidas.jsx'
import Programas from '../components/Programas.jsx'
import Chamada from '../components/Chamada.jsx'

// Página Início
export default function Inicio() {
  return (
    <>
      <Hero />
      <Estrutura />
      <EquipeResumo />
      <Localizacao />
      <SecaoDuvidas />
      <Programas />
      <Chamada
        titulo="Vamos dar o próximo passo?"
        texto="Acesse o agendamento para solicitar uma aula experimental ou esclarecer outras dúvidas com a equipe."
      />
    </>
  )
}
