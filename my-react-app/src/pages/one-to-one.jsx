import HeroPrograma from '../components/HeroPrograma.jsx'
import Publico from '../components/Publico.jsx'
import Historia from '../components/Historia.jsx'
import Metodologia from '../components/Metodologia.jsx'
import Banner from '../components/Banner.jsx'
import Chamada from '../components/Chamada.jsx'
import dadosOneToOne from '../dados/onetoone.js'
import fotoHero from '../assets/hero-onetoone.webp'

// Página One to One (adultos)
export default function OneToOne() {
  return (
    <>
      <HeroPrograma
        rotulo="One to One · Musculação e condicionamento"
        titulo={<>Treino feito para <span className="destaque">você</span></>}
        texto="Musculação e condicionamento físico personalizados para adultos que buscam saúde, força e qualidade de vida — em qualquer fase da vida."
        tags={['17 a 90 anos', 'Treino individualizado', 'Ajuste de carga a cada sessão']}
        foto={fotoHero}
        alt="Treinadora orientando uma aluna no agachamento com barra"
      />

      <Publico titulo="Para quem é a One to One" idade="17 a 90 anos" lista={dadosOneToOne.publicoOneToOne} />

      <Historia
        titulo="A história e o foco da One to One"
        texto="A One to One surgiu em 2019, quando pais dos atletas da PKZ começaram a pedir um treino para eles também. A equipe adaptou a metodologia da PKZ para adultos e criou um programa de musculação e condicionamento com acompanhamento individual, para quem tem de 17 a 90 anos."
        destaqueRotulo="Nosso foco"
        destaqueTexto="Treino convencional bem feito: musculação e condicionamento individualizados, com atenção próxima do treinador em cada sessão."
        linhaDoTempo={dadosOneToOne.linhaDoTempoOneToOne}
      />

      <Metodologia
        rotulo="Metodologia"
        titulo="Como treinamos na One to One"
        nota="A mesma metodologia da PKZ One to One, aplicada às necessidades de quem treina aqui."
        lista={dadosOneToOne.metodologiaOneToOne}
      />

      <Banner
        titulo="Tem um filho ou filha atleta?"
        texto="A PKZ segue a mesma metodologia, com preparação física de alto rendimento para jovens de 7 a 15 anos."
        caminho="/pkz"
        botao="PKZ"
      />

      <Chamada
        titulo="Pronto para começar na One to One?"
        texto="Agende uma aula experimental e conheça a estrutura e a equipe."
      />
    </>
  )
}