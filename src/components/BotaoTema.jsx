
import { Sun, Moon } from "lucide-react";

function BotaoTema({ temaEscuro, mudarTema }) {
  return (
    <button
      type="button"
      onClick={mudarTema}
      aria-label={temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"}
      title={temaEscuro ? "Tema claro" : "Tema escuro"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-violet-600 transition-all duration-300 hover:scale-110 hover:bg-violet-100 dark:border-gray-700 dark:text-violet-400 dark:hover:bg-violet-950"
    >
      {temaEscuro ? (
        <Sun size={21} strokeWidth={1.8} />
      ) : (
        <Moon size={21} strokeWidth={1.8} />
      )}
    </button>
  );
}

export default BotaoTema;
