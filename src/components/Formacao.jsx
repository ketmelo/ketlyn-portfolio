
import certificados from "../data/certificados";

function Formacao() {
  return (
    <section
      id="formacao"
      className="bg-gray-50 px-6 py-24 text-gray-900 dark:bg-[#141222] dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-violet-600 dark:text-violet-400">
          05 / Formação
        </p>

        <h2 className="mb-10 text-4xl font-bold">
          Formação e certificações
        </h2>

        {/* Formação acadêmica */}
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#090811]">
            <p className="mb-3 text-sm text-violet-600 dark:text-violet-400">
              Graduação · Em andamento
            </p>

            <h3 className="text-2xl font-bold">
              Ciência da Computação
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              UNASP · 2026–2029(Previsão de conclusão)
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#090811]">
            <p className="mb-3 text-sm text-violet-600 dark:text-violet-400">
              Curso técnico · Concluído
            </p>

            <h3 className="text-2xl font-bold">
              Técnico em Informática
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              UNASP · 2022–2024
            </p>
          </div>

        </div>

        {/* Certificações */}
        <h3 className="mb-6 mt-16 text-2xl font-bold">
          Cursos e certificações
        </h3>

        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Cursos realizados pela Alura nas áreas de
          programação, desenvolvimento web, design e IA.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {certificados.map((certificado) => (
            <div
              key={certificado.nome}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-[#090811]"
            >
              <p className="font-medium">
                {certificado.nome}
              </p>

              {certificado.link && (
                <a
                  href={certificado.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-medium text-violet-600 hover:underline dark:text-violet-400"
                >
                  Ver ↗
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Formacao;
