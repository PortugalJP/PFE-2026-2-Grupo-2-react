import { useEffect, useState } from "react";

// Chave usada no localStorage (a mesma do script no index.html)
const KEY = "tema";
const query = () => window.matchMedia("(prefers-color-scheme: dark)");

// "system" vira "dark" ou "light" conforme o navegador
function resolve(mode) {
  if (mode !== "system") return mode;
  const sistemaEscuro = query().matches;
  return sistemaEscuro ? "dark" : "light";
}

export function useTheme() {
  const [mode, setMode] = useState(
    () => localStorage.getItem(KEY) || "system"
  );

  useEffect(() => {
    const apply = () => {
      document.documentElement.dataset.theme = resolve(mode);
    };
    apply();
    localStorage.setItem(KEY, mode);
    if (mode !== "system") return;
    const mq = query();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [mode]);

  return [mode, setMode];
}