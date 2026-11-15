import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header.jsx'                (One to One)
// import Footer from './components/Footer.jsx'                (Fisioterapia)
import Inicio from './pages/Inicio.jsx'
// import Pkz from './pages/pkz.jsx'                            (PKZ)
// import OneToOne from './pages/one-to-one.jsx'                  (One to One)
// import Fisioterapia from './pages/Fisioterapia.jsx'          (Fisioterapia)
// import Equipe from './pages/Equipe.jsx'                      (Equipe)
// import Agendamento from './pages/Agendamento.jsx'            (Agendamento)

// Estrutura de todas as páginas: cabeçalho, página da rota atual e rodapé
// Cada pessoa descomenta as linhas marcadas com o nome da sua parte
export default function App() {
  return (
    <>
      {/* <Header /> */}{/* (One to One) */}

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* <Route path="/pkz" element={<Pkz />} /> */}{/* (PKZ) */}
          {/* <Route path="/onetoone" element={<OneToOne />} /> */}{/* (One to One) */}
          {/* <Route path="/fisioterapia" element={<Fisioterapia />} /> */}{/* (Fisioterapia) */}
          {/* <Route path="/equipe" element={<Equipe />} /> */}{/* (Equipe) */}
          {/* <Route path="/agendamento" element={<Agendamento />} /> */}{/* (Agendamento) */}
        </Routes>
      </main>

      {/* <Footer /> */}{/* (Fisioterapia) */}
    </>
  )
}
