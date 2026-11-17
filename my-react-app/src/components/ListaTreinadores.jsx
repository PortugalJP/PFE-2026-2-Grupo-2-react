import { useState } from 'react'
import treinadores from '../dados/treinadores.js'
import CardTreinador from './CardTreinador.jsx'

const filtros = [
  { id: 'todos', texto: 'Todos' },
  { id: 'pkz', texto: 'PKZ' },
  { id: 'onetoone', texto: 'One to One' },
]

// Lista da página Equipe, com filtro por programa (abas)
export default function ListaTreinadores() {
  const [filtro, setFiltro] = useState('todos')

  // Só os treinadores do filtro escolhido
  const lista = treinadores.filter((t) => filtro === 'todos' || t.programa === filtro)

  return (
    <>
      <p className="filtros">
        {filtros.map((f) => (
          <button
            key={f.id}
            type="button"
            className={filtro === f.id ? 'ativo' : ''}
            onClick={() => setFiltro(f.id)}
          >
            {f.texto}
          </button>
        ))}
      </p>

      <ul className="grid-treinadores">
        {lista.map((t) => (
          <li key={t.id}>
            <CardTreinador treinador={t} completo={true} />
          </li>
        ))}
      </ul>
    </>
  )
}
