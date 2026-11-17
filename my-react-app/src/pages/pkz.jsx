import HeroPrograma from '../components/HeroPrograma.jsx'
import Publico from '../components/Publico.jsx'
import Historia from '../components/Historia.jsx'
import Metodologia from '../components/Metodologia.jsx'
import Banner from '../components/Banner.jsx'
import Chamada from '../components/Chamada.jsx'
import dadosPkz from '../dados/pkz.js'
import fotoHero from '../assets/hero-pkz.webp'

// Página PKZ (jovens atletas)
export default function Pkz() {
  return (
    <>
      <HeroPrograma
        rotulo="PKZ · Jovens atletas"
        titulo={<>Alto rendimento desde a <span className="destaque">base</span></>}
        texto="Treinamento complexo e preparação física para crianças e adolescentes que praticam esporte — com foco em performance, coordenação e prevenção de lesões."
        tags={['7 a 15 anos', '16 testes físicos', 'Treinamento complexo']}
        foto={fotoHero}
        alt="Jovem atleta durante um treino físico"
      />

      <Publico titulo="Para quem é a PKZ" idade="7 a 15 anos" lista={dadosPkz.publicoPkz} />

      <Historia
        titulo="A história e o foco da PKZ"
        texto="A PKZ nasceu em 2016, quando o preparador físico Rafael Monteiro começou a treinar um pequeno grupo de jovens jogadores de futebol na Barra da Tijuca. Os bons resultados nas peneiras e a queda no número de lesões fizeram o grupo crescer, e o trabalho virou um programa próprio de preparação física para atletas de 7 a 15 anos."
        destaqueRotulo="Manifesto"
        destaqueTexto="Formar atletas completos: força, velocidade, coordenação e prevenção de lesões, respeitando a fase de desenvolvimento de cada criança e adolescente."
        linhaDoTempo={dadosPkz.linhaDoTempoPkz}
      />

      <Metodologia
        rotulo="Metodologia"
        titulo="Como treinamos na PKZ"
        nota="A mesma metodologia da PKZ One to One, aplicada às necessidades de quem treina aqui."
        lista={dadosPkz.metodologiaPkz}
      />

      <Banner
        titulo="Procurando treino para adultos?"
        texto="A One to One aplica essa mesma metodologia, com musculação e condicionamento, para quem tem de 17 a 90 anos."
        caminho="/onetoone"
        botao="One to One"
      />

      <Chamada
        titulo="Pronto para começar na PKZ?"
        texto="Agende uma aula experimental e comece a estruturar a evolução do atleta."
      />
    </>
  )
}