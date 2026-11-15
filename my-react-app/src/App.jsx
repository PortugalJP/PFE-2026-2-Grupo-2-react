import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
// final do início

// Estrutura de todas as páginas: cabeçalho, página da rota atual e rodapé
export default function App() {
  return (
    <>
      {/* cabeçalho */}

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* final do início */}
        </Routes>
      </main>

      {/* rodapé */}
    </>
  )
}
