
import { useState } from "react";

import projetos from "../data/projetos";
import CartaoProjeto from "./CartaoProjeto";
import ModalProjeto from "./ModalProjeto";

function Projetos() {
  const [projetoAberto, setProjetoAberto] = useState(null);

  function abrirProjeto(projeto) {
    setProjetoAberto(projeto);
  }

  function fecharModal() {
    setProjetoAberto(null);
  }

  return (
    <section
      id="projetos"
      className="bg-gray-50 px-6 py-24 text-gray-900 dark:bg-[#141222] dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-violet-600 dark:text-violet-400">
          03 / Projetos
        </p>

        <h2 className="mb-4 text-4xl font-bold">
          Meus projetos
        </h2>

        <h3 className="mb-6 text-xl font-semibold text-violet-600 dark:text-violet-400">
  Projetos recentes e anteriores
</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projetos.map((projeto) => (
            <CartaoProjeto
              key={projeto.id}
              projeto={projeto}
              abrirProjeto={abrirProjeto}
            />
          ))}
        </div>
      </div>

      <ModalProjeto
        projeto={projetoAberto}
        fecharModal={fecharModal}
      />
    </section>
  );
}

export default Projetos;
