// src/components/Header.jsx
export default function Header() {
  return (
    <header className="cabecalho">
      <a href="index.html" className="logo">
        <b>PKZ</b><span>One to One</span>
      </a>

      {/* Menu */}
      <nav id="nav" className="menu" aria-label="Menu principal">
        <ul className="menu-lista">
          <li><a href="index.html">Início</a></li>
          <li><a href="PKZ.html" className="active">PKZ</a></li>
          <li><a href="OnetoOne.html">One to One</a></li>
          <li><a href="equipe.html">Equipe</a></li>
          <li><a href="index.html#duvidas">Dúvidas</a></li>
        </ul>
      </nav>

      {/* Botão do menu hambúrguer (só no celular) */}
      <button
        className="menu-btn"
        id="menuBtn"
        aria-label="Abrir menu"
        aria-controls="nav"
        aria-expanded="false"
      >
        <span></span><span></span>
      </button>
    </header>
  );
}