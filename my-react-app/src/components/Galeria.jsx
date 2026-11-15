import { useState, useEffect } from 'react'
import galeria from '../dados/galeria.js'
import dadosAgendamento from '../dados/agendamento.js'

// Celular = até 767px
const consulta = () => window.matchMedia('(max-width: 767px)')

// Uma foto da galeria
function Foto(props) {
  if (props.item.foto) {
    return <img src={props.item.foto} alt={props.item.alt} />
  }
  return <p className="foto-vazia">{props.item.alt}</p>
}

// Galeria da Estrutura: carrossel no celular e mosaico do tablet em diante
export default function Galeria() {
  const [celular, setCelular] = useState(() => consulta().matches)
  const [atual, setAtual] = useState(0)

  // Confere se a tela é de celular quando muda de tamanho
  useEffect(() => {
    const mq = consulta()
    const aoMudar = () => setCelular(mq.matches)
    mq.addEventListener('change', aoMudar)
    return () => mq.removeEventListener('change', aoMudar)
  }, [])

  function anterior() {
    setAtual(atual === 0 ? galeria.length - 1 : atual - 1)
  }

  function proxima() {
    setAtual(atual === galeria.length - 1 ? 0 : atual + 1)
  }

  // Card do WhatsApp (aparece junto da galeria)
  const cardVisita = (
    <a className="card-visita" href={'https://wa.me/' + dadosAgendamento.numeroWhatsapp} target="_blank" rel="noopener noreferrer">
      <h3>Venha conhecer</h3>
      <span><i className="fa-brands fa-whatsapp"></i> WhatsApp &rarr;</span>
    </a>
  )

  // Celular: uma foto por vez, com setas
  if (celular) {
    return (
      <>
        <figure className="carrossel">
          <Foto item={galeria[atual]} />
          <figcaption>Foto {atual + 1} de {galeria.length}</figcaption>
          <p className="carrossel-botoes">
            <button type="button" aria-label="Foto anterior" onClick={anterior}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button type="button" aria-label="Próxima foto" onClick={proxima}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </p>
        </figure>
        {cardVisita}
      </>
    )
  }

  // Tablet e desktop: mosaico com todas as fotos
  return (
    <ul className="galeria">
      {galeria.map((item, i) => (
        <li key={item.id} className={i === 0 ? 'galeria-principal' : ''}>
          <Foto item={item} />
        </li>
      ))}
      <li className="galeria-card">{cardVisita}</li>
    </ul>
  )
}
