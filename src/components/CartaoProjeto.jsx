
function CartaoProjeto({ projeto, abrirProjeto }) {
  return (
    <button
      type="button"
      onClick={() => abrirProjeto(projeto)}
      className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-violet-500 dark:border-gray-800 dark:bg-[#141222]"
    >
      <p className="mb-3 text-sm font-medium text-violet-600 dark:text-violet-400">
        {projeto.status}
      </p>

      <h3 className="text-2xl font-bold">
        {projeto.nome}
      </h3>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {projeto.descricao}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {projeto.tecnologias.map((tecnologia) => (
          <span
            key={tecnologia}
            className="rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-700 dark:bg-violet-950 dark:text-violet-300"
          >
            {tecnologia}
          </span>
        ))}
      </div>

      <p className="mt-6 font-medium text-violet-600 dark:text-violet-400">
        Ver detalhes →
      </p>
    </button>
  );
}

export default CartaoProjeto;
