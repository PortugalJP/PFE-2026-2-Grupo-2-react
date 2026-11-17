import HeroPrograma from '../components/HeroPrograma.jsx'
import Publico from '../components/Publico.jsx'
import Servicos from '../components/Servicos.jsx'
import Historia from '../components/Historia.jsx'
import Metodologia from '../components/Metodologia.jsx'
import Banner from '../components/Banner.jsx'
import Chamada from '../components/Chamada.jsx'
import dados from '../dados/fisioterapia.js'
import fotoHero from '../assets/hero-fisioterapia.webp'

// Página Fisioterapia (contato pelo WhatsApp)
export default function Fisioterapia() {
  return (
    <>
      <HeroPrograma
        rotulo="Fisioterapia · Reabilitação e prevenção"
        titulo={<>Volte a se mover <span className="destaque">sem dor</span></>}
        texto="Fisioterapia ortopédica e esportiva no mesmo espaço dos seus treinos: da avaliação à alta, com a equipe da PKZ e da One to One acompanhando o seu retorno."
        tags={['Todas as idades', 'Sessões individuais', 'Avaliação inicial']}
        botao="WhatsApp"
        whatsapp={dados.whatsapp}
        ancora="#servicos"
        textoAncora="Serviços"
        foto={fotoHero}
        alt="Fisioterapeuta atendendo um paciente na maca"
      />

      <Publico titulo="Para quem é a fisioterapia" idade="Todas as idades" lista={dados.publico} />

      <Servicos lista={dados.servicos} />

      <Historia
        titulo="A história da nossa fisioterapia"
        texto="A fisioterapia começou em 2020 para cuidar das lesões dos atletas da PKZ sem que eles precisassem sair do centro de treinamento. Com os bons resultados, o atendimento cresceu e hoje recebe alunos da One to One e pacientes de fora, sempre integrado à preparação física."
        destaqueRotulo="Nosso foco"
        destaqueTexto="Tratar a dor, corrigir a causa e devolver você ao treino com segurança."
        linhaDoTempo={dados.linhaDoTempo}
        fundo="suave"
      />

      <Metodologia
        rotulo="Como funciona"
        titulo="Do primeiro dia à alta"
        nota="A mesma metodologia da PKZ One to One: avaliar, planejar, acompanhar e medir a evolução."
        lista={dados.passos}
        fundo="branco"
      />

      <Banner
        titulo="Terminou a reabilitação?"
        texto="Continue treinando com a gente: jovens atletas na PKZ e adultos na One to One, com a mesma equipe acompanhando."
        links={[{ caminho: '/pkz', texto: 'PKZ' }, { caminho: '/onetoone', texto: 'One to One' }]}
        fundo="suave"
      />

      <Chamada
        titulo="Pronto para voltar a se mover?"
        texto="Fale com nossos fisioterapeutas pelo WhatsApp e agende sua avaliação."
        whatsapp={dados.whatsapp}
      />
    </>
  )
}
