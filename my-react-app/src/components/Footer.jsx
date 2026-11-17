import { Link, useLocation } from 'react-router-dom'
import dadosFisioterapia from '../dados/fisioterapia.js'
import logoPkzBranco from '../assets/PKZ_Horizontal_Branco.svg'
import logoOtoBranco from '../assets/OneToOne_Branco.svg'

// Rodapé com o mesmo menu do cabeçalho (sem Dúvidas)
const links = [
  { caminho: '/', texto: 'Início' },
  { caminho: '/pkz', texto: 'PKZ' },
  { caminho: '/onetoone', texto: 'One to One' },
  { caminho: '/fisioterapia', texto: 'Fisioterapia' },
  { caminho: '/equipe', texto: 'Equipe' },
]

export default function Footer() {
  // Página atual: na Fisioterapia o contato é pelo WhatsApp
  const local = useLocation()
  const naFisioterapia = local.pathname === '/fisioterapia'

  return (
    <footer className="rodape">
      <section className="rodape-marca" aria-label="PKZ One to One">
        {/* Logos brancas (o rodapé é sempre escuro) */}
        <Link to="/" className="logo" aria-label="Página inicial">
          <img src={logoPkzBranco} alt="Playmakerz" />
          <span className="logo-divisor"></span>
          <img src={logoOtoBranco} alt="One to One" />
        </Link>
        <p className="rodape-texto">Uma metodologia, três frentes: alto rendimento infantojuvenil, musculação para adultos e fisioterapia.</p>
      </section>

      <nav className="rodape-menu" aria-label="Navegação do rodapé">
        <h2>Navegação</h2>
        <ul>
          {links.map((link) => (
            <li key={link.caminho}>
              <Link to={link.caminho}>{link.texto}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {naFisioterapia ? (
        <a href={dadosFisioterapia.whatsapp} className="rodape-link" target="_blank" rel="noopener noreferrer">WhatsApp →</a>
      ) : (
        <Link to="/agendamento" className="rodape-link">Agendamento →</Link>
      )}
    </footer>
  )
}
