import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
// final do início
import Pkz from "./pages/pkz.jsx";
// final da pkz
// Estrutura de todas as páginas: cabeçalho, página da rota atual e rodapé
export default function App() {
  return (
    <>
      {/* cabeçalho */}

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* final do início */}
          <Route path="/pkz" element={<Pkz />} />
          {/* final da pkz */}
        </Routes>
      </main>

      {/* rodapé */}
    </>
  );
}
