import fotoHero from '../assets/hero-inicio.webp'

// Hero da página Início
export default function Hero() {
  return (
    <section className="secao hero">
      <header className="hero-texto">
        <ul className="selos">
          <li className="selo selo-claro">PKZ · 7 a 15 anos</li>
          <li className="selo selo-contorno">ONE TO ONE · 17 a 90 anos</li>
        </ul>
        <h1>Uma metodologia.<br /><span className="destaque">Dois caminhos</span><br />para evoluir.</h1>
        <p>Preparação física de alto rendimento para jovens atletas e musculação personalizada para adultos — no mesmo espaço, com o mesmo cuidado.</p>
      </header>
      <img className="hero-imagem" src={fotoHero} alt="Atleta correndo na pista de treino da academia" />
    </section>
  )
}
