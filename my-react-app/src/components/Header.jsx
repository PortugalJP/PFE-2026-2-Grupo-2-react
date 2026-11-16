import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import logoPkz from '../assets/PKZ_Horizontal.svg'
import logoPkzBranco from '../assets/PKZ_Horizontal_Branco.svg'
import logoOto from '../assets/OneToOne.svg'
import logoOtoBranco from '../assets/OneToOne_Branco.svg'

// Links do menu (o NavLink coloca a classe "active" sozinho na página atual)
const links = [
  { caminho: '/', texto: 'Início' },
  { caminho: '/pkz', texto: 'PKZ' },
  { caminho: '/onetoone', texto: 'One to One' },
  { caminho: '/fisioterapia', texto: 'Fisioterapia' },
  { caminho: '/equipe', texto: 'Equipe' },
]

export default function Header() {
  // Menu hambúrguer aberto ou fechado (no celular)
  const [menuAberto, setMenuAberto] = useState(false)

  // Fecha o menu com a tecla ESC
  useEffect(() => {
    function aoApertarTecla(e) {
      if (e.key === 'Escape') {
        setMenuAberto(false)
      }
    }
    window.addEventListener('keydown', aoApertarTecla)
    return () => window.removeEventListener('keydown', aoApertarTecla)
  }, [])

  return (
    <header className="cabecalho">
      {/* Logos: coloridas no modo claro e brancas no modo escuro */}
      <Link to="/" className="logo" aria-label="Página inicial" onClick={() => setMenuAberto(false)}>
        <img src={logoPkz} alt="Playmakerz" className="logo-clara" />
        <img src={logoPkzBranco} alt="Playmakerz" className="logo-escura" />
        <span className="logo-divisor"></span>
        <img src={logoOto} alt="One to One" className="logo-clara" />
        <img src={logoOtoBranco} alt="One to One" className="logo-escura" />
      </Link>

      {/* Menu: a classe "activated" abre a lista no celular */}
      <nav id="nav" className={menuAberto ? 'menu activated' : 'menu'} aria-label="Menu principal">
        <ul className="menu-lista">
          {links.map((link) => (
            <li key={link.caminho}>
              {/* "end" no Início: só fica ativo na página inicial */}
              <NavLink to={link.caminho} end={link.caminho === '/'} onClick={() => setMenuAberto(false)}>
                {link.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botões de tema: claro, escuro ou sistema */}
      <ThemeToggle />

      {/* Botão do menu hambúrguer (só aparece no celular, pelo CSS) */}
      <button
        className="menu-btn"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-controls="nav"
        aria-expanded={menuAberto}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span></span><span></span>
      </button>
    </header>
  )
}