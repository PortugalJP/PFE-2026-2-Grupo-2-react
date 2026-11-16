import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
// final do início
import Pkz from "./pages/pkz.jsx";
// final da pkz
import Header from './components/Header.jsx'
import OneToOne from './pages/one-to-one.jsx'
// final da one to one
import Agendamento from './pages/Agendamento.jsx'
// final do agendamento
// Estrutura de todas as páginas: cabeçalho, página da rota atual e rodapé
export default function App() {
  return (
    <>
      {/* cabeçalho */}
<Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* final do início */}
          <Route path="/pkz" element={<Pkz />} />
          {/* final da pkz */}
          <Route path="/onetoone" element={<OneToOne />} />
          {/* final da one to one */}
          <Route path="/agendamento" element={<Agendamento />} />
          {/* final do agendamento */}
        </Routes>
      </main>

      {/* rodapé */}
    </>
  );
}
