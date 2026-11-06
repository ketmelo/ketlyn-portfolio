
import { useState } from "react";
import BotaoTema from "./BotaoTema";

function Header({ temaEscuro, mudarTema }) {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 text-gray-900 backdrop-blur-md dark:border-gray-800 dark:bg-[#141222]/95 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 font-bold text-white">
            KM
          </span>

          <span className="text-lg font-bold">
            Ketlyn Melo
          </span>
        </a>

        {/* Links no computador */}
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#inicio" className="hover:text-violet-500">
            Início
          </a>

          <a href="#sobre" className="hover:text-violet-500">
            Sobre mim
          </a>

          <a href="#projetos" className="hover:text-violet-500">
            Projetos
          </a>

          <a href="#experiencia" className="hover:text-violet-500">
            Experiência
          </a>

          <a href="#contato" className="hover:text-violet-500">
            Contato
          </a>
        </nav>

        {/* Botões */}
        <div className="flex items-center gap-3">
          <BotaoTema
            temaEscuro={temaEscuro}
            mudarTema={mudarTema}
          />

          {/* Menu no celular */}
          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            className="rounded-lg border border-gray-300 px-3 py-2 md:hidden dark:border-gray-700"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Links no celular */}
      {menuAberto && (
        <nav className="flex flex-col gap-4 border-t border-gray-200 px-5 py-5 md:hidden dark:border-gray-800">
          <a href="#inicio" onClick={fecharMenu}>Início</a>
          <a href="#sobre" onClick={fecharMenu}>Sobre mim</a>
          <a href="#projetos" onClick={fecharMenu}>Projetos</a>
          <a href="#experiencia" onClick={fecharMenu}>Experiência</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
