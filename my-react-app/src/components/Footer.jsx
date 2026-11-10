
export default function Footer() {
    return (
        <footer className="rodape">

            <section className="rodape-marca" aria-label="PKZ One to One">
                <a href="index.html" className="logo">
                    <b>PKZ</b>
                    <span>One to One</span>
                </a>

                <p className="rodape-texto">
                    Uma metodologia, dois programas: alto rendimento infantojuvenil e
                    musculação para adultos.
                </p>
            </section>

            <nav className="rodape-menu" aria-label="Navegação do rodapé">
                <h2>Navegação</h2>

                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="PKZ.html">PKZ</a></li>
                    <li><a href="OnetoOne.html">One to One</a></li>
                    <li><a href="equipe.html">Equipe</a></li>
                    <li><a href="index.html#duvidas">Dúvidas</a></li>
                </ul>
            </nav>

            <a className="rodape-link" href="agendamento.html">
                Agendar aula experimental →
            </a>

        </footer>
    );
}
