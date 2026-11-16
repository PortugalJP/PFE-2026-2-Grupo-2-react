import { useTheme } from "../useTheme";

// [valor, rótulo, ícone do Font Awesome]
const opcoes = [
  ["light", "Claro", "fa-sun"],
  ["dark", "Escuro", "fa-moon"],
  ["system", "Sistema", "fa-desktop"],
];

export function ThemeToggle() {
  const [mode, setMode] = useTheme();

  return (
    <div className="tema" role="radiogroup" aria-label="Tema">
      {opcoes.map(([valor, rotulo, icone]) => (
        <button
          key={valor}
          role="radio"
          aria-checked={mode === valor}
          aria-label={rotulo}
          title={rotulo}
          onClick={() => setMode(valor)}
        >
          <i className={"fa-solid " + icone} aria-hidden="true"></i>
        </button>
      ))}
    </div>
  );
}