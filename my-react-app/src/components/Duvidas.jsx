import { useState } from 'react'
import duvidas from '../dados/duvidas.jsx'

// Sanfona (acordeão): abre uma resposta e fecha as outras
export default function Duvidas() {
  // Qual pergunta está aberta (-1 = nenhuma)
  const [aberta, setAberta] = useState(0)

  return (
    <ul className="lista-faq">
      {duvidas.map((item, i) => (
        <li key={item.pergunta} className="faq-item">
          <h3 className="faq-heading">
            <button
              className="faq-question"
              aria-expanded={aberta === i}
              aria-controls={'resposta-' + i}
              onClick={() => setAberta(aberta === i ? -1 : i)}
            >
              <span className="faq-texto">{item.pergunta}</span>
              <span className="faq-icon"></span>
            </button>
          </h3>

          {/* Renderização condicional: só mostra a resposta aberta */}
          {aberta === i && (
            <p className="faq-panel" id={'resposta-' + i}>{item.resposta}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
