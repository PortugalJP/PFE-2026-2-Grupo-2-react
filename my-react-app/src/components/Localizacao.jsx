// Seção "Onde estamos" com o mapa do Google (página Início)
export default function Localizacao() {
  return (
    <section className="secao localizacao">
      <header className="localizacao-texto">
        <p className="eyebrow">Localização</p>
        <h2 className="titulo-secao">Onde estamos</h2>
        <address>
          <i className="fa-solid fa-location-dot"></i> Avenida Armando Lombardi, 949 — Loja I<br />
          Barra da Tijuca — Rio de Janeiro/RJ<br />
          <i className="fa-regular fa-clock"></i> Funcionamento: das 6h às 20h
        </address>
      </header>

      <figure className="mapa">
        <iframe
          src="https://www.google.com/maps?q=Avenida+Armando+Lombardi,+949,+Loja+I,+Barra+da+Tijuca,+Rio+de+Janeiro&output=embed"
          title="Mapa com a localização da PKZ One to One"
          loading="lazy"
        ></iframe>
      </figure>
    </section>
  )
}
