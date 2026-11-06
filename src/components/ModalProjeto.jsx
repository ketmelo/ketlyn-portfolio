
function ModalProjeto({ projeto, fecharModal }) {
  if (!projeto) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={fecharModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-projeto"
        onClick={(evento) => evento.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-[#141222] dark:text-white"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="titulo-projeto" className="text-3xl font-bold">
            {projeto.nome}
          </h2>

          <button
            type="button"
            onClick={fecharModal}
            aria-label="Fechar detalhes do projeto"
            className="text-2xl hover:text-violet-500"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 text-violet-600 dark:text-violet-400">
          {projeto.status}
        </p>

        <h3 className="mt-8 text-xl font-semibold">
          Objetivo do projeto
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
          {projeto.objetivo}
        </p>

        <h3 className="mt-8 text-xl font-semibold">
          Tecnologias
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {projeto.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="rounded-lg bg-violet-100 px-3 py-2 text-sm text-violet-700 dark:bg-violet-950 dark:text-violet-300"
            >
              {tecnologia}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {projeto.repositorio && (
            <a
              href={projeto.repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
            >
              Ver código
            </a>
          )}

          {projeto.site && (
            <a
              href={projeto.site}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-violet-500 px-5 py-3 font-medium text-violet-600 dark:text-violet-300"
            >
              Ver site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalProjeto;
