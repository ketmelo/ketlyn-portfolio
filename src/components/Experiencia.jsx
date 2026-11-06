
function Experiencia() {
  return (
    <section
      id="experiencia"
      className="bg-white px-6 py-24 text-gray-900 dark:bg-[#090811] dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 font-medium text-violet-600 dark:text-violet-400">
          02 / Experiência profissional
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          Minha trajetória profissional
        </h2>

        {/* Linha do tempo */}
        <div className="flex gap-6">

          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full bg-violet-500" />
            <div className="h-full w-0.5 bg-violet-500/40" />
          </div>

          {/* Cartão da experiência */}
          <div className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-[#141222] md:p-8">

            <p className="mb-3 text-sm font-semibold text-violet-600 dark:text-violet-400">
              Maio de 2026 — Atual
            </p>

            <h3 className="text-2xl font-bold">
              Prefeitura Municipal de Itapecerica da Serra
            </h3>

            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Desenvolvimento de sistemas e automações
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-600 dark:text-gray-300">
              <li>
                Desenvolvimento e manutenção de funcionalidades
                em sistemas administrativos.
              </li>

              <li>
                Participação no desenvolvimento de interfaces
                web e integração com APIs.
              </li>

              <li>
                Desenvolvimento de uma automação em Python
                para geração de carteirinhas e crachás.
              </li>

              <li>
                Processamento de arquivos com informações
                e imagens para geração de documentos em PDF.
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experiencia;
