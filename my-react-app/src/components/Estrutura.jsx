import Galeria from './Galeria.jsx'

// Seção "Nossa estrutura" (página Início)
export default function Estrutura() {
  return (
    <section className="secao estrutura">
      <header className="secao-cabecalho">
        <p className="eyebrow">Nossa estrutura</p>
        <h2 className="titulo-secao">Feita para treinar sério</h2>
      </header>
      <Galeria />
    </section>
  )
}
